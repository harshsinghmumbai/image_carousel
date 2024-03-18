import Slider_data from "./API/Slider_data";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const App = () => {
  const [data, setdata] = useState(Slider_data);
  return (
    <>
      <div
        id="Parent_container"
        className="max-w-[1400px] m-auto w-full h-[400px] px-5 py-16 border-2 border-black "
      >
        <div
          id="image_container"
          style={{ backgroundImage: `url(${data[0].url})` }}
          className="border w-full h-full bg-center bg-cover rounded-xl relative"
        >
          <IoIosArrowBack
            id="left_arrow"
            className="absolute top-[50%] left-3 text-2xl text-white bg-black/20 rounded-full p-1"
          />
          <IoIosArrowForward
            id="right_arrow"
            className="absolute top-[50%] right-3 text-2xl text-white bg-black/20 rounded-full p-1"
          />
        </div>
      </div>
    </>
  );
};

export default App;
