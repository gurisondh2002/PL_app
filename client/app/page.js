import Image from 'next/image'
import styles from './page.module.css'
import { Herr_Von_Muellerhoff } from 'next/font/google'
import PageBanner from '../components/Home/PageBanner/pagebanner'
import Services from '../components/Home/Services/services'
import ProdsAndSers from '@/components/Home/ProdsAndSers/prodsandsers'

export default function Home() {
  return (
    <div>
      <PageBanner />
      <Services />
      <ProdsAndSers/>
    </div>
  )
}
