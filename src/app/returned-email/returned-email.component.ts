import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-returned-email',
  templateUrl: './returned-email.component.html',
  styleUrls: ['./returned-email.component.css']
})
export class ReturnedEmailComponent {
  loggedUser:any=null;
  constructor(private auth:AuthService, private actRoute: ActivatedRoute){
    const uuid= actRoute.snapshot.params['uuid'];
    console.log('uuid: ',uuid)
    this.auth.getisLogged().subscribe(
      (u)=>{
        this.loggedUser=u;
        console.log("Hírdetve:",this.loggedUser)
      }
    )
  }

  SignOut(){
    this.auth.SignOut();
  }
}
