import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) {
  }



  postFile(fileToUpload: File): Observable<any> {
    let token = sessionStorage.getItem('auth-token');
    const endpoint = 'http://localhost:8080/campagne/upload';
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    console.log('file to uplaod ', fileToUpload);
    console.log('form data uplaod ', formData);
    return this.httpClient.post(endpoint, formData, {
      headers:
        {
          'Authorization': 'Bearer ' + token
        }
    });
  }
}
