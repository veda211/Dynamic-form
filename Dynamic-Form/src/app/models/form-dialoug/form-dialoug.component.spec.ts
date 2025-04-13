import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDialougComponent } from './form-dialoug.component';

describe('FormDialougComponent', () => {
  let component: FormDialougComponent;
  let fixture: ComponentFixture<FormDialougComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDialougComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDialougComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
