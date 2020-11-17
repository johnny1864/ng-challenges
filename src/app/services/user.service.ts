import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseRoute = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public getUserByID(id: number = 1):Observable<User>{
    
    return this.http.get(`${this.baseRoute}/${id}`)
    .pipe(
      map(value => new User(value))
    );
  }
}
