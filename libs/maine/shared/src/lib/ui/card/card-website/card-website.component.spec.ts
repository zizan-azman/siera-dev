import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardWebsiteComponent } from './card-website.component';

describe('CardWebsiteComponent', () => {
  let component: CardWebsiteComponent;
  let fixture: ComponentFixture<CardWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardWebsiteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
