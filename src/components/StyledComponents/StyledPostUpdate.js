import styled from 'styled-components'
import './fonts/pretendard.css'

const blue = "#3FA9F5";

export const Wrap = styled.div`
 width: calc(100vw - (100vw - 100%));
  height: 100vh;
  background: pink;
  padding: 0;
  margin: 0 auto;
  
  * {padding: 0; margin: 0; color: #222; box-sizing: border-box; font-family: 'Pretendard-Regular';}
  li {list-style: none;}
  a {text-decoration: none;}
`

export const MainContainer = styled.main`
  width: 1380px;
  height: 100%;
  background: skyblue;
  margin: 0 auto;
`

export const PostContainer = styled.section`
  width: 1020px;
  height: 100%;
  background: gray;
  margin: 0 auto;
  padding: 0 80px;
  h3{
    padding: 60px 0;
    text-align: center;
    background: red;
    font-size: 30px;
    font-family: 'Pretendard-Semiblod';
  }
`

export const WriteBox = styled.div`
  background: green;
  display: flex;
  flex-direction: column;
  input, textarea {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  input.name-input {
    width: 250px;
    height: 45px;
  }
  input.title-input {
    height: 45px;
  }
  textarea {
    height: 460px;
  }
  div.button-cont {
    display: flex;
    justify-content: end;
  }
  button {
    font-size: 18px;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    font-family: 'Pretendard-Semiblod';
  }
  button.submit {
    color: #fff;
    background: ${ blue };
    margin-left: 12px;
  }
`