import React from "react";
import Weather from "./Weather";


// Create an input text tag where the user can enter some text.
//     Create a button tag that the user can click to store the input text value in a variable.
//     Add a JavaScript function to your code that will be executed when the button is clicked.
//     In the function, retrieve the value of the input text tag using the document.getElementById() method and store it in a variable.
//     Use the stored value for further processing, such as displaying it on the screen or using it in some calculations.
//     So, in summary, you need to use HTML to create the user interface, and JavaScript to handle the user input and store it in a variable.


class Search extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.weatherRef = React.createRef();
    }

    handleClick = async  () => {
        const inputText = this.inputRef.current.value;
        await this.weatherRef.current.storeInput(inputText);
    };

    render() {
        return (
            <div style={{ display: 'inline-block' }}>
                <input type="text" placeholder="Country.." required={true} ref={this.inputRef}/>
                <button id={'SearchButton'} onClick={this.handleClick} style={{ marginLeft: '10px' }}>Search</button>
                <Weather ref={this.weatherRef} />
            </div>
        );
    }
}
export default Search;
