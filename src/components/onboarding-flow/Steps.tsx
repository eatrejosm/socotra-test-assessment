'use client';
import { Fragment } from 'react';
type StepsProps = {
  step: number;
};
const steps = [1, 2, 3, 4];
export default function Steps({ step }: StepsProps) {
  return (
    <div className="flex justify-between items-center mb-[60px] gap-2 px-4">
      {steps.map((index) => (
        <Fragment key={index}>
          <div
            className={`h-5 w-5 flex border items-center justify-center rounded-full text-xs font-raleway ${
              index === step
                ? 'bg-[#26AEAF] border-[#26AEAF] text-white'
                : 'bg-white border-[#C5CAD1] text-[#26AEAF] '
            }`}
          >
            {index}
          </div>
          {index < steps.length && (
            <div className="grow h-[1px] bg-[#C5CAD1]"></div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
