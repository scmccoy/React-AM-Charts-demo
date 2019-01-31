import React from "react";
import Link from "next/link";
import styled from "styled-components";

const ChartBtn = styled.button`
  border: 2px solid #333;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: bold;
  background: whitesmoke;
  text-decoration: none;
  box-shadow: -1px 5px 26px -5px rgba(0, 0, 0, 0.75);
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Home = () => (
  <div>
    <h1>
      {" "}
      Demo | <a href="https://www.amcharts.com/">amCharts.com</a>{" "}
    </h1>
    <h2>by Shane McCoy</h2>
    <Layout>
      <Link href="chartxy">
        <ChartBtn>XY</ChartBtn>
      </Link>
      <Link href="chartpie">
        <ChartBtn>Pie</ChartBtn>
      </Link>
      <Link href="chartmap">
        <ChartBtn>Map</ChartBtn>
      </Link>
      <Link href="chartradar">
        <ChartBtn>Radar</ChartBtn>
      </Link>
      <Link href="chartsliced">
        <ChartBtn>Sliced</ChartBtn>
      </Link>
    </Layout>
  </div>
);

export default Home;
