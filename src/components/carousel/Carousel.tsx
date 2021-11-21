import { useState, useEffect } from "react";

interface Props {
  images: { url: string; alt: string }[];
}

export default function Carousel({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setActiveIndex(i => (i+1) % images.length)
  //   }, 3000);
  //   return () => clearInterval(id);
  // }, []);

  return (
    <div className="">
      <div className="mb-5 mx-auto text-center w-1/2">
        <img src={images[activeIndex].url} alt={images[activeIndex].alt} className="mb-2 mx-auto" height="300"/>
        <div>{images[activeIndex].alt}</div>
      </div>
      <div className="flex justify-center">
        {Array(images.length)
          .fill("")
          .map((t, i) => (
            <div
              key={`dot-${i}`}
              className={`w-3 h-3 rounded-full bg-gray-${activeIndex === i ? '400' : '300'} mx-2 cursor-pointer`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
      </div>
    </div>
  );
}
