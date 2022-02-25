import 'normalize.css';
import GlobalStyles from '../../styles/global';
import { StatusBar } from './StatusBar';
const Layout: React.FC = ({ children }) => {
  // console.log(user);
  return (
    <>
      <GlobalStyles />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          margin: '0 auto',
          height: '100vh',
        }}
      >
        <main>{children}</main>
        <StatusBar />
      </div>
    </>
  );
};

export { Layout };
