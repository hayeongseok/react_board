import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

// style
import { Wrap, MainContainer, PostContainer, TopInner, PostList, BoardInfo, Posts } from './StyledComponents/StyledBoard';


const Board = () => {

  const [postData, setPostData] = useState([]);
  const dataUrl = "http://54.180.116.156:3300/v1/board/read?page=1&pageRows=10"

  useEffect(() => {
    axios.get(dataUrl).then((response) => {
      // console.log(response.data.boardList)
      setPostData(response.data.boardList);
    }).catch(() => {
      console.log("error");
    });
  }, [])



  return (
    <Wrap>
      <MainContainer>
        <PostContainer>
          <TopInner>
            <input type='text' placeholder='검색' className='search'></input>
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
              {postData ? postData.map((post, i) => {
                return (
                  <li>
                    <div className='left'>
                      <p key={post.boardId}>
                        <Link to={`Post/${post.boardId}`}>
                          {post.title}
                        </Link>
                      </p>
                    </div>
                    <div className='right'>
                      <p>
                        {post.regDt.split("T")[0].replaceAll("-",".")}
                      </p>
                    </div>
                  </li>
                ) 
              }) : ""}
            </Posts>
          </PostList>
        </PostContainer>
      </MainContainer>
    </Wrap>
  );



}

export default Board;