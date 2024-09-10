import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversaoTemperaturaComponent } from './conversao-temperatura.component';

describe('ConversaoTemperaturaComponent', () => {
  let component: ConversaoTemperaturaComponent;
  let fixture: ComponentFixture<ConversaoTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversaoTemperaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversaoTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
