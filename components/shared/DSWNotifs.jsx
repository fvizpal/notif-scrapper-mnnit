import React from "react";
import EachNotif from "./EachNotif";
import Link from "next/link";

const DSWNotifs = ({ notifications }) => {
    return (
        <div className="basis-1/3 px-5 border rounded-md overflow-auto">
            <Link href={"http://www.mnnit.ac.in/index.php/notice-board"} 
            className="font-bold text-center underline text-xl"
            >
                Notice board Notifications</Link>
            {notifications?.map((notif) => (
                <div key={notif}>
                    <EachNotif>
                    {notif}
                    </EachNotif>
            </div>
            ))}
        </div>
    );
};

export default DSWNotifs;
