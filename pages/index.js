import AboutTabs from '@/components/tabs/about'
import CertificationTabs from '@/components/tabs/certification'
import ContactTabs from '@/components/tabs/contact'
import ProjectsTabs from '@/components/tabs/projects'
import TechnologyTabs from '@/components/tabs/technology'
import Head from 'next/head'
import { useState } from 'react'
function Home() {
    const [activeTabs, setActiveTab] = useState("about")

    const handleTabSelect = (tab) => {
      setActiveTab(tab)
    }

    const menuActive = "lg:text-base md:text-sm bg-[#FCC75B] shadow-md px-2 py-1 rounded-sm text-gray-50"
    const nonMenuActive = "lg:text-base md:text-sm hover:bg-[#FCC75B] transition duration-100 hover:shadow-md px-2 py-1 rounded-sm text-gray-50"
  return (
    <div>
      <Head>
        <title>Bayu priyambada - Web Development</title>
      </Head>
      <div className='flex lg:gap-3 md:gap-2 gap-1 items-center mt-4 justify-center'>
        <button className={`${
              activeTabs === "about"
                ? menuActive
                : nonMenuActive
            }`}
            onClick={() => handleTabSelect("about")}>About</button>
        <button className={`${
              activeTabs === "certification"
                ? menuActive
                : nonMenuActive
            }`}
            onClick={() => handleTabSelect("certification")}>Certification</button>
        <button className={`${
              activeTabs === "projects"
                ? menuActive
                : nonMenuActive
            }`}
            onClick={() => handleTabSelect("projects")}>Projects</button>
        <button className={`${
              activeTabs === "technology"
                ? menuActive
                : nonMenuActive
            }`}
            onClick={() => handleTabSelect("technology")}>Technology</button>
        <button className={`${
              activeTabs === "contact"
                ? menuActive
                : nonMenuActive
            }`}
            onClick={() => handleTabSelect("contact")}>Contact</button>
      </div>
      <div className='lg:pt-12 pt-5 lg:px-0 px-7'>
        {activeTabs === "about" && (
          <AboutTabs/>
          )}
        {activeTabs === "certification" && (
            <CertificationTabs/>
          )}
        {activeTabs === "projects" && (
            <ProjectsTabs/>
          )}
        {activeTabs === "technology" && (
            <TechnologyTabs/>
          )}
        {activeTabs === "contact" && (
            <ContactTabs/>
          )}
      </div>
    </div>
  )
}

export default Home
