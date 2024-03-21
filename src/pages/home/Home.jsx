import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <body>
        <main>
          <div className="hero">
            <div className="main-content">
              <div className="body">
                <div className="media-block">
                  <img
                    src={process.env.PUBLIC_URL + "/img/man.jpg"}
                    alt="Health and fitness"
                    className="img"
                  />
                  <div className="content-block">
                    <h1 className="heading">Health and fitness</h1>

                    <p className="desc">
                      Unleash your potential and embark on a journey towards a
                      stronger, fitter, and more confident you. Sign up for
                      'Make Your Body Shape' now and witness the incredible
                      transformation your body is capable of!
                    </p>

                    <div class="cta-group">
                      <a href="#" class="btn hero-cta">
                        Get Started
                      </a>
                      <button class="watch-video">
                        <div class="icon">
                          <img src={process.env.PUBLIC_URL + "/img/play.svg"} alt="" />
                        </div>
                        <span>Watch video</span>
                      </button>
                    </div>

                    <p className="desc desc-recent"></p>
                    <p className="desc stats">
                      <strong>50K</strong> Members joined
                      <strong>100+</strong> Fitness programs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="popular">
            <div className="main-content">
              <div className="popular-top">
                <div className="info">
                  <h2 className="heading-lv2">EXPLORE OUR PROGRAM</h2>
                  <p className="desc">
                    In here we will help you to shape and build your ideal body
                    and live your life to the fullest.
                  </p>
                </div>
              </div>

              <div class="controls">
                <button class="control-btn">
                  <img src="" alt="" />
                </button>
                <button class="control-btn">
                  <img src="" alt="" />
                </button>
              </div>

              <div className="course-list">
                <div className="course-item">
                  <a href="#!">
                    <img
                      src={process.env.PUBLIC_URL + "/img/pic1.jpg"}
                      alt="Ảnh 1"
                      className="thumb"
                    />
                  </a>

                  <div className="info">
                    <div className="head">
                      <h3 className="title">
                        <a className="line-clamp break-all" href="#!">
                          Strength
                        </a>
                      </h3>
                      <div className="rating">
                        <img src="" alt="" className="star" />
                        <span className="value"></span>
                      </div>
                    </div>

                    <p className="desc line-clamp line-2 break-all">
                      Embrace the essence of strength as we delve into its
                      various dimensions physical, mental, and emotional.
                    </p>

                    <div className="foot">
                      <span className="price"></span>
                      <button className="btn btn-book">Join now</button>
                    </div>
                  </div>
                </div>

                <div className="course-item">
                  <a href="#!">
                    <img
                      src={process.env.PUBLIC_URL + "/img/pic2.jpg"}
                      alt="Ảnh 1"
                      className="thumb"
                    />
                  </a>

                  <div className="info">
                    <div className="head">
                      <h3 className="title">
                        <a className="line-clamp break-all" href="#!">
                          Physical Fitness
                        </a>
                      </h3>
                      <div className="rating">
                        <img src="" alt="" className="star" />
                        <span className="value"></span>
                      </div>
                    </div>

                    <p className="desc line-clamp line-2 break-all">
                      It encompasses a range of activities that improve health,
                      strength, flexibility, and overall well-being.
                    </p>

                    <div className="foot">
                      <span className="price"></span>
                      <button className="btn btn-book">Join now</button>
                    </div>
                  </div>
                </div>

                <div className="course-item">
                  <a href="#!">
                    <img
                      src={process.env.PUBLIC_URL + "/img/pic3.jpg"}
                      alt="Ảnh 1"
                      className="thumb"
                    />
                  </a>

                  <div className="info">
                    <div className="head">
                      <h3 className="title">
                        <a className="line-clamp break-all" href="#!">
                          Fat Lose
                        </a>
                      </h3>
                      <div className="rating">
                        <img src="" alt="" className="star" />
                        <span className="value"></span>
                      </div>
                    </div>

                    <p className="desc line-clamp line-2 break-all">
                      Through a combination of workout routines and expert
                      guidance, we'll empower you to reach your goals.
                    </p>

                    <div className="foot">
                      <span className="price"></span>
                      <button className="btn btn-book">Join now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feedback">
            <div className="main-content">
              <div className="feedback-list">
                <div className="feedback-item">
                  <div className="info">
                    <img
                      src={process.env.PUBLIC_URL + "/img/ava1.jpg"}
                      alt="Luna Scalet"
                      className="avatar"
                    />
                    <p className="member-name">Luna Scalet</p>
                    <p className="desc">Software Developer</p>
                    <div className="dots">
                      <span className="dot active"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <div className="content">
                    <img
                      src={process.env.PUBLIC_URL + "/img/open-quote.svg"}
                      alt=""
                      className="open-quotes"
                    />
                    <blockquote>
                      What truly sets this gym apart is their expert team of
                      trainers. The trainers are knowledgeable, approachable,
                      and genuinely invested in helping members achieve their
                      fitness goals. They take the time to understand individual
                      needs and create personalized workout plans, ensuring
                      maximum results and safety.
                    </blockquote>
                  </div>
                </div>
                <div className="feedback-item">
                  <div className="info">
                    <img
                      src={process.env.PUBLIC_URL + "/img/ava2.jpg"}
                      alt="Luna Scalet"
                      className="avatar"
                    />
                    <p className="member-name">Luna Scalet</p>
                    <p className="desc">Lorem ipsum dolor sit amet.</p>
                    <div className="dots">
                      <span className="dot"></span>
                      <span className="dot active"></span>
                      <span className="dot"></span>
                    </div>
                  </div>
                  <div className="content">
                    <img
                      src={process.env.PUBLIC_URL + "/img/open-quote.svg"}
                      alt=""
                      className="open-quotes"
                    />
                    <blockquote>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eveniet sunt est dolor, cum quaerat neque veniam libero
                      optio aliquam cupiditate paricupiditate at? Nobis
                      recusandae at culpa dignissimos saepe. Amet inventore quam
                      voluptas soluta, cupiditate porro. Officia exercitationem
                      maxime provident quae perferendis! Odit quam aperiam,
                      mollitia unde laboriosam voluptatum nihil tenetur. Sequi
                      ad minus quisquam fugit eum reiciendis illo quaerat
                      suscipit esse a, illum cupiditate dolores.
                    </blockquote>
                  </div>
                </div>

                <div className="feedback-item">
                  <div className="info">
                    <img
                      src={process.env.PUBLIC_URL + "/img/ava3.jpg"}
                      alt="Luna Scalet"
                      className="avatar"
                    />
                    <p className="member-name">Luna Scalet</p>
                    <p className="desc">Lorem ipsum dolor sit amet.</p>
                    <div className="dots">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot active"></span>
                    </div>
                  </div>
                  <div className="content">
                    <img
                      src={process.env.PUBLIC_URL + "/img/open-quote.svg"}
                      alt=""
                      className="open-quotes"
                    />
                    <blockquote>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eveniet sunt est dolor, cum quaerat neque veniam libero
                      optio aliquam cupiditate paricupiditate at? Nobis
                      recusandae at culpa dignissimos saepe. Amet inventore quam
                      voluptas soluta, cupiditate porro. Officia exercitationem
                      maxime provident quae perferendis! Odit quam aperiam,
                      mollitia unde laboriosam voluptatum nihil tenetur. Sequi
                      ad minus quisquam fugit eum reiciendis illo quaerat
                      suscipit esse a, illum cupiditate dolores.
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="features">
            <div className="main-content">
              <div className="body">
                <div className="images">
                  <img
                    src={process.env.PUBLIC_URL + "/img/health1.jpg"}
                    alt=""
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/img/health2.jpg"}
                    alt=""
                  />
                </div>
                <div className="content">
                  <h2 className="heading-lv2">
                    THE CLASSName YOU WILL GET HERE
                  </h2>
                  <p className="desc">
                    Led by our team of expert and motivational instructors, "The
                    ClassName You Will Get Here" is a high-energy,
                    results-driven session that combines a perfect blend of
                    cardio, strength training, and functional exercises. Each
                    className is carefully curated to keep you engaged and
                    challenged, ensuring you never hit a plateau in your fitness
                    endeavors.
                  </p>

                  <a href="#!" className="btn cta-btn">
                    Book A ClassName
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="features features-2nd">
            <div className="main-content">
              <div className="body">
                <div className="images">
                  <img
                    src={process.env.PUBLIC_URL + "/img/health3.jpg"}
                    alt=""
                  />
                </div>
                <div className="content">
                  <h2 className="heading-lv2">
                    TAKE THE NEXT STEP TOWARD YOUR PERSONAL
                  </h2>
                  <p className="desc">
                    Take the next step toward. Join now to receive personalized
                    and more recommendations from the full Programe catalog.
                  </p>
                  <a href="#!" className="btn cta-btn">
                    Book A ClassName
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
}
