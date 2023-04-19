import react from 'react';
import { Link } from 'react-router-dom';
import {FaMicrosoft, FaQuestionCircle, FaAngleRight, FaExpandAlt, FaUmbrella, FaSearch, FaTemperatureLow, FaTemperatureHigh} from 'react-icons/fa'
import { WiDaySunny } from 'react-icons/wi'
import { IoMdHome, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SiAdobecreativecloud } from 'react-icons/si';


function App(){ 
  return (
      <div> 
        <div className='cabecalho'>

          <ul className='cabecalho1'>
            <li><FaMicrosoft></FaMicrosoft></li>
            <li><a href="">previsao_tempo</a></li>
            <li><IoIosArrowForward></IoIosArrowForward></li>
            <li><span>web</span></li>
          </ul>         
        
          <ul className='cabecalho2'>
            <li>
              <select name='padrao'>Padrão
              <option value="25%">25%</option>
              <option value="50%">50%</option>
              <option value="75%">75%</option>
              <option value="100%">100%</option>
              <option value="150%">150%</option>
              <option value="200%">200%</option>
              </select>  
            </li>
            <li>
              <a href=""><FaExpandAlt></FaExpandAlt></a>
            </li>
            <li>
              <a href=""><FaQuestionCircle></FaQuestionCircle></a>
            </li>
            <li>
              <a href="">Fazerlogon</a>
            </li>

          </ul>
         
        </div>
        <div className='container'>
          <div className='principal'>

              <ul className='busca1'>
                <li className='climao'>
                  <FaUmbrella></FaUmbrella>
                  <span>CLIMÃO.COM</span>
                </li>                
                <li>
                  <input placeholder='Buscar cidade' className="input"></input>  
                  <FaSearch className='FaSearch'></FaSearch>              
                </li>
                
              </ul>
                    
              <div className='central'>
                    <div className='esquerda'>
                      esquerda
                    </div>
                    <div className='direita'>
                      <div className='dias'>
                        <div className="azul">
                          <ul className='mostraDias'>
                            <li>
                              <span>Sexta</span>
                            </li>                          
                            <li>                          
                              <span>11/10/2019</span>
                            </li>
                            <li>
                              <WiDaySunny size={30}></WiDaySunny>
                              <span>Ensolarado</span>
                            </li>
                            <li>
                              <FaTemperatureLow></FaTemperatureLow>
                               <span>15°</span>
                             </li>
                             <li>
                              <FaTemperatureHigh></FaTemperatureHigh>
                              <span>25°</span>
                             </li>
                          </ul>                          
                        </div>
                        <div className='laranja'>
                        <ul className='mostraDias'>
                            <li>
                              <span>Sexta</span>
                            </li>                          
                            <li>                          
                              <span>11/10/2019</span>
                            </li>
                            <li>
                              <WiDaySunny size={30}></WiDaySunny>
                              <span>Ensolarado</span>
                            </li>
                            <li>
                              <FaTemperatureLow></FaTemperatureLow>
                               <span>15°</span>
                             </li>
                             <li>
                              <FaTemperatureHigh></FaTemperatureHigh>
                              <span>25°</span>
                             </li>
                          </ul>                  
                        </div>
                        <div className='verde'>
                        <ul className='mostraDias'>
                            <li>
                              <span>Sexta</span>
                            </li>                          
                            <li>                          
                              <span>11/10/2019</span>
                            </li>
                            <li>
                              <WiDaySunny size={30}></WiDaySunny>
                              <span>Ensolarado</span>
                            </li>
                            <li>
                              <FaTemperatureLow></FaTemperatureLow>
                               <span>15°</span>
                             </li>
                             <li>
                              <FaTemperatureHigh></FaTemperatureHigh>
                              <span>25°</span>
                             </li>
                          </ul>                  
                        </div>
                        <div className='roxo'>
                        <ul className='mostraDias'>
                            <li>
                              <span>Sexta</span>
                            </li>                          
                            <li>                          
                              <span>11/10/2019</span>
                            </li>
                            <li>
                              <WiDaySunny size={30}></WiDaySunny>
                              <span>Ensolarado</span>
                            </li>
                            <li>
                              <FaTemperatureLow></FaTemperatureLow>
                               <span>15°</span>
                             </li>
                             <li>
                              <FaTemperatureHigh></FaTemperatureHigh>
                              <span>25°</span>
                             </li>
                          </ul>                  
                        </div>
                        <div className='vermelho'>
                        <ul className='mostraDias'>
                            <li>
                              <span>Sexta</span>
                            </li>                          
                            <li>                          
                              <span>11/10/2019</span>
                            </li>
                            <li>
                              <WiDaySunny size={30}></WiDaySunny>
                              <span>Ensolarado</span>
                            </li>
                            <li>
                              <FaTemperatureLow></FaTemperatureLow>
                               <span>15°</span>
                             </li>
                             <li>
                              <FaTemperatureHigh></FaTemperatureHigh>
                              <span>25°</span>
                             </li>
                          </ul>                  
                        </div>
                      </div>
                    </div>
                </div>     
                
          </div>
        </div>

        <div className='rodape'>
          <a href=''>
            <IoMdHome></IoMdHome>
          </a>
          <a href=''>
            <IoIosArrowBack></IoIosArrowBack>
          </a>
            <span>1 de 2</span>
          <a>
            <IoIosArrowForward></IoIosArrowForward>
          </a>
        </div>
    </div>
  );
}

export default App;
