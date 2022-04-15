import type { NextPage } from 'next'
import AboutUs from '../components/aboutus'
import Contactus from '../components/contactus'
import Footer from '../components/footer'
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
      <Contactus />
      <Footer />
    </>
  )
}

export default Home
