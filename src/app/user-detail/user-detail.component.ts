import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpEvent, HttpEventType, HttpClient } from '@angular/common/http';

import { User }         from '../user';
import { UserService }  from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private http: HttpClient,
    private router: Router, 
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
   const id = +this.route.snapshot.paramMap.get('id');

      this.userService.getUser(id).subscribe (response => {      
          this.user=response.body;
        }, reject => {
    
        } ).add ( () => {
          
        });
  }

  goBack(): void {
    this.location.back();
  }

  updateUser(): void {   
    this.userService.updateUser(this.user)
      .subscribe(response => {      
        this.user=response.body;
        this.router.navigate(['/users']);
      }, reject => {
  
      } ).add ( () => {
        
      });
  }

  deleteUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.deleteUser(id)
      .subscribe(user => this.user = user);
      this.router.navigate(['/users']);
  }

}
