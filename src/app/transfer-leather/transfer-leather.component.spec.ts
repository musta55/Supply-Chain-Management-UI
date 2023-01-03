import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferLeatherComponent } from './transfer-leather.component';

describe('TransferLeatherComponent', () => {
  let component: TransferLeatherComponent;
  let fixture: ComponentFixture<TransferLeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferLeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferLeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
