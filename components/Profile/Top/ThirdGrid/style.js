import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #202443;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  .react-calendar-heatmap .color-scale-1 {
    fill: #2f7dff;
  }

  .react-calendar-heatmap rect {
    stroke: #202443;
    stroke-width: 2px;
    rx: 3px;
    ry: 3px;
  }
  /* .react-calendar-heatmap .color-scale-2 {
    fill: #8cc665;
  }*/
  .react-calendar-heatmap .color-empty-1 {
    fill: #d9d9d9;
  }
`;

export { Wrapper };
