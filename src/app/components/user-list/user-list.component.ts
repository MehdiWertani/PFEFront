import {Component, OnInit} from '@angular/core';
import {User} from '../../_helpers/user';
import {UserService} from '../../_services/user-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];


  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      console.log('user', this.users);

    });
  }


  deleteUser(userId) {
    console.log('delete user with id : ', userId);
    this.userService.deleteUser(userId).subscribe(data => console.log('dara : ', data));
    window.location.reload();
  }
}
