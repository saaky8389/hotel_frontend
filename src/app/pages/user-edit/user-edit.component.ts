import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  index:any;
  private _router: any;

  constructor(public _state:StateService, private _rest: RestService, private _arouter: ActivatedRoute, private _routing:Router ) {

   }

   updateuser() {
     this._state.updateuser(this.index, this._state.userFrom.value);
     this._routing.navigate(['hm'])
   }
  ngOnInit(): void{
    this._arouter.params.subscribe((params:any) => {
      this.index = params['id'];

      this._state.userFrom.patchValue(this._state.user[this.index])
    });
  }
  
  

}