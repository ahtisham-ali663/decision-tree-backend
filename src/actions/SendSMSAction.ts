import { Action } from './Action';

export class SendSMSAction implements Action {
  phoneNumber: string;

  constructor(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }

  execute() {
    console.log(`Sending SMS to ${this.phoneNumber}`);
  }

  serialize(): object {
    return {
      type: 'SendSMSAction',
      phoneNumber: this.phoneNumber,
    };
  }
}
