import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonNavbarToggleModeComponent } from './button-navbar-toggle-mode.component';

describe('ButtonNavbarToggleModeComponent', () => {
  let component: ButtonNavbarToggleModeComponent;
  let fixture: ComponentFixture<ButtonNavbarToggleModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNavbarToggleModeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonNavbarToggleModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
