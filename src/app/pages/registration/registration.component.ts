import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Global } from 'src/app/shared/service/global';
import { HttpService } from 'src/app/shared/service/http.service';
import { MustMatchValidator } from 'src/app/validations/validations.validator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(private _fb: FormBuilder, private _toastr: ToastrService, private _httpService: HttpService) { }

  // initialize form
  formInit() {
    this.registerForm = this._fb.group({
      FirstName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      LastName: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      EmailId: ['', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
      Password: ['', Validators.compose([Validators.required, Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}")])],
      ConfirmPassword: ['', Validators.required],
    },
      { validators: MustMatchValidator('Password', 'ConfirmPassword') }
    );

  }

  ngOnInit(): void {
    this.formInit();
  }

  get f() {
    return this.registerForm.controls;
  }

  // for data save
  save() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this._httpService.post(environment.BASE_API_PATH + "CustomerMaster/Save", this.registerForm.value).subscribe(res => {
      if (res.isSuccess) {
        this._toastr.success("Your Registration has been sucessfully done !!", "Registration");
        this.registerForm.reset();
        this.submitted = false;
      }
      else {
        this._toastr.error(res.errors[0], "Registration");
      }
    });



  }


}


// "firstName": "string",
//   "lastName": "string",
//   "emailId": "string",
//   "password": "string",