import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaTokensComponent } from './ma-tokens.component';

describe('MaTokensComponent', () => {
  let component: MaTokensComponent;
  let fixture: ComponentFixture<MaTokensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaTokensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
