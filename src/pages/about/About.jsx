import React from 'react';
import "./about.css";
import Header from "../../components/header/Header";
import { Route } from "react-router-dom";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content">
            <p>Chào mừng đến với H&FWeb! Chúng tôi là một cộng đồng đam mê dành riêng cho sức khỏe và thể dục. Sứ mệnh của chúng tôi là cung cấp cho bạn các công cụ, sự hỗ trợ và động lực bạn cần để đạt được các mục tiêu về sức khỏe và thể lực của mình.</p>
            <p>Tại H&FWeb, chúng tôi cung cấp các chương trình đào tạo được cá nhân hóa, lời khuyên về chế độ dinh dưỡng hợp lý của các chuyên gia và cộng đồng hỗ trợ để giúp bạn từng bước trên hành trình rèn luyện thể chất của mình.</p>
          </div>
          <div className="about-image">
            <img src={process.env.PUBLIC_URL + '/img/about1.webp'} alt="Health & Fitness" />
          </div>
          <table className="team-table">
            <tr>
              <td className="team-member-info">
                <h2>Trưởng nhóm</h2>
              </td>
              <td className="team-member-image"></td>
            </tr>
            <tr>
              <td className="team-member">
                <div className="team-member-info">
                  <h3>Phạm Đình Văn</h3>
                  <p>MSSV: 2001225777<br></br>
                  Email: johnevanjr1902@gmail.com<br></br>
                  Sở thích: Music and Guitar<br></br>
                  Liên hệ: 0376699063<br></br>
                  Nhiệm vụ :......................</p><br></br>
                </div>
              </td>
              <td className="team-member-image">
                <img src={process.env.PUBLIC_URL + '/img/about3.png'} alt="Dinh Van" />
              </td>
            </tr>
            <tr>
              <td className="team-member-info">
                <h2>Thành viên</h2>
              </td>
              <td className="team-member-image"></td>
            </tr>
            <tr>
              <td className="team-member">
                <div className="team-member-info">
                  <h3>Đinh Ngọc Huy</h3>
                  <p>MSSV: 2001221699<br></br>
                  Email: dinhngochuy1125@gmail.com<br></br>
                  Sở thích: Music and Movies<br></br>
                  Liên hệ: 0334470351<br></br>
                  Nhiệm vụ :......................</p><br></br>
                </div>
              </td>
              <td className="team-member-image">
                <img src={process.env.PUBLIC_URL + '/img/about3.png'} alt="Ngoc Huy" />
              </td>
            </tr>
            <tr>
              <td className="team-member">
                <div className="team-member-info">
                  <h3>Từ Anh Văn</h3>
                  <p>MSSV: 2001225779<br></br>
                  Email: tuanhvan2018@gmail.com<br></br>
                  Sở thích: Music and Reading<br></br>
                  Liên hệ: 0908785398<br></br>
                  Nhiệm vụ :......................</p><br></br>
                </div>
              </td>
              <td className="team-member-image">
                <img src={process.env.PUBLIC_URL + '/img/about3.png'} alt="Anh Van" />
              </td>
            </tr>
            <tr>
              <td className="team-member">
                <div className="team-member-info">
                  <h3>Đỗ Hữu Phúc</h3>
                  <p>MSSV: 2033223754<br></br>
                  Email: phuchuudo2468@gmail.com<br></br>
                  Sở thích: Technology and Rubik's Cube<br></br>
                  Liên hệ: 0906551283<br></br>
                  Nhiệm vụ :......................</p><br></br>
                </div>
              </td>
              <td className="team-member-image">
                <img src={process.env.PUBLIC_URL + '/img/about3.png'} alt="Phuc" />
              </td>
            </tr>
          </table>
        </div>
      </section>
      <footer>
    <div class="container">
        <p>&copy; 2024 FitStars. All rights reserved.</p>
    </div>
</footer>
    </>
  );
}