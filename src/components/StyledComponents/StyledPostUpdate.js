import styled from 'styled-components'
import './fonts/pretendard.css'

const blue = "#3FA9F5";

export const WriteBox = styled.div`
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
  
  button.submit {
    color: #fff;
    background: ${ blue };
    margin-left: 12px;
  }
`