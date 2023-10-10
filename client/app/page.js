import Image from 'next/image'
import styles from './page.module.css'
import { Herr_Von_Muellerhoff } from 'next/font/google'
import PageBanner from '../components/Home/PageBanner/pagebanner'

export default function Home() {
  return (
    <div>
      <PageBanner />
    </div>
  )
}
