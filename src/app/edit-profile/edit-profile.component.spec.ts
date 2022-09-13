import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileComponent } from './edit-profile.component';

describe('EditProfileComponent', () => {
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('street field validity', () => {
    let errors :any;
    let street = component.form.controls['street'];
    errors = street.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });
  it('zipCode field validity', () => {
    let errors :any;
    let zipCode = component.form.controls['zipCode'];
    errors = zipCode.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });
  it('city field validity', () => {
    let errors :any;
    let city = component.form.controls['city'];
    errors = city.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });
  it('state field validity', () => {
    let errors :any;
    let state = component.form.controls['state'];
    errors = state.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });
  it('country field validity', () => {
    let errors :any;
    let country = component.form.controls['country'];
    errors = country.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });
  it('location1 field validity', () => {
    let errors :any;
    let location1 = component.form.controls['location1'];
    errors = location1.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });
  it('location2 field validity', () => {
    let errors :any;
    let location2 = component.form.controls['location2'];
    errors = location2.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });
  it('location3 field validity', () => {
    let errors :any;
    let location3 = component.form.controls['location3'];
    errors = location3.errors || {};
    expect(errors['required']).toBeTruthy(); (1)
  });
});
