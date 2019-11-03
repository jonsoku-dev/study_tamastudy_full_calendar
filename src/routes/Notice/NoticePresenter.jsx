import React from 'react';
import styled from 'styled-components';
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 250px;
  grid-gap: 2rem;
  > div:nth-of-type(1) {
    grid-column: 1 / -1;
    color: white;
  }
`;
const Box = styled.div`
  background-color: pink;
  padding: 0 2rem;
  transition: all 0.3s cubic-bezier(0, -1.35, 0.76, 1.69);
  cursor: pointer;
  &:hover {
    background-color: purple;
  }
  overflow: hidden;
  word-wrap: break-word;
  word-break: break-all;
`;
const BoxTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  margin: 2rem 0 2rem 0;
`;
const BoxBody = styled.p`
  letter-spacing: 1px;
  margin: 1rem 0;
`;
const NoticePresenter = ({ posts }) => {
  return (
    <Grid>
      {posts.map(post => (
        <Box>
          <BoxTitle>{post.title}</BoxTitle>
          <BoxBody>{post.body}</BoxBody>
        </Box>
      ))}
    </Grid>
  );
};
export default NoticePresenter;
