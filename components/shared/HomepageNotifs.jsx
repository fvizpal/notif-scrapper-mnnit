import React from "react";
import EachNotif from "./EachNotif";
import Link from "next/link";

const HomepageNotifs = ({ notifications }) => {
    return (
        <div className="basis-1/3 px-5 border rounded-md overflow-auto">
            <Link
                href={"http://mnnit.ac.in/"}
            className="font-bold text-center underline text-xl">
                Home Anouncements
            </Link>
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

export default HomepageNotifs;
