import React from 'react'
import Avatar from './Components/Avatar'
import AboutMe from './Components/AboutMe'
import Media from './Components/Media'
import Biography from './Components/Biography'
import FooterMinu from './Components/FooterMinu'
import Skills from './Components/Skills'

function App() {
  return (
    <div className="bg-background">
      <Avatar/>
      <Media/>
      <AboutMe/>
      <Biography/>
      <Skills/>
      <FooterMinu/>
    </div>
  )
}

export default App