import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlSidebarNavComponent } from './dl-sidebar-nav.component';

describe('DlSidebarNavComponent', () => {
  let component: DlSidebarNavComponent;
  let fixture: ComponentFixture<DlSidebarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlSidebarNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlSidebarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
