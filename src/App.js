import React, { Component } from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';

class App extends Component {
  state = {
    city: [],
    selectedCity: ""
  }

  handleChange = async(e) => {
    e.preventDefault();
    console.log(e.target);
    const city = e.target.value;
    const api_call = await fetch(`https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI`);
    const data = await api_call.json();
    console.log("data is:", data);
    console.log("city", e.target.value);

    this.setState({
      selectedCity: e.target.value
    })
  }
  render() {
    return(
      <div>
         <form autoComplete="off">
          <FormControl>
            <InputLabel htmlFor="select-city">Select City</InputLabel>
            <Select
              value={this.state.city}
              onChange={this.handleChange}
              inputProps={{
                name: 'select-city',
                id: 'select-city',
              }}
              fullWidth={true}
            >
                <MenuItem>{this.state.city}</MenuItem>
            </Select>
          </FormControl> 
        </form> 
      </div>
    );
  }
}

export default App;