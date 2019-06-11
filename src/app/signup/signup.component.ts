import { Component, OnInit } from '@angular/core';
import QueResponseService from '../shared/api/QueResponse.service';
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
   tab: any  = {access_token: null};
  constructor(private QueResponseService: QueResponseService) { }

  ngOnInit() {
  }

Generate(credentiels){
  credentiels.grant_type="password";
 
  this.jsonparse = JSON.stringify(credentiels);
  console.log(this.jsonparse);
  this.QueResponseService.getToken(credentiels).subscribe(data => {this.tab = data});
}
onValue(){
  if(this.tab == "tommy")
  return this.tab.access_token === null;
  return this.tab.access_token;
}
}
