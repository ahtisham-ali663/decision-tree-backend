import { DecisionTree } from '../DecisionTree';
import { SendSMSAction } from '../actions/SendSMSAction';
import { LoopAction } from '../actions/LoopAction';

describe('DecisionTree', () => {
  it('should serialize and deserialize correctly', () => {
    const smsAction = new SendSMSAction('1234567890');
    
    // Create a LoopAction with 3 iterations
    const loopAction = new LoopAction(smsAction, 3);
    
    const tree = new DecisionTree(loopAction);
    
    // Serialize the decision tree to JSON
    const serialized = tree.serialize();
    
    // Deserialize back into a decision tree
    const deserializedTree = DecisionTree.deserialize(serialized);
    
    // Spy on the console to verify that SMS was sent correctly
    const consoleSpy = jest.spyOn(console, 'log');
    
    // Execute the deserialized decision tree
    deserializedTree.execute();
    
    // Verify the correct log was printed for sending SMS
    expect(consoleSpy).toHaveBeenCalledWith('Sending SMS to 1234567890');
    
    // Update the expected calls count
    expect(consoleSpy).toHaveBeenCalledTimes(7); // 3 for sending SMS, 3 for iterations, 1 for executing the loop
    
    consoleSpy.mockRestore();
  });
});
