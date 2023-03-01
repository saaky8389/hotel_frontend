import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/service/rest.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-hm',
  templateUrl: './hm.component.html',
  styleUrls: ['./hm.component.css']
})
export class HmComponent implements OnInit {


  constructor(public _state: StateService, private _rest: RestService, private _router: Router) { }

  setter(i: any) {
    this._router.navigate(['user_edit/'+i])
  }

  ngOnInit(): void {
    this._state.get_user();

    this._state.deleteuser, (i: number) => {
      this._state.deleteuser(i);
    }

  }

}
