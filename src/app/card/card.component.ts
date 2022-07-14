import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private appService: AppService) { }

  responseData:any;

  ngOnInit(): void {
    this.appService.getData().subscribe((res)=>{
      this.responseData = res;
    })
  }

  

}
