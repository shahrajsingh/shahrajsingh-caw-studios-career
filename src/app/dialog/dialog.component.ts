import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  width: number = 10;
  maxCols: number;
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  ngOnInit(): void {
    this.maxCols = Math.round(window.innerHeight / 32);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  alrt() {
    alert(
      'the height for your screen resolution is limited to from 10 to ' +
        this.maxCols +
        ' both inclusive for better experience'
    );
  }
}
