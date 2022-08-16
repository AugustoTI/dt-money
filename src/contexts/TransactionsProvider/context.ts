import { createContext } from 'react';
import { Transaction, TransactionInput } from 'src/types/transaction';

interface TransactionContentProps {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionContext = createContext<TransactionContentProps>(
  {} as TransactionContentProps,
);
