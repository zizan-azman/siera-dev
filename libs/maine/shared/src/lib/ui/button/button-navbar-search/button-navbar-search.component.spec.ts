import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonNavbarSearchComponent } from './button-navbar-search.component';

describe('ButtonNavbarSearchComponent', () => {
  let component: ButtonNavbarSearchComponent;
  let fixture: ComponentFixture<ButtonNavbarSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonNavbarSearchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonNavbarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
