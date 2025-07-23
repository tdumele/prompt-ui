import React from 'react';

interface LogoProps {
    size?: number;
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ size = 40, className = '' }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle
                cx="50"
                cy="50"
                r="45"
                fill="url(#gradient)"
                stroke="#2563eb"
                strokeWidth="2"
            />
            <path
                d="M25 35C25 30.5817 28.5817 27 33 27H67C71.4183 27 75 30.5817 75 35V55C75 59.4183 71.4183 63 67 63H45L35 70V63H33C28.5817 63 25 59.4183 25 55V35Z"
                fill="white"
                stroke="#2563eb"
                strokeWidth="1.5"
            />
            <circle cx="42" cy="42" r="2" fill="#2563eb" />
            <circle cx="58" cy="42" r="2" fill="#2563eb" />
            <circle cx="50" cy="52" r="2" fill="#2563eb" />
            <path
                d="M42 42L50 52L58 42"
                stroke="#2563eb"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
            />
            <path
                d="M35 38H40M60 38H65M35 48H40M60 48H65"
                stroke="#3b82f6"
                strokeWidth="1"
                strokeLinecap="round"
            />
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#dbeafe" />
                    <stop offset="100%" stopColor="#bfdbfe" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Logo;