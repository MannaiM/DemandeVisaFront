import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultervisasComponent } from './consultervisas.component';

describe('ConsultervisasComponent', () => {
  let component: ConsultervisasComponent;
  let fixture: ComponentFixture<ConsultervisasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultervisasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultervisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
