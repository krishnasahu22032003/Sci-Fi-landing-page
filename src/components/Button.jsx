import React from 'react';

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`
        group relative z-10 inline-flex items-center cursor-pointer justify-center gap-2
        px-6 py-2 rounded-lg overflow-hidden
        text-sm sm:text-base uppercase font-robert-medium tracking-widest
        text-white bg-[#1A1A1A]
        hover:bg-[#e4f0ff]
        hover:text-black
        hover:shadow-[0_0_16px_rgba(255,255,255,0.4)]
        transition-all duration-300 ease-in-out
        ${containerClass}
      `}
    >
      {leftIcon && (
        <span className="text-lg flex items-center justify-center">
          {leftIcon}
        </span>
      )}
      <span className="relative z-20">{title}</span>
      {rightIcon && (
        <span className="text-lg flex items-center justify-center">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
