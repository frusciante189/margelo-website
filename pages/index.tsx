import type { NextPage } from 'next'
import AboutUs from '../components/aboutus'
import Masthead from '../components/masthead'
import Skills from '../components/skills'

const Home: NextPage = () => {
  return (
    <>
      <Masthead />
      <AboutUs />
      <Skills />
    </>
  )
}

export default Home
