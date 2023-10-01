import styled from 'styled-components';
import './fonts/pretendard.css'



export const Wrap = styled.div`
  /* background: pink; */
  width: calc(100vw - (100vw - 100%));
  height: 100vh;
  padding: 0;
  margin: 0 auto;

  * {padding: 0; margin: 0; color: #222; box-sizing: border-box; font-family: 'Pretendard-Regular';}
  li {list-style: none;}
  a {text-decoration: none;}
  button {
    font-size: 18px;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    font-family: 'Pretendard-Semiblod';
  }
`

export const MainContainer = styled.main`
  /* background: skyblue; */
  width: 1380px;
  height: 100%;
  margin: 0 auto;
`

export const PostContainer = styled.section`
  /* background: gray; */
  width: 1020px;
  height: 100%;
  margin: 0 auto;
  padding: 0 80px;
  h3.tit{
    padding: 60px 0;
    text-align: center;
    font-size: 30px;
    font-family: 'Pretendard-Semiblod';
  }
`