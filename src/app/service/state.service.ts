import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class StateService {
add_user() {
throw new Error('Method not implemented.');
}

  user: any[] = [];

  userFrom: FormGroup;
  updateIndex: any;

  constructor(private _rest: RestService, private _router: Router) {
    this.userFrom = new FormGroup({
      user_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      item_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      bill_id: new FormControl(''),
      total_bill: new FormControl('', [Validators.required, Validators.minLength(1)])

    });

  }



  get_user() {
    this._rest.get_user().subscribe((res: any) => {
      this.user = res.data;
      console.log(this.user);
    }, (err) => {
      alert(err.message);
    })
  };


  
  adduser(){
    alert("successfully added")
    if (this.userFrom.valid) {
      this._rest.add_user(this.userFrom.value).subscribe((res: any) => {
        this.userFrom.reset();
        this._router.navigate(['/hm'])
        console.log(res.data);
        this.get_user();
      },
        (err) => {

          alert(err.message);
        });
    } else {
      alert("Invalid form submission");
    }
  }

  deleteuser(i: number) {
    if (confirm("Are you sure want to delete this user")) {
      alert("deleted successfully");
      const id = this.user[i].id;
      this._rest.delete_user(id).subscribe((res: any) => {
        this.get_user();
      }, err => {
        alert(err.message);
      });
    } else {
      alert("Invalid credentials");
    }
  }

  updateuser(i:any, user: any) {
    alert("updated successfully");
    const id = this.user[i].id;
    this._rest.update_user(id, user).subscribe((res: any) => {
      // this.userFrom.reset();
      // this._router.navigate(['/hm']);
      this.get_user();
    }, (err: any) => {
      alert(err.message);
    });
  } 



}


















