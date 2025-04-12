import { Injectable } from '@angular/core';
import { FormDialougComponent } from '../models/form-dialoug/form-dialoug.component';
import { SuccessModelComponent } from '../models/success-model/success-model.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialougeBoxService {
  constructor(private dialog: MatDialog) {}

  openFormDialog(selectedFields: string[]): Promise<string[]> {
    const dialogRef = this.dialog.open(FormDialougComponent, {
      width: '300px',
      data: { selectedFields }
    });

    return dialogRef.afterClosed().toPromise(); 
  }

  openSuccessDialog(): void {
    this.dialog.open(SuccessModelComponent, {
      width: '300px'
    });
  }
}
