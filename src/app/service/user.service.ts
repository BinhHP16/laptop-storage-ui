import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {buildPathParams, buildPathParams2} from '../utils/http-util';
import {environment} from '../../environments/environment';

const API_SERVER = environment.apiUrl;
const API_URL = API_SERVER + '/company/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getCompany(page: any, size: any, orderBy: any, sortDirection: any): Observable<HttpResponse<any>> {
    const path = buildPathParams2(page, size, orderBy, sortDirection);
    return this.http.get<HttpResponse<any>>(API_URL + 'getAllCompany' + path , {observe: 'response'});

  }
}
