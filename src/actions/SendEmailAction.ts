import { Action } from './Action';

export class SendEmailAction implements Action {
  sender: string;
  receiver: string;

  constructor(sender: string, receiver: string) {
    this.sender = sender;
    this.receiver = receiver;
  }

  execute() {
    console.log(`Sending email from ${this.sender} to ${this.receiver}`);
  }

  serialize(): object {
    return {
      type: 'SendEmailAction',
      sender: this.sender,
      receiver: this.receiver,
    };
  }
}
