import React from 'react'
import Header from './elements/header'
import AboutUs from './elements/aboutSection'
import ProjectSection from './elements/projectsSection'
import SkillSection from './elements/skillSection'

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <ProjectSection />
        <SkillSection />
      </main>
    </>
  )
}

export default Home