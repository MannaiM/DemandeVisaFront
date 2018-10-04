import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirdetailsComponent } from './voirdetails.component';

describe('VoirdetailsComponent', () => {
  let component: VoirdetailsComponent;
  let fixture: ComponentFixture<VoirdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
