import { LoopAction } from '../actions/LoopAction';
import { SendSMSAction } from '../actions/SendSMSAction';

describe('LoopAction', () => {
  it('should execute the subtree action multiple times', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const smsAction = new SendSMSAction('1234567890');
    
    const loopAction = new LoopAction(smsAction, 3);  // Loop 3 times
    
    loopAction.execute();
    
    expect(consoleSpy).toHaveBeenCalledWith('Executing loop with 3 iterations');
    expect(consoleSpy).toHaveBeenCalledWith('Iteration 1');
    expect(consoleSpy).toHaveBeenCalledWith('Sending SMS to 1234567890');
    expect(consoleSpy).toHaveBeenCalledWith('Iteration 2');
    expect(consoleSpy).toHaveBeenCalledWith('Sending SMS to 1234567890');
    expect(consoleSpy).toHaveBeenCalledWith('Iteration 3');
    expect(consoleSpy).toHaveBeenCalledWith('Sending SMS to 1234567890');
    
    consoleSpy.mockRestore();
  });
});
