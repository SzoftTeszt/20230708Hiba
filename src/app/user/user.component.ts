import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

users:any;

constructor(private auth:AuthService){
  this.auth.getUsers().subscribe({
     next:(u)=>{
      this.users=u
      for (let i = 0; i < this.users.length; i++) {
        if (!this.users[i].displayName)
          this.users[i].displayName=this.users[i].email
        this.auth.getClaims(this.users[i].uid).subscribe(
          (claims)=> {
            this.users[i].claims=claims;
            console.log("Claims", this.users[i].claims)
            // console.log("admin", !this.users[i].claims.admin)
            if (!this.users[i].claims) this.users[i].claims={};
            if (!this.users[i].claims['admin']) this.users[i].claims['admin']=false
            if (!this.users[i].claims['informatikus']) this.users[i].claims['informatikus']=false;
          }
        )
      }
     },
     error:(e)=>console.log(e)
    }
     )
}

setClaims(user:any, claim:string){
  if (!user.claims[claim])
  {
    user.claims[claim]=true;
  }
  else {
    user.claims[claim] = !user.claims[claim]
  }

  this.auth.setClaims(user.uid, user.claims)

}

}
