import React from "react";
import weather_api from "./Settings";
import axios from "axios";


// Create an input text tag where the user can enter some text.
//     Create a button tag that the user can click to store the input text value in a variable.
//     Add a JavaScript function to your code that will be executed when the button is clicked.
//     In the function, retrieve the value of the input text tag using the document.getElementById() method and store it in a variable.
//     Use the stored value for further processing, such as displaying it on the screen or using it in some calculations.
//     So, in summary, you need to use HTML to create the user interface, and JavaScript to handle the user input and store it in a variable.


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
        this.state = {
            name : '',
            temp : ''
        }
    }
    storeInput = async () => {
        const input = this.inputRef.current;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=${weather_api}`;
        await axios.get(url).then(res => {
            const data = res.data;
            this.setState({temp: data['main'].temp, name : data.name})

        })
    }
    render() {
        return (

                <div display = "display: inline-block;">
                    {this.state.name !== '' ? <p>County: {this.state.name}</p> : null}
                    {this.state.temp !== '' ? <p>Temp: {this.state.temp}</p> : null}
                    <input type = "text" placeholder = "Country.." required={true} ref={this.inputRef}/>
                    <button id={"SearchButton"} onClick={this.storeInput} style={{marginLeft: '10px'}}>Search</button>
                </div>

        );
    }
}
export default Search;
