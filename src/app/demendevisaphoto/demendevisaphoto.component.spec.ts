import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemendevisaphotoComponent } from './demendevisaphoto.component';

describe('DemendevisaphotoComponent', () => {
  let component: DemendevisaphotoComponent;
  let fixture: ComponentFixture<DemendevisaphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemendevisaphotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemendevisaphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
