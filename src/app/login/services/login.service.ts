import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginDTO } from '../interfaces/login-dto. interface';

const URL_API = `${environment.URL_API}/token`

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  enviaLoginParaOServidor(loginDTO : LoginDTO){
    return this.http.post(URL_API, loginDTO)

  }
}
