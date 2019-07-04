import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uid-parent',
  templateUrl: './uid-parent.component.html',
  styleUrls: ['./uid-parent.component.css']
})
export class UidParentComponent implements OnInit {
  childList : string[];
  parent : string;
  res : any;
  length: number;
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  Search(myForm){
      myForm.MessageType="10";
      myForm.MessageTime="2019-06-10T14:23:52.960Z";
      myForm.SenderId=8; // Set this to your desired one if the back-end checks this.
      myForm.Code= new Date().toLocaleDateString().toString();
      const httpOptions = {
        headers : new HttpHeaders({
          'Content-type' : 'application/json',
          'Authorization' : JSON.parse(localStorage.getItem('Access_token'))
        })
      }
      delete myForm.Token;
      console.log(myForm);
      myForm = JSON.stringify(myForm);
      this.http.get(`http://localhost:2551/Que?json=${myForm}`,httpOptions).subscribe(Response => {
         this.childList = Response["Children"];
         if(this.childList == null || this.childList.length == 0){this.childList = ["No Children"] ;
         this.length = 0;}
         else 
         this.length = this.childList.length;
         this.parent = Response["ParentId"];
         if(this.parent == null || this.parent == "")this.parent="No Parent!";
         console.log(Response);
      });

    }
}
