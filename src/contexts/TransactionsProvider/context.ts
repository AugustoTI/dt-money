import { createContext } from 'react';
import { Transactions } from 'src/types/transaction';

export const TransactionContext = createContext<Transactions[]>([]);
