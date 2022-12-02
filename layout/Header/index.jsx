import { useContext, useState } from "react";
import Image from "next/image";
import { Header, Features, Account } from "./style";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/icons/header-logo.svg";
import rington from "../../assets/icons/header-rington.svg";
import arrow from "../../assets/icons/arrow-down.svg";
import coin from "../../assets/images/coin.png";
import avatar from "../../assets/images/avatar.png";
import { Context } from "../../context/UserContext";


const HeaderPage = () => {
  const [anchorEl, setAnchorEl] =useState(null)
  const open = Boolean(anchorEl)
  const {setUser} = useContext(Context)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
    setUser(false);
    localStorage.clear();
  };

  return (
    <Header className=" container">
      <div className="header__logo">
        <Image src={logo} alt="logo" />
      </div>
      <Features>
        <Features.Notification>
          <Image src={rington} alt="notification" />
        </Features.Notification>
        <Features.Scores>
          <div className="scores-img">
            <Image src={coin} alt="score-coin" />
          </div>
          <div className="header__scores-point">
            <span className="score">500.00</span>
          </div>
        </Features.Scores>
        <Account>
          {/* <div className="header__account-avatar">
                    <Image src={avatar} alt="account-avatar"/>
                </div>
                <div className="header__account-arrow">
                    <Image src={arrow} alt="arrow-down"/>
                </div> */}
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <div className="header__account-avatar">
              <Image src={avatar} alt="account-avatar" />
            </div>
            <div className="header__account-arrow">
              <Image src={arrow} alt="arrow-down" />
            </div>
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Account>
      </Features>
    </Header>
  );
};

export default HeaderPage;
