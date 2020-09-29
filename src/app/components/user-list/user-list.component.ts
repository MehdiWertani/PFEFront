import { Component, OnInit } from '@angular/core';
import {User} from "../../_helpers/user";
import {UserService} from "../../_services/user-service.service";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];



  constructor(private userService:UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      console.log("user",this.users);

    });
  }


}
