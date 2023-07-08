import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FelvetelComponent } from './felvetel/felvetel.component';
import { UserComponent } from './user/user.component';
import { ReturnedEmailComponent } from './returned-email/returned-email.component';

const routes: Routes = [
  {path:"signin", component:SignInComponent},
  {path:"felvetel", component:FelvetelComponent},
  {path:"signup", component:SignUpComponent},
  {path:"users", component:UserComponent},
  {path:"returnedmail", component:ReturnedEmailComponent},
  {path:"", component:SignInComponent},
  {path:"**", component:SignInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
