export interface Transaction {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  category: string;
  createAt: string;
  amount: number;
}

export type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;
