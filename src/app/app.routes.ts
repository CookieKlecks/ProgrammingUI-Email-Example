import { Routes } from '@angular/router';
import {EmailFormComponent} from "./email-reader-form/email-form.component";
import {EmailListComponent} from "./email-list/email-list.component";
import {EmailViewerComponent} from "./email-viewer/email-viewer.component";

export const routes: Routes = [
  {path: '', redirectTo: '/emails', pathMatch: 'full'},
  {path: 'emails', component: EmailListComponent},
  {path: 'email/:id', component: EmailViewerComponent},
  {path: 'create/email', component: EmailFormComponent}
];
