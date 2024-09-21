import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemebrCardComponent } from './memebr-card.component';

describe('MemebrCardComponent', () => {
  let component: MemebrCardComponent;
  let fixture: ComponentFixture<MemebrCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemebrCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemebrCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
