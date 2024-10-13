import { Action } from './Action';

export class ConditionAction implements Action {
  condition: string;
  trueAction: Action;
  falseAction: Action;

  constructor(condition: string, trueAction: Action, falseAction: Action) {
    this.condition = condition;
    this.trueAction = trueAction;
    this.falseAction = falseAction;
  }

  execute() {
    console.log(`Condition (${this.condition}) evaluated to: ${eval(this.condition)}`);
    if (eval(this.condition)) {
      console.log('Executing true action');
      this.trueAction.execute();
    } else {
      console.log('Executing false action');
      this.falseAction.execute();
    }
  }

  serialize(): object {
    return {
      type: 'ConditionAction',
      condition: this.condition,
      trueAction: this.trueAction.serialize(),
      falseAction: this.falseAction.serialize(),
    };
  }
}
