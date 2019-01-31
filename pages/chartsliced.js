import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Sliced from "../components/Sliced";

const BackBtn = styled.button`
  width: 250px;
  font-size: 2rem;
  background: seashell;
  font-weight: bold;
  text-decoration: none;
  border-radius: 10px;
  border: 2px solid #333;
  margin-bottom: 25px;
`;

const ChartSliced = props => (
  <div>
    <Link href="/">
      <BackBtn>Back</BackBtn>
    </Link>
    <h1>Example Sliced Chart</h1>
    <Sliced />
  </div>
);

export default ChartSliced;
