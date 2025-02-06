"use client";

import { useState } from "react";
import { Slider } from "@/app/ui/augmentation/slider";
import { Button } from "@/app/ui/augmentation/button";
import Image from "next/image"

type AugmentFormParams = {
  imageUrls: string[];
};

export default function AugmentForm({ imageUrls }: AugmentFormParams) {
  const [rotation, setRotation] = useState<number>(0);
  const [positionX, setPositionX] = useState<number>(0);
  const [positionY, setPositionY] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleReset = () => {
    setRotation(0);
    setPositionX(0);
    setPositionY(0);
  };


  const handleNext = () => {
    setCurrentIndex((prevImage) =>
      prevImage + 1 === imageUrls.length ? 0 : prevImage + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevImage) =>
      prevImage - 1 === imageUrls.length ? -1 : prevImage - 1
    );
  };

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-[50vw] h-full">
      <form className="bg-white flex flex-col w-[40vw] p-6 rounded-xl shadow-md">
        <div className="bg-pink-100 flex-col rounded-2xl p-8 mb-6 aspect-square flex items-center ">
          <div
            style={{
              transform: `rotate(${rotation}deg) translate(${positionX}px, ${positionY}px)`,
            }}
          >
            <div>
              {imageUrls.map((_, index) => (
                <div key={index} onClick={() => handleClick(index)}></div>
              ))}
            </div>
            <Image 
            key={currentIndex} 
            className="rounded-xl"
            src={imageUrls[currentIndex]}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL="/placeholder.svg"
            alt="image"

            />
          </div>
          <div className="flex justify-between pt-2 gap-48 mt-10">
              <div
                className="flex cursor-pointer flex-col transform duration-75 ease-in hover:translate-y-1 hover:bg-rose-400 border-1 border-white bg-rose-300 rounded-2xl p-2"
                onClick={handlePrevious}
              >
                <h2>Prev</h2>
              </div>
              <div
                className="flex flex-col cursor-pointer transform duration-75 ease-in hover:translate-y-1 hover:bg-rose-400 border-1 border-white bg-rose-300 rounded-3xl p-2"
                onClick={handleNext}
              >
                <h2>Next</h2>
              </div>
            </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rotation
            </label>
            <Slider
              min={0}
              max={360}
              step={1}
              value={[rotation]}
              onValueChange={(value) => setRotation(value[0])}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position X
            </label>
            <Slider
              min={-50}
              max={50}
              step={1}
              value={[positionX]}
              onValueChange={(value) => setPositionX(value[0])}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Position Y
            </label>
            <Slider
              min={-50}
              max={50}
              step={1}
              value={[positionY]}
              onValueChange={(value) => setPositionY(value[0])}
              className="w-full"
            />
          </div>
        </div>
        <Button
          variant="secondary"
          onClick={handleReset}
          className="w-full mt-3 mr-2 hover:bg-gray-100"
        >
          <span className="font-extrabold text-md">Reset</span>
        </Button>
        <Button
          variant="default"
          className="w-full  bg-rose-300 hover:bg-rose-500"
        >
          Apply
        </Button>
      </form>
    </div>
  );
}
