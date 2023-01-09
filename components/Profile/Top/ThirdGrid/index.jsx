import React from "react";
import { Wrapper } from "./style";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { getGraphUrl } from "../../../../utils/urls";
import { useLoad } from "../../../../hooks/request";


const ThirdGrid = () => {
  const today = new Date();
 const userId = localStorage?.id
  const activedays = useLoad({url: `${getGraphUrl(userId)}`})
  let submissionCalendar = activedays?.response?.data?.map(item => item.submitted_at)
  const data = submissionCalendar?.map(item=> `${new Date(item).toISOString().split('T')[0]}`)

  console.log(data, 'grapg');

  const sample = data?.map((item) => {
    return {
      date: item
    };
  });

 console.log(sample, 'sample')
 

 const values = [
  { date: ""}
]

  return (
    <Wrapper>
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={ sample ? sample : values  }     
        classForValue={(value) => {
          if (!value) {
            return 'color-empty-1';
          }
          return `color-scale-1`;
        }}
        tooltipDataAttrs={value => {
          // console.log(value.date)
          return {
            'data-tip': ` has count`,
          };
        }}
      
      />
    </Wrapper>
  );
};

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

export default ThirdGrid;
