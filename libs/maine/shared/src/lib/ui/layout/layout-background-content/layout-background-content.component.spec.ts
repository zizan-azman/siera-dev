import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutBackgroundContentComponent } from './layout-background-content.component';

describe('LayoutBackgroundContentComponent', () => {
  let component: LayoutBackgroundContentComponent;
  let fixture: ComponentFixture<LayoutBackgroundContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutBackgroundContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutBackgroundContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
