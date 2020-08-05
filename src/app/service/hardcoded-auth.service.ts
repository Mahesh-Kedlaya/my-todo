import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username, password){
    if(username==="mahesh" && password==="password"){
      sessionStorage.setItem('authenticaterUser',username);
    return true ;
    }else{
      return false;
    }
  }

  isUserLogin(){
    let user= sessionStorage.getItem('authenticaterUser')
    return !(user===null);
    }

  userLogOut(){
    sessionStorage.removeItem('authenticaterUser');
  }
  
}

