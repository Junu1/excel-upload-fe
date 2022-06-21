import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { readXlsxFile } from 'read-excel-file'
@Component({
  selector: 'app-bulk-reconciliation',
  templateUrl: './bulk-reconciliation.component.html',
  styleUrls: ['./bulk-reconciliation.component.css']
})
export class BulkReconciliationComponent implements OnInit {
  multipartFile:any;
  flag=true;
  fileUploadUrl='http://localhost:8080/bulkreconciliation/upload'


  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }


  selectFile(event: any) {
    this.multipartFile=event.target.files[0];
    console.log(this.multipartFile);
   
  }
  uploadFile(){
    let formData=new FormData();
    formData.append("multipartFile",this.multipartFile);

    this.http.post(this.fileUploadUrl,formData,
      {responseType: 'text'}).subscribe(
      (data:any) => {

      console.log(data);
      alert('Upload successful');

      },
      (error)=>{
        console.log(error);
        alert('error');
      });
    
  }

}