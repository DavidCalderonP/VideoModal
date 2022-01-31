import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlBase = "https://api.github.com/";
  constructor(private http: HttpClient) { }

  public obtenerUsuarios(){
    return this.http.get<User[]>(`${this.urlBase}users`);
  }
}
