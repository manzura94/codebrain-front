import React from "react";
import { Wrapper } from "./style";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const ThirdGrid = () => {
  return (
    <Wrapper>
      <CalendarHeatmap
        startDate={new Date("2022-01-01")}
        // endDate={new Date("2023-04-01")}
        values={[
          { date: "2022-01-02", count: 2222 },
          { date: "2022-01-22", count: 2222 },
          { date: "2022-01-30", count: 3222}
        ]}
        
        classForValue={(value) => {
          if (!value) {
            return 'color-empty-1';
          }
          return `color-scale-1`;
        }}
        
      />
    </Wrapper>
  );
};

export default ThirdGrid;
