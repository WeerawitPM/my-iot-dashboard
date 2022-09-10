import Chart from '../components/Chart';
import './monthly.css';

const Monthly = () => {
  return <body>
      <div className="App">
        <div className="charts">
          <Chart height={'600px'} width={'1000px'} chartId={'6310e422-e4c6-4189-8396-da1bc3524050'} maxDataAge={60}/>
        </div>
      </div>
    </body>
};
  
export default Monthly;