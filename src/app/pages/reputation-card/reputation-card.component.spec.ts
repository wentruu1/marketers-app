import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReputationCardComponent } from './reputation-card.component';

describe('ReputationCardComponent', () => {
  let component: ReputationCardComponent;
  let fixture: ComponentFixture<ReputationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReputationCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReputationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
