import { Card } from '../Card';
import * as S from './styles';
import entradasSVG from '../../assets/entradas.svg';
import saidasSVG from '../../assets/saidas.svg';
import totalSVG from '../../assets/total.svg';
import { useContext } from 'react';
import { TransactionContext } from 'src/contexts/TransactionsProvider/context';
import { formantPrice } from 'src/utils/formatPrice';
import { calculateSummary } from 'src/utils/calculatesSummary';

export const Summary = () => {
  const { transactions } = useContext(TransactionContext);

  const summary = calculateSummary(transactions);

  return (
    <S.Container>
      <Card
        title="Entradas"
        price={formantPrice(summary.deposits)}
        icon={entradasSVG}
      />
      <Card
        title="Saídas"
        price={'-' + formantPrice(summary.withdraw)}
        icon={saidasSVG}
      />
      <Card
        title="Total"
        highlightBackground
        price={formantPrice(summary.total)}
        icon={totalSVG}
      />
    </S.Container>
  );
};
