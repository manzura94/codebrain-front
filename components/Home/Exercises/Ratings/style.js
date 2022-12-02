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

  .item-img {
    background: #202443;

    .item-number {
      font-weight: 600;
      font-size: 25px;
      line-height: 30px;
      text-align: center;
      color: #2f7dff;
    }

  }

  .item-img.withnumber{
    padding: 20px 24px;
  }

  .item-info {
    background: #202443;
    padding: 23px 26px;
    width: 100%;
    border-radius: 7px;
    display: flex;
    justify-content: space-between;

    .username {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #ffffff;
    }

    .item-rate {
      height: 24px;
      width: 302px;
      background: #d9d9d9;
    }
    
  }
`;

export { Wrapper, General };
