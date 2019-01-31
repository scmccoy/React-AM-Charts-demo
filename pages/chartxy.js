import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import XYZ from "../components/XY";

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

const ChartXY = props => (
  <div>
    <Link href="/">
      <BackBtn>Back</BackBtn>
    </Link>
    <h1>Example XY Chart</h1>
    <XYZ paddingRight={55} />
  </div>
);

export default ChartXY;
