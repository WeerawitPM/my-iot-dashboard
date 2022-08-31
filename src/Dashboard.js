import './Dashboard.css';
import Chart from "./Chart";

const Dashboard = () => {
  return <div className="App">
    <h1 className="title">ESP32 DHT11 Dashboard</h1>
    <h2 className="title">วัดค่าอุณหภูมิและความชื้น</h2>
    <div className="charts">
      <Chart height={'600px'} width={'900px'} chartId={'630f3be2-9223-48a6-802e-d7d9940f16a4'}/>
      <Chart height={'600px'} width={'400px'} chartId={'630f67ac-abe7-4912-8db3-db35526cbdbd'}/>
    </div>
    <div className="charts">
      <Chart height={'600px'} width={'900px'} chartId={'630f46eb-f920-4428-8ee2-da5cb6b4f580'}/>
      <Chart height={'600px'} width={'400px'} chartId={'630f695c-f920-41db-80e3-da5cb6cf5bab'}/>
    </div>
  </div>
};

export default Dashboard;
