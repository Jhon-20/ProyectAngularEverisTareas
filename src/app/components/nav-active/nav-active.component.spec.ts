import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavActiveComponent } from './nav-active.component';

describe('NavActiveComponent', () => {
  let component: NavActiveComponent;
  let fixture: ComponentFixture<NavActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
