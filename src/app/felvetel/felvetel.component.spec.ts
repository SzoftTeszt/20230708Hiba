import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelvetelComponent } from './felvetel.component';

describe('FelvetelComponent', () => {
  let component: FelvetelComponent;
  let fixture: ComponentFixture<FelvetelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FelvetelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FelvetelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
