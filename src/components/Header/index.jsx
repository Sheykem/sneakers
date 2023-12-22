import React from "react";

const Header = ({ openDrawer }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="" />
        <div>
          <h3 className="text-uppercase">React Sheakers</h3>
          <p className="opacity-5">Магазин лучших кросовок</p>
        </div>
      </div>

      <ul className="d-flex ">
        <li onClick={openDrawer} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="" />
          <span>1000 грн</span>
        </li>
        <li>user</li>
      </ul>
    </header>
  );
};

export default Header;
