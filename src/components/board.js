import React, { useEffect, useState } from 'react';
import { Wrap, MainContainer, PostContainer, TopInner, PostList, BoardInfo, Posts } from './StyledComponents/StyledBoard';

import axios from 'axios';




const Board = () => {

  return (
    <Wrap>
      <MainContainer>
        <PostContainer>
          <TopInner>
            <input type='text'></input>
            <p className='line'></p>
            <nav>
              <ul>
                <li>일상</li>
                <li>일상</li>
                <li>일상</li>
                <li>일상</li>
                <li>일상</li>
              </ul>
            </nav>
          </TopInner>
          <PostList>
            <BoardInfo>
              <div>
                <h3>게시판</h3>
                <p>asdasdasdasdasdasdsad</p>
              </div>
              <button>글쓰기</button>
            </BoardInfo>

            <Posts>
              {/* dddddddddd */}
              <li>
                <div className='left'>
                  <p>게시판제목</p>
                </div>
                <div className='right'>
                  <p>날짜들어갈곳</p>
                </div>
              </li>

            </Posts>
          </PostList>
        </PostContainer>
      </MainContainer>
    </Wrap>
  );



}

export default Board;