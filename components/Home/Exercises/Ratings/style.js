import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

Wrapper.Title = styled.h2`
  font-weight: 600;
  font-size: 30px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 14px;
`;

const General = styled.div`
  width: 100%;
`;

General.Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
`;

const Item = styled.div``;

Item.Img = styled.div`
  background: #202443;
  &.withnumber {
    padding: 20px 24px;
  }
`;

Item.Info = styled.div`
  background: #202443;
  padding: 23px 26px;
  width: 100%;
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
`;

Item.Username = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

Item.Rate = styled.div`
  height: 24px;
  width: 302px;
  background: #d9d9d9;
`;

Item.Number = styled.span`
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #2f7dff;
`;

export { Wrapper, General, Item };
