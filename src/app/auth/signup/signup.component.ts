import { Component, OnInit } from '@angular/core';
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  insertForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private us: UserService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.insertForm = this.fb.group({
      user_name: [""],
      password : [""],
      full_name : [""],
      confirmPassword : [""],
      email : [""]
    })
  }

  submit(){
    if(this.insertForm.valid){
      this.us.newUser(this.insertForm.getRawValue()).toPromise()
      .then((res:any)=>{
        if(res.status == "ok"){
          swal.fire(
            "", "User Profile is created", "success"
            )
            this.insertForm.reset();
        } else {
          swal.fire(
            "", "Error! Try again", "error"
            )
        }
      })
    }
  }

}
