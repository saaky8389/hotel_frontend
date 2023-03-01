import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StateService } from 'src/app/service/state.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  viewIndex: number = -1;
  userview: any = {};

  constructor(public route: ActivatedRoute, public _state: StateService) { }

  ngOnInit(): void {}
    
}
