import Slider_data from "./API/Slider_data";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsDot } from "react-icons/bs";

const App = () => {
  const [Slider, setSlider] = useState(Slider_data);
  const [currentIndex, setcurrentIndex] = useState(0);

  const prevSlide = () => {
    const firstslide = currentIndex === 0;
    const nextIndex = firstslide ? Slider.length - 1 : currentIndex - 1;
    setcurrentIndex(nextIndex);
  };
  const nextSlide = () => {
    const islastIndex = currentIndex === Slider.length - 1;
    const newIndex = islastIndex ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };
  const gotoSlide = (slideIndex) => {
    setcurrentIndex(slideIndex);
  };
  return (
    <>
      <div
        id="Parent_container"
        className="max-w-[1400px] m-auto w-full h-[400px] px-5 py-16 border-2 border-black rounded-xl "
      >
        <div
          id="image_container"
          style={{ backgroundImage: `url(${Slider[currentIndex].url})` }}
          className="border w-full h-full bg-center bg-cover rounded-xl relative group duration-500"
        >
          <IoIosArrowBack
            id="left_arrow"
            className="absolute top-[50%] left-1 text-2xl text-white bg-black/20 rounded-full p-1 cursor-pointer hidden group-hover:block"
            onClick={prevSlide}
          />
          <IoIosArrowForward
            id="right_arrow"
            className="absolute top-[50%] right-1 text-2xl text-white bg-black/20 rounded-full p-1 cursor-pointer hidden group-hover:block"
            onClick={nextSlide}
          />
        </div>
        <div id="Dots...." className="flex justify-center py-3 ">
          {Slider.map((elem, slideIndex) => {
            return (
              <BsDot
                key={slideIndex}
                className="text-3xl cursor-pointer"
                onClick={() => gotoSlide(slideIndex)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
