import React from 'react';
import { Header } from './viewes/template/Header';
import { Main } from './viewes/template/Main';
import { Footer } from './viewes/template/Footer';

const App = (): React.ReactElement => {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
};

export default App;
