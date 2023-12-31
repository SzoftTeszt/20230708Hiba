import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private auth:AuthService, private router:Router){

  }

  signUp(email:any, password:any){
    this.auth.SingUp(email, password).then(()=>this.router.navigate(['/signin']))
  }
  signUpLink(email:any){
    this.auth.SingInLink(email).then(
      (link)=>{console.log(link);this.router.navigate(['/signin'])})
      .catch((e)=>console.log(e))
  }
}
