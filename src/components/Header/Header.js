import React, { Fragment } from 'react'
import "./Header.css";

function Wrapper() {
  return (
  <Fragment>
  <div id="wrapper">
  <div id="header">
      <nav class="container">
          <a href="/#" id="logo">
              <img src="assets/images/bt.jpg" alt="JavaScript"/>
          </a>

      <ul id="main-menu">
        <li><a href="/#">Văn Học</a>
          <ul class="sub-menu">
            <li><a href="/#">Tiểu Thuyết</a></li>
            <li><a href="/#">Ngôn Tình</a></li>
            <li><a href="/#">Light Novel</a></li>
            <li><a href="/#">Du ký</a></li>                                     
          </ul>
        </li>   

          <li><a href="/#">Kinh tế</a>
              <ul class="sub-menu">
                  <li><a href="/#">Quản trị - Lãnh Đạo</a></li>
                  <li><a href="/#">Marketing - Bán hàng</a></li>
                  <li><a href="/#">Phân tích kinh tế</a></li>
                  <li><a href="/#">Tài chính - Ngân hàng</a></li>
              </ul>
          </li>

          <li><a href="/#">Tiểu sử - Hồi Ký</a>
            <ul class="sub-menu">
                <li><a href="/#">Câu chuyện cuộc đời</a></li>
                <li><a href="/#">Lịch sử</a></li>
                <li><a href="/#">Nghệ thuật - Giải Trí</a></li>
                <li><a href="/#">Thể Thao</a></li>
            </ul>
          </li>

          
          <li><a href="/#">Sách Học Ngoại Ngữ</a>
            <ul class="sub-menu">
                <li><a href="/#">Tiếng Anh</a></li>
                <li><a href="/#">Tiếng Nhật</a></li>
                <li><a href="/#">Tiếng Hàn</a></li>
                <li><a href="/#">Tiếng Pháp</a></li>
            </ul>
          </li>

      </ul>
  </nav>
</div>

</div>
  
  </Fragment>                              

  )
}

export default Wrapper