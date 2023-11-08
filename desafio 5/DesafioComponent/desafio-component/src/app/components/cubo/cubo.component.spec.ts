import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuboComponent } from './cubo.component';

describe('CuboComponent', () => {
  let component: CuboComponent;
  let fixture: ComponentFixture<CuboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuboComponent]
    });
    fixture = TestBed.createComponent(CuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
