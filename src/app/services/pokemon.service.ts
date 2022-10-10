import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl=environment.baseUrl;
  private SERVICE_URL = 'https://servicepokemon.000webhostapp.com/api'

  httpOptions: any;

  constructor(private http: HttpClient) { }

  getPokemon(index:number){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
  login(user:any): Observable<any>{
    let serviceUrl = this.SERVICE_URL + '/post/login/user';
    this.generateRequestParams(user);
    console.log(this.httpOptions);

    return this.http.post(serviceUrl, this.httpOptions);
  }
  register(user:any): Observable<any>{
    let serviceUrl = this.SERVICE_URL + 'post/create/user';
    this.generateRequestParams(user);
    console.log(this.httpOptions);

    return this.http.post(serviceUrl, this.httpOptions);
  }
  private generateRequestParams(param: any) {
    this.httpOptions = {
      header: new HttpHeaders(),
      params: param,
    };
  }
}
