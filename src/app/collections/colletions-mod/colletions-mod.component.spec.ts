import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColletionsModComponent } from './colletions-mod.component';

describe('ColletionsModComponent', () => {
  let component: ColletionsModComponent;
  let fixture: ComponentFixture<ColletionsModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColletionsModComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColletionsModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
