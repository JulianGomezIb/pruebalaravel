import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl=environment.baseUrl;


  httpOptions: any;

  constructor(private http: HttpClient) { }

  getPokemon(index:number){
    return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
  }
  login(user:any): Observable<any>{
    let serviceUrl = 'https://servicepokemon.000webhostapp.com/api/post/logim/user';
    this.generateRequestParams(user);

    return this.http.post<any>(serviceUrl, this.httpOptions);
  }

  private generateRequestParams(param: any) {
    this.httpOptions = {
      header: new HttpHeaders(),
      params: param,
    };
  }
}
