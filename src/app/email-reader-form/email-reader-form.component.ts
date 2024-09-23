import {Component, OnInit, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Email} from "../interfaces/email";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-email-reader-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HighlightOnFocusDirective,
    NgIf
  ],
  templateUrl: './email-reader-form.component.html',
  styleUrl: './email-reader-form.component.css'
})
export class EmailReaderFormComponent implements OnInit {
  email: Email;
  @ViewChild('emailForm') emailForm: any;

  constructor() {
    this.email = {
      body: "", from: "", subject: "", to: ""
    }
  }

  ngOnInit(): void {
    this.email = {
      body: "", from: "", subject: "", to: ""
    }
  }

  send(): void {
    alert(`Sending the following message:
From: ${this.email.from}
To: ${this.email.to}
Subject: ${this.email.subject}
Body: ${this.email.body}`)
  }

  reset(): void {
    this.emailForm.reset()
  }

  protected readonly console = console;
}
