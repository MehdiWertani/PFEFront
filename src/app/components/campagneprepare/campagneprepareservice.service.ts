import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CampagneprepareserviceService {

  constructor() { }

  downloadFile(data, filename='data') {
    let csvData = this.ConvertToCSV(data, ['SAS_ID_CAMP','MSISDN', 'REWARD_TYPE', 'ID_TREATMENT', 'START_DATE','END_DATE','CUSTOMER_REF','CUSTOMER_TYPE','PACKAGE_ID','ID_SERVICE','CHARGE_TYPE','MONTHS','DISCOUNT','POINTS','LIMIT','PRODUCT_ID','MSG_DATA','MSG_SENDER','CODING']);
    console.log(" csvdata " , csvData);
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }
  ConvertToCSV(objArray, headerList):any {

    let data=new Array<any>();
    data.push(objArray);
    var json =data;
    var fields = Object.keys(json[0])
    var replacer = function (key, value) {
      //return value === null ? 'undefined' : value
      return value;
    }
    console.log("json",json);
    let csv = json.map(function (row) {
      return fields.map(function (fieldName) {
        return JSON.stringify(row[fieldName], replacer)
      }).join(',')
    })
    csv.unshift(fields.join(',')) // add header column
    return ( csv.join('\r\n'));

  }
}
