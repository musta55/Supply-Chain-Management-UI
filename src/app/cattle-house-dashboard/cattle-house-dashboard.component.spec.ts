import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CattleHouseDashboardComponent } from './cattle-house-dashboard.component';

describe('CattleHouseDashboardComponent', () => {
  let component: CattleHouseDashboardComponent;
  let fixture: ComponentFixture<CattleHouseDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CattleHouseDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CattleHouseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
