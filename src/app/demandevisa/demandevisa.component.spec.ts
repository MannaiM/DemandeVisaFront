import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandevisaComponent } from './demandevisa.component';

describe('DemandevisaComponent', () => {
  let component: DemandevisaComponent;
  let fixture: ComponentFixture<DemandevisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandevisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandevisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
