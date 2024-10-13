import { Action } from './actions/Action';
import { SendSMSAction } from './actions/SendSMSAction';
import { SendEmailAction } from './actions/SendEmailAction';
import { ConditionAction } from './actions/ConditionAction';
import { LoopAction } from './actions/LoopAction';  // Make sure this is imported

export class DecisionTree {
    root: Action;
  
    constructor(root: Action) {
      this.root = root;
    }
  
    // Serialize the decision tree to JSON
    serialize(): string {
      return JSON.stringify(this.root.serialize());
    }
  
    // Deserialize JSON back into a DecisionTree
    static deserialize(serialized: string): DecisionTree {
      const jsonObject = JSON.parse(serialized);
  
      // Implement custom deserialization logic based on the action type
      let action: Action;
      switch (jsonObject.type) {
        case 'SendSMSAction':
          action = new SendSMSAction(jsonObject.phoneNumber);
          break;
        case 'SendEmailAction':
          action = new SendEmailAction(jsonObject.sender, jsonObject.receiver);
          break;
        case 'ConditionAction':
          const trueAction = this.deserialize(JSON.stringify(jsonObject.trueAction)).root;
          const falseAction = this.deserialize(JSON.stringify(jsonObject.falseAction)).root;
          action = new ConditionAction(jsonObject.condition, trueAction, falseAction);
          break;
        case 'LoopAction':
          const subtree = this.deserialize(JSON.stringify(jsonObject.subtree)).root;
          action = new LoopAction(subtree, jsonObject.iterations);
          break;
        default:
          throw new Error('Unknown action type: ' + jsonObject.type);
      }
  
      return new DecisionTree(action);
    }
  
    execute() {
      this.root.execute();
    }
  }
