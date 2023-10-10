import Image from 'next/image'
import styles from './page.module.css'
import { Herr_Von_Muellerhoff } from 'next/font/google'
import PageBanner from '../components/Home/PageBanner/pagebanner'
import Services from '../components/Home/Services/services'

export default function Home() {
  return (
    <div>
      <PageBanner />
      <Services />
    </div>
  )
}
