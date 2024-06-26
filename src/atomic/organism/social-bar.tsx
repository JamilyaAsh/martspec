import React from "react";
import _ from "@/i18n/locale";

interface SocialBarProps {
    size?: number;
    color: "white" | "black";
}

export default function SocialBar(props: SocialBarProps) {
    const iconSize = props.size || 40;
    const svgAttrs = {
        width: iconSize,
        height: iconSize,
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
    };

    return (
        <div className={"d-flex justify-content-center flex-nowrap social-bar-" + props.color}>
            <a href="https://www.linkedin.com/company/martspec" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg {...svgAttrs}>
                    <title>{_("FOOTER.LINKEDIN_BTN.TITLE")}</title>
                    <path
                        d="M28 20.7444V26.2601H24.7713V21.0807C24.7713 19.8027 24.3004 18.9283 23.157 18.9283C22.2825 18.9283 21.7444 19.5336 21.5426 20.0718C21.4753 20.2735 21.4081 20.5426 21.4081 20.8789V26.2601H18.1794C18.1794 26.2601 18.2466 17.5157 18.1794 16.6413H21.4081V17.9865C21.8117 17.3139 22.6188 16.3722 24.3004 16.3722C26.3856 16.3722 28 17.7848 28 20.7444ZM14.8161 12C13.7399 12 13 12.7399 13 13.6816C13 14.6233 13.6726 15.3632 14.7489 15.3632C15.8924 15.3632 16.565 14.6233 16.565 13.6816C16.6323 12.6726 15.9596 12 14.8161 12ZM13.2018 26.2601H16.4305V16.6413H13.2018V26.2601Z"
                        fill="currentColor"
                    />
                </svg>
            </a>

            <a
                href={`mailto:support@martspec.com?subject=Martspec Question&body=I have a question about your products. `}
                target="_self"
                rel="noopener"
                aria-label="email"
            >
                <svg {...svgAttrs}>
                    <title>{_("FOOTER.EMAIL_BTN.TITLE")}</title>
                    <path
                        d="M26.3 13H13.7C12.9839 13 12.2972 13.2766 11.7908 13.7688C11.2845 14.2611 11 14.9288 11 15.625V24.375C11 25.0712 11.2845 25.7389 11.7908 26.2312C12.2972 26.7234 12.9839 27 13.7 27H26.3C27.0161 27 27.7028 26.7234 28.2092 26.2312C28.7155 25.7389 29 25.0712 29 24.375V15.625C29 14.9288 28.7155 14.2611 28.2092 13.7688C27.7028 13.2766 27.0161 13 26.3 13V13ZM25.697 14.75L20 18.9062L14.303 14.75H25.697ZM26.3 25.25H13.7C13.4613 25.25 13.2324 25.1578 13.0636 24.9937C12.8948 24.8296 12.8 24.6071 12.8 24.375V15.8437L19.46 20.7C19.6158 20.8136 19.8053 20.875 20 20.875C20.1947 20.875 20.3842 20.8136 20.54 20.7L27.2 15.8437V24.375C27.2 24.6071 27.1052 24.8296 26.9364 24.9937C26.7676 25.1578 26.5387 25.25 26.3 25.25Z"
                        fill="currentColor"
                    />
                </svg>
            </a>

            <a href="https://twitter.com/MartspecCom" target="_blank" rel="noopener" aria-label="Twitter">
                <svg {...svgAttrs}>
                    <title>{_("FOOTER.TWITTER_BTN.TITLE")}</title>
                    <path
                        d="M25.1761 12H27.9362L21.9061 18.3538L29 27H23.4447L19.0943 21.7562L14.1164 27H11.3546L17.8043 20.2038L11 12H16.6946L20.627 16.7931L25.1744 12H25.1761ZM24.2073 25.4769H25.7368L15.8644 13.4431H14.2232L24.2073 25.4769Z"
                        fill="currentColor"
                    />
                </svg>
            </a>

            <a href="https://www.facebook.com/martspec" target="_blank" rel="noopener" aria-label="Facebook">
                <svg {...svgAttrs}>
                    <title>{_("FOOTER.FACEBOOK_BTN.TITLE")}</title>
                    <path
                        d="M21.1047 20.064H23.5862L23.9758 17.583H21.1042V16.227C21.1042 15.1963 21.4464 14.2824 22.4259 14.2824H24V12.1172C23.7234 12.0805 23.1385 12 22.0333 12C19.7255 12 18.3724 13.1995 18.3724 15.9324V17.583H16V20.064H18.3724V26.8833C18.8423 26.9528 19.3182 27 19.8067 27C20.2483 27 20.6793 26.9603 21.1047 26.9036V20.064Z"
                        fill="currentColor"
                    />
                </svg>
            </a>
        </div>
    );
}
