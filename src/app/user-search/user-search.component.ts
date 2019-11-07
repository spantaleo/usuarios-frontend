import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {


  constructor(private userService: UserService) { }

  users: User[];
  searchTerm:string;

    ngOnInit() {
    }

    getUsers(): void {
      console.log(this.searchTerm);  
      this.userService.findUser(this.searchTerm).subscribe (response => {      
          if(response.body.error == 1){
            this.users=[];
          }else{
            this.users=response.body;
          } 
          
        }, reject => {
    
        } ).add ( () => {
          
        });
  }
}
