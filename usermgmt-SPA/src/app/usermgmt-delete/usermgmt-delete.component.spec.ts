import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { usermgmtdeleteComponent } from './usermgmt-delete.component';

describe('usermgmtdeleteComponent', () => {
  let component: usermgmtdeleteComponent;
  let fixture: ComponentFixture<usermgmtdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ usermgmtdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(usermgmtdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
