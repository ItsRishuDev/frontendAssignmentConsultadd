import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  constructor() { }


  @Input() convertedResult:string|undefined;

  ngOnInit(): void {
  }

}
