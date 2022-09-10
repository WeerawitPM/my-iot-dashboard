import './Dashboard.css';
import Chart from '../components/Chart';

const Dashboard = () => {
  return <body>
      <div className="App">
        <div className="charts">
          <Chart height={'200px'} width={'300px'} chartId={'630f67ac-abe7-4912-8db3-db35526cbdbd'} maxDataAge={10} background={'tranparent'}/>
          <Chart height={'200px'} width={'300px'} chartId={'630f695c-f920-41db-80e3-da5cb6cf5bab'} maxDataAge={10} background={'tranparent'}/>
        </div>
        <div className="charts">
          <div className="chart2">
            <div className="scroll">
              <Chart height={'400px'} width={'1000px'} chartId={'630f3be2-9223-48a6-802e-d7d9940f16a4'} maxDataAge={60} background={'tranparent'}/>
            </div>
          </div>
        </div>
      </div>
    </body>
};

export default Dashboard;
