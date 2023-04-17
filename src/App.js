import react from 'react';
import { Link } from 'react-router-dom';
import {FaMicrosoft, FaQuestionCircle, FaAngleRight, FaExpandAlt, FaCloudShowersHeavy} from 'react-icons/fa'
import { IoMdHome, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SiAdobecreativecloud } from 'react-icons/si';


function App(){ 
  return (
      <div>
        <div className='cabecalho1'>
          <FaMicrosoft></FaMicrosoft>
          <a href="">previsao_tempo</a>
          <IoIosArrowForward></IoIosArrowForward>
          <span>web</span>
        </div>
        <div className="cabecalho2"> 
          <select name='padrao'>Padrão
            <option value="25%">25%</option>
            <option value="50%">50%</option>
            <option value="75%">75%</option>
            <option value="100%">100%</option>
            <option value="150%">150%</option>
            <option value="200%">200%</option>
          </select>       
          <a href="">
            <FaExpandAlt></FaExpandAlt>
            <FaQuestionCircle></FaQuestionCircle>
            Fazerlogon</a>
        </div>

        <div className='principal'>
            <div className='busca1'>
               <FaCloudShowersHeavy></FaCloudShowersHeavy>
               <span>CLIMÃO.COM</span>
           </div>
            <div className='busca2'>
               <input placeholder='Buscar cidade' className="input"></input>
            </div>
            <div className='central'>
              central
            </div>     
            <div className='rodape'>
              <span>Criado com o Adobe XD</span>
            </div> 
        </div>
      </div>
  );
}

export default App;
