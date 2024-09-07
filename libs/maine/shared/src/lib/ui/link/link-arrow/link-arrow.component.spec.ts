import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkArrowComponent } from './link-arrow.component';

describe('LinkArrowComponent', () => {
  let component: LinkArrowComponent;
  let fixture: ComponentFixture<LinkArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkArrowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LinkArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
