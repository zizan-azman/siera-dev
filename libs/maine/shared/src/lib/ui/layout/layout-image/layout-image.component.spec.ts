import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutImageComponent } from './layout-image.component';

describe('LayoutImageComponent', () => {
  let component: LayoutImageComponent;
  let fixture: ComponentFixture<LayoutImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
