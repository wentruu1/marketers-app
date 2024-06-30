import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishItemComponent } from './publish-item.component';

describe('PublishItemComponent', () => {
  let component: PublishItemComponent;
  let fixture: ComponentFixture<PublishItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
