import React, { PureComponent } from "react";
import { Link } from "react-router-dom";


class SectionFour extends PureComponent {
  render() {
    return (
      <div className="" id="about">
        <div className="row section-four">
          <div className="col-sm-6 section-four__left">
            <h6>MAKING GOSPEL MUSIC GLOBAL!</h6>
            <h1>SoundIT Africa</h1>
            <br />
            <p>
              SoundIT Africa is an online singing competition with an aim of
              leveraging on the simplicity of the Digital Media to discover and
              showcase new talents across Africa hence cutting loads of
              protocols to give these talents an easily way to be heard across
              Africa and Around the world.
            </p>

            <p>
              In 2017, with over 1,000 entries from different part of Africa
              especially Nigeria, Senegal and South Africa, Sound It had its
              first edition and the 5 finalist came to Lagos for the Grand
              finale. The panel of Judges was led by Uncle Ben (MTN Project Fame
              West Africa).
            </p>
            <br />
            <p>
              <Link to="/about">
                <span className="section-four__link">
                  LEARN MORE <i className="fas fa-angle-down" />
                </span>
              </Link>
            </p>
          </div>
          <div className="col-sm-6 section-four__right">
              
            <picture>
              <source srcSet="/images/gallery/collage.webp" type="image/webp" />
              <img
                className="section-four__picture img-responsive"
                data-src="/images/gallery/collage.png"
                src="/images/gallery/collage.png"
                alt="About colage SoundIT Africa"
              />
            </picture>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFour;
