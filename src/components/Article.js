
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
    const renderEmoji = () => {
        if (minutes < 30) {
            const cups = Math.ceil(minutes / 5);
            return "☕️".repeat(cups);
        } else {
            const boxes = Math.ceil(minutes / 10);
            return "🍱".repeat(boxes);
        }
    };

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small> {/* ✅ Added date */}
            <small>
                {renderEmoji()} {minutes} min read
            </small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;
