import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { usermgmtAddComponent } from './usermgmt-add.component';

describe('usermgmtAddComponent', () => {
  let component: usermgmtAddComponent;
  let fixture: ComponentFixture<usermgmtAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ usermgmtAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(usermgmtAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
