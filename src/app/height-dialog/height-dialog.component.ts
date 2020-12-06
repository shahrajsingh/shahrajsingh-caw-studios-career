import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-height-dialog',
  templateUrl: './height-dialog.component.html',
  styleUrls: ['./height-dialog.component.scss'],
})
export class HeightDialogComponent implements OnInit {
  height: number = 10;
  maxRows: number;
  constructor(public dialogRef: MatDialogRef<HeightDialogComponent>) {}

  ngOnInit(): void {
    this.maxRows = Math.round(window.innerHeight / 32);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  alrt() {
    alert(
      'the height for your screen resolution is limited to from 10 to ' +
        this.maxRows +
        ' both inclusive for better experience'
    );
  }
}
