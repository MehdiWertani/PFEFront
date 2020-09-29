import { Component, OnInit } from '@angular/core';
import {RunCampagneService} from "../../_services/run-campagne.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-campagne-excute',
  templateUrl: './campagne-excute.component.html',
  styleUrls: ['./campagne-excute.component.css']
})
export class CampagneExcuteComponent implements OnInit {

  constructor(private runCampagneService:RunCampagneService) { }
form:FormGroup;

  submited=false;
  ngOnInit(): void {
    this.form=new FormGroup({
      SAS_ID_CAMP: new FormControl(''),
      START_DATE: new FormControl(''),
      END_DATE: new FormControl(''),
      Campagne_Name: new FormControl('')
    })


  }
  onsubmite():string{
    this.submited=true;
    return("ok");

  }

}
