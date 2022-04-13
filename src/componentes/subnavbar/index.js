import React from "react";
import './style.css'


function SubNav() {
    return (
        <div className="navbar__footer">

            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <a className="nav-item nav-link" >Todos</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link">Ofertas do Dia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Atendimento ao Cliente</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Minhas listas </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Vales-presente</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link">Vender</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );

}

export default SubNav;