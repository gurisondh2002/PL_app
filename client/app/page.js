import PageBanner from '../components/Home/PageBanner/pagebanner'
import Services from '../components/Home/Services/services'
import ProdsAndSers from '@/components/Home/ProdsAndSers/prodsandsers'
import Trending from '@/components/Home/Trending/trending'

export default function Home() {
  return (
    <div>
      <PageBanner />
      <Services />
      <ProdsAndSers/>
      <Trending/>
    </div>
  )
}
