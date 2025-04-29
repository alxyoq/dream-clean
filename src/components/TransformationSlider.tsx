// src/components/TransformationSlider.tsx
import React from 'react';
import 'img-comparison-slider';
import 'img-comparison-slider/dist/styles.css';

interface TransformationSliderProps {
  beforeImage: string;
  afterImage: string;
  altText?: string;
  isCombinedImage?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

export const TransformationSlider: React.FC<TransformationSliderProps> = ({
  beforeImage,
  afterImage,
  altText = 'Transformation',
  isCombinedImage = true,
  orientation = 'horizontal',
}) => {
  const beforeClass = isCombinedImage
    ? orientation === 'horizontal'
      ? 'img-before-horizontal'
      : 'img-before-vertical'
    : '';
  const afterClass = isCombinedImage
    ? orientation === 'horizontal'
      ? 'img-after-horizontal'
      : 'img-after-vertical'
    : '';

  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <img-comparison-slider className="w-full h-full" hover value={50}>
        <div slot="first" className="relative w-full h-full">
          <img
            src={beforeImage}
            alt={`Before ${altText}`}
            className={`w-full h-full object-cover ${beforeClass}`}
          />
          <span className="absolute top-4 left-4 bg-[#46aebe] text-white font-bold py-1 px-3 rounded-full text-sm">
            Before
          </span>
        </div>
        <div slot="second" className="relative w-full h-full">
          <img
            src={afterImage}
            alt={`After ${altText}`}
            className={`w-full h-full object-cover ${afterClass}`}
          />
          <span className="absolute top-4 right-4 bg-[#f9a280] text-white font-bold py-1 px-3 rounded-full text-sm">
            After
          </span>
        </div>
      </img-comparison-slider>
    </div>
  );
};
