import type { NextPage } from 'next'
import AboutUs from '../components/aboutus'
import Masthead from '../components/masthead'

const Home: NextPage = () => {
  return (
    <>
      <Masthead />
      <AboutUs />
    </>
  )
}

export default Home
