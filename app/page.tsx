'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import AcademicPortalnotifs from "@/components/shared/AcademicPortalNotifs"
import HomepageNotifs from "@/components/shared/HomepageNotifs"
import DSWNotifs from "@/components/shared/DSWNotifs"

import { scrapAcademicSite, scrapDSWSite, scrapHomeSite } from "@/lib/scrapper/index";

interface data {
  notifications: String[];
}
 
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [acadData, setAcademicData] = useState<data>();
  const [DSWData, setDSWData] = useState<data>();
  const [HomeData, setHomeData] = useState<data>();

  const handleClick = async () => {
      setLoading(true);

      try {
          const academicData = await scrapAcademicSite();
          setAcademicData(academicData);
          const dswData = await scrapDSWSite();
          setDSWData(dswData)
          const homeData = await scrapHomeSite();
          setHomeData(homeData);
      } catch (error) {
          console.log(error);
      } finally {
          setLoading(false);
      }
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center my-5'>
        <h1 className="text-4xl font-bold mb-2">MNNIT Notification Compiler</h1>
        <h3 className="text-lg">All official MNNIT notifications at one place</h3>
        <h5 className="text-sm text-gray-600">Click the button below to fetch latest notifications</h5>
      </div>
      <div className="flex align-top justify-center my-5">
            <Button className="refetch-btn" onClick={handleClick} disabled={loading}>
                {loading ? (
                  <>
                    Fetching...
                  </>
                ):
                <>
                  Fetch Notifications
                </>}
            </Button>

      </div>
      <div className='flex flex-col space-x-4 sm:flex-row mx-4'>
        <HomepageNotifs 
          notifications={HomeData?.notifications}
        />
        <AcademicPortalnotifs 
          notifications={acadData?.notifications}
        />
        <DSWNotifs 
          notifications={DSWData?.notifications}
        />
      </div>
    </>
  )
}

export default Home