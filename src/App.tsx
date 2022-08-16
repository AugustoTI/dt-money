import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './contexts/TransactionsProvider';

export const App = () => {
  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setNewTransactionModalOpen(false);
  };

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={newTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyles />
    </TransactionsProvider>
  );
};
