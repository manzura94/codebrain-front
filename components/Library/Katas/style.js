import styled from "styled-components";

const Wrapper = styled.div`
  width: 70%;
  padding: 24px 28px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
  color: #ffffff;
`;

const Container = styled.div`
  margin: 21px 0;
`;

Container.Item = styled.div`
  background: #202442;
  padding: 14px 38px;
  border-radius: 7px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  :hover {
    background-color: #2f7dff;

    .level{
      background: #6FACFF;
    }

    .tags{
      background: #25294A;
    }

    .tags-name{
      color: #fff;
    }

    .lock-wrapper{
      background: rgba(0, 82, 220, 0.55);
    }
  }
`;

Container.Left = styled.div`
  .title {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
  }

  .level {
    background: #626575;
    border-radius: 7px;
    padding: 6px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 125px;
    margin: 14px 0;
    transition: all 0.4s ease-in-out;
  }

  .difficulty {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-transform: capitalize;
    color: #ffffff;
  }

  .tags-wrapper{
    display: flex;
    gap: 10px;
  }

  .tags {
    padding: 4px 8px;
    background: #acacac;
    border-radius: 7px;
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.4s ease-in-out;
  }

  .tags-name {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #000000;
    transition: all 0.4s ease-in-out;
  }
`;

Container.Right = styled.div`
  .lock-wrapper {
    padding: 9px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    background: #404040;
    border-radius: 7px;
    transition: all 0.4s ease-in-out;
  }

  .lock-open {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #ffffff;
  }
`;
export { Wrapper, Title, Container };
