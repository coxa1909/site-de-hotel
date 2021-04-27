import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hotel-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['',[Validators.required, Validators.minLength(6)]]

    })
  }
  realizaLogin() {
    const login =  this.formularioLogin.getRawValue()
    console.log("login", login);
  }
}
