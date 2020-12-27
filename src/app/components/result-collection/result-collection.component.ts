import { Component, OnInit } from '@angular/core';
import {ResultCollection} from "./result-collection";

@Component({
  selector: 'app-result-collection',
  templateUrl: './result-collection.component.html',
  styleUrls: ['./result-collection.component.css']
})
export class ResultCollectionComponent implements OnInit {
status:ResultCollection;
  constructor() { }

  ngOnInit(): void {
  }

}
