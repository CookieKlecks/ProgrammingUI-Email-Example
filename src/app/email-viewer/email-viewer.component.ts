import {Component} from '@angular/core';
import {EmailService} from "../services/email.service";
import {Email} from "../interfaces/email";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-email-viewer',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './email-viewer.component.html',
  styleUrl: './email-viewer.component.css'
})
export class EmailViewerComponent {
  currentId: number;
  mail: Email | null;

  constructor(private emailService: EmailService, private route: ActivatedRoute) {
    this.currentId = parseInt(this.route.snapshot.paramMap.get("id") ?? "NaN")
    this.mail = this.emailService.getById(this.currentId)

    this.route.params.subscribe(params => {
      this.currentId = parseInt(params['get']("id") ?? "NaN");
      this.mail = this.emailService.getById(this.currentId)
    })
  }

}
