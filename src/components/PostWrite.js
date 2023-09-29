import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import { Wrap, MainContainer, PostContainer, WriteBox, buttonBox } from './StyledComponents/StyledPostWrite';

const PostWrite = () => {

  const createURL = "http://54.180.116.156:3300/v1/board/create"

  const [ post, SetPost ] = useState({
    "title": "",
    "content": "",
    "name": ""
});

  axios.post(createURL).then((response)=> {
    console.log(response)
  }).catch((error)=> {
      console.log(error)
  })
  
  return (
    <Wrap>
      <MainContainer>
        <PostContainer>
          <h3>글쓰기</h3>
          <WriteBox>
            <p>이름</p>
            <input type='text' placeholder='이름' className='name-input'></input>
            <p>제목</p>
            <input type='text' placeholder='제목을 입력해주세요' className='title-input'></input>
            <p>내용</p>
            <textarea
            // value={content}
            ></textarea>
            <div className='button-cont'>
              <button className='calcel'>취소</button>
              <button className='submit'>등록</button>
            </div>
          </WriteBox>
        </PostContainer>
      </MainContainer>
    </Wrap>
  )

}

export default PostWrite;