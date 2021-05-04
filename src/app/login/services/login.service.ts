import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { configuracoesDoSistema } from 'src/app/shared/constants/configuracoes-do-sistema';
import { environment } from 'src/environments/environment';
import { LoginDTO } from '../interfaces/login-dto. interface';
import { LoginOutput } from '../interfaces/login-output.interface';

const URL_API = `${environment.URL_API}/token`

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  enviaLoginParaOServidor(loginDTO : LoginDTO) : Observable<LoginOutput>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/json');

    const body = new HttpParams()
      .set('username', loginDTO.username)
      .set('password', loginDTO.password)
      .set('grant_type', 'password')
      .set(configuracoesDoSistema.CLIENT_ID_LABEL, configuracoesDoSistema.CLIENT_ID_VALUE)


    return this.http.post<LoginOutput>(URL_API,  body, { headers })
  }
}