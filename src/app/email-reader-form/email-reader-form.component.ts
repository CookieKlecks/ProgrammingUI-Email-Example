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
  currentEmail: Email;
  emailList: Email[];
  @ViewChild('emailForm') emailForm: any;

  constructor() {
    this.currentEmail = {
      body: "", from: "", subject: "", to: ""
    }
    this.emailList = []
  }

  ngOnInit(): void {
    this.currentEmail = {
      body: "", from: "", subject: "", to: ""
    }
    this.emailList = []
  }

  send(): void {
    this.emailList.push(Object.assign({}, this.currentEmail))
    alert(`The email [${this.currentEmail.subject}] has been sent to [${this.currentEmail.to}]`)
    this.reset()
  }

  reset(): void {
    this.emailForm.reset()
  }

  protected readonly console = console;
}
