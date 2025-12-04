import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsiteTeaserComponent } from './website-teaser.component';

describe('WebsiteTeaserComponent', () => {
  let component: WebsiteTeaserComponent;
  let fixture: ComponentFixture<WebsiteTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteTeaserComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WebsiteTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
