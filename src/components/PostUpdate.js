import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams  } from "react-router-dom";
import axios from 'axios';

import { Wrap, MainContainer, PostContainer, WriteBox, buttonBox } from './StyledComponents/StyledPostWrite';

const PostWrite = () => {
  const navigate = useNavigate();
  const { boardId } = useParams();
  const [ post, setPost ] = useState({
    title: "",
    content: "",
    name: "",
  });

  const { title, content, name } = post;

  const onChange = (e) => {
    const { value, name } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  
  //데이터 가져오기
  useEffect(() => {
    axios.get(`http://54.180.116.156:3300/v1/board/read/${ boardId }`).then((response) => {
      setPost(response.data.result[0]);
    }).catch(() => {});
  }, [])

  //수정버튼 클릭
  const updatePost = async () => {
    await axios.patch(`http://54.180.116.156:3300/v1/board/update`, post).then((response)=> {
      alert("수정test");
      navigate(`/post/${ boardId }`);
    }).catch((error)=> {
        console.log(error)
    })
  }

  // console.log("post", post)

  return (
    <Wrap>
      <MainContainer>
        <PostContainer>
          <h3>수정하기</h3>
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
              <button onClick={updatePost} className='submit'>등록</button>
            </div>
          </WriteBox>
        </PostContainer>
      </MainContainer>
    </Wrap>
  )

}

export default PostWrite;