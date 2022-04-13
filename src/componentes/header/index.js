import React from "react";
import "./style.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import imagem from './logoW.png';
function Header() {
  return (
    <div className="header">

      <img
        className="header__logo"
        src={imagem}/>

      <div className="navbar__locator">
        <div className="navbar__locatorImage"></div>
        <div className="navbar__location"> Brasil  </div>
      </div>


      <div className="header__search">
        <div>
          <select className="nav__dropdown">
            <option value="All">Todos</option>
            <option value="Alexa">Alexa</option>
            <option value="Books">Livros</option>
            <option value="Baby">Bebê</option>
            <option value="Beauty">Beleza</option>
            <option value="Clothes">Roupas</option>
          </select>
        </div>
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>


      <div className="header__nav">

        <div className="header__option">
          <span className="header__optionLineOne">Olá Mata Dev's</span>
          <span className="header__optionLineTwo">Faça seu login</span>
        </div>



        <div className="header__option">
          <span className="header__optionLineOne">Devoluções</span>
          <span className="header__optionLineTwo">& Pedidos</span>
        </div>


        <div className="header__optionBasket">
          <div className="navbar_text navbar__cart">
            <div src="" className="cart__image" ></div>
            <div className="cart__item"> </div>
            <div className="navbar_text_cart">Carrinho</div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;