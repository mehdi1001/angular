import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import QueResponseService from '../shared/api/QueResponse.service';

@Component({
  selector: 'app-uid-event',
  templateUrl: './uid-event.component.html',
  styleUrls: ['./uid-event.component.css']
})
export class UidEventComponent implements OnInit {
  isvalid: any = false;
  jsonparse: any;
  events: any = [];
  Datas: any = [];
  n: number = 0;
  errors: any;
  dating: any = [];
  ShowLoading: boolean = false;
  temoin: any = false;
  intervalid: any;
  Errors: any;
  handlers: any = [];
  constructor(http: HttpClient,private QueResponseService: QueResponseService) { }

  ngOnInit() {
  }
  
onSubmit(location){
  if(localStorage.getItem('Access_token')===null)
    {
      this.handlers.push("Access Token not Generated !");
    
     } 
     else{
    console.log(location);
    this.jsonparse = JSON.stringify(location);
  this.ShowLoading = true;

   setTimeout(() => {
    
      console.log(this.ShowLoading);
      this.ShowLoading = false;
         this.jsonparse = JSON.stringify(location);
      console.log("access token from local storage " + localStorage.getItem('Access_token'));
        this.QueResponseService.get(this.jsonparse,JSON.parse(localStorage.getItem('Access_token'))).subscribe(response => {console.log(response)
        this.Datas = response["Events"];
        console.log(this.Datas);

         for(var x of this.Datas){           
          var zz = x.split("_");
          var Message = {type : zz[0],ID : zz[1],date : zz[2],content : zz[3]};
          this.dating.push(Message);         
          console.log("this is ZZ" + zz[1]);    
         }
      },(error) =>{ this.errors = error["error"]["Errors"];
        for(var z in this.errors)
        {
          console.log(this.errors[z]["Message"]);
          this.handlers.push(this.errors[z]["Message"]);
        }
        
        /*console.log(this.errors["error"]);
        this.Errors = this.errors["error"];
        console.log(this.Errors["Errors"][0]["Message"]);
*/
      }
      );
     
    }, 2000);
 
   }
  }

emptyError(){
  this.handlers = [];
}
}
