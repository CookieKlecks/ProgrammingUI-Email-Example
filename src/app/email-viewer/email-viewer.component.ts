import {Component} from '@angular/core';
import {EmailService} from "../services/email.service";
import {Email} from "../interfaces/email";

@Component({
  selector: 'app-email-viewer',
  standalone: true,
  imports: [],
  templateUrl: './email-viewer.component.html',
  styleUrl: './email-viewer.component.css'
})
export class EmailViewerComponent {
  mail: Email;

  constructor(private emailService: EmailService) {
    let mail = emailService.getById(0)
    if (mail !== null) {
      this.mail = mail;
    } else {
      this.mail = {
        id: 0,
        from: "id not known",
        to: "id not known",
        subject: "id not known",
        body: "id not known",
      }
    }
  }

}
