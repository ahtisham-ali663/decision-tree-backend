import express, { Request, Response } from 'express';
import { DecisionTree } from './DecisionTree';  // Import the tree logic

const app = express();
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Decision Tree Backend is running!');
});

// Endpoint to accept decision tree in JSON format
app.post('/execute-tree', (req: Request, res: Response) => {
    const jsonTree = req.body;
    
    try {
      const decisionTree = DecisionTree.deserialize(JSON.stringify(jsonTree));
      decisionTree.execute();
      res.status(200).send('Decision tree executed successfully');
    } catch (err) {
      if (err instanceof Error) {
        res.status(500).send('Error executing decision tree: ' + err.message);
      } else {
        res.status(500).send('Unknown error occurred');
      }
    }
  });

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
