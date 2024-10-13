# Decision Tree Backend

## Overview

This project implements a decision tree framework in TypeScript. The framework allows the creation of various actions (like sending SMS and emails, making decisions based on conditions, and executing loops) that can be combined into a decision tree structure. The primary features include:

- **Actions**: Different types of actions that can be executed within the decision tree.
- **Serialization**: Ability to serialize the decision tree structure into JSON for storage or transmission.
- **Deserialization**: Convert JSON back into a decision tree structure.
- **Execution**: Execute the actions defined in the decision tree.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (version 14 or later)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)

### Installation

1. Download the zipped repository you received.
2. Unzip the folder to your desired location.
3. Open a terminal and navigate to the unzipped folder:
4. npm install
5. npm run dev (Start the application in development mode:)

6. You can call the API with the following payload:

- {
  "type": "ConditionAction",
  "condition": "1 === 1",
  "trueAction": {
  "type": "SendSMSAction",
  "phoneNumber": "1234567890"
  },
  "falseAction": {
  "type": "SendEmailAction",
  "sender": "example@test.com",
  "receiver": "receiver@test.com"
  }
  }

7. Send this payload to the following endpoint:

## http://localhost:3000/execute-tree

- then you can see response in terminal

8. Run the tests with the following command:

## run test
