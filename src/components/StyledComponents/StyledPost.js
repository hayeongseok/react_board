import styled from 'styled-components';
import './fonts/pretendard.css'

const blue = "#3FA9F5";

export const TopInner = styled.div`
/* background: palegreen; */
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
  /* background: yellow; */
  display: flex;
  margin: 0;
  padding: 0;
}
ul li {
  margin: 0 10px;
}
`

export const PostContent = styled.article`
  /* background: ivory; */
  margin-top: 50px;
  padding-bottom: 200px;
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

export const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  button { margin-left: 10px;}
  button.update {background: ${ blue }; opacity: 0.8;  color: #fff;}
  button.delete {background: #f35858;  color: #fff;}
`