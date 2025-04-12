import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { customEmailValidator, customMobileValidator } from '../helper/validations';
import { SuccessModelComponent } from '../models/success-model/success-model.component';
import { FIELD_CONFIGS, FieldConfig } from '../interfaces/fieldConfig';
import { DialougeBoxService } from '../services/dialouge-box.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
 public  selectedFields: string[] = [];
 public form: FormGroup;

 editingField: string | null = null;
 fieldConfigs: { [key: string]: FieldConfig } = FIELD_CONFIGS;

  constructor(private dialog: MatDialog, private fb: FormBuilder,private dialogService:DialougeBoxService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, customEmailValidator()]],
      mobile: ['', [Validators.required, customMobileValidator()]],
      gender: ['', [Validators.required]],
      agreeToTerms: [false, [Validators.requiredTrue]], 
    });
  }

  ngOnInit(): void {
this.initializeform();   
  }
  initializeform() {
    this.selectedFields.forEach(field => {
      if (!this.form.contains(field)) {
        const defaultValue = this.fieldConfigs[field].type === 'checkbox' ? false : '';
        this.form.addControl(field, new FormControl(defaultValue));
      }
  
      if (!this.form.contains(`${field}-label`)) {
        this.form.addControl(`${field}-label`, new FormControl(this.fieldConfigs[field].label));
      }
  
      if ((this.fieldConfigs[field].type === 'text' || this.fieldConfigs[field].type === 'dropdown') &&
          !this.form.contains(`${field}-placeholder`)) {
        this.form.addControl(`${field}-placeholder`, new FormControl(this.fieldConfigs[field].placeholder || ''));
      }
    });
  }
  
async openDialog() {
  const result = await this.dialogService.openFormDialog(this.selectedFields);
  if (result) {
    this.selectedFields = Array.from(new Set([...this.selectedFields, ...result]));
    this.ngOnInit();
  }
}
editField(field: string) {
  this.editingField = field;
  const labelControl = this.form.get(`${field}-label`);
  if (labelControl) {
    labelControl.setValue(this.fieldConfigs[field].label);
  }

  const placeholderControl = this.form.get(`${field}-placeholder`);
  if (placeholderControl) {
    placeholderControl.setValue(this.fieldConfigs[field].placeholder || '');
  }
}



  saveEdit() {
    this.editingField = null;
    this.selectedFields.forEach(field => {
      this.fieldConfigs[field].label = this.form.get(`${field}-label`)?.value;
      this.fieldConfigs[field].placeholder = this.form.get(`${field}-placeholder`)?.value;
    });
  }

  cancelEdit() {
    this.editingField = null;
  }

  deleteField(field: string) {
    const index = this.selectedFields.indexOf(field);
    if (index !== -1) {
      this.selectedFields.splice(index, 1);
    }
    this.form.removeControl(field); 
  }

  submitForm() {
  let isValid = true;
  this.selectedFields.forEach(field => {
      const control = this.form.get(field);
      if (control && control.invalid) {
        isValid = false;
      }
    });
  if (!isValid) {
      return;
    }
    const filled: Record<string, any> = {};
    for (const field of this.selectedFields) {
      const value = this.form.get(field)?.value;
      if (value !== null && value !== '') {
        filled[field] = value;
      }
    }
  
    console.log('Data', filled);
    this.dialogService.openSuccessDialog();
  }
  clearForm(): void {
    this.form.reset();  
    this.selectedFields = [];
    this.ngOnInit(); 
  }
  
  
}
