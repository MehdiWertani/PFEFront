import { Component, OnInit } from '@angular/core';
import {TestItarationService} from "../../_services/test-itaration.service";

@Component({
  selector: 'app-add-test-iteration',
  templateUrl: './add-test-iteration.component.html',
  styleUrls: ['./add-test-iteration.component.css']
})
export class AddTestIterationComponent implements OnInit {
  testIteration={
    iterationName: '',
    campagneid:0,
    deliveryversion:0,
    startdeliverydate: '',
    expecteddeliverydate:'',
    deliveryobjectif:'',
    state:'',
    testduration:0
  };
  submitted=false;

  constructor(private testItarationService:TestItarationService) { }

  ngOnInit(): void {
  }
  saveTestIteration():void{
    const data={
      iterationName:this.testIteration.iterationName,
      campagneid:Date.now(),
      deliveryversion: this.testIteration.deliveryversion,
      startdeliverydate:this.testIteration.startdeliverydate,
      expecteddeliverydate: this.testIteration.expecteddeliverydate,
      deliveryobjectif: this.testIteration.deliveryobjectif,
      state: this.testIteration.state,
      testduration: this.testIteration.testduration
    };
    this.testItarationService.create(data).subscribe( response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }
  newTestIteration():void{
    this.submitted=false;
    this.testIteration={
      iterationName:'',
      campagneid:0,
      deliveryversion:0,
      startdeliverydate:'',
      expecteddeliverydate:'',
      deliveryobjectif:'',
      state:'',
      testduration:0
    };
  }

}
