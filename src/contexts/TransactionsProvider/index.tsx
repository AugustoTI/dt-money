import { ReactNode, useEffect, useState } from 'react';
import { api } from 'src/services/api';
import { Transaction, TransactionInput } from 'src/types/transaction';
import { TransactionContext } from './context';

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  const createTransaction = (transaction: TransactionInput) => {
    api.post('/transactions', transaction);
  };

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
