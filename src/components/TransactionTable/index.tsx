import { useEffect, useState } from 'react';
import { api } from 'src/services/api';
import * as S from './styles';

interface Transactions {
  id: number;
  title: string;
  type: string;
  category: string;
  createAt: Date;
  amount: number;
}

export const TransactionTable = () => {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then(({ data }) => setTransactions(data.transactions));
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(
            ({ amount, category, createAt, id, title, type }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>
                  {amount.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </td>
                <td>{category}</td>
                <td>
                  {new Date(createAt).toLocaleString('pt-BR', {
                    dateStyle: 'short',
                    timeZone: 'UTC',
                  })}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </S.Container>
  );
};
