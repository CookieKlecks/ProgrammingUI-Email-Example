import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {EmailReaderBasicComponent} from "./email-reader-basic/email-reader-basic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmailReaderBasicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmailReader';
}
