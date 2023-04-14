import {FaMicrosoft, FaQuestionCircle, FaExpandAlt, FaChevronRight, FaCloudShowersHeavy} from 'react-icons/fa'

function App(){ 
  return (
    <div>
      <div className="cabecalho">

      <FaMicrosoft>

      </FaMicrosoft>
        <a className='previsao'>           
            previsão_tempo 
            <FaChevronRight>
            </FaChevronRight>
           <span>web</span>
        </a>

        <FaExpandAlt>
        </FaExpandAlt>

        <FaQuestionCircle>
        </FaQuestionCircle>

        <a>
          Fazer logon
        </a>

      </div>

      <div className="principla">
        <div className='caixa'>
          <div className="busca">
            <FaCloudShowersHeavy>
            </FaCloudShowersHeavy>
            <h1>CLIMÃO.COM</h1>
          </div>
        </div>
        
      </div>

      <div className="rodape">
        <h1>Rodapé</h1>
      </div>
    </div>
  );
}

export default App;
