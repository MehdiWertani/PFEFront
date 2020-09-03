import { Component, OnInit } from '@angular/core';
import {TestItarationService} from "../../_services/test-itaration.service";

@Component({
  selector: 'app-test-iteration-list',
  templateUrl: './test-iteration-list.component.html',
  styleUrls: ['./test-iteration-list.component.css']
})
export class TestIterationListComponent implements OnInit {
  testIterations: any ;
  currentTestIteration:null;
  currentIndex:-1;

  constructor(private testItarationService:TestItarationService) { }

  ngOnInit(): void {
    this.getTestIterations();

  }
  getTestIterations(): void{
    this.testItarationService.getAll().subscribe(
      data => {
        this.testIterations = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  refreshList(): void {
    this.getTestIterations();
    this.currentTestIteration = null;
    this.currentIndex = -1;
  }
  setActiveTestIteration(testIteration, index): void {
    this.currentTestIteration = testIteration;
    this.currentIndex = index;
  }

}
