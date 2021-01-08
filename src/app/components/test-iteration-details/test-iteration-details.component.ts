import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {RunCampagneService} from '../../_services/run-campagne.service';
import {CampagneModel} from '../../_model/CampagneModel';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-test-iteration-details',
  templateUrl: './test-iteration-details.component.html',
  styleUrls: ['./test-iteration-details.component.css']
})
export class TestIterationDetailsComponent implements OnInit {
  ID: number;
  color1 = 'yellow';
  color2 = 'yellow';
  color3 = 'yellow';
  color4 = 'yellow';

  result = 'Pending';
  result1 = 'Pending';
  result2 = 'Pending';
  result3 = 'Pending';

  generatedCampId: string;
  isPrepareSuccess = false;
  isExecutionSuccess = false;
  totalSms: number;

  constructor(private runCampagneService: RunCampagneService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.ID = Date.now();
    let firstExec = localStorage.getItem('firstExec');
    console.log('firstExec ', firstExec);
    let isFirstExecution = (firstExec == 'true');
    console.log('isFirst : ', isFirstExecution);
    if (isFirstExecution) {
      setTimeout(() => {
        this.runCampagneService.prepareCampaign().subscribe(data =>
            this.generatedCampId = String(data),
          error => this.result = 'Error');
        this.isPrepareSuccess = this.generatedCampId !== '';
        this.result1 = 'OK';
        this.color1 = 'green';
      }, 2000);

      setTimeout(() => {
        console.log('prepare finish : ', this.isPrepareSuccess);
        if (this.isPrepareSuccess === true) {
          localStorage.setItem('campId', this.generatedCampId);
          this.runCampagneService.executeCampaign(this.generatedCampId).subscribe(data => {
              // @ts-ignore
              this.totalSms = data.smsNumber;
              console.log('exec data ', data);
            }, error => this.result2 = 'Error'
          );
          // console.log('total sms ', this.totalSms);
          // console.log('total sms ', this.totalSms >= 0);
          // this.isExecutionSuccess = this.totalSms >= 0 && this.generatedCampId !== '';
          // console.log('is exec', this.totalSms >= 0 && this.generatedCampId !== '');
        }
        this.result2 = 'OK';
        this.color2 = 'green';
      }, 4000);

      setTimeout(() => {
        // console.log('total sms ', this.totalSms);
        console.log('exeuction finish : ', this.isExecutionSuccess);
        if (this.totalSms >= 0) {
          let itName = localStorage.getItem("iterationName");
          this.runCampagneService.launchCampaign(this.generatedCampId, this.totalSms, itName).subscribe(data =>
              console.log(data),
            error => this.result3 = 'Error');
        }
        this.result3 = 'OK';
        this.color3 = 'green';
      }, 6000);
      setTimeout(() => {
        this.runCampagneService.getResultCollection(Number(this.generatedCampId)).subscribe(data => {
          console.log(data);
        }, error => this.result = 'Error');
        this.result = 'OK';
        this.color4 = 'green';
      }, 8000);
      // setTimeout(() => {
      //   this.result1 = 'OK';
      //   this.color1 = 'green';
      // }, 2000);
      // setTimeout(() => {
      //   this.result2 = 'OK';
      //   this.color2 = 'green';
      // }, 4000);
      // setTimeout(() => {
      //   this.result3 = 'OK';
      //   this.color3 = 'green';
      // }, 6000);
      // setTimeout(() => {
      //   this.result = 'OK';
      //   this.color4 = 'green';
      // }, 8000);
    } else {
      this.result = 'OK';
      this.result1 = 'OK';
      this.result2 = 'OK';
      this.result3 = 'OK';
    }
    localStorage.setItem('firstExec', 'false');
  }

  Details1() {
    alert('file created with Id:');
    alert(this.ID);

  }

  Details2() {
    alert('Excution succefull');


  }

  Details3() {
    this.route.navigate(['/bil/Result Collection']);

  }

  exportToPdf(result: any) {
    console.log('export :', result);
    let campId = localStorage.getItem('campId');
    let iteration = localStorage.getItem('iterationName');
    let statusEx;
    let sSms;
    let fSms;
    let model = new CampagneModel();
    model.iterationName = iteration;
    model.campagneId = Number(campId);
    model.download = true;
    this.runCampagneService.runCampagne(model).subscribe(data => {
      // @ts-ignore
      this.createPdf(data.body);
    });
    // this.runCampagneService.getResultCollection(Number(campId)).subscribe(data => {
    //   console.log('data : ', data);
    //   // @ts-ignore
    //   statusEx = data.executionStatus;
    //   // @ts-ignore
    //   sSms = data.succeededSmsNbr;
    //   // @ts-ignore
    //   fSms = data.koSmsNbr;
    //   this.preparePdf(statusEx, sSms, fSms);
    // });
  }

  createPdf(data: any) {
    let blob = new Blob([data], {type: 'application/pdf'});
    // console.log("vlob ", blob.)
    // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    //   window.navigator.msSaveOrOpenBlob(blob); //For IE browser
    // }
    const dataUrl = `data:'application/pdf';base64,${data}`;

    const linkElement = document.createElement('a');
    // const url = window.URL.createObjectURL(data);
    linkElement.setAttribute('href', dataUrl);
    linkElement.setAttribute('download', 'report_campaign.pdf');
    const clickEvent = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': false
    });
    linkElement.dispatchEvent(clickEvent);
  }

  preparePdf(statusEx, sSms, fSms) {
    console.log('params ', statusEx, sSms, fSms);
    let pdfContent = {
      content: `Result Collection : \n
      Execution status : ${statusEx} \n
      N° of succeeded sms : ${sSms} \n
      N° of failed sms : ${fSms}`
    };
    pdfMake.createPdf(pdfContent).download();

  }
}
