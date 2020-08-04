import React from 'react';
import GlobalStyle from './styles/global';
import { Container, ChocolateList } from './styles/style';
import chocolateImg from './assets/images/chocolate.svg';


function App() {
  return (
    <div className="App">
    <>
      <GlobalStyle />
      <Container>
        <img src={chocolateImg} alt="Logo barra de chocolate" />
        <h1>Chocolates</h1>
       <ChocolateList>
        <li>
          <div>
             <img src={chocolateImg} alt="Logo barra de chocolate" />
            <div>
             <h2>Chocolate</h2>
              <p>info 1</p>
              <p>info 2</p>
           </div>
          </div>
        </li>
      </ChocolateList>
      </Container>
      </>

    </div>
  );
};

export default App;
