import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexibleButtonComponentComponent } from './flexible-button-component.component';

describe('FlexibleButtonComponentComponent', () => {
  let component: FlexibleButtonComponentComponent;
  let fixture: ComponentFixture<FlexibleButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexibleButtonComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexibleButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
