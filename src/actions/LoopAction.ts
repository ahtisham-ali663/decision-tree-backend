import { Action } from './Action';

export class LoopAction implements Action {
  subtree: Action;
  iterations: number;

  constructor(subtree: Action, iterations: number) {
    this.subtree = subtree;
    this.iterations = iterations;
  }

  execute() {
    console.log(`Executing loop with ${this.iterations} iterations`);
    
    for (let i = 0; i < this.iterations; i++) {
      console.log(`Iteration ${i + 1}`);
      this.subtree.execute();
    }
  }

  // Implement the serialize method
  serialize(): object {
    return {
      type: 'LoopAction',
      iterations: this.iterations,
      subtree: this.subtree.serialize()
    };
  }
}
