import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  user = "";

  constructor(public _state:StateService , public _rest:RestService) { }

  ngOnInit(): void {
  }

}
