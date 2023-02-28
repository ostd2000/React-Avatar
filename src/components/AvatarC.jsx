import React from "react";
import "./AvatarC.scss";

import PersonIcon from "@mui/icons-material/Person";
import { APP_COLORS } from "../consts/generalConsts";

const AvatarC = ({ children, src, alt, outlined, online, offline }) => {
    let styles = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
    };

    let avatarStyles = {
        width: "4rem",
        height: "4rem",

        borderRadius: "50%",
    };

    let placeholderStyles = {
        width: "4rem",
        height: "4rem",

        display: "grid",
        placeItems: "center",

        borderRadius: "50%",

        backgroundColor: APP_COLORS.COLOR_DISABLED,
        color: APP_COLORS.COLOR_DISABLED_TXT,
    };

    let usernameStyles = {
        color: APP_COLORS.COLOR_TXT_200,
    };

    let outlineColor = APP_COLORS.COLOR_PRIMARY_0;

    if (online) {
        outlineColor = APP_COLORS.COLOR_ONLINE;
    }

    if (offline) {
        outlineColor = APP_COLORS.COLOR_DISABLED;
    }

    if (outlined) {
        avatarStyles = {
            ...avatarStyles,
            outline: `${outlineColor} solid 2px`,
            outlineOffset: "3px",
        };

        placeholderStyles = {
            ...placeholderStyles,
            outline: `${outlineColor} solid 2px`,
            outlineOffset: "3px",
        };
    }

    return (
        <div className="avatar-c" style={styles}>
            {src ? (
                <img
                    className="avatar-c__avatar"
                    style={avatarStyles}
                    src={src}
                    alt={alt}
                />
            ) : (
                <span
                    className="avatar-c__placeholder"
                    style={placeholderStyles}
                >
                    <PersonIcon />
                </span>
            )}

            {children && (
                <span className="avatar-c__username" style={usernameStyles}>
                    {children}
                </span>
            )}
        </div>
    );
};

export default AvatarC;
