import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmailReaderBasicComponent} from "./email-reader-basic/email-reader-basic.component";
import {EmailReaderFormComponent} from "./email-reader-form/email-reader-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmailReaderBasicComponent, EmailReaderFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmailReader';
}
