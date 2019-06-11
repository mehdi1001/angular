import { Component, OnInit } from '@angular/core';
import QueResponseService from '../shared/api/QueResponse.service';

@Component({
  selector: 'app-guid',
  templateUrl: './guid.component.html',
  styleUrls: ['./guid.component.css']
})
export class GuidComponent implements OnInit {
guids: any = null;
  constructor(private QueResponseService: QueResponseService) { }

  ngOnInit() {
  }
GetGuid(obj){

  this.QueResponseService.GetGuids(obj.counter).subscribe(resp =>{this.guids = resp });
}
}
