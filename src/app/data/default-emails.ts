import {Email} from "../interfaces/email";

export const defaultEmail0: Email = {
  id: 0,
  from: "alice@example.com",
  to: "bob@example.com",
  subject: "Dinner Plans",
  body: "Friday night dinner? Let me know!"
};
export const defaultEmail1: Email = {
  id: 1,
  from: "bob@example.com",
  to: "alice@example.com",
  subject: "Thanks!",
  body: "Thanks for the help last weekend!"
};
export const defaultEmail2: Email = {
  id: 2,
  from: "charlie@example.com",
  to: "dave@example.com",
  subject: "Up for hiking?",
  body: "Hiking on Saturday? Let me know if you're in!"
};
export const defaultEmail3: Email = {
  id: 3,
  from: "eve@example.com",
  to: "frank@example.com",
  subject: "Mail with no body",
  body: ""
};
