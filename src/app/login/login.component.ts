import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'mahesh';
  password = '';
  errorMsg = 'invalid credentials';
  isInvalid = false;
  constructor(private router:Router, private authService : HardcodedAuthService) { }

  ngOnInit(): void {
  }

  handleLogin(){
    if(this.authService.authenticate(this.username,this.password)){
      this.isInvalid=false;
      this.router.navigate(['welcome',this.username]);
    }else{
      this.isInvalid=true;
    }
    console.log(this.username);
  }

}
