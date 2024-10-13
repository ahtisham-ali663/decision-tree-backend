export interface Action {
    execute(): void;
    serialize(): object;
  }
  