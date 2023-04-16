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
          <option>100%</option>
          <a href="">
            <FaExpandAlt></FaExpandAlt>
            <FaQuestionCircle></FaQuestionCircle>
            Fazerlogon</a>
        </div>

        <div className='principal'>
            <div className='busca'>
               <FaCloudShowersHeavy></FaCloudShowersHeavy>
               <span>CLIMÃO.COM</span>
               <input placeholder='Buscar cidade'></input>
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
