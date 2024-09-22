import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardTeaserStickyComponent } from './card-teaser-sticky.component';

describe('CardTeaserStickyComponent', () => {
  let component: CardTeaserStickyComponent;
  let fixture: ComponentFixture<CardTeaserStickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTeaserStickyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardTeaserStickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
