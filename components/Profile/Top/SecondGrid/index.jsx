import Image from "next/image";
import React from "react";
import { statistics } from "../../../../assets";
import { Wrapper } from "./style";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { submission } from "../../../../utils/urls";
import { useLoad } from "../../../../hooks/request";


ChartJS.register(ArcElement, Tooltip, Legend);

const SecondGrid = () => {
  const getKatas = useLoad({ url: submission });
  const filtered = getKatas?.response?.data?.filter(
    (item) => item.status === "solved"
  );

  const filterKatas = (arr) => {
    let label = [];
    let datas = [];

    const newArr = arr?.reduce((prev, current) => {
      const key = current.kata.difficulty;
      const res = prev[key]
        ? { ...prev, [key]: prev[key] + 1 }
        : { ...prev, [key]: 1 };
      return res;
    }, {});

    for(let key in newArr){
      label.push(key)
      datas.push(newArr[key])
    }

    label = label.length === 0 ? ["no result"] : label;
    datas = datas.length === 0 ? [1] : datas;

    return [label, datas];
  };

  const [value, item] = filterKatas(filtered);

  const data = {
    labels: value,
    datasets: [
      {
        data: item,
        backgroundColor:
        [
          "rgba(76, 175, 79, 0.4)",
          "rgba(54, 162, 235, 0.4)",
          "rgba(255, 206, 86, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(153, 102, 255, 0.4)",
          "rgba(231, 45, 3, 0.4)",
        ],
    

        borderColor: [
          "rgba(76, 175, 79, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 86, 34, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Wrapper>
      <Wrapper.Left>
        <h3>Progress</h3>
        <Wrapper.LeftInner>
          <div>
            <Image src={statistics} alt="statistics" />
          </div>
          <div>
            <div>
              <span>Rank: </span>
              <span>6 kyu</span>
            </div>
            <div>
              <span>Total: </span>
              <span>20</span>
            </div>
            <div>
              <span>Highest Trained: </span>
              <span>Javascript 6kyu</span>
            </div>
          </div>
        </Wrapper.LeftInner>
      </Wrapper.Left>
      <Wrapper.Right>
        <h3>Solved problems</h3>
        <Wrapper.RightInner>
          <Doughnut
            options={{
              responsive: true,
              maintainAspectRatio: false,
              cutout: 100,
            }}
            data={data}
            height={300}
            width={200}
          />
        </Wrapper.RightInner>
      </Wrapper.Right>
    </Wrapper>
  );
};

export default SecondGrid;
