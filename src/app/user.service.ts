import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { User } from './user';
import { USERS } from './mock-users';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  constructor(private messageService: MessageService, private http: HttpClient) { }


  public getUsers(): Observable<any> {
    return this.http.get ( `http://localhost/ABMUsuarios/backend/users/public/getUsers`,{ observe:'response' } ).pipe (); 
  } 

  public getUser(id: number): Observable<any> {
    return this.http.get ( `http://localhost/ABMUsuarios/backend/users/public/getUser/${id}`,{ observe:'response' } ).pipe (); 
  }


  public findUser(text:string): Observable<any> {
    return this.http.get ( `http://localhost/ABMUsuarios/backend/users/public/findUser/${text}`,{ observe:'response' } ).pipe (); 
  }

  public saveUser(nombre:string, apellido:string, username:string,email:string ): Observable<any> {
    return this.http.post ( `http://localhost/ABMUsuarios/backend/users/public/addUser`, {'nombre':nombre,'apellido':apellido,'username': username,'email':email} ,{ observe:'response' } ).pipe (); 
  }

  public updateUser(user:User ): Observable<any> {
    return this.http.put ( `http://localhost/ABMUsuarios/backend/users/public/updateUser/${user.id}`, {'id':user.id,'nombre':user.nombre,'apellido':user.apellido,'username': user.username,'email':user.email} ,{ observe:'response' } ).pipe (); 
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete ( `http://localhost/ABMUsuarios/backend/users/public/delUser/${id}`,{ observe:'response' } ).pipe ();
  }

}
