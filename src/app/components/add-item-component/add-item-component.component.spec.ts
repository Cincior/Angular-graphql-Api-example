import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemComponentComponent } from './add-item-component.component';

describe('AddItemComponentComponent', () => {
  let component: AddItemComponentComponent;
  let fixture: ComponentFixture<AddItemComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddItemComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
