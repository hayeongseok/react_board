import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Wrap, MainContainer, PostContainer, TopInner, PostContent } from './StyledComponents/StyledPost';



const Post = () => {
  const { boardId } = useParams();
  const [postData, setPostData] = useState([]);
  const dataUrl = `http://54.180.116.156:3300/v1/board/read/${ boardId }`

  // useEffect(() => {
    axios.get(dataUrl).then((response) => {
      // console.log(response.data.result)
      setPostData(response.data.result);
    }).catch(() => {});
  // }, [])
  //then->성공핸들링 / catch->에러핸들링

  console.log(postData,dataUrl,boardId)

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
                  <>
                    <div className='postInfo'>
                      <p className='title'>{post.title}</p>
                      <p>
                        <span className='name'>{post.name}</span>
                        <span className='date'>{post.regDt.split("T")[0]} {post.regDt.split("T")[1].slice(0,8)}</span>
                      </p>
                    </div>
                    <div className='content'>
                      <p>{post.content}</p>
                    </div>
                  </>
                );
              })}
              
            </PostContent>
        </PostContainer>
      </MainContainer>
    </Wrap>
  )

}

export default Post;