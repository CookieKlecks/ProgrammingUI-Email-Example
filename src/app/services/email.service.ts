import {Injectable} from '@angular/core';
import {Email} from "../interfaces/email";
import {defaultEmail0, defaultEmail1, defaultEmail2, defaultEmail3} from "../data/default-emails";


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private nextFreeId: number;
  private emails: Email[] = [];

  constructor() {
    this.emails = [defaultEmail0, defaultEmail1, defaultEmail2, defaultEmail3];
    this.nextFreeId = 4
  }

  public getAll(): Email[] {
    return this.emails
  }

  public getById(id: number): Email | null {
    for (let email of this.emails) {
      if (email.id === id) {
        return email;
      }
    }
    return null;
  }

  public addEmail(from: string, to: string, subject: string, body: string): void {
    this.emails.push({
      id: this.nextFreeId,
      from,
      to,
      subject,
      body
    })
    ++this.nextFreeId
  }

  public deleteAll() {
    this.emails = []
  }
}
