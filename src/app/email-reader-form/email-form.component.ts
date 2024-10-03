import {Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";
import {CommonModule, NgIf} from "@angular/common";
import {EmailService} from "../services/email.service";
import {EmailListComponent} from "../email-list/email-list.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-email-reader-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HighlightOnFocusDirective,
    NgIf,
    EmailListComponent,
    RouterLink
  ],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})
export class EmailFormComponent implements OnInit {
  from: string = "";
  to: string = "";
  subject: string = "";
  body: string = ""
  @ViewChild('emailForm') emailForm: any;

  constructor(public emailService: EmailService) {  }

  ngOnInit(): void {  }

  send(): void {

    this.emailService.addEmail(this.from, this.to, this.subject, this.body)
    this.reset()
  }

  reset(): void {
    this.emailForm.reset()
  }
}
