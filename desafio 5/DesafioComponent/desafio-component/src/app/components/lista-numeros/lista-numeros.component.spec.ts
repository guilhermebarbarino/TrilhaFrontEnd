import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNumerosComponent } from './lista-numeros.component';

describe('ListaNumerosComponent', () => {
  let component: ListaNumerosComponent;
  let fixture: ComponentFixture<ListaNumerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaNumerosComponent]
    });
    fixture = TestBed.createComponent(ListaNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
