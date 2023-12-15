import React from 'react';
import PropTypes from 'prop-types';
// Bell Icon
export const BellIcon = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g id="bell">
            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M5.24903 8.9998C5.24914 5.27197 8.27118 2.25 11.999 2.25C15.727 2.25 18.749 5.27208 18.749 9L18.7488 9.04919V9.75C18.7488 11.8731 19.5499 13.8074 20.8674 15.2699C21.0339 15.4547 21.0979 15.71 21.0383 15.9516C20.9787 16.1931 20.8033 16.3893 20.5699 16.4755C19.0259 17.0455 17.4096 17.4659 15.7386 17.7192C15.7455 17.812 15.749 17.9056 15.749 18C15.749 20.0711 14.0701 21.75 11.999 21.75C9.92797 21.75 8.24903 20.0711 8.24903 18C8.24903 17.9056 8.25254 17.812 8.25942 17.7192C6.58836 17.4659 4.9719 17.0455 3.42777 16.4755C3.19441 16.3893 3.01895 16.1931 2.95935 15.9516C2.89976 15.71 2.96379 15.4547 3.13029 15.2699C4.44782 13.8074 5.24884 11.8731 5.24884 9.75L5.24903 8.9998ZM9.75124 17.8993C9.74977 17.9326 9.74903 17.9662 9.74903 18C9.74903 19.2426 10.7564 20.25 11.999 20.25C13.2417 20.25 14.249 19.2426 14.249 18C14.249 17.9662 14.2483 17.9326 14.2468 17.8992C13.5063 17.9659 12.7564 18 11.9988 18C11.2414 18 10.4917 17.966 9.75124 17.8993Z" fill="var(--icon-color)" />
        </g>
    </svg>


);

// Chevron Left
export const ChevronLeftIcon = ({ size, className }) => (
    <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
>
    <g id="chevron-left">
        <path
            id="Vector"
            d="M15.75 19.5L8.25 12L15.75 4.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </g>
</svg>

);

ChevronLeftIcon.propTypes = {
    size: PropTypes.number.isRequired,
    className: PropTypes.string,
};

// Chevron Right
export const ChevronRightIcon = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g id="chevron-right">
            <path id="Vector 335" d="M8.25 4.5L15.75 12L8.25 19.5" stroke="#18A886" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>
);

// Chevron Up
export const ChevronUpIcon = ({ size }) => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        {/* SVG content for icon 2 */}
    </svg>
);
// Chevron Down
export const ChevronDownIcon = ({ size }) => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        {/* SVG content for icon 2 */}
    </svg>
);

// Credit Card
export const CreditCardIcon = ({ size }) => (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        {/* SVG content for icon 3 */}
    </svg>
);

// Send Money
export const SendMoneyIcon = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
       <g id="paper-airplane">
<path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M2.73407 2.59837C2.92747 2.4019 3.21306 2.32737 3.47779 2.40427C10.1764 4.35018 16.3971 7.41814 21.923 11.3908C22.119 11.5317 22.2352 11.7583 22.2352 11.9997C22.2352 12.2411 22.119 12.4678 21.923 12.6087C16.3972 16.5814 10.1765 19.6494 3.47789 21.5954C3.21315 21.6723 2.92756 21.5978 2.73417 21.4013C2.54077 21.2048 2.47076 20.9181 2.55183 20.6546L5.21479 12L2.55174 3.34506C2.47066 3.08157 2.54068 2.79484 2.73407 2.59837ZM6.55342 12.75L4.40017 19.7481C10.0792 17.9504 15.3884 15.3199 20.1843 11.9997C15.3884 8.67959 10.0792 6.04919 4.40007 4.25159L6.55342 11.25L13.4998 11.25C13.914 11.25 14.2498 11.5858 14.2498 12C14.2498 12.4142 13.914 12.75 13.4998 12.75L6.55342 12.75Z" fill="white"/>
</g>
    </svg>
);


// Pay Bill
export const PayBillIcon = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g id="document-text">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 3C5.41789 3 5.25 3.16789 5.25 3.375V20.625C5.25 20.8321 5.41789 21 5.625 21H18.375C18.5821 21 18.75 20.8321 18.75 20.625V11.625C18.75 10.1753 17.5747 9 16.125 9H14.625C13.5895 9 12.75 8.16053 12.75 7.125V5.625C12.75 4.17525 11.5747 3 10.125 3H5.625ZM5.625 1.5C4.58947 1.5 3.75 2.33947 3.75 3.375V20.625C3.75 21.6605 4.58947 22.5 5.625 22.5H18.375C19.4105 22.5 20.25 21.6605 20.25 20.625V11.25C20.25 5.86522 15.8848 1.5 10.5 1.5H5.625ZM13.757 3.66785C14.0715 4.25019 14.25 4.91675 14.25 5.625V7.125C14.25 7.33211 14.4179 7.5 14.625 7.5H16.125C16.8332 7.5 17.4998 7.6785 18.0822 7.99296C17.2488 6.05549 15.6945 4.50123 13.757 3.66785ZM7.5 15C7.5 14.5858 7.83579 14.25 8.25 14.25H15.75C16.1642 14.25 16.5 14.5858 16.5 15C16.5 15.4142 16.1642 15.75 15.75 15.75H8.25C7.83579 15.75 7.5 15.4142 7.5 15ZM7.5 18C7.5 17.5858 7.83579 17.25 8.25 17.25H12C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75H8.25C7.83579 18.75 7.5 18.4142 7.5 18Z" fill="white"/>
        </g>
    </svg>
);

// Reward
export const RewardIcon = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g id="gift">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.375 3C8.33947 3 7.5 3.83947 7.5 4.875C7.5 5.91053 8.33947 6.75 9.375 6.75H11.25V4.875C11.25 3.83947 10.4105 3 9.375 3ZM12 2.7535C11.3813 1.98888 10.4352 1.5 9.375 1.5C7.51104 1.5 6 3.01104 6 4.875C6 5.5688 6.20935 6.21371 6.56833 6.75H3.375C2.33947 6.75 1.5 7.58947 1.5 8.625V10.125C1.5 11.0321 2.14416 11.7888 3 11.9625V19.5C3 20.7426 4.00736 21.75 5.25 21.75H19.5C20.7426 21.75 21.75 20.7426 21.75 19.5V11.9625C22.6058 11.7888 23.25 11.0321 23.25 10.125V8.625C23.25 7.58947 22.4105 6.75 21.375 6.75H17.4317C17.7906 6.21371 18 5.5688 18 4.875C18 3.01104 16.489 1.5 14.625 1.5C13.5648 1.5 12.6187 1.98888 12 2.7535ZM12.75 8.25V10.5H21.375C21.5821 10.5 21.75 10.3321 21.75 10.125V8.625C21.75 8.41789 21.5821 8.25 21.375 8.25H12.75ZM20.25 12H12.75V20.25H19.5C19.9142 20.25 20.25 19.9142 20.25 19.5V12ZM11.25 20.25V12H4.5V19.5C4.5 19.9142 4.83579 20.25 5.25 20.25H11.25ZM11.25 10.5V8.25H3.375C3.16789 8.25 3 8.41789 3 8.625V10.125C3 10.3321 3.16789 10.5 3.375 10.5H11.25ZM12.75 6.75H14.625C15.6605 6.75 16.5 5.91053 16.5 4.875C16.5 3.83947 15.6605 3 14.625 3C13.5895 3 12.75 3.83947 12.75 4.875V6.75Z" fill="white"/>
        </g>
    </svg>
);



// Goal
export const GoalIcon = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g id="goals">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2194 6.26793C15.3679 5.88122 15.8017 5.68808 16.1884 5.83652L22.1297 8.11716C22.5164 8.2656 22.7095 8.69942 22.5611 9.08612L20.2804 15.0274C20.132 15.4141 19.6982 15.6072 19.3115 15.4588C18.9248 15.3104 18.7316 14.8765 18.8801 14.4898L20.5118 10.239L19.4253 10.7227C16.9721 11.815 15.1036 13.6758 13.975 15.8962C13.8662 16.1104 13.6614 16.2594 13.4241 16.2971C13.1869 16.3348 12.946 16.2566 12.7761 16.0868L9 12.3107L2.78033 18.5303C2.48744 18.8232 2.01256 18.8232 1.71967 18.5303C1.42678 18.2374 1.42678 17.7626 1.71967 17.4697L8.46967 10.7197C8.61032 10.579 8.80109 10.5 9 10.5C9.19891 10.5 9.38968 10.579 9.53033 10.7197L13.1363 14.3257C14.4369 12.2046 16.3711 10.4406 18.8152 9.35239L19.9017 8.86864L15.6508 7.23689C15.2641 7.08845 15.071 6.65463 15.2194 6.26793Z" fill="white" />
        </g>
    </svg>
);

// Home
export const HomeIcon = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g id="home">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2652 3.57578C12.1187 3.42933 11.8813 3.42933 11.7348 3.57578L5.25 10.0606V19.875C5.25 20.0821 5.41789 20.25 5.625 20.25H9V16.125C9 15.0894 9.83947 14.25 10.875 14.25H13.125C14.1605 14.25 15 15.0894 15 16.125V20.25H18.375C18.5821 20.25 18.75 20.0821 18.75 19.875V10.0606L12.2652 3.57578ZM20.25 11.5606L21.2197 12.5303C21.5126 12.8232 21.9874 12.8232 22.2803 12.5303C22.5732 12.2374 22.5732 11.7625 22.2803 11.4696L13.3258 2.51512C12.5936 1.78288 11.4064 1.78288 10.6742 2.51512L1.71967 11.4696C1.42678 11.7625 1.42678 12.2374 1.71967 12.5303C2.01256 12.8232 2.48744 12.8232 2.78033 12.5303L3.75 11.5606V19.875C3.75 20.9105 4.58947 21.75 5.625 21.75H18.375C19.4105 21.75 20.25 20.9105 20.25 19.875V11.5606ZM13.5 20.25H10.5V16.125C10.5 15.9178 10.6679 15.75 10.875 15.75H13.125C13.3321 15.75 13.5 15.9178 13.5 16.125V20.25Z" fill="#141413" />
        </g>
    </svg>
);


// Info
export const InfoIcon = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <g id="information-circle">
            <path id="Vector" d="M11.25 11.25L11.2915 11.2293C11.8646 10.9427 12.5099 11.4603 12.3545 12.082L11.6455 14.918C11.4901 15.5397 12.1354 16.0573 12.7085 15.7707L12.75 15.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 8.25H12.0075V8.2575H12V8.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </g>
    </svg>

);

export default {
    BellIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon,
    ChevronDownIcon,
    CreditCardIcon,
    SendMoneyIcon,
    PayBillIcon,
    RewardIcon,
    GoalIcon,
    HomeIcon,
    InfoIcon

};
