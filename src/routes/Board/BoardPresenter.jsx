import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr repeat(3, 1fr);
  padding: 0.6rem 0;
  &:nth-of-type(1) {
    background-color: black;
    color: white;
    text-transform: uppercase;
    padding: 1.2rem 0;
  }
  &:not(:nth-of-type(1)) {
    border-bottom: 1px solid #eaeaea;
  }
  transition: all 0.3s ease-in;
  &:not(:nth-of-type(1)):hover {
    background-color: gray;
  }
  > div {
    &:not(:nth-of-type(2)) {
      text-align: center;
    }
  }
`;

const renderBoxes = boards =>
  boards.map(board => (
    <Box key={board.id}>
      <div>{board.no}</div>
      <div>{board.title}</div>
      <div>{board.author}</div>
      <div>{board.view}</div>
      <div>{board.createdAt}</div>
    </Box>
  ));

const BoardPresenter = ({ boards }) => {
  return (
    <Grid>
      <Box>
        <div>No</div>
        <div>Title</div>
        <div>Author</div>
        <div>View</div>
        <div>CreatedAt</div>
      </Box>
      {renderBoxes(boards)}
    </Grid>
  );
};

export default BoardPresenter;
