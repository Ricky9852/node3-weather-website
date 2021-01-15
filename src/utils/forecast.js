const request=require('request')
const forecast=(latitude,longitude,callback)=>{
	const url='http://api.weatherapi.com/v1/current.json?key=73e0ecb4ec684b2d925131645210901&q=' + latitude + ','+ longitude
	request({url,json:true},(error,{body})=>{
	if(error){
		callback('unable to connect weather service',undefined)
	}
	else if(body.error){
		callback('unable to find',undefined)
	}
	else{
		callback(undefined,'Current weather condition is '+ body.current.condition.text +'.It is currently '+ body.current.temp_c +' degrees of Celsius out. There is a ' + body.current.precip_mm + '% chance of rain.')

	}

	})


}
module.exports=forecast