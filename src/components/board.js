import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Pagination from 'react-js-pagination';

// style
import { Wrap, MainContainer, PostContainer} from './StyledComponents/Common';
import { TopInner, PostList, BoardInfo, Posts, PageNation } from './StyledComponents/StyledBoard';


const Board = () => {

  const [postData, setPostData] = useState([]); // 게시물 데이터 정보
  const [totalCount, setTotalCount] = useState(0); //데이터 정보 개수
  const [page, setPage] = useState(1); // 현재 페이지
  
  const [count, setCount] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const [pageLimitTotalCount, setPageLimitTotalCount] = useState(10); //10단위로 보여지는 데이터 총개수

  const dataUrl = `http://54.180.116.156:3300/v1/board/read?page=${page}&pageRows=10`
  const pageLimitUrl = `http://54.180.116.156:3300/v1/board/read?page=${pageLimit}&pageRows=10`//페이지 위치에 따른 총 데이터 갯수 알아내는 용

  useEffect(() => {
    axios.get(dataUrl).then((response) => {
      // console.log("total", response.data.totalCount)
      setPostData(response.data.boardList);
      setTotalCount(response.data.totalCount);
    }).catch(() => {
      console.log("error");
      //console.error('게시물을 불러올 수 없습니다.')
    });
  }, [page]) // 첫 렌더링 & 페이지 바뀔 때마다 실행

  useEffect(() => {
    axios.get(pageLimitUrl).then((response) => {
      // console.log("total", response.data.totalCount)
      setPageLimitTotalCount(response.data.totalCount);
    }).catch(() => {
      console.log("error");
    });
  }, [pageLimit])


  console.log(totalCount, pageLimitTotalCount)

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
                <h3>게시판{/*  <span className='total'>({postData.length}개의 글)</span> */}</h3>
                <p>게시판입니당</p>
              </div>
              <Link to={`/PostWrite`}>
                <button>글쓰기</button>
              </Link>
            </BoardInfo>

            <Posts>
              {/* dddddddddd */}
              {postData ? postData.map((post) => {
                return (
                  <Link to={`Post/${post.boardId}`} key={post.boardId}>
                    <li>
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


            <PageNation>
              {/* 페이지네이션 */}
              <div className='box'>
                <button 
                onClick = {() => {
                  setPageLimit(pageLimit - 10)
                  setCount(count - 1)
                  setPage((10*(count-1))+1)
                }}
                disabled = {page <= 10}
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
                    key={i}
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
              </div>
              {/* 페이지네이션 끝 */}
            </PageNation>

          </PostList>
        </PostContainer>
      </MainContainer>
    </Wrap>
  );

}

export default Board;