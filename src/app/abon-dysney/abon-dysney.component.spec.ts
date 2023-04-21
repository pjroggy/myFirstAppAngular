import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonDysneyComponent } from './abon-dysney.component';

describe('AbonDysneyComponent', () => {
  let component: AbonDysneyComponent;
  let fixture: ComponentFixture<AbonDysneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonDysneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonDysneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
