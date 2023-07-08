import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnedEmailComponent } from './returned-email.component';

describe('ReturnedEmailComponent', () => {
  let component: ReturnedEmailComponent;
  let fixture: ComponentFixture<ReturnedEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnedEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnedEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
