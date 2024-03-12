import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAndEditPostPopupComponent } from './create-and-edit-post-popup.component';

describe('CreateAndEditPostPopupComponent', () => {
  let component: CreateAndEditPostPopupComponent;
  let fixture: ComponentFixture<CreateAndEditPostPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAndEditPostPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAndEditPostPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
