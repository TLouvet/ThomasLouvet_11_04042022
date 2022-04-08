import { Header } from './ui/layout/Header';
import { Footer } from './ui/layout/Footer';
import { Container } from './ui/layout/container';
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <>
      <div style={{ minHeight: '100vh' }}>
        <Header />
        <Container>
          <AppRoutes />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default App;
