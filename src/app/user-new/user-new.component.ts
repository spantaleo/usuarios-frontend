import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpEvent, HttpEventType, HttpClient } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';

import { User }         from '../user';
import { UserService }  from '../user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  user: User;

  nombre:string;
  apellido:string;
  username:string;
  email:string;


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private http: HttpClient,
    private router: Router, 
  ) {}


  ngOnInit() {
  
  }

  saveUser(): void {



       this.userService.saveUser(this.nombre, this.apellido, this.username,  this.email ).subscribe (response => {      
           console.log(response.body.error);
           if(response.body.error==0){
              this.router.navigate(['/users']);
           }
         }, reject => {
     
         } ).add ( () => {
           
         });

         
   }

}
