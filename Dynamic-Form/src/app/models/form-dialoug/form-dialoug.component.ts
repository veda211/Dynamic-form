import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialoug',
  templateUrl: './form-dialoug.component.html',
  styleUrls: ['./form-dialoug.component.scss']
})
export class FormDialougComponent  {

    fieldOptions: { key: string; label: string }[] = [
      { key: 'email', label: 'Email' },
      { key: 'mobile', label: 'Mobile Number' },
      { key: 'gender', label: 'Gender' },
      { key: 'agreeToTerms', label: 'Agree to Terms' }
    ];
  
    selectedMap: { [key: string]: boolean } = {};
  
    constructor(
      public dialogRef: MatDialogRef<FormDialougComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      // Pre-fill with already selected fields if needed
      this.data?.selectedFields?.forEach((field: string) => {
        this.selectedMap[field] = true;
      });
    }
  
    onOk() {
      const selected = Object.keys(this.selectedMap).filter(key => this.selectedMap[key]);
      this.dialogRef.close(selected);
    }
  }
  
