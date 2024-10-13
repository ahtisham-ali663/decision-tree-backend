import { ConditionAction } from '../actions/ConditionAction';
import { SendSMSAction } from '../actions/SendSMSAction';

describe('ConditionAction', () => {
  it('should execute true action if condition is true', () => {
    const trueAction = new SendSMSAction('1234567890');
    const falseAction = new SendSMSAction('9876543210');
    
    const condition = '1 + 1 === 2';  // This will evaluate to true
    const conditionAction = new ConditionAction(condition, trueAction, falseAction);
    
    const consoleSpy = jest.spyOn(console, 'log');
    
    conditionAction.execute();
    
    expect(consoleSpy).toHaveBeenCalledWith('Condition (1 + 1 === 2) evaluated to: true');
    expect(consoleSpy).toHaveBeenCalledWith('Executing true action');
    expect(consoleSpy).toHaveBeenCalledWith('Sending SMS to 1234567890');
    
    consoleSpy.mockRestore();
  });

  it('should execute false action if condition is false', () => {
    const trueAction = new SendSMSAction('1234567890');
    const falseAction = new SendSMSAction('9876543210');
    
    const condition = '1 + 1 === 3';  // This will evaluate to false
    const conditionAction = new ConditionAction(condition, trueAction, falseAction);
    
    const consoleSpy = jest.spyOn(console, 'log');
    
    conditionAction.execute();
    
    expect(consoleSpy).toHaveBeenCalledWith('Condition (1 + 1 === 3) evaluated to: false');
    expect(consoleSpy).toHaveBeenCalledWith('Executing false action');
    expect(consoleSpy).toHaveBeenCalledWith('Sending SMS to 9876543210');
    
    consoleSpy.mockRestore();
  });
});
