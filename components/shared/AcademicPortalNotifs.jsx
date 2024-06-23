import React from "react";
import EachNotif from "./EachNotif";
import Link from "next/link";

const AcademicPortalNotifs = ({ notifications }) => {
    return (
        <div className="basis-1/3 px-5 border rounded-md overflowy-auto">
            <Link 
                href={"https://www.academics.mnnit.ac.in/new"}
                className="font-bold text-center underline text-xl"
            >
                Academic Notifications
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

export default AcademicPortalNotifs;
