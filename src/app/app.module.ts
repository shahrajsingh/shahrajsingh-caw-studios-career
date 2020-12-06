import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import { HeightDialogComponent } from './height-dialog/height-dialog.component';
import { GameOverComponent } from './game-over/game-over.component';
import { HowtoComponent } from './howto/howto.component';

@NgModule({
  declarations: [AppComponent, DialogComponent, HeightDialogComponent, GameOverComponent, HowtoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  providers: [{ provide: MatDialogRef, useValue: {} }],
  entryComponents: [DialogComponent, HeightDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
