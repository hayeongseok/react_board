import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Wrap, MainContainer, PostContainer, TopInner, PostContent } from './StyledComponents/StyledPost';



const Post = () => {
  const { boardId } = useParams();
  const [postData, setPostData] = useState([]);
  // const dataUrl = "http://54.180.116.156:3300/v1/board/read?page=1&pageRows=10"
  const postUrl = `http://54.180.116.156:3300/v1/board/read/${ boardId }`

  useEffect(() => {
    axios.get(postUrl).then((response) => {
      console.log("asd", response.data.result)
      setPostData(response.data.result);
    }).catch(() => {});
  }, [])

  console.log(postData,postUrl,boardId)

  return(
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

            <PostContent>
              {postData.map((post, i) => {
                return (
                  <div>
                    <p className='title'>{"제목"}</p>
                    <p>
                      <span className='name'>{post.name}</span>
                      <span className='date'>{post.regDt}</span>
                    </p>
                  </div>
                );
              })}
              
            </PostContent>
        </PostContainer>
      </MainContainer>
    </Wrap>
  )

}

export default Post;