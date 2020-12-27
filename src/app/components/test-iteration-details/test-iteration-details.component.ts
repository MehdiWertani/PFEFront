import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import {RunCampagneService} from '../../_services/run-campagne.service';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-test-iteration-details',
  templateUrl: './test-iteration-details.component.html',
  styleUrls: ['./test-iteration-details.component.css']
})
export class TestIterationDetailsComponent implements OnInit {
  ID: number;
  result: string;
  color1 = false;
  color2 = false;
  color3 = false;
  color4 = false;

  constructor(private runCampagneService: RunCampagneService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.ID = Date.now();
    this.result = 'ok';
    setTimeout( () => { this.color1 = true }, 2000 );
    setTimeout( () => { this.color2 = true }, 4000 );
    setTimeout( () => { this.color3 = true }, 6000 );
    setTimeout( () => { this.color4 = true }, 8000 );

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
    let statusEx;
    let sSms;
    let fSms;
    this.runCampagneService.getResultCollection(Number(campId)).subscribe(data => {
      console.log('data : ', data);
      // @ts-ignore
      statusEx = data.executionStatus;
      // @ts-ignore
      sSms = data.succeededSmsNbr;
      // @ts-ignore
      fSms = data.koSmsNbr;
      this.preparePdf(statusEx, sSms, fSms);
    });
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
