import { Summary } from '../Summary';
import { TransactionTable } from '../TransactionTable';
import * as S from './styles';

export const Dashboard = () => {
  return (
    <S.Container>
      <Summary />
      <TransactionTable />
    </S.Container>
  );
};
