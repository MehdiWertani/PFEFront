import { Component, OnInit } from '@angular/core';
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-board-billing-manager',
  templateUrl: './board-billing-manager.component.html',
  styleUrls: ['./board-billing-manager.component.css']
})
export class  BoardBillingManagerComponent implements OnInit {
content:string;
  constructor(private userService: UserService) { }

  ngOnInit(): void { this.userService.getBillingManagerBoard().subscribe(
    data => {
      this.content = data;
    },
    err => {
      this.content = JSON.parse(err.error).message;
    }
  );
  }

}
