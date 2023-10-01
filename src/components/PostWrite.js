import React, { useEffect, useState } from 'react';
import { Link, useNavigate  } from "react-router-dom";
import axios from 'axios';

// style
import { Wrap, MainContainer, PostContainer} from './StyledComponents/Common';
import { WriteBox, } from './StyledComponents/StyledPostWrite';

const PostWrite = () => {
  const navigate = useNavigate();
  const createURL = "http://54.180.116.156:3300/v1/board/create"
  const [ post, setPost ] = useState({
    title: "",
    content: "",
    name: "",
  });

  const { title, content, name } = post;

  const savePost = async () => {
    await axios.post(createURL, post).then((response)=> {
      // console.log(response);
      alert("등록test");
      navigate("/");
    }).catch((error)=> {
        console.log(error)
    })
  }

  const onChange = (e) => {
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  return (
    <Wrap>
      <MainContainer>
        <PostContainer>
          <h3 className='tit'>글쓰기</h3>
          <WriteBox>
            <p>이름</p>
            <input 
              type='text' 
              name = "name"
              value={name}
              onChange={onChange}
              placeholder='이름' 
              className='name-input'
            ></input>
            <p>제목</p>
            <input 
              type='text' 
              name = "title"
              value={title}
              onChange={onChange}
              placeholder='제목을 입력해주세요' 
              className='title-input'
            ></input>
            <p>내용</p>
            <textarea
              name = "content"
              value={content}
              onChange={onChange}
            ></textarea>
            <div className='button-cont'>
              <button onClick={() => {navigate("/")}} className='calcel'>취소</button>
              <button onClick={savePost} className='submit'>등록</button>
            </div>
          </WriteBox>
        </PostContainer>
      </MainContainer>
    </Wrap>
  )

}

export default PostWrite;