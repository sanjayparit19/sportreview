import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameonComponent } from './gameon.component';

describe('GameonComponent', () => {
  let component: GameonComponent;
  let fixture: ComponentFixture<GameonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
