/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import { Button, Icon, colors, Avatar, Navigation, ProductItem } from "design-system";
import { Link } from "react-router-dom";

const data = require("../data/data.js");

const Home = () => {
  return (
    <div>
      <StyledDiv1>
        <Navigation
          firstAction={<Avatar src={data.user.avatar} />}
          lastAction={
            <Button isOutline>
              <Icon name="menu" />
            </Button>
          }
        />
        <Styledh1>Store</Styledh1>

        <StyledDiv3>
          <h4>All Product</h4>

          <StyledDiv4>
            <Button
              color="transparent"
            >
              <Icon name="viewItem" width={24} height={16} />
            </Button>
            <Button
              color="transparent"
            >
              <Icon name="viewGrid" width={24} height={16} />
            </Button>
            <StyledBorder />
            <Button
              color="transparent"
            >
              <Icon name="filter" width={24} height={16} />
            </Button>
          </StyledDiv4>
        </StyledDiv3>
        <StyledDiv5>
          {Object.entries(data.products).map(([id, item]) => {
            return (
              <ProductItem as={Link} to={`/details/${id}`} key={id} name={item.name} price={item.price} image={item.image} description={item.name} />
            );
          })}
        </StyledDiv5>
      </StyledDiv1>
    </div>
  );
};


const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const Styledh1 = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const StyledDiv4 = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDiv5 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px 24px;
`;


const StyledBorder = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${colors.onSurface100};
  margin: 0 8px;
`;

export default Home;
