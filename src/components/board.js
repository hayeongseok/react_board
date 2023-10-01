import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Pagination from 'react-js-pagination';

// style
import { Wrap, MainContainer, PostContainer} from './StyledComponents/Common';
import { TopInner, PostList, BoardInfo, Posts } from './StyledComponents/StyledBoard';


const Board = () => {

  const [postData, setPostData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const dataUrl = `http://54.180.116.156:3300/v1/board/read?page=${page}&pageRows=10`



  const [count, setCount] = useState(0);
  
  const [pageLimit, setPageLimit] = useState(10);
  const [pageLimitTotalCount, setPageLimitTotalCount] = useState(10); //10단위로 보여지는 데이터 총개수
  const pageLimitUrl = `http://54.180.116.156:3300/v1/board/read?page=${pageLimit}&pageRows=10`//최대카운터개수알아야해서만든거임(10페이지에선 100, 20에선 200...)

  useEffect(() => {
    axios.get(dataUrl).then((response) => {
      console.log("total", response.data.totalCount)
      setPostData(response.data.boardList);
      setTotalCount(response.data.totalCount);
    }).catch(() => {
      console.log("error");
    });
  }, [page])

  useEffect(() => {
    axios.get(pageLimitUrl).then((response) => {
      // console.log("total", response.data.totalCount)
      setPageLimitTotalCount(response.data.totalCount);
    }).catch(() => {
      console.log("error");
    });
  }, [pageLimit])


  // const next10Page = () => {
  //   return 
  //     setPage(page + 10); 
  //     setPageLimit(pageLimit + 10); 
  //     setCount(count + 1)} ;
    
  // }


  // console.log(page,postData.length,totalCount)

  return (
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
          <PostList>
            <BoardInfo>
              <div>
                <h3>게시판 <span className='total'>({postData.length}개의 글)</span></h3>
                <p>게시판입니당</p>
              </div>
              <Link to={`/PostWrite`}>
                <button>글쓰기</button>
              </Link>
            </BoardInfo>

            <Posts>
              {/* dddddddddd */}
              {postData ? postData.map((post, i) => {
                return (
                  <Link to={`Post/${post.boardId}`}>
                    <li key={post.boardId}>
                      <div className='left'>
                        <p>
                            {post.title}
                        </p>
                      </div>
                      <div className='right'>
                        <p className='date'>
                          {post.regDt.split("T")[0].replaceAll("-",".")}
                        </p>
                      </div>
                    </li>
                  </Link>
                ) 
              }) : ""}
            </Posts>



            {/* 페이지네이션 */}
            <button 
            onClick = {() => {
              setPageLimit(pageLimit - 10)
              setCount(count - 1)
              setPage((10*(count-1))+1)
            }}
            disabled = {page === 1}
            >&lt;&lt;</button>

            <button 
            onClick = {() => {
              setPage(page - 1)
              if (page % 10 === 1) {
                setPageLimit(pageLimit - 10)
                setCount(count - 1)
              }
              }} 
            disabled = {page === 1}
            >prev</button>

            {Array(Math.ceil((pageLimitTotalCount/10))-(10*count)).fill().map((v,i) => {
              return(
                <button 
                onClick = {() => setPage((10*count)+i+1)} 
                className={page === (10*count)+i+1 ? "current-page" : ""}
                id='num'
                >{(10*count)+i+1}</button>
              )
            })}

            <button 
            onClick = {() => {
              setPage(page + 1)
              if (page % 10 === 0) {
                setPageLimit(pageLimit + 10)
                setCount(count + 1)
              }
            }}
            disabled = {totalCount - (page * 10) < 0}
            >next</button>

            <button 
            onClick = {() => { 
              setPageLimit(pageLimit + 10)
              setCount(count + 1)
              setPage((10*(count+1))+1)
            }}
            disabled = {totalCount - (page * 10) < 0}
            >&gt;&gt;</button>
            {/* 페이지네이션 끝 */}

          </PostList>
        </PostContainer>
      </MainContainer>
    </Wrap>
  );



}

export default Board;