import React, {useState} from 'react';


import MenuLateralHeader from '../MenuLateralHeader';

const Header = () => {

    // Hook de abertura do menu lateral
    const [menuPrincialOpen,setmenuPrincialOpen] = useState(false);
    function abrirMenu()
    {
        setmenuPrincialOpen(!menuPrincialOpen);
    }

    return(
        <header className="br-header" id="header" data-sticky="data-sticky">
            <div className="container-lg">
                <div className="header-top">
                    <a className="header-logo" href="https://www.gov.br/pt-br">
                        <img
                            src="/logo_gov.png"
                            alt="logo"

                        />

                        {/*<span className="br-divider vertical mx-half mx-sm-1"></span>*/}
                        {/*<div className="header-sign">Assinatura</div>*/}
                    </a>
                    <div className="header-actions">
                        <div className="header-links dropdown">
                            <button className="br-button circle small" type="button" data-toggle="dropdown"
                                    aria-label="Abrir Acesso Rápido"><i className="fas fa-ellipsis-v"
                                                                        aria-hidden="true"></i>
                            </button>
                            <div className="br-list">
                                <div className="header">
                                    <div className="title">Acesso Rápido</div>
                                </div>
                                <a className="br-item" href="https://www.gov.br/pt-br/orgaos-do-governo" target="_blank" rel="noopener noreferrer">Órgãos do Governo</a><a
                                className="br-item" href="http://www.acessoainformacao.gov.br/" target="_blank" rel="noopener noreferrer">Acesso à Informação</a><a
                                className="br-item" href="http://www4.planalto.gov.br/legislacao" target="_blank" rel="noopener noreferrer">Legislação</a><a
                                className="br-item" href="https://www.gov.br/governodigital/pt-br/acessibilidade-digital" target="_blank" rel="noopener noreferrer">Acessibilidade</a>
                            </div>
                        </div>
                        <span className="br-divider vertical mx-half mx-sm-1"></span>
                        <div className="header-functions dropdown">
                            <button className="br-button circle small" type="button" data-toggle="dropdown"
                                    aria-label="Abrir Funcionalidades do Sistema"><i className="fas fa-th"
                                                                                     aria-hidden="true"></i>
                            </button>
                            <div className="br-list">
                                <div className="header">
                                    <div className="title">Funcionalidades do Sistema</div>
                                </div>
                                {/*<div className="align-items-center br-item">*/}
                                {/*    <button className="br-button circle small" type="button"*/}
                                {/*            aria-label="Funcionalidade 1"><i className="fas fa-chart-bar"*/}
                                {/*                                             aria-hidden="true"></i><span*/}
                                {/*        className="text">Funcionalidade 1</span>*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                                {/*<div className="align-items-center br-item">*/}
                                {/*    <button className="br-button circle small" type="button"*/}
                                {/*            aria-label="Funcionalidade 2"><i className="fas fa-headset"*/}
                                {/*                                             aria-hidden="true"></i><span*/}
                                {/*        className="text">Funcionalidade 2</span>*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                                {/*<div className="align-items-center br-item">*/}
                                {/*    <button className="br-button circle small" type="button"*/}
                                {/*            aria-label="Funcionalidade 3"><i className="fas fa-comment"*/}
                                {/*                                             aria-hidden="true"></i><span*/}
                                {/*        className="text">Funcionalidade 3</span>*/}
                                {/*    </button>*/}
                                {/*</div>*/}
                                <div className="align-items-center br-item">
                                    <button className="br-button circle small" type="button"
                                            aria-label="Funcionalidade 4"><i className="fas fa-adjust"
                                                                             aria-hidden="true"></i><span
                                        className="text">Funcionalidade 4</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="header-search-trigger">
                            <button className="br-button circle" type="button" aria-label="Abrir Busca"
                                    data-toggle="search" data-target=".header-search"><i className="fas fa-search"
                                                                                         aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className="header-login">
                            <div className="header-sign-in">
                                <button className="br-button sign-in small" type="button" data-trigger="login"><i
                                    className="fas fa-user" aria-hidden="true"></i><span
                                    className="d-sm-inline">Entrar</span>
                                </button>
                            </div>
                            <div className="header-avatar d-none">
                                <div className="avatar dropdown"><span className="br-avatar"
                                                                       title="Fulana da Silva"><span
                                    className="image"><img src="https://picsum.photos/id/823/400"
                                                           alt="Avatar"/></span></span>
                                    <button className="br-button circle small" type="button"
                                            aria-label="Abrir Menu de usuário" data-toggle="dropdown"><i
                                        className="fas fa-angle-down" aria-hidden="true"></i>
                                    </button>
                                    <div className="br-notification show">
                                        <div className="notification-header">
                                            <div className="row">
                                                <div className="col-10"><span
                                                    className="text-bold">Fulano da Silva</span><br/><small><a>nome.sobrenome@dominio.gov</a></small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="notification-body">
                                            <div className="br-tab">
                                                <nav className="tab-nav">
                                                    <ul>
                                                        <li className="tab-item">
                                                            <button type="button" data-panel="notif-item805"
                                                                    aria-label="notif-item805"><span
                                                                className="name"><span className="icon"><i
                                                                className="fas fa-image"
                                                                aria-hidden="true"></i></span><span
                                                                className="name">Item</span></span></button>
                                                        </li>
                                                        <li className="tab-item is-active">
                                                            <button type="button" data-panel="notif-item806"
                                                                    aria-label="notif-item806"><span
                                                                className="name"><span className="icon"><i
                                                                className="fas fa-image"
                                                                aria-hidden="true"></i></span><span
                                                                className="name">Item</span></span></button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                                <div className="tab-content">
                                                    <div className="tab-panel" id="notif-item805">
                                                        <div className="br-list">
                                                            <button className="br-item" type="button"><i
                                                                className="fas fa-heartbeat" aria-hidden="true"></i>Link
                                                                de Acesso
                                                            </button>
                                                            <span className="br-divider"></span>
                                                            <button className="br-item" type="button"><i
                                                                className="fas fa-heartbeat" aria-hidden="true"></i>Link
                                                                de Acesso
                                                            </button>
                                                            <span className="br-divider"></span>
                                                            <button className="br-item" type="button"><i
                                                                className="fas fa-heartbeat" aria-hidden="true"></i>Link
                                                                de Acesso
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="tab-panel is-active" id="notif-item806">
                                                        <div className="br-list">
                                                            <button className="br-item" type="button"><span
                                                                className="br-tag status small warning"></span><span
                                                                className="text-bold">Título</span><span
                                                                className="text-medium mb-2">25 de out</span><span>Nostrud consequat culpa ex mollit aute. Ex ex veniam ea labore laboris duis duis elit. Ex aute dolor enim aute Lorem dolor. Duis labore ad anim culpa. Non aliqua excepteur sunt eiusmod ex consectetur ex esse laborum velit ut aute.</span>
                                                            </button>
                                                            <span className="br-divider"></span>
                                                            <button className="br-item" type="button"><span
                                                                className="text-bold">Título</span><span
                                                                className="text-medium mb-2">24 de out</span><span>Labore nulla elit laborum nulla duis. Deserunt ad nulla commodo occaecat nulla proident ea proident aliquip dolore sunt nulla. Do sit eu consectetur quis culpa. Eiusmod minim irure sint nulla incididunt occaecat ipsum mollit in ut. Minim adipisicing veniam adipisicing velit nostrud duis consectetur aute nulla deserunt culpa aliquip.</span>
                                                            </button>
                                                            <span className="br-divider"></span>
                                                            <button className="br-item" type="button"><span
                                                                className="br-tag status small warning"></span><span
                                                                className="text-bold">Título</span><span
                                                                className="text-medium mb-2">03 de out</span><span>Duis qui dolor dolor qui sint consectetur. Ipsum eu dolore ex anim reprehenderit laborum commodo. Labore do ut nulla eiusmod consectetur.</span>
                                                            </button>
                                                            <span className="br-divider"></span>
                                                            <button className="br-item" type="button"><span
                                                                className="text-bold">Título</span><span
                                                                className="text-medium mb-2">16 de mai</span><span>Sunt velit dolor enim mollit incididunt irure est. Ad ea Lorem culpa quis occaecat sunt in exercitation nisi. Sit laborum laborum dolor culpa ipsum velit. Non nulla nisi dolore et anim consequat officia deserunt amet qui. Incididunt exercitation irure labore ut Lorem culpa. Dolore ea irure pariatur ullamco culpa veniam amet dolor in fugiat pariatur ut. Sit non ut enim et incididunt tempor irure pariatur ex proident labore cillum dolore nisi.</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="header-menu">
                        <div className="header-menu-trigger">
                            <div className="br-menu" id="main-navigation">
                                <div className="menu-trigger">
                                    <button className="br-button circle small" type="button"
                                            onClick={abrirMenu}
                                    >

                                        <i  className={menuPrincialOpen ? 'fas fa-times' : 'fas fa-bars'}
                                            aria-hidden="true"></i>

                                    </button>
                                </div>
                            <MenuLateralHeader open={menuPrincialOpen}/>
                            </div>
                        </div>
                        <div className="header-info">
                            <div className="header-title">Assessoria Parlamentar-asparlegis</div>
                            {/*<div className="header-subtitle">Subtítulo do Header</div>*/}
                        </div>
                    </div>
                    <div className="header-search">
                        <div className="br-input has-icon">
                            <label htmlFor="main-searchbox">Texto da pesquisa</label>
                            <input className="has-icon" id="main-searchbox" type="search"
                                   placeholder="O que você procura?"/>
                            <button className="br-button circle small" type="button" aria-label="Pesquisar"><i
                                className="fas fa-search" aria-hidden="true"></i>
                            </button>
                        </div>
                        <button className="br-button circle search-close" type="button" aria-label="Fechar Busca"
                                data-dismiss="search"><i className="fas fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;