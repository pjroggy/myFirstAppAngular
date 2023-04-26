import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOnomatopComponent } from './liste-onomatop.component';

describe('ListeOnomatopComponent', () => {
  let component: ListeOnomatopComponent;
  let fixture: ComponentFixture<ListeOnomatopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOnomatopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeOnomatopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
