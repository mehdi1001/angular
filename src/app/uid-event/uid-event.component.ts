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
  constructor(http: HttpClient,private QueResponseService: QueResponseService) { }

  ngOnInit() {
  }
  onSubmit(location){
    // console.log(location);
     this.jsonparse = JSON.stringify(location);
    // console.log(this.jsonparse);
     console.log(location.Token);
      this.QueResponseService.get(this.jsonparse,location.Token).subscribe(response => {console.log(response["Events"])
    this.Datas = response["Events"];
    
    });
     console.log(this.Datas);
    // console.log(response);
   }
}
