import './index.css';
import marcos from '../../assets/imagens/time-marcos.jpeg';
import filipe from '../../assets/imagens/time-filipe.jpeg';
import ed from '../../assets/imagens/time-ed.jpeg';
import marcondes from '../../assets/imagens/time-marcondes.jpeg';
import gleydson from '../../assets/imagens/time-gleydson.jpeg';

import melhore from '../../assets/imagens/melhore.png';
import praticidade from '../../assets/imagens/praticidade.png';
import lotacao from '../../assets/imagens/lotação.png';
import agilidade from '../../assets/imagens/agilidade.jpg';

export const Home = () => {
    return (
                <section>
                    <main>
                        <section className="content">
                            <div className="home1 ">
                                <div className="melhore-text ">
                                    <h1>Melhore a vida dos seus pacientes</h1>
                                    
                                    <a href="#consultores" >Fale com nossos consultores</a>
                                </div>
                                <div>
                                    <img src={melhore} 
                                    width="300px" 
                                    alt="melhore" />
                                </div>
                            </div>
                        </section>
                    
                        <section className="content">
                            <div className="home2">
                                <h1>Conheça a Minha Vez</h1>

                                <p>A <b>Minha Vez</b> é uma plataforma robusta e flexível de gerenciamento de filas para clinicas e laboratórios.</p>

                            </div>
                        </section>

                        <section className="content" id="produto">
                            <div className="produto">
                                <img src={praticidade} alt="praticidade" />

                                <h1>Praticidade no gerenciamento de filas</h1>
                            </div>
                        </section>

                        <section className="content">
                            <div className="produto">

                                <h1>Menos lotação</h1>

                                <img src={lotacao} alt="lotação" />

                            </div>
                        </section>

                        <section className="content" id="produto">
                            <div className="produto">
                                <img src={agilidade} alt="agilidade" />

                                <h1>Agilidade no atendimento</h1>
                            </div>
                        </section>

                        <section>
                        <div className="consultores-text">
                                <h1 id='consultores'>NOSSO TIME DE CONSULTORES</h1>
                                <h2 >Entre em contato conosco para mais informações:</h2>
                            </div>

                            <div className="gallery-container">
                                
                                <a href="../../assets/imagens/time-ed.jpeg" className="gallery-items">
                                    <img src={ed} alt="Edson" />
                                    <figcaption>Edson Ferreira</figcaption>
                                </a>

                                <a href="https://www.linkedin.com/in/filipe-castro-797404211/" className="gallery-items">
                                    <img src={filipe} alt="Filipe" />
                                    <figcaption>Filipe Castro</figcaption>
                                </a>

                                <a href="https://www.linkedin.com/in/gleydson-silva-36a689211/" className="gallery-items">
                                    <img src={gleydson} alt="Gleydson"/>
                                    <figcaption>Gleydson Silva</figcaption>
                                </a>

                                <a href="https://www.linkedin.com/in/marcondesjr96/" className="gallery-items">
                                    <img src={marcondes} alt="Marcondes"/>
                                    <figcaption>Marcondes Júnior</figcaption>
                                </a>

                                <a href="https://www.linkedin.com/in/marcosvvm/" className="gallery-items">
                                    <img src={marcos} alt="Marcos"/>
                                    <figcaption>Marcos Veloso</figcaption>
                                </a>  
                            </div>
                        </section>
                    </main>

                    <footer>
                        <p>&copy; 2023 Minha Vez. Todos os direitos reservados.
                            <br /><img src="assets/imagens/e-mail_icon.png" width="20px" alt="e-mail_icon" /> <b />contatominhavez@proton.me
                        </p>
                    </footer>
                </section>
    );
}