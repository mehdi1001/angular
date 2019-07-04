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
test: any;
error: string;
location_uid : any;
  constructor(http: HttpClient,private QueResponseService: QueResponseService) {
 /*  http.get('http://localhost:2551/que')
    .subscribe(response => {console.log(response)})*/
    
    
   }

  ngOnInit() {
  }
onSubmit(location){
if(localStorage.getItem('Access_token')===null){
 
   this.error = "Access Token not Generated ! ";
}else{
   this.QueResponseService.GetLocation(location.UniqueIdentifierId,localStorage.getItem('Access_token')).subscribe(response => {
  
   this.location_uid = {date : response[0],id : response[1],country : response[2],FacilityType : response[3]}
   
  }
  
  )}
  
}

}
