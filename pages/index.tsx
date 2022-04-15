import type { NextPage } from 'next'
import AboutUs from '../components/aboutus'
import Masthead from '../components/masthead'
import Skills from '../components/skills'
import TrustedBy from '../components/trustedby'
import Works from '../components/works'

const Home: NextPage = () => {
  return (
    <>
      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
      <TrustedBy />
    </>
  )
}

export default Home
