import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  background:#202443;
`;

const Features = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

Features.Notification = styled.div`
  background: #25294a;
  width: 44px;
  height: 44px;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

Features.Scores = styled.div`
  width: 130px;
  height: 40px;
  background: $black-300;
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #25294a;

  .score{
    color: #fff;
  }

  .scores-img {
    width: 40%;
    margin-left: -30px;
  }
  img {
    width: 36px;
    height: 36px;
  }
`;

const Account = styled.div`
 width: 82px;
    height: 40px;
    margin-left: 10px;
    margin-right: 10px;
    background: #25294a;
    border-radius: 28px;
    display: flex;
    justify-content: center;
    align-items: center;

    .header__account-arrow{
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .header__account-avatar{
      width: 36px;
        height: 36px;
        border-radius: 18px;
        overflow: hidden;
        margin-left: -10px;
        margin-right: 10px;
        img{
            width: 100%;
            height: 100%;
        }
    }
`



export { Header, Features, Account };
