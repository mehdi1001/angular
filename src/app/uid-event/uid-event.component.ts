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
  Datas: string[];
  ShowLoading: boolean = false;
  temoin: any = false;
  constructor(http: HttpClient,private QueResponseService: QueResponseService) { }

  ngOnInit() {
  }
  onSubmit(location){
    
    /* setTimeout(() => {
      this.ShowLoading = true;
      console.log("Timeout" +this.ShowLoading);
      this.temoin = true;
      console.log("temoin " +this.temoin);
  }, 500);
  console.log("hors SetTimeOut " +this.temoin); */
  this.ShowLoading = true;
setInterval(() => {
  console.log(this.ShowLoading);
  this.ShowLoading = false;
  console.log("after affectation" + this.ShowLoading);

    // console.log(location);
     this.jsonparse = JSON.stringify(location);
   
    
     this.QueResponseService.get(this.jsonparse,location.Token).subscribe(response => {console.log(response["Events"])
    this.Datas = response["Events"];
    
    }); } , 2000);  
  
  //   console.log(this.Datas);
    // console.log(response);
   }
}
