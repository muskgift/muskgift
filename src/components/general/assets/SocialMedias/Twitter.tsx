import React from 'react';

interface TwitterProps {
  className: string;
  onClick: React.MouseEventHandler<SVGSVGElement>;
}

const Twitter: React.FC<TwitterProps> = ({ className, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    onClick={onClick}
    fill="none"
    viewBox="0 0 25 24"
  >
    <path
      fill="#fff"
      d="M24.055 2.857a8.985 8.985 0 01-2.843.924c1.024-.723 1.804-1.86 2.17-3.229a9.014 9.014 0 01-3.128 1.414C19.352.825 18.06.118 16.655.118c-2.73 0-4.928 2.628-4.928 5.846 0 .462.032.908.112 1.33-4.101-.233-7.728-2.566-10.166-6.113a6.71 6.71 0 00-.677 2.957c0 2.026.879 3.82 2.19 4.855-.795-.017-1.57-.29-2.228-.718v.066c0 2.84 1.71 5.2 3.952 5.741-.4.128-.841.195-1.292.195-.315 0-.635-.022-.935-.1.639 2.316 2.452 4.014 4.609 4.07-1.678 1.553-3.81 2.494-6.113 2.494-.404 0-.794-.022-1.179-.078 2.185 1.67 4.773 2.623 7.564 2.623 9.077 0 14.038-8.909 14.038-16.632 0-.256-.01-.506-.019-.757.978-.824 1.8-1.854 2.472-3.04z"
    />
  </svg>
);

export default Twitter;