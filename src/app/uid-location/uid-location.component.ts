import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import QueResponseService from '../shared/api/QueResponse.service';

@Component({
  selector: 'app-uid-location',
  templateUrl: './uid-location.component.html',
  styleUrls: ['./uid-location.component.css']
})
export class UidLocationComponent implements OnInit {
isvalid: any = false;
jsonparse: any;
  constructor(http: HttpClient,private QueResponseService: QueResponseService) {
 /*  http.get('http://localhost:2551/que')
    .subscribe(response => {console.log(response)})*/
    
    
   }

  ngOnInit() {
  }
onSubmit(location){
 // console.log(location);
  this.jsonparse = JSON.stringify(location);
 // console.log(this.jsonparse);
  console.log(location.Token);
   this.QueResponseService.get(this.jsonparse,location.Token).subscribe(response => {console.log(response)})
  
}
}
