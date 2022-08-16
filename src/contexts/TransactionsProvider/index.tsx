import { ReactNode, useEffect, useState } from 'react';
import { api } from 'src/services/api';
import { Transactions } from 'src/types/transaction';
import { TransactionContext } from './context';

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  return (
    <TransactionContext.Provider value={transactions}>
      {children}
    </TransactionContext.Provider>
  );
};
