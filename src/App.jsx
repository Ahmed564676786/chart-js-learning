import { useState } from "react";
import "./App.css";
import { Card, Col, Row } from "antd";

import Chart from 'chart.js/auto';

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);



const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [
    
    
    
    {
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  },



]

  
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 24 }}>
      <Row align="middle" gutter={[16, 16]}>
        {/* Left Column */}
        <Col span={12} sm={24} lg={12}>
          <Card
            style={{
              backgroundColor: "red",
              minHeight: "400px",
              color: "white",
              textAlign: "center",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
           
            
      <Doughnut data={data} />
  
          </Card>
        </Col>

        {/* Right Column */}
        <Col span={12} sm={24} lg={12}>
          <Card
            style={{
              backgroundColor: "yellow",
              height: "400px",
              borderRadius: "50px",
              textAlign: "center",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Right Card
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;