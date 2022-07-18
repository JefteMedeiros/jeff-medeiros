import type { NextPage } from 'next'
import Headline from '../src/components/Headline/headline'
import Layout from '../src/components/Layout/layout'

const Home: NextPage = () => {
  return (
   <Layout>
      <Headline />
   </Layout>
  )
}

export default Home
