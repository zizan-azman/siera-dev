import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComingSoonComponent } from './card-coming-soon.component';

describe('CardComingSoonComponent', () => {
  let component: CardComingSoonComponent;
  let fixture: ComponentFixture<CardComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComingSoonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
