import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Criação de Landing Page',
          type: 'deposit',
          category: 'Desenvolvimento',
          createAt: new Date('2022-01-15 09:30:28'),
          amount: 5000,
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          createAt: new Date('2022-01-28 12:48:20'),
          amount: 1000,
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', (schema) => {
      return schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
