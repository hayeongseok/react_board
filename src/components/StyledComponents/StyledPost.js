import styled from 'styled-components';

export const Wrap = styled.div`
  width: calc(100vw - (100vw - 100%));
  height: 100vh;
  background: pink;
  padding: 0;
  margin: 0 auto;

  * {padding: 0; margin: 0; color: #222; box-sizing: border-box;}
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

export const PostContent = styled.article`
  height: 100%;
  margin-top: 50px;
  background: ivory;
  p.title{
    font-size: 36px;
    margin-bottom: 8px;
  }
  div.postInfo {
    border-bottom: 1px solid #ddd;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  span.name, span.date{
    color: #ccc;
  }
  span.name {margin-right: 10px;}
`