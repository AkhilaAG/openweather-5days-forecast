var React = require('react');

module.exports=React.createClass({
    render: function(){
        
    
    return  <div>
          <table>
      <tbody><tr><td className="date-width">{this.props.data.dt_txt} </td>
						<td className="weather-width">{this.props.data.weather[0].description}</td>
						<td className="temp-width">{this.props.data.main.temp_min} F</td>
						<td className="temp-width">{this.props.data.main.temp_max} F</td>
						<td className="temp-width">{this.props.data.main.pressure} hpa</td>
						<td className="temp-width">{this.props.data.main.humidity}%</td></tr></tbody>
        </table>
      
        
        </div>
},

})
