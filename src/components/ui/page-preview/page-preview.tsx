import React from 'react';
import { Banner } from '../../primitives/banner';

export const PagePreview = () => {
  return (
    <div className="mt-[29px] text-center">
      <Banner>Write paper 10x faster with Litero AI</Banner>
      <h2 className="mt-3 text-[40px] leading-[48px]">
        <span className="block">Just paste all your paper details:</span>
        <span className="block font-semibold">
          topic, structure, key points, etc.
        </span>
      </h2>
    </div>
  );
};
