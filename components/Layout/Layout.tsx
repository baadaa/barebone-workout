import 'normalize.css';
import GlobalStyles from '../../styles/global';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <div
        style={{
          position: 'relative',
          // display: 'flex',
          margin: '0 auto',
          minHeight: '100vh',
          alignItems: 'center',
        }}
      >
        <main
          style={{
            width: `100%`,
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid red',
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export { Layout };
