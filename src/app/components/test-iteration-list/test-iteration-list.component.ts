import { Component, OnInit } from '@angular/core';
import {TestItarationService} from "../../_services/test-itaration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test-iteration-list',
  templateUrl: './test-iteration-list.component.html',
  styleUrls: ['./test-iteration-list.component.css']
})
export class TestIterationListComponent implements OnInit {
  testIterations: any ;
  currentTestIteration:null;
  currentIndex:-1;
 button:string;

  constructor(private testItarationService:TestItarationService , private route:Router) { }

  ngOnInit(): void {
    this.button="Run";
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
  Run(){
    alert("Iteration succefully excuted");
    this.route.navigate(['/bil/test details'])
    this.button="shutdown";
  }

}
