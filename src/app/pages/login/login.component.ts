import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform : FormGroup;
   
 constructor(private _rest: RestService , private _router: Router)  { 
    this.loginform = new FormGroup ({
      username : new FormControl ('' , [Validators.required , Validators.minLength(2)] ),
      password: new FormControl('' , [Validators.required , Validators.minLength (2)])
    }); 
  }

login(){
  if(this.loginform.valid){
    console.log(this.loginform.value);
    this._rest.login(this.loginform.value).subscribe((result: any) => {
      localStorage.setItem('token', result['data']);
      this._router.navigate(['/navbar'])


    }, (err) => {
      console.log(err);
      alert('Invalid cardentials');
    });
    }else{
      alert('invalid form')
    }
  }


  ngOnInit(): void {
    console.log('this is');
    localStorage.removeItem('token');
    
  }
}


  


