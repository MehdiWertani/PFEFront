import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../_helpers/user';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/user/';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl + 'getAll');
  }

  deleteUser(id: number): any {
    console.log('detee : ', `${this.usersUrl}deleteById/${id}`);
    let token = sessionStorage.getItem('auth-token');
    // let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    // let httpParams = new HttpParams().set('id', String(id));
    // let options = {params: httpParams, headers: headers};
    // console.log('options : ', options);
    return this.http.delete(`${this.usersUrl}deleteById/${id}`, {
      headers: {'Authorization': 'Bearer ' + token}
    });
  }
}
