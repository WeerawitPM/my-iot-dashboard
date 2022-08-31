import './Dashboard.css';
import Chart from "./Chart";

const Dashboard = () => {
  return <div className="App">
    <h1 className="title">ESP32 DHT11 Dashboard</h1>
    <h2 className="title">วัดค่าอุณหภูมิและความชื้น</h2>
    <div className="charts">
      <Chart height={'600px'} width={'800px'} chartId={'630f3be2-9223-48a6-802e-d7d9940f16a4'}/>
    </div>
  </div>
};

export default Dashboard;
