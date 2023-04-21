import React from "react";
import weather_api from "./Settings";
import axios from "axios";


class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : '',
            temp : '',
            feels_like : ''
        }
    }
    storeInput = async (inputText) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&units=metric&appid=${weather_api}`;
        await axios.get(url).then(res => {
            const data = res.data;
            this.setState({temp: data['main'].temp, name : data.name, feels_like :data['main'].feels_like })

        })
    }

    render() {
        return (
            <div>
                {this.state.name !== '' ? <p>County: {this.state.name}</p> : null}
                {this.state.temp !== '' ? <p>Temp: {this.state.temp}</p> : null}
                {this.state.feels_like !== '' ? <p>Feels Like: {this.state.feels_like}</p> : null}
            </div>
        )
    }
}

export default Weather;