import styles from "./Banner.module.scss";
import banner from "/images/home-page/main-banner.png";

const Banner = ({ image, coverBox, coverText }) => {
  const images = {
    top: image.top,
    left: image.left,
    right: image.right,
  };

  const cover = {
    width: coverBox.width,
    top: coverBox.top,
    left: coverBox.left,
    right: coverBox.right,
  };

  const coverTxt = {
    fontSize: coverText.fontSize,
    top: coverText.top,
    left: coverText.left,
    right: coverText.right,
  };

  return (
    <div className={styles.thumbnail}>
      <img
        src={banner}
        alt="main-banner"
        className={styles.image}
        style={images}
      />
      <div className={styles.cover} style={cover}>
        <h1 className={styles.coverText} style={coverTxt}>
          Green Chop
        </h1>
      </div>
    </div>
  );
};

export default Banner;
