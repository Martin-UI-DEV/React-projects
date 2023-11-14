import { useState } from "react";

export function FollowCard ({children, username, initialIsFollowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    let handleClick = () => {
        setIsFollowing(!isFollowing);
    } 
    const imgSrc= `https://unavatar.io/${username}`,
    text = isFollowing ? "Siguiendo" : "Seguir",
    btnFollowClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button";
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img className="tw-followCard-avatar" src={imgSrc} />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{username}</span>
                </div>
               
            </header>
            <aside>
                    <button className={btnFollowClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                    </button>
                </aside>
        </article>
    )
}
