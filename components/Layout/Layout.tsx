import 'normalize.css';
import GlobalStyles from '../../styles/global';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <div
        className="height100vh"
        style={{
          position: 'relative',
          margin: '0 auto',
        }}
      >
        <main
          className="height100vh"
          style={{
            width: `100%`,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export { Layout };
