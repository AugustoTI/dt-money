import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';
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

export const App = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </>
  );
};
