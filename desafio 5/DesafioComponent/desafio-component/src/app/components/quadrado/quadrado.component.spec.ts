import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuadradoComponent } from './quadrado.component';

describe('QuadradoComponent', () => {
  let component: QuadradoComponent;
  let fixture: ComponentFixture<QuadradoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuadradoComponent]
    });
    fixture = TestBed.createComponent(QuadradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
