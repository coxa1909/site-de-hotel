import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDTO } from './interfaces/login-dto. interface';
import { LoginOutput } from './interfaces/login-output.interface';
import { LoginService } from './services/login.service';

@Component({
  selector: 'hotel-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder, private loginService : LoginService) { }

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(6)]]

    })
  }
  realizaLogin() {
    const loginDTO =  this.formularioLogin.getRawValue() as LoginDTO;
    this.loginService
    .enviaLoginParaOServidor(loginDTO)
    .subscribe(loginOutput => this._salvaDados(loginOutput),
              err => console.log("erro", err))      
    
  }
  private _salvaDados(loginOutput: LoginOutput): void {
   console.log("loginOutput", loginOutput)
  }
}
