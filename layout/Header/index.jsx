import { useContext, useState } from "react";
import Image from "next/image";
import { Header, Features, Account, Score } from "./style";
// import Button from "@mui/material/Button";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { Context } from "../../context/UserContext";
import { arrowDown, avatar, coin, headerLogo, rington } from "../../assets";
import Link from "next/link";
import {Button, Menu, MenuItem} from '../../components/MaterialUI'

const HeaderPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { setUser } = useContext(Context);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
    setUser(false);
    localStorage.clear();
  };

  const closeMenu = () => {
    setAnchorEl(false);
  };

  return (
    <Header className=" container">
      <div>
        <Image src={headerLogo} alt="logo" />
      </div>
      <Features>
        {/* <Features.Notification>
          <Image src={rington} alt="notification" />
        </Features.Notification> */}
        <Features.Scores>
          <Features.ScoresImg>
            <Image src={coin} alt="score-coin" width={36} height={36} />
          </Features.ScoresImg>
          <div>
            <Score>500.00</Score>
          </div>
        </Features.Scores>
        <Account>
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Account.Avatar>
              <Image src={avatar} alt="account-avatar" />
            </Account.Avatar>
            <Account.Arrow>
              <Image src={arrowDown} alt="arrow-down" />
            </Account.Arrow>
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={closeMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Link href={'/profile'}>
              <MenuItem>Profile</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Account>
      </Features>
    </Header>
  );
};

export default HeaderPage;
