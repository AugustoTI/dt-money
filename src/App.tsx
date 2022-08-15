import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';

export const App = () => {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyles />
    </>
  );
};
