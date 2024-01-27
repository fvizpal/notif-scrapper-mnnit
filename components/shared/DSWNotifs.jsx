import React from "react";

const DSWNotifs = ({ notifications }) => {
    return (
        <div className="basis-1/3 px-5 border rounded-md overflow-auto">
            <h3>Notice board Notifications</h3>
            {notifications?.map((notif) => (
                <div className="my-5" key={notif}>
                    <p>* {notif}</p>
                </div>
            ))}
        </div>
    );
};

export default DSWNotifs;
