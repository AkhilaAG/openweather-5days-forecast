var React= require('react');
var ForecastData=require('./forecastData');

module.exports=React.createClass({
  render:function(){
     
           var forecastArray=this.props.getWeather.list.map(function(item){
           return <ForecastData key={item.dt} data={item}/>
        }.bind(this));
           
      
        return <div>
            <h2 className="h2-heading">5 days/3 hour weather forecast</h2>
            <h2 className="h2-center">Weather in {this.props.getWeather.city.name},{this.props.getWeather.city.country}</h2>
              <div>
            <table>
                  <thead>
                <tr>
                    <th className="date-width">Date</th>
				<th className="weather-width">Cloudiness</th>
					<th className="temp-width">Temparature(Min)</th>
					<th className="temp-width">Temparature(Max)</th>
					<th className="temp-width">Pressure</th>
					<th className="temp-width">Humidity</th>
                      </tr>
                </thead>
                  
                  </table>
            </div> 
           <div>
             {forecastArray}
            </div>
        </div>
    }
})