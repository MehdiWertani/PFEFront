import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CampagneModel} from '../_model/CampagneModel';

@Injectable({
  providedIn: 'root'
})
export class RunCampagneService {

  apiUrl = 'http://localhost:8080/campagne';

  constructor(private http: HttpClient) {
  }


  runCampagne(model: CampagneModel) {
    console.log(`http invoke : ${this.apiUrl}/launch_campagne`, model);
    return this.http.post(`${this.apiUrl}/launch_campagne`, model);
  }

  getResultCollection(campagneId: number) {
    console.log(`http invoke : ${this.apiUrl}/result_collection/${campagneId}`);
    return this.http.get(`${this.apiUrl}/result_collection/${campagneId}`);
  }
}
