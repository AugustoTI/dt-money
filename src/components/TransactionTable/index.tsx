import { useContext } from 'react';
import { TransactionContext } from 'src/contexts/TransactionsProvider/context';
import * as S from './styles';

export const TransactionTable = () => {
  const transactions = useContext(TransactionContext);

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
