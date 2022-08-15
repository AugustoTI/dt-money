import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 1000,
          type: 'deposit',
          category: 'Freelancer',
          createAt: new Date(),
        },
        {
          id: 2,
          title: 'Transaction 2',
          amount: 500,
          type: 'withdraw',
          category: 'House',
          createAt: new Date(),
        },
        {
          id: 3,
          title: 'Transaction 3',
          amount: 60,
          type: 'deposit',
          category: 'Food',
          createAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
