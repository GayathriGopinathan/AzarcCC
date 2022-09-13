import { Component, OnInit } from '@angular/core';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Address } from '../Model/address';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  socialUser!: SocialUser;
  form!: FormGroup;
  showMsg:boolean=false

  constructor(
    private socialAuthService: SocialAuthService,
    private formBuilder: FormBuilder
  ) {
   
   }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
    })

    this.form = this.formBuilder.group({
      name: this.socialUser.name,
      email:this.socialUser.email,
      address: this.formBuilder.group({
        street: [null, Validators.required],
        street2: [null],
        zipCode: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        country: [null, Validators.required]
      }),
      office:this.formBuilder.group({
        location1:[null, Validators.required],
        location2:[null, Validators.required],
        location3:[null, Validators.required]

      })
      
     })
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('form submitted');
      console.log(this.form)
      this.showMsg=true
    } else {
      console.log(this.form)
      // validate all form fields
    }
  }

}
