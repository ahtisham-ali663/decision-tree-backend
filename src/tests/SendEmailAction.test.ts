import { SendEmailAction } from '../actions/SendEmailAction';

describe('SendEmailAction', () => {
  it('should log email sending correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const emailAction = new SendEmailAction('sender@example.com', 'receiver@example.com');
    
    emailAction.execute();
    
    expect(consoleSpy).toHaveBeenCalledWith('Sending email from sender@example.com to receiver@example.com');
    consoleSpy.mockRestore();
  });
});
