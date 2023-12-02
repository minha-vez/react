import './index.css';

export const Home = () => {
    return (
                <section>
                    <main>
                        <section className="content">
                            <div className="home1 ">
                                <div className="melhore-text ">
                                    <h1>Melhore a vida dos seus pacientes</h1>
                                    
                                    <a href="pages/consultores/consultores.html">Fale com nossos consultores</a>
                                </div>
                                <div>
                                    <img src="assets/imagens/melhore.png" 
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
                                <img src="assets/imagens/praticidade.png" alt="praticidade" />

                                <h1>Praticidade no gerenciamento de filas</h1>
                            </div>
                        </section>

                        <section className="content">
                            <div className="produto">

                                <h1>Menos lotação</h1>

                                <img src="assets/imagens/lotação.png" alt="lotação" />

                            </div>
                        </section>

                        <section className="content" id="produto">
                            <div className="produto">
                                <img src="assets/imagens/agilidade-2.png" alt="agilidade" />

                                <h1>Agilidade no atendimento</h1>
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