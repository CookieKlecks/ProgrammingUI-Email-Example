import {Component, OnInit, ViewChild} from '@angular/core';
import {Email} from "../interfaces/email";
import {FormsModule} from "@angular/forms";

const EMPTY_EMAIL: Email = {
  id: 0,
  body: "", from: "", subject: "", to: ""
}

@Component({
  selector: 'app-email-reader-basic',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './email-reader-basic.component.html',
  styleUrl: './email-reader-basic.component.css'
})
export class EmailReaderBasicComponent implements OnInit {
  email: Email;
  @ViewChild('emailForm') emailForm: any;

  constructor() {
    this.email = {
      id: 0,
      body: "", from: "", subject: "", to: ""
    }
  }

  ngOnInit(): void {
    this.email = {
      id: 0,
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
}
