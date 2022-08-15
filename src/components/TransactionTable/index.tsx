import * as S from './styles';

export const TransactionTable = () => {
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$5.000</td>
            <td>Desenvolvimento</td>
            <td>28/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$1.000</td>
            <td>Casa</td>
            <td>28/02/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
};
