import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeneratedComponent } from './card-generated.component';

describe('CardGeneratedComponent', () => {
  let component: CardGeneratedComponent;
  let fixture: ComponentFixture<CardGeneratedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGeneratedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGeneratedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
