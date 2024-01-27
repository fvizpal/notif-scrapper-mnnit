import React from "react";

const HomepageNotifs = ({ notifications }) => {
    return (
        <div className="basis-1/3 px-5">
            <h3>Home Anouncements</h3>
            {notifications?.map((notif) => (
                <div className="my-5" key={notif}>
                    <p>* {notif}</p>
                </div>
            ))}
        </div>
    );
};

export default HomepageNotifs;
