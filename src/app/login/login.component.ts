import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDTO } from './interfaces/login-dto. interface';
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
    .subscribe(res => console.log("resposta", res),
              err => console.log("erro", err))      
    
  }
}
