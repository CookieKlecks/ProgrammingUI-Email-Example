import {Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";
import {CommonModule, NgIf} from "@angular/common";
import {EmailService} from "../services/email.service";
import {EmailListComponent} from "../email-list/email-list.component";

@Component({
  selector: 'app-email-reader-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HighlightOnFocusDirective,
    NgIf,
    EmailListComponent
  ],
  templateUrl: './email-reader-form.component.html',
  styleUrl: './email-reader-form.component.css'
})
export class EmailReaderFormComponent implements OnInit {
  from: string = "";
  to: string = "";
  subject: string = "";
  body: string = ""
  @ViewChild('emailForm') emailForm: any;

  constructor(public emailService: EmailService) {  }

  ngOnInit(): void {  }

  send(): void {

    this.emailService.addEmail(this.from, this.to, this.subject, this.body)
    alert(`The email [${this.subject}] has been sent to [${this.to}]`)
    this.reset()
  }

  reset(): void {
    this.emailForm.reset()
  }

  protected readonly console = console;
}
