import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DLMyAccountComponent } from './dl-my-account.component';

describe('DLMyAccountComponent', () => {
  let component: DLMyAccountComponent;
  let fixture: ComponentFixture<DLMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DLMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DLMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
