import React from "react";
import axios from "axios";
import People from "./people";
import styled from 'styled-components'


const Peoples = styled.div`
display: flex;
flex-wrap: wrap;
`


class Fetch extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players").then(res => {
      console.log("getting the response ------>", res);
      this.setState({ data: res.data });
    });
  }

  render() {
    console.log("this is the current state --------->", this.state.data);

    return (
      <Peoples>
        {this.state.data.map(item => {
          return <People key={item.id} name={item.name} country={item.country} searches={item.searches} />;
        })}
      </Peoples>
    );
  }
}

export default Fetch;
