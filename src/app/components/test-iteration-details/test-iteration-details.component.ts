import { Component, OnInit } from '@angular/core';
import {delay, timeout} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test-iteration-details',
  templateUrl: './test-iteration-details.component.html',
  styleUrls: ['./test-iteration-details.component.css']
})
export class TestIterationDetailsComponent implements OnInit {
ID:number
  result:string
  constructor(private route:Router) { }

  ngOnInit(): void {
    this.ID=Date.now();
  this.result="ok";

  }

Details1(){
    alert("file created with Id:");
  alert(this.ID);

}
  Details2(){
    alert("Excution succefull");


  }
  Details3(){
    this.route.navigate(['/bil/Result Collection'])

  }

}
