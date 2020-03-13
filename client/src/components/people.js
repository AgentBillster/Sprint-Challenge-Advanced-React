import React from "react";
import styled from 'styled-components'

const Ppl = styled.div`
width: 20vh;
border: 1px solid black;
display: flex;
flex-direction: column;
text-align: center;
`



function People(props) {
  return (
    <Ppl>
      <div>
      <h1>{props.name}</h1>
      <p>{` lives in ${props.country}`}</p>
      <p>{props.searches}</p>
      </div>
    </Ppl>
  );
}

export default People;
