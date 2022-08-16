import * as S from './styles';
import closeIMG from '../../assets/fechar.svg';
import entradasIMG from '../../assets/entradas.svg';
import saidasIMG from '../../assets/saidas.svg';
import Modal from 'react-modal';
import { FormEventHandler, useState } from 'react';

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
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction: FormEventHandler<HTMLFormElement> = (
    event,
  ) => {
    event.preventDefault();
    console.log({
      title,
      value,
      category,
      type,
    });
  };

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
      <S.FormContainer onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar</h2>
        <input
          type="text"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          placeholder="Titulo"
        />
        <input
          type="number"
          value={value}
          onChange={({ target }) => setValue(Number(target.value))}
          placeholder="Valor"
        />
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
        <input
          type="text"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </S.FormContainer>
    </Modal>
  );
};
