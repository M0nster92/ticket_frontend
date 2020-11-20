import { Component, OnInit } from '@angular/core';
import {
	FormGroup,FormControl,FormBuilder,Validator,Validators, FormArray
} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  user_id : any;

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private route: Router 
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.loginForm = this.fb.group({
      user_name : [""],
      password : [""]
    })
  }

  submit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.us.login(this.loginForm.getRawValue()).toPromise()
      .then((res:any)=>{
        if(res.status == "ok"){
          console.log(res.data);
          this.user_id = res.data.user_id;
          this.us.checkSession();
        } else {
          console.log("No");
        }
      })
      
    }

  }

}
