import Image from "next/image";
import React from "react";
import { statistics } from "../../../../assets";
import { Wrapper } from "./style";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { NodeNextRequest } from "next/dist/server/base-http/node";

ChartJS.register(ArcElement, Tooltip, Legend);

// const colors = ['#4caf50', '#009688', '#9c27b0', '#673ab7', '#3f51b5', '#ff9800', '#03a9f4', '#00bcd4',  '#8bc34a', '#cddc39', '#ffeb3b', '#ffc107',  '#ff5722', '#795548', '#607d8b' ]

const SecondGrid = () => {

   const data = {
    labels: ['very-easy', 'easy', 'medium', 'hard', 'very-hard', 'expert'],
    datasets: [
      {
        // label: '# of Votes',
        data: [6,5,4,3,2,1],
        backgroundColor: [
          'rgba(76, 175, 79, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(75, 192, 192, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(231, 45, 3, 0.4)'
        ],
        borderColor: [
          'rgba(76, 175, 79, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 86, 34, 1)'

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
        <Doughnut  options={{
          responsive: true,
          maintainAspectRatio: false,
          cutout: 100
        }} data={data} 
         height={300}
          width={200}/>
        </Wrapper.RightInner>
      </Wrapper.Right>
    </Wrapper>
  );
};

export default SecondGrid;
