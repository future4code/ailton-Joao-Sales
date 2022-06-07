import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import foto from './components/img/GABRIEL2.jpg'
import logoMail from './components/img/mail-142.svg'
import locateLogo from './components/img/logol-location.svg'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto} 
          nome={'Gabriel'} 
          descricao={'Meu nome é gabriel e eu sou um estudante labenu'}
        />
        
        <ImagemButton 
          imagem={"https://w7.pngwing.com/pngs/336/910/png-transparent-arrow-computer-icons-down-arrow-angle-heart-triangle.png"} 
          texto="Ver mais"
        />
      </div>
      <div className='page-section-container'>
      <CardPequeno
        imagem={logoMail}
        nome={'email:'}
        descricao={'irineu@gmail.com'}
      />
  
      <CardPequeno
        imagem={locateLogo}
        nome={'endereço:'}
        descricao={'rua irineu você não sabe nem eu'}
      />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem={'https://i.pinimg.com/564x/05/6a/0d/056a0da4e8ae316b2ae3e0ac7e787d4f--coat-of-arms-coats.jpg'}
          nome="Erem Rubem Moreira" 
          descricao="ensino medio." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
