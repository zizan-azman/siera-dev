import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconChipComponent } from './icon-chip.component';

describe('IconChipComponent', () => {
  let component: IconChipComponent;
  let fixture: ComponentFixture<IconChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconChipComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
