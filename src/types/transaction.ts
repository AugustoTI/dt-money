export interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  createAt: Date;
  amount: number;
}

export type TransactionInput = Omit<Transaction, 'id' | 'createAt'>;
