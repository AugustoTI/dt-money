import { Card } from '../Card';
import * as S from './styles';
import entradasSVG from '../../assets/entradas.svg';
import saidasSVG from '../../assets/saidas.svg';
import totalSVG from '../../assets/total.svg';

export const Summary = () => {
  return (
    <S.Container>
      <Card title="Entradas" price="R$1000,00" icon={entradasSVG} />
      <Card title="Saídas" price="R$500,00" icon={saidasSVG} />
      <Card
        title="Total"
        highlightBackground
        price="R$500,00"
        icon={totalSVG}
      />
    </S.Container>
  );
};
