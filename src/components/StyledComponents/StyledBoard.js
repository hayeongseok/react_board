import styled from 'styled-components';
import './fonts/pretendard.css'

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
`

export const TopInner = styled.div`
  background: palegreen;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  input.search{
    width: 350px;
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 50px;
    padding: 0 20px;
  }
  .line {
    width: 100%;
    height: 1px;
    margin: 30px 0;
    background: #ddd;
  }
  ul {
    display: flex;
    background: yellow;
    margin: 0;
    padding: 0;
  }
  ul li {
    margin: 0 10px;
  }
`

export const PostList = styled.div`
  background: #ffd89f;
`

export const BoardInfo = styled.div`
  background: #f59fff;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding-bottom: 30px;
  margin-top: 50px;
  h3{
    font-size: 26px; 
    font-family: 'Pretendard-Semiblod';
  }
  span.total{font-size: 14px; color: #ccc;}
  button {
    height: 40px;
    background: #3FA9F5;
    border: none;
    padding: 0 25px;
    color: #fff;
    border-radius: 100px;
    font-size: 16px;
    font-family: 'Pretendard-Semiblod';
    cursor: pointer;
  }
`

export const Posts = styled.ul`

  li{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
  }
`
