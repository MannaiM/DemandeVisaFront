import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinddemandevisaComponent } from './finddemandevisa.component';

describe('FinddemandevisaComponent', () => {
  let component: FinddemandevisaComponent;
  let fixture: ComponentFixture<FinddemandevisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinddemandevisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinddemandevisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
