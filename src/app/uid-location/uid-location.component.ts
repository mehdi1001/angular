import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uid-location',
  templateUrl: './uid-location.component.html',
  styleUrls: ['./uid-location.component.css']
})
export class UidLocationComponent implements OnInit {
isvalid: any = false;
  constructor() { }

  ngOnInit() {
  }
onSubmit(location){
  console.log(location);
}
}
