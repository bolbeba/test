import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from './../service/document.service';
import { Document } from './../document';

@Component({
  selector: 'app-display-document',
  templateUrl: './display-document.component.html',
  styleUrls: ['./display-document.component.scss']
})
export class DisplayDocumentComponent implements OnInit {

  public document: Document;
  pdfData: string;
  pdfFile: string;
  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.documentService.getDocument(id)
    .subscribe(document => {
        this.document = document;
        this.pdfData = this.document.enonceData;
        this.pdfFile = 'data:application/pdf;base64,' + this.pdfData;
        // console.log('pdf  file' , this.pdfFile);
      });
  }

}
