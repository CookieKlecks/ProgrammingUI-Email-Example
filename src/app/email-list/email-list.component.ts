import { Component } from '@angular/core';
import {EmailService} from "../services/email.service";
import {Email} from "../interfaces/email";
import {NgForOf, NgIf} from "@angular/common";
import {FilterArrayImpurePipe} from "../pipes/filter-array-impure.pipe";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-email-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    FilterArrayImpurePipe,
    HighlightOnFocusDirective,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './email-list.component.html',
  styleUrl: './email-list.component.css'
})
export class EmailListComponent {
  filterText: string = ""
  hideNoBody: boolean = false;

  constructor(private emailService: EmailService) {
  }

  getEmails(): Email[] {
    return this.emailService.getAll()
  }

  getNumEmails(): number {
    return this.getEmails().length;
  }

  handleClickView(id: number) {
    console.log(this.emailService.getById(id));
  }
}
