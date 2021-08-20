import React, { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        document.title = "Sistema de Assessoria Parlamentar"
    }, [])


    return(
        <div className="template-base">
            <nav id="skip-links">
                <div className="skip-links"><a accessKey="1" href="#main-content">Ir para o Conteúdo<strong
                    className="accesskey">1</strong></a><a accessKey="2" href="#main-navigation">Ir para para
                    Navegação<strong className="accesskey">2</strong></a><a accessKey="3" href="#main-searchbox">Ir para
                    para Busca<strong className="accesskey">3</strong></a>
                </div>
            </nav>


            <footer className="br-footer" id="footer">
                <div className="container-lg">
                    <div className="logo text-center"><img
                        src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-negative.png"
                        alt="Imagem"/></div>
                </div>
                <span className="br-divider my-3"></span>
                <div className="container-lg">
                    <div className="info">
                        <div className="text-down-01 text-medium pb-3">Texto destinado a exibição de informações
                            relacionadas à&nbsp;<strong>licença de uso. = = = = ===========</strong></div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;