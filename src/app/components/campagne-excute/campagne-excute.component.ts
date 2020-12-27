import {Component, OnInit} from '@angular/core';
import {RunCampagneService} from '../../_services/run-campagne.service';
import {FormControl, FormGroup} from '@angular/forms';
import {CampagneModel} from '../../_model/CampagneModel';

@Component({
  selector: 'app-campagne-excute',
  templateUrl: './campagne-excute.component.html',
  styleUrls: ['./campagne-excute.component.css']
})
export class CampagneExcuteComponent implements OnInit {

  launchModel = new CampagneModel();

  constructor(private runCampagneService: RunCampagneService) {
  }

  form: FormGroup;

  submited = false;

  ngOnInit(): void {
    this.form = new FormGroup({
      campId: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      campagneName: new FormControl('')
    });


  }

  onsubmite(): string {
    this.submited = true;
    return ('ok');

  }

  runCampagne() {
    this.launchModel.campagneId = this.form.value.campId;
    this.launchModel.campagneName = this.form.value.campagneName;
    this.launchModel.startDate = this.form.value.startDate;
    this.launchModel.endDate = this.form.value.endDate;

    localStorage.setItem('campId', String(this.launchModel.campagneId));

    let apiResult = this.runCampagneService.runCampagne(this.launchModel);
    apiResult.subscribe(data => console.log('result :', data));
  }
}
