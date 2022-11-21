import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>ĐỊA CHỈ</h4>
            <h1 className="list-unstyled">
              <li>123 Nơ Trang Long</li>
              <li>HotLine: 0782144758 </li>
              <li>Fax: + 84 (8) 24567889</li>
              <li>Mail: support@tb.vn</li>
            </h1>
          </div>

          {/* Column2 */}
          <div className="col">
            <h4>GIỚI THIỆU</h4>
            <ui className="list-unstyled">
              <li>Về Chúng Tôi</li>
              <li>Cách Đặt Hàng</li>
              <li>Kiểm Tra Đơn Hàng</li>
              <li>Hỗ Trợ</li>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col">
            <h4>DANH MỤC</h4>
            <ui className="list-unstyled">
              <li>Ngôn Tình</li>
              <li>Văn Học</li>
              <li>Tiểu Thuyết</li>
              <li>Triết Lý</li>
            </ui>
          </div>

          {/* Column4 */}
          <div className="col">
            <h4>XÃ HỘI</h4>
            <ui className="list-unstyled">
              <li>Facebook</li>
              <li>Youtube</li>
              <li>Twitter</li>
              <li>Titok</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} TB | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
