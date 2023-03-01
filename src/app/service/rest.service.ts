import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  static add_user(value: any) {
    throw new Error('Method not implemented.');
  }
  
  url = 'http://localhost:5000';
  constructor(private _http: HttpClient) { }


login(user : any) {
  console.log(user);
    return this._http.post('http://localhost:5000/login', {"user_name": user.username, "password": user.password});
  }


  get_user() {
    const headers = new HttpHeaders ()
    .set('token' , localStorage.getItem('token') + '');
    return this._http.get('http://localhost:5000/get_user' , {headers});
  }

  add_user( user: any) {
    const headers = new HttpHeaders ()
    .set('token' , localStorage.getItem('token') + '');
    return this._http.post('http://localhost:5000/add_user'  , {headers});
  }

  update_user(id: any  , user: any) {
    const headers = new HttpHeaders ()
    .set('token' , localStorage.getItem('token') + '');
       return this._http.put('http://localhost:5000/update_user/'+id , user , {headers});
  }


  delete_user(id: any){
    const headers = new HttpHeaders ()
    .set('token' , localStorage.getItem('token') + '');
      return this._http.delete('http://localhost:5000/delete_user/'+ id , {headers})
  }

}
