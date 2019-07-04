import { Component, OnInit } from '@angular/core';
import QueResponseService from '../shared/api/QueResponse.service';
import { MatSnackBar } from '@angular/material/snack-bar';
export interface resp {
  access_token: string;

}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  pass: string = 'password';
  jsonparse: any;
  message: string = 'Your Access Token has been generated';
  action: string = 'Dismiss';
  checker: boolean;
  handlers: string;
  errors:any;
   tab: any  = {access_token: null,expires_in: null,token_type: null};
  constructor(private QueResponseService: QueResponseService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  
Generate(credentiels){
  credentiels.grant_type="password";
 
  this.jsonparse = JSON.stringify(credentiels);
  this.QueResponseService.getToken(credentiels).subscribe(data => {this.tab = data;
  localStorage.setItem('Access_token',JSON.stringify(data["access_token"]));
  {this._snackBar.open(this.message, this.action, {
    duration: 8000,
  });}
  if(JSON.stringify(data["access_token"]) != null)
  {this.checker = true;}
  console.log(this.checker);
  },(error) =>{ this.errors = error["statusText"];
  console.log("this is the errors"+this.errors);
  this.handlers ="Access Token Generation Failed.<br> Invalid username or password";
console.log(" this is a handler"+this.handlers);
})
}

}
