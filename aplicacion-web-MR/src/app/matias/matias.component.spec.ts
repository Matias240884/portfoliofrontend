import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiasComponent } from './matias.component';

describe('MatiasComponent', () => {
  let component: MatiasComponent;
  let fixture: ComponentFixture<MatiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
