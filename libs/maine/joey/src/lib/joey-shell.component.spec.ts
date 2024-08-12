import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoeyShellComponent } from './joey-shell.component';

describe('JoeyShellComponent', () => {
  let component: JoeyShellComponent;
  let fixture: ComponentFixture<JoeyShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoeyShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JoeyShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
