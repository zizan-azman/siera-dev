import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DinaShellComponent } from './dina-shell.component';

describe('DinaShellComponent', () => {
  let component: DinaShellComponent;
  let fixture: ComponentFixture<DinaShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinaShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DinaShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
