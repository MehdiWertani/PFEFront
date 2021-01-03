import {Component, OnInit} from '@angular/core';
import {FileUploadService} from '../../_services/file-upload.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-import-campaign',
  templateUrl: './import-campaign.component.html',
  styleUrls: ['./import-campaign.component.css']
})
export class ImportCampaignComponent implements OnInit {

  fileToUpload: File = null;

  constructor(private fileUploadService: FileUploadService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    console.log('handle file upload', files);
    this.fileToUpload = files.item(0);
    console.log('file to upload', this.fileToUpload);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      console.log('data upload ', data);
    }, error => {
      console.log(error);
    });
    this.router.navigate(['/bil/campaigns']);
  }
}
