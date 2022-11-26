import Image from "next/image"
import {Header, Features, Account} from "./style"
import logo from "../../assets/icons/header-logo.svg"
import rington from "../../assets/icons/header-rington.svg"
import arrow from "../../assets/icons/arrow-down.svg"
import coin from "../../assets/images/coin.png"
import avatar from "../../assets/images/avatar.png"



const HeaderPage = () => {
  return (
    <Header className=" container">
        <div className="header__logo">
            <Image src={logo} alt="logo" />
        </div>
        <Features>
            <Features.Notification>
                <Image src={rington} alt="notification"/>
            </Features.Notification>
            <Features.Scores >
                <div className="scores-img">
                    <Image src={coin} alt="score-coin"/>
                </div>
                <div className="header__scores-point">
                    <span className="score">500.00</span>
                </div>
            </Features.Scores>
            <Account >
                <div className="header__account-avatar">
                    <Image src={avatar} alt="account-avatar"/>
                </div>
                <div className="header__account-arrow">
                    <Image src={arrow} alt="arrow-down"/>
                </div>
            </Account>
        </Features>
    </Header>
  )
}

export default HeaderPage