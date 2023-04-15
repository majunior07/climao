<<<<<<< HEAD
import react from 'react';

import {FaMicrosoft, FaQuestionCircle, FaAngleRight, FaExpandAlt, FaCloudShowersHeavy} from 'react-icons/fa'
import { IoMdHome, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SiAdobecreativecloud } from 'react-icons/si';
=======
import {FaMicrosoft, FaQuestionCircle, FaExpandAlt, FaChevronRight, FaCloudShowersHeavy} from 'react-icons/fa'
>>>>>>> 0fc91907db76f0a84b2c591857f9c9fef681faf5

function App(){ 
  return (
    <div>
      <div className="cabecalho">
 
      
      <FaMicrosoft>
      </FaMicrosoft>
<<<<<<< HEAD

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
=======
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
>>>>>>> 0fc91907db76f0a84b2c591857f9c9fef681faf5

      </div>
      
      <div className="principla">
<<<<<<< HEAD
        <div className='central'>
          <div className='busca'>
            <FaCloudShowersHeavy>
            </FaCloudShowersHeavy>
            <span>CLIMÃO.COM</span>
          </div>
        </div>
=======
        <div className='caixa'>
          <div className="busca">
            <FaCloudShowersHeavy>
            </FaCloudShowersHeavy>
            <h1>CLIMÃO.COM</h1>
          </div>
        </div>
        
>>>>>>> 0fc91907db76f0a84b2c591857f9c9fef681faf5
      </div>

      <div className="rodape">

        <span className='adobe'>Criado com o Adobe XD</span>
        <a>
          <SiAdobecreativecloud>
          </SiAdobecreativecloud>
        
          <IoMdHome>
          </IoMdHome>
          <IoIosArrowBack>
          </IoIosArrowBack>
        </a>
        <span>1 de 2</span>
        <a>
          <IoIosArrowForward>
          </IoIosArrowForward>
        </a>
      </div>
    </div>
  );
}

export default App;
