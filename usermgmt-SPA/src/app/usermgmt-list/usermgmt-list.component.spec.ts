import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { usermgmtListComponent } from './usermgmt-list.component';

describe('usermgmtListComponent', () => {
  let component: usermgmtListComponent;
  let fixture: ComponentFixture<usermgmtListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ usermgmtListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(usermgmtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
