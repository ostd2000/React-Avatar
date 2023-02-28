import React, { useEffect, useRef } from "react";
import "./AvatarNotGoodPractice.scss";

import { APP_COLORS, APP_FONTS } from "../consts/generalConsts";

import PersonIcon from "@mui/icons-material/Person";

const AvatarNotGoodPracticeC = ({
    children,
    className,
    src,
    alt,
    online,
    offline,
}) => {
    const avatarCRef = useRef();
    const avatarCAvatarRef = useRef();
    const avatarCPlaceholderIconRef = useRef();
    const avatarCUsernameRef = useRef();

    useEffect(() => {
        avatarCRef.current.style.position = "relative";
        avatarCRef.current.style.display = "flex";
        avatarCRef.current.style.flexDirection = "column";
        avatarCRef.current.style.alignItems = "center";
        avatarCRef.current.style.gap = "1rem";

        avatarCAvatarRef.current.style.width = "3.5rem";
        avatarCAvatarRef.current.style.height = "3.5rem";
        avatarCAvatarRef.current.style.borderRadius = "50%";

        avatarCUsernameRef.current.style.color = APP_COLORS.COLOR_TXT_200;

        if (!src) {
            avatarCPlaceholderIconRef.current.style.width = "3.5rem";
            avatarCPlaceholderIconRef.current.style.height = "3.5rem";

            avatarCPlaceholderIconRef.current.style.display = "grid";
            avatarCPlaceholderIconRef.current.style.placeItems = "center";

            avatarCPlaceholderIconRef.current.style.borderRadius = "50%";

            avatarCPlaceholderIconRef.current.style.backgroundColor =
                APP_COLORS.COLOR_DISABLED;
            avatarCPlaceholderIconRef.current.style.color =
                APP_COLORS.COLOR_DISABLED_TXT;
        }
    }, []);

    return (
        <div className={`avatar-c ${className}`} ref={avatarCRef}>
            <span className="avatar-c__avatar" ref={avatarCAvatarRef}>
                {src && (
                    <img
                        className="avatar-c__avatar"
                        src={src}
                        alt={alt}
                        style={{
                            width: "3.5rem",
                            height: "3.5rem",
                            borderRadius: "50%",
                        }}
                    />
                )}
            </span>

            <span
                className="avatar-c__placeholder-icon"
                ref={avatarCPlaceholderIconRef}
            >
                {!src && <PersonIcon />}
            </span>

            <span className="avatar-c__username" ref={avatarCUsernameRef}>
                {children}
            </span>
        </div>
    );
};

export default AvatarNotGoodPracticeC;
