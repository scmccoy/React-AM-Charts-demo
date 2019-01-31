import React from "react";
import Link from "next/link";
import styled from "styled-components";

const ChartBtn = styled.button`
  border: 2px solid #333;
  border-radius: 10px;
  font-size: 2rem;
  font-weight: bold;
  background: pink;
  text-decoration: none;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Home = () => (
  <div>
    <h1> Choose a chart </h1>
    <Layout>
      <Link href="chartxy">
        <ChartBtn>XY</ChartBtn>
      </Link>
      <Link href="chartpie">
        <ChartBtn>Pie</ChartBtn>
      </Link>
    </Layout>
  </div>
);

export default Home;
