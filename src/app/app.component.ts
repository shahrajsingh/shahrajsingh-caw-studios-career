import { ReturnStatement } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { GameOverComponent } from './game-over/game-over.component';
import { HeightDialogComponent } from './height-dialog/height-dialog.component';
import { HowtoComponent } from './howto/howto.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Challenge2';
  cols: any;
  rows: any;
  public x = 0;
  public y = 0;
  loc: string[] = [];
  countSteps: number = 0;
  len: any;
  @HostListener('window:keydown', ['$event'])
  handleKeydownEvent(event: KeyboardEvent) {
    const key = event.key;
    this.move(key);
  }

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '300px',
      position: { top: '10px' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.cols = Array(result)
          .fill(0)
          .map((x, i) => i);
        for (let i = 0; i < result; i++) {
          let t = Math.floor(Math.random() * (result * 10));
          if (Math.round(t / 10) >= result) {
            t = Math.round(t / 10) - 1;
          } else {
            t = Math.round(t / 10);
          }
          this.loc.push('' + t + '-');
        }
        this.getHeight();
      } else {
        alert('please reload the page and enter width');
      }
    });
  }
  getHeight() {
    const dialogRef = this.dialog.open(HeightDialogComponent, {
      width: '300px',
      position: { top: '10px' },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result != this.loc.length) {
          alert('Different height entered reload');
          return;
        }
        this.rows = Array(result)
          .fill(0)
          .map((x, i) => i);
        const size = this.loc.length;
        const dialogrefHowTo = this.dialog.open(HowtoComponent, {
          width: '350px',
          position: { top: '10px' },
        });
        for (let i = 0; i < size; i++) {
          let t = Math.floor(Math.random() * (result * 10));
          if (Math.round(t / 10) >= result) {
            t = Math.round(t / 10) - 1;
          } else {
            t = Math.round(t / 10);
          }
          this.loc[i] += t;
        }
        this.len = this.loc.length;
        if (this.rows.length == result && this.cols.length != 0) {
          setTimeout((func) => {
            this.loc;
            this.x = Math.round(this.rows.length / 2 - 1);
            this.y = Math.round(this.cols.length / 2 - 1);
            const id: string = this.x + '-' + this.y;

            for (let i = 0; i < size; i++) {
              document.getElementById(this.loc[i]).style.backgroundImage =
                'url(https://imgsto.s3.ap-south-1.amazonaws.com/mushroom.png)';
            }
            const t = this.loc.indexOf(id);
            if (t >= 0) {
              this.len--;
              this.loc[t] = '';
            }
            document.getElementById(id).style.backgroundImage =
              'url(https://imgsto.s3.ap-south-1.amazonaws.com/mario.png)';
          }, 300);
        }
      } else {
        alert('please reload the page and enter height');
      }
    });
  }
  move(key: string) {
    if (key === 'ArrowUp') {
      if (this.y == 0) {
        return;
      } else {
        this.countSteps++;
        this.unpaint(this.x + '-' + this.y);
        this.y--;
        const id: string = this.x + '-' + this.y;
        const t = this.loc.indexOf(id);
        if (t >= 0) {
          this.len--;
          this.loc[t] = '';
        }
        this.paint(id);
      }
    } else if (key === 'ArrowRight') {
      if (this.x == this.cols.length - 1) {
        return;
      } else {
        this.countSteps++;
        this.unpaint(this.x + '-' + this.y);
        this.x++;
        const id: string = this.x + '-' + this.y;
        const t = this.loc.indexOf(id);
        if (t >= 0) {
          this.len--;
          this.loc[t] = '';
        }
        this.paint(id);
      }
    } else if (key === 'ArrowDown') {
      if (this.y == this.rows.length - 1) {
        return;
      } else {
        this.countSteps++;
        this.unpaint(this.x + '-' + this.y);
        this.y++;
        const id: string = this.x + '-' + this.y;
        const t = this.loc.indexOf(id);
        if (t >= 0) {
          this.len--;
          this.loc[t] = '';
        }
        this.paint(id);
      }
    } else if (key === 'ArrowLeft') {
      if (this.x == 0) {
        return;
      } else {
        this.countSteps++;
        this.unpaint(this.x + '-' + this.y);
        this.x--;
        const id: string = this.x + '-' + this.y;
        const t = this.loc.indexOf(id);
        if (t >= 0) {
          this.len--;
          this.loc[t] = '';
        }
        this.paint(id);
      }
    } else {
      return;
    }
    this.len + ' ' + this.countSteps;
    if (this.len == 0) {
      this.gameOver();
      this.len++;
    }
  }
  paint(id: string) {
    document.getElementById(id).style.backgroundImage =
      'url(https://imgsto.s3.ap-south-1.amazonaws.com/mario.png)';
  }
  unpaint(id: string) {
    document.getElementById(id).style.background = 'none';
  }
  gameOver() {
    const dialogRef = this.dialog.open(GameOverComponent, {
      width: '350px',
      position: { top: '10px' },
      data: this.countSteps,
    });
  }
}
