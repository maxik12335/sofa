// import { useEffect, useState } from "react";
import classes from "./Navbar.module.css"
import { useState } from "react";
import logoImg from '../../assets/logo.png'
import { NavLink } from "react-router-dom";


// const Navbar = ({navColor, textColor}) => {
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${classes.navbar}`}>
      <div className="container-navbar">

        {/* ======= меню desctop ======= */}
        <div className={classes.desctopMenu}>
          {/* <img className={classes.logo} src={logo} alt="logo" /> */}
          <img className={classes.logo} src={logoImg} alt="main image" />

          <div className={classes.menu}>
            <NavLink className="text-base hover"  to="/about">обо мне</NavLink>
            <NavLink className="text-base hover"  to="/price">прайс</NavLink>
            <NavLink className="text-base hover"  to="/feedbacks">отзывы</NavLink>
          </div>
        </div>

        {/* ======= burger ======= */}
        <div className={classes.burgerBox}>
          <img className={classes.logo} src={logoImg} alt="main image" />
          <div className={classes.burger} onClick={() => setIsOpen(true)}>
            <span ></span>
            <span ></span>
            <span ></span>
          </div>
        </div>

        {/* ======= меню mobyle ======= */}
        <div className={`${classes.mobyleMenu} ${isOpen ? classes.isOpen : ''}`}>
          <div className={classes.top}>
            <p className="h3">Venefica</p>

            <div className={classes.close} onClick={() => setIsOpen(false)}>
              <span ></span>
              <span ></span>
            </div>
          </div>

          <div className={classes.menu}>
            <NavLink
              className={`${classes.link} text-base`}
              to="/uslugy"
              onClick={() => setIsOpen(false)}>обо мне</NavLink>
            <NavLink
              className={`${classes.link} text-base`}              
              to="/price"
              onClick={() => setIsOpen(false)}>прайс</NavLink>
            <NavLink
              className={`${classes.link} text-base`}              
              to="/feedbacks"
              onClick={() => setIsOpen(false)}>отзывы</NavLink>
          </div>

          <img className={classes.logo} src={logoImg} alt="main image" />
        </div>

      </div>
    </div>
  )
}

export default Navbar;