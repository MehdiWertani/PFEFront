import {Component, OnInit} from '@angular/core';
import {TestItarationService} from '../../_services/test-itaration.service';
import {Router} from '@angular/router';
import {CampagneModel} from '../../_model/CampagneModel';
import {RunCampagneService} from '../../_services/run-campagne.service';

@Component({
  selector: 'app-test-iteration-list',
  templateUrl: './test-iteration-list.component.html',
  styleUrls: ['./test-iteration-list.component.css']
})
export class TestIterationListComponent implements OnInit {
  testIterations: any;
  currentTestIteration: null;
  currentIndex: -1;
  button: string;
  launchModel = new CampagneModel();
  runBtn = 'fas fa-play';

  constructor(private testItarationService: TestItarationService,
              private runCampagneService: RunCampagneService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.button = 'Run';
    this.getTestIterations();

  }

  getTestIterations(): void {
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

  Run(iteration: any) {
    this.runBtn = 'fas fa-hourglass-end';
    setTimeout(() => {
      // alert("Iteration succefully excuted");
      console.log('iteration ', iteration);
      this.launchModel.iterationName = iteration.iterationName;
      this.launchModel.campagneId = iteration.campagneid;
      // this.launchModel.campagneName = this.form.value.campagneName;
      // this.launchModel.startDate = this.form.value.startDate;
      // this.launchModel.endDate = this.form.value.endDate;

      localStorage.setItem('campId', String(this.launchModel.campagneId));
      localStorage.setItem('iterationName', String(this.launchModel.iterationName));


      let apiResult = this.runCampagneService.runCampagne(this.launchModel);
      apiResult.subscribe(data => console.log('result :', data));
      this.route.navigate(['/bil/test details']);
      this.button = 'shutdown';
      localStorage.setItem("firstExec", "true");
    }, 5000);
  }

}
