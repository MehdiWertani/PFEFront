import {Component, OnInit} from '@angular/core';
import {AuthService} from '../_services/auth.service';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  roles: Array<any>;
  selectedRole: string;

  constructor(private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

  onSubmit(): void {
    this.form.role = [this.selectedRole];
    this.authService.register(this.form).subscribe(
      data => {
        console.log('sign in', data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
