import type { NextPage } from 'next'
import AboutUs from '../components/aboutus'
import Masthead from '../components/masthead'

const Home: NextPage = () => {
  return (
    <div>
      <Masthead />
      <AboutUs />
    </div>
  )
}

export default Home
