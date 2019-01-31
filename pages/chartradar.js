import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Radar from "../components/Radar";

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

const ChartRadar = props => (
  <div>
    <Link href="/">
      <BackBtn>Back</BackBtn>
    </Link>
    <h1>Example Radar Chart</h1>
    <Radar />
  </div>
);

export default ChartRadar;
