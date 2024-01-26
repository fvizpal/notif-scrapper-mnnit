import React from 'react'
import { Button } from "@/components/ui/button"
import AcademicPortalnotifs from "@/components/shared/AcademicPortalNotifs"
import HomepageNotifs from "@/components/shared/HomepageNotifs"
import DSWNotifs from "@/components/shared/DSWNotifs"

const Home = () => {
  return (
    <>
      <div className='flex flex-col content-center justify-center my-5'>
        <h1> MNNIT Notification Compiler </h1>
        <h3> All official MNNIT notifications at one place </h3>
      </div>
      <h5> Click the button below to fetch latest notifications </h5>
      <div className='flex align-top justify-center my-5'>
        <Button
          className='refetch-btn'
        >
          Fetch Notifications
        </Button>
      </div>
      <div>
        <HomepageNotifs/>
        <AcademicPortalnotifs />
        <DSWNotifs />
      </div>
    </>
  )
}

export default Home