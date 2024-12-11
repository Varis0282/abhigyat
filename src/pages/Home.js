import React, { useState } from 'react'
import { PageWithSidebar, StartCrawlPopup } from '../components';
const Home = () => {

  const [openStartCrawl, setOpenStartCrawl] = useState(false);
  const handleStartCrawl = () => {
    setOpenStartCrawl(false);
  }

  return (
    <PageWithSidebar>
      <div className='border h-screen mx-2'>
        <div className="flex flex-col p-2">
          {/* Crawling Button */}
          <div className="flex justify-center">
            <button className='px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-700' onClick={() => setOpenStartCrawl(true)}>Start Crawling</button>
          </div>

        </div>
      </div>
      {openStartCrawl && <StartCrawlPopup handlePopupClose={handleStartCrawl} />}
    </PageWithSidebar>
  )
}

export default Home
