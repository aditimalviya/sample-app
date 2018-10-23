import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentSetupComponent } from './tournament-setup.component';

describe('TournamentSetupComponent', () => {
  let component: TournamentSetupComponent;
  let fixture: ComponentFixture<TournamentSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
