import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppState } from '../../core/store';
import { ChartAreaComponent } from './chart-area.component';

describe('ChartAreaComponent', () => {
  let component: ChartAreaComponent;
  let fixture: ComponentFixture<ChartAreaComponent>;
  let store: MockStore;

  const barColorTestMocks = [
    { barPosition: 1, rangeMin: 1, rangeMax: 7, color: ChartAreaComponent['activeColor'] },
    { barPosition: 3, rangeMin: 5, rangeMax: 7, color: ChartAreaComponent['inactiveColor'] },
    { barPosition: 6, rangeMin: 2, rangeMax: 7, color: ChartAreaComponent['activeColor'] },
    { barPosition: 6, rangeMin: 1, rangeMax: 7, color: ChartAreaComponent['activeColor'] },
    { barPosition: 5, rangeMin: 5, rangeMax: 5, color: ChartAreaComponent['activeColor'] },
    { barPosition: 2, rangeMin: 5, rangeMax: 7, color: ChartAreaComponent['inactiveColor'] },
    { barPosition: 3, rangeMin: 5, rangeMax: 5, color: ChartAreaComponent['inactiveColor'] },
    { barPosition: 6, rangeMin: 5, rangeMax: 7, color: ChartAreaComponent['activeColor'] },
  ];

  const initialState: AppState = {
    tabs: [],
    activeTabId: 1,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChartAreaComponent],
      providers: [MatButtonModule, MatIconModule, MatCardModule, NgxChartsModule, provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get bar color', () => {
    barColorTestMocks.forEach(({ barPosition, rangeMin, rangeMax, color }) => {
      expect(ChartAreaComponent['getBarColor'](barPosition, rangeMin, rangeMax)).toEqual(color);
    });
  });
});
