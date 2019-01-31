import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import Pie from "../components/Pie";

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

const ChartPie = () => (
  <div>
    <Link href="/">
      <BackBtn>Back</BackBtn>
    </Link>
    <Pie />
  </div>
);

export default ChartPie;
