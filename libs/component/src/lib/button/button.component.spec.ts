import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GyButtonComponent } from './button.component';

describe('GyButtonComponent', () => {
  let component: GyButtonComponent;
  let fixture: ComponentFixture<GyButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GyButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
