import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightDialogComponent } from './height-dialog.component';

describe('HeightDialogComponent', () => {
  let component: HeightDialogComponent;
  let fixture: ComponentFixture<HeightDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
