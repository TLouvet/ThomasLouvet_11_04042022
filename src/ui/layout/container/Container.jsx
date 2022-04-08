import './Container.scss';

export const Container = ({ children }) => (
  <main role="main" className="mainContainer">
    {children}
  </main>
);