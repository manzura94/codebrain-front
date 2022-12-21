import styled from "styled-components";

const Wrapper = styled.div`
  grid-row: span 2;
  background: #202443;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  gap: 20px;
`;

Wrapper.Left = styled.div`
  color: #fff;
  width: 50%;
`;

Wrapper.LeftInner = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`;

Wrapper.Right = styled.div`
  width: 50%;
  color: #fff;
`;

Wrapper.RightInner = styled.div`
/* width: 200px; */
.App {
  font-family: sans-serif;
  text-align: center;
}
`

export { Wrapper };
