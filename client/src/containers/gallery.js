import React, { Component } from "react";
import Video from "../components/gallery/video";
import Gallery from "react-photo-gallery";
import Measure from "react-measure";
import Lightbox from "react-images";
import { PHOTO_SET, VIDEO_SET } from "../utils/helpers";
import Popover from "../components/gallery/popover";
import Footer from "../components/footer";

class gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      image: false,
      url: null,
      width: -1,
      currentImage: 0
    };
  }
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  onShowVideo = e => {
    const url = e.currentTarget.dataset.video;
    this.setState({
      image: false,
      show: true,
      url
    });
  };
  onClose = e => {
    this.setState({ show: false });
  };
  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };
  render() {
    const { show, image, url, width } = this.state;
    return (
      <span>
        <div className="gall--cont">
          <div className="gallery__section-title">
            <h2>PAST SHOW IMAGES</h2>
            <hr />
          </div>
          <div className="sect--one">
            <Measure
              bounds
              onResize={contentRect =>
                this.setState({ width: contentRect.bounds.width })
              }
            >
              {({ measureRef }) => {
                if (width < 1) {
                  return <div ref={measureRef} />;
                }
                let columns = 1;
                if (width >= 480) {
                  columns = 2;
                }
                if (width >= 1024) {
                  columns = 3;
                }
                if (width >= 1440) {
                  columns = 4;
                }
                return (
                  <div ref={measureRef}>
                    <Gallery
                      photos={PHOTO_SET}
                      columns={columns}
                      onClick={this.openLightbox}
                    />
                    <Lightbox
                      images={PHOTO_SET}
                      onClose={this.closeLightbox}
                      onClickPrev={this.gotoPrevious}
                      onClickNext={this.gotoNext}
                      currentImage={this.state.currentImage}
                      isOpen={this.state.lightboxIsOpen}
                    />
                  </div>
                );
              }}
            </Measure>
          </div>
          <div className="gallery__section-title">
            <h2>PAST SHOW VIDEOS</h2>
            <hr />
          </div>
          <div className="container-fluid sect--two">
            <div>
              <div className="row">
                <Video videoUrl={VIDEO_SET} click={this.onShowVideo} />
              </div>
            </div>
          </div>
          <Popover onClose={this.onClose} url={url} image={image} show={show} />
        </div>
        <Footer />
      </span>
    );
  }
}

export default gallery;
