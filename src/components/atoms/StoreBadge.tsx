import React from "react";

interface StoreBadgeProps {
  type: "App Store" | "Google Play" | "Website" | "Demo";
  href: string;
}

export const StoreBadge: React.FC<StoreBadgeProps> = ({ type, href }) => {
  const getIcon = () => {
    switch (type) {
      case "App Store":
        return (
          <svg
            viewBox="0 0 135 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="135"
            height="40"
          >
            <rect width="135" height="40" rx="8" fill="black" />
            <path
              d="M26.2341 22.8462C26.2163 20.3705 28.2435 19.1673 28.3414 19.1139C27.1843 17.4309 25.394 17.1816 24.7525 17.1549C23.1672 16.9946 21.6521 18.0988 20.8504 18.0988C20.0487 18.0988 18.7927 17.1816 17.4563 17.2083C15.7011 17.2351 14.0886 18.2325 13.18 19.8083C11.3537 22.9786 12.6991 27.6627 14.4719 30.2185C15.3444 31.4746 16.3686 32.8911 17.7235 32.8421C19.0335 32.7887 19.5235 32.0002 21.1087 31.9958C22.6894 31.9913 23.1348 32.8421 24.4986 32.8154C25.8988 32.7887 26.7713 31.528 27.635 30.2721C28.6146 28.8475 29.02 27.4622 29.0422 27.391C29.0155 27.3821 26.2519 26.3315 26.2341 22.8462Z"
              fill="white"
            />
            <path
              d="M23.1526 15.6591C23.8698 14.7821 24.3551 13.5623 24.2215 12.3335C23.1672 12.378 21.8941 13.0371 21.1418 13.9141C20.4651 14.6931 19.873 15.9351 20.0289 17.137C21.1911 17.2216 22.4354 16.5361 23.1526 15.6591Z"
              fill="white"
            />
            <text
              x="40"
              y="16"
              fill="white"
              style={{ fontSize: "7px", fontWeight: "500" }}
            >
              Download on the
            </text>
            <text
              x="40"
              y="30"
              fill="white"
              style={{ fontSize: "14px", fontWeight: "600" }}
            >
              App Store
            </text>
          </svg>
        );
      case "Google Play":
        return (
          <svg
            viewBox="0 0 135 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="135"
            height="40"
          >
            <rect width="135" height="40" rx="8" fill="black" />
            <path
              d="M14.6667 11.2324C14.3333 11.6028 14.1333 12.1584 14.1333 12.8713V27.1287C14.1333 27.8416 14.3333 28.3972 14.6667 28.7676L14.7333 28.8342L22.4267 21.1409V20.8591L14.7333 13.1658L14.6667 11.2324Z"
              fill="#EA4335"
            />
            <path
              d="M24.9667 23.7001L22.42 21.1467V20.8534L24.9667 18.3L25.04 18.34L28.06 20.0534C28.92 20.5401 28.92 21.4601 28.06 21.9467L25.04 23.6601L24.9667 23.7001Z"
              fill="#FBBC04"
            />
            <path
              d="M25.04 23.66L22.4267 21.0467L14.7333 28.74C15.0267 29.0467 15.52 29.0934 16.08 28.7734L25.04 23.66Z"
              fill="#4285F4"
            />
            <path
              d="M25.04 18.34L16.08 13.2267C15.52 12.9067 15.0267 12.9534 14.7333 13.26L22.4267 20.9534L25.04 18.34Z"
              fill="#34A853"
            />
            <text
              x="40"
              y="16"
              fill="white"
              style={{ fontSize: "7px", fontWeight: "500" }}
            >
              GET IT ON
            </text>
            <text
              x="40"
              y="30"
              fill="white"
              style={{ fontSize: "14px", fontWeight: "600" }}
            >
              Google Play
            </text>
          </svg>
        );
      case "Website":
      case "Demo":
      default:
        return (
          <div className="website-badge">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              width="18"
              height="18"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span>{type === "Demo" ? "View Demo" : "Visit Website"}</span>
          </div>
        );
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`store-badge store-badge--${type.toLowerCase().replace(" ", "-")}`}
    >
      {getIcon()}
    </a>
  );
};
