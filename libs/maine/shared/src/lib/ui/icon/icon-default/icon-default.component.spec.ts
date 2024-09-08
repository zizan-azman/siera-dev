import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconDefaultComponent } from './icon-default.component';

describe('IconDefaultComponent', () => {
  let component: IconDefaultComponent;
  let fixture: ComponentFixture<IconDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconDefaultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
