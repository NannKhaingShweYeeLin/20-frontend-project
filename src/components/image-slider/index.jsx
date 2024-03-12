import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
import data from "../image-slider/data";

export default function ImageSlider({ limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    try {
      setLoading(true);

      // Simulate pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedData = data.slice(startIndex, endIndex);

      setImages(paginatedData);
      setLoading(false);
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrevious() {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  }

  function handleNext() {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  }

  useEffect(() => {
    fetchImages();
  }, [page]); // Fetch images when the page changes

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred! {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
      {images.map((imageItem, index) => (
        <img
          key={imageItem.id}
          alt={imageItem.url}
          src={imageItem.url}
          className={index === currentSlide ? "current-image" : "current-image hide-current-image"}
        />
      ))}
      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
      <span className="circle-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={index === currentSlide ? "current-indicator" : "current-indicator inactive-indicator"}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </span>
    </div>
  );
}
