import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean=false;

  constructor(private authService:AuthService) { }

  email!:string;
  password!:string;


  onSubmit(){
    this.authService.logIn(this.email,this.password);
  }

  ngOnInit(): void {
  }

}
