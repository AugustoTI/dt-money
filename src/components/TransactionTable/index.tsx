import { useContext } from 'react';
import { TransactionContext } from 'src/contexts/TransactionsProvider/context';
import { formantDate } from 'src/utils/formatDate';
import { formantPrice } from 'src/utils/formatPrice';
import * as S from './styles';

export const TransactionTable = () => {
  const { transactions } = useContext(TransactionContext);

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
                <td className={type}>{formantPrice(amount)}</td>
                <td>{category}</td>
                <td>{formantDate(createAt)}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </S.Container>
  );
};
