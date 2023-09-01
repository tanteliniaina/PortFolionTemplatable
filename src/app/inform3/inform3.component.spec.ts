import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inform3Component } from './inform3.component';

describe('Inform3Component', () => {
  let component: Inform3Component;
  let fixture: ComponentFixture<Inform3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inform3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
