import * as S from './styles';
import closeIMG from '../../assets/fechar.svg';
import entradasIMG from '../../assets/entradas.svg';
import saidasIMG from '../../assets/saidas.svg';
import Modal from 'react-modal';
import { useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit');

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={onRequestClose} className="react-modal-close">
        <img src={closeIMG} title="Fechar modal" alt="Fechar modal" />
      </button>
      <S.Container>
        <h2>Cadastrar</h2>
        <input type="text" placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <S.TransactionTypeContainer>
          <S.RadioBox
            isActive={type === 'deposit'}
            type="button"
            onClick={() => setType('deposit')}
            activeColor="green"
          >
            <img src={entradasIMG} alt="Entradas" />
            <span>Entradas</span>
          </S.RadioBox>
          <S.RadioBox
            isActive={type === 'withdraw'}
            type="button"
            onClick={() => setType('withdraw')}
            activeColor="red"
          >
            <img src={saidasIMG} alt="Saídas" />
            <span>Saídas</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
};
