var React = require('react');
var ReactDOM = require('react-dom');
var WeatherDet=require('./weatherDetails');

var WeatherMain=React.createClass({
    getInitialState:function(){
        return {
            data:[]
        }
    },
    componentWillMount: function() {
          var apiKey='ab484ae68a0f08b492ea454a499f728c';
				var weather = 'http://api.openweathermap.org/data/2.5/forecast?q=Bangalore&APPID='+apiKey;
        fetch(weather)
            .then(function(response) {
            return response.json()
        }).then(function(json) {
            this.setState({
                data: json,
            })
        }.bind(this)).catch(function(ex) {
            console.log('parsing failed', ex)
        }.bind(this))
    },
    render : function(){
        if(this.state.data && Object.keys(this.state.data).length){
                return <div>
                    <WeatherDet getWeather={this.state.data}/>
                </div>
            }else {
                return <h1></h1>
            }
    },
   
    
})
            
var element = React.createElement(WeatherMain, {});
ReactDOM.render(element, document.querySelector('.container'));
