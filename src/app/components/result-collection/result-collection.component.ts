import {Component, OnInit} from '@angular/core';
import {RunCampagneService} from '../../_services/run-campagne.service';
import {ResultCollection} from '../../_model/ResultCollection';

@Component({
  selector: 'app-result-collection',
  templateUrl: './result-collection.component.html',
  styleUrls: ['./result-collection.component.css']
})
export class ResultCollectionComponent implements OnInit {


  result: ResultCollection;

  constructor(private service: RunCampagneService) {
  }

  ngOnInit(): void {
    let campagneId = localStorage.getItem('campId');
    this.service.getResultCollection(Number(campagneId)).subscribe(data => {
      // @ts-ignore
      this.result = data;
      console.log("result data : ", data)
    });
  }

}
