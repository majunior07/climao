
import react from 'react';

import {FaMicrosoft, FaQuestionCircle, FaAngleRight, FaExpandAlt, FaCloudShowersHeavy} from 'react-icons/fa'
import { IoMdHome, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SiAdobecreativecloud } from 'react-icons/si';


function App(){ 
  return (
    <div>
      <div className="cabecalho"> 
      
          <FaMicrosoft>
          </FaMicrosoft>

            <a href="">           
                previsão_tempo 
            </a>

            <FaAngleRight>
            </FaAngleRight>

            <span>web</span> 

          <a href="">

            <FaExpandAlt>
            </FaExpandAlt>

            <FaQuestionCircle>
            </FaQuestionCircle>

          
            Fazer logon
          </a>

      </div>
      
      <div className="principla">
        
        <div className='central'>

          <div className='busca'>
            <FaCloudShowersHeavy>
            </FaCloudShowersHeavy>
            <span>CLIMÃO.COM</span>
          </div>

        </div>
        
      </div>

      <div className="rodape">

        <span className='adobe'>Criado com o Adobe XD</span>
        <a href="">
          <SiAdobecreativecloud>
          </SiAdobecreativecloud>
        
          <IoMdHome>
          </IoMdHome>
          <IoIosArrowBack>
          </IoIosArrowBack>
        </a>
        <span>1 de 2</span>
        <a href="">
          <IoIosArrowForward>
          </IoIosArrowForward>
        </a>
      </div>

    </div>
  );
}

export default App;
