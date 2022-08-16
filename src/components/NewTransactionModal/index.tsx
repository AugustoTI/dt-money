import * as S from './styles';
import closeIMG from '../../assets/fechar.svg';
import entradasIMG from '../../assets/entradas.svg';
import saidasIMG from '../../assets/saidas.svg';
import Modal from 'react-modal';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) => {
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
          <button>
            <img src={entradasIMG} alt="Entradas" />
            <span>Entradas</span>
          </button>
          <button>
            <img src={saidasIMG} alt="Saídas" />
            <span>Saídas</span>
          </button>
        </S.TransactionTypeContainer>
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
};
