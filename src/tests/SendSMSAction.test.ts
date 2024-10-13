import { SendSMSAction } from '../actions/SendSMSAction';

describe('SendSMSAction', () => {
  it('should log SMS sending correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const smsAction = new SendSMSAction('1234567890');
    
    smsAction.execute();
    
    expect(consoleSpy).toHaveBeenCalledWith('Sending SMS to 1234567890');
    consoleSpy.mockRestore();
  });
});
