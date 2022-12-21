import styled from "styled-components";

const Wrapper = styled.div`
  background: #202443;
  width: 30%;
  margin-right: 28px;
  padding: 28px 14px;
`;

const Account = styled.div`
  padding: 28px;
  background: #25294a;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
`;

Account.Info = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

Account.Name = styled.p`
  font-weight: 500;
  font-size: 19.6875px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 7px;
`;

Account.Username = styled.span`
  font-weight: 400;
  font-size: 15.75px;
  line-height: 19px;
  color: #777777;
`;

const Dots = styled.div`
  width: 20px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

Dots.Span = styled.span`
  width: 3px;
  height: 3px;
  margin-bottom: 4px;
  background: #fff;
  border-radius: 50%;
`;

const Statistics = styled.div`
  margin: 28px 0;
`;

Statistics.Title = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-bottom: 7px;
`;

Statistics.Info = styled.div`
  padding: 28px;
  background: #25294a;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
`;

Statistics.Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #cfe3ff;
  margin-left: 8px;
`;

Statistics.Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #cfe3ff;
  margin-bottom: 15px;
  margin-left: 8px;
`;

Statistics.Btn = styled.button`
  padding: 4px 7px;
  background: #585b71;
  border-radius: 7px;
  color: #fff;
  font-weight: 300;
  font-size: 13px;
  line-height: 16px;
  border: none;
`;

const FriendsWrapper = styled.div``;

export { Wrapper, Account, Dots, Statistics, FriendsWrapper };
