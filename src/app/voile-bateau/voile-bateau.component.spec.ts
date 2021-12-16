import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoileBateauComponent } from './voile-bateau.component';

describe('VoileBateauComponent', () => {
  let component: VoileBateauComponent;
  let fixture: ComponentFixture<VoileBateauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoileBateauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoileBateauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
