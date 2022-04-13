import './index.css';
import Img from './logo-amazon.png';

function Footer() {
  return (
    <div className="App">
      <div className="login">
        <div className="login-button-title d-flex justify-content-center"> Veja as recomendações</div>
        <div className="d-flex justify-content-center">
          <a href='#' className="button">
            <sapn className="line-button">Faça seu login</sapn>
          </a>
        </div>
        <div className="d-flex justify-content-center">
          <div className="top-link">
            Clinte novo? <a className="link">Começe Aqui</a>
          </div>
        </div>
      </div>
      <div className="top">
        <a href='#'>
          <span className="navFooterTop">Voltar ao inicio</span>
        </a>
      </div>

      <footer className="footer py-5" >
        <div className="conteudo-princiapal container">
          <div className="row">
            <div className="col-3">
              <h5 className="titulo">Conheça-nos</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Informações corporativas</a>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Carreiras</a>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Comunicados à imprensa</a>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Comunidade</a>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Acessibilidade</a>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Amazon Science</a>
              </ul>
            </div>
            <div className="col-3">
              <h5 className="titulo">Ganhe dinheiro conosco</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Publique seus livros</a>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Seja um associado</a>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Venda na Amazon</a>
              </ul>
            </div>
            <div className="col-3">
              <h5 className="titulo">Deixe-nos ajudar você</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Amazon e COVID-19</a>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Sua conta</a>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Frete e prazo de entrega</a>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Devoluções e reembolsos</a>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Gerencie seu conteúdo e dispositivos</a>
              </ul>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0 ">Ajuda</a>
              </ul>
            </div>
            <div className="col-3">
              <h5 className="titulo">Pagamento</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"></li>
                <a href="#" className="topics p-0">Cartões de crédito, Cartões de débito, Boleto e Pix</a>
              </ul>
            </div>
          </div>
        </div>
        <div className="conteudo-final">
        </div>
        <div className="line"></div>
        <div className="d-flex justify-content-center">
          <img className="logo" src={Img}></img>
        </div>
      </footer>

    </div>
  );
}

export default Footer;