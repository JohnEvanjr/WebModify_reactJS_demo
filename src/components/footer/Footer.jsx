import React from "react";
import "./footer.css"

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="main-content">
          <div className="row">
            <div className="column">
              <img src="" alt="" className="logo" />
              <p className="desc">
                Take the first step towards a healthier, stronger you with our
                unbeatable pricing plans. Let's sweat, achieve, and conquer
                together!
              </p>
              <div className="socials">
                <a href="">
                  <img src="./img/twitter.svg" alt="twitter" className="icon" />
                </a>
                <a href="">
                  <img src="./img/fb.svg" alt="facebook" className="icon" />
                </a>
                <a href="">
                  <img src="./img/linked.svg" alt="linked" className="icon" />
                </a>
                <a href="">
                  <img
                    src="./img/instagram.svg"
                    alt="instagram"
                    className="icon"
                  />
                </a>
              </div>
            </div>

            <div className="column">
              <h3 className="title">Company</h3>
              <ul className="list">
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Features</a>
                </li>
                <li>
                  <a href="#!">Our Pricing</a>
                </li>
                <li>
                  <a href="#!">Latest News</a>
                </li>
              </ul>
            </div>

            <div className="column">
              <h3 className="title">Support</h3>
              <ul className="list">
                <li>
                  <a href="#!">FAQ’s</a>
                </li>
                <li>
                  <a href="#!">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="column">
              <h3 className="title">Address</h3>
              <ul className="list">
                <li>
                  <a href="#!">
                    <strong>Location:</strong> quận Tân Phú, thành phố Hồ Chí
                    Minh
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <strong>Email:</strong> email@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <strong>Phone:</strong> + 000 1234 567 890
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
            <p>Copyright ©2022 webdesign.gdn All rights reserved</p>
          </div>
      </div>
    </>
  );
}
