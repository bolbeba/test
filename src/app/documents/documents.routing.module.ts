import { DisplayDocumentComponent } from './display-document/display-document.component';
import { RouteGuardService } from './../service/route-guard.service';
import { ListDocumentsComponent } from './list-documents/list-documents.component';
import { AddDocumentComponent } from './add-document/add-document.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const documentsRoutes: Routes = [
  { path: 'documents', component: ListDocumentsComponent },
  { path: 'add-document', component: AddDocumentComponent },
  { path: 'display-document/:id', component: DisplayDocumentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(documentsRoutes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule {}
