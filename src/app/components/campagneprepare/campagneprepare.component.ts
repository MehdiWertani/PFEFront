import {Component, OnInit} from '@angular/core';
import {CampagneprepareserviceService} from "./campagneprepareservice.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Campagnemarketing} from "./campagnemarketing";

@Component({
  selector: 'app-campagneprepare',
  templateUrl: './campagneprepare.component.html',
  styleUrls: ['./campagneprepare.component.css']
})
export class CampagneprepareComponent implements OnInit {
  form: FormGroup;
  model=new Campagnemarketing();
 submited=false;

  constructor(private campagneprepareserviceService: CampagneprepareserviceService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      SAS_ID_CAMP: new FormControl('undefined'),
      MSISDN: new FormControl('undefined'),
      REWARD_TYPE:new FormControl('undefined'),
      ID_TREATMENT: new FormControl('undefined'),
      START_DATE: new FormControl('undefined'),
      END_DATE: new FormControl('undefined'),
      CUSTOMER_REF:new FormControl('undefined'),
      CUSTOMER_TYPE :new FormControl('undefined'),
      PACKAGE_ID: new FormControl('undefined'),
      ID_SERVICE :new FormControl('undefined'),
      CHARGE_TYPE:new FormControl('undefined'),
      MONTHS:new FormControl('undefined'),
      DISCOUNT:new FormControl('undefined'),
      POINTS:new FormControl('undefined'),
      LIMIT:new FormControl('undefined'),
      PRODUCT_ID:new FormControl('undefined'),
      MSG_DATA:new FormControl('undefined'),
      MSG_SENDER:new FormControl('undefined'),
      CODING: new FormControl('undefined')
    })

  }

  download(): void {

this.validateForm();
    this.campagneprepareserviceService.downloadFile(this.model, 'CampagneMarketingCSV');
this.submited=true;
  }
  validateForm(){
    this.model.SAS_ID_CAMP=Date.now();
    this.model.MSISDN=this.form.controls['MSISDN'].value;
    this.model.REWARD_TYPE=this.form.controls['REWARD_TYPE'].value;
    this.model.ID_TREATMENT=this.form.controls['ID_TREATMENT'].value;
    this.model.START_DATE=this.form.controls['START_DATE'].value;
    this.model.END_DATE=this.form.controls['END_DATE'].value;
    this.model.CUSTOMER_REF=this.form.controls['CUSTOMER_REF'].value;
    this.model.CUSTOMER_TYPE=this.form.controls['CUSTOMER_TYPE'].value;
    this.model.PACKAGE_ID=this.form.controls['PACKAGE_ID'].value;
    this.model.ID_SERVICE=this.form.controls['ID_SERVICE'].value;
    this.model.MONTHS=this.form.controls['MONTHS'].value;
    this.model.CHARGE_TYPE=this.form.controls['CHARGE_TYPE'].value;
    this.model.DISCOUNT=this.form.controls['DISCOUNT'].value;
    this.model.POINTS=this.form.controls['POINTS'].value;
    this.model.LIMIT=this.form.controls['LIMIT'].value;
    this.model.PRODUCT_ID=this.form.controls['PRODUCT_ID'].value;
    this.model.MSG_DATA=this.form.controls['MSG_DATA'].value;
    this.model.MSG_SENDER=this.form.controls['MSG_SENDER'].value;
    this.model.CODING=this.form.controls['CODING'].value;

  }
}
