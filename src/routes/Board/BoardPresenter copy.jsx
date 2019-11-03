import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Wrapper = styled.div`
  > div:nth-of-type(1) {
    background-color: black;
    color: white;
    border: 0;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
  > div:not(:nth-of-type(2)) {
    text-align: center;
  }
  > div {
    border-bottom: 1px solid #eaeaea;
    padding: 1rem 0;
    text-transform: uppercase;
  }
`;
const Number = styled.div``;
const Title = styled.div``;
const Author = styled.div``;
const CreatedAt = styled.div``;
const View = styled.div``;

const BoardPresenter = ({ boards }) => {
  const renderGrid = () =>
    boards.map(board => {
      const { id, no, title, author, createdAt, view } = board;
      return (
        <Grid key={id}>
          <Number>{no}</Number>
          <Title>
            <Link to={`/board/${id}`}>{title}</Link>
          </Title>
          <Author>{author}</Author>
          <CreatedAt>{createdAt}</CreatedAt>
          <View>{view}</View>
        </Grid>
      );
    });
  return (
    <Wrapper>
      <Grid>
        <Number>no</Number>
        <Title>제목</Title>
        <Author>작성자</Author>
        <CreatedAt>작성일</CreatedAt>
        <View>조회수</View>
      </Grid>
      {renderGrid()}
    </Wrapper>
  );
};

export default BoardPresenter;
