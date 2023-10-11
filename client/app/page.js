import Image from 'next/image'
import styles from './page.module.css'
import { Herr_Von_Muellerhoff } from 'next/font/google'
import dynamic from 'next/dynamic'
const PageBanner = dynamic(
    ()=>import('@/components/Home/PageBanner/pagebanner'),
    {suspense:true}
)
const Services = dynamic(
  ()=>import('@/components/Home/Services/services'),
  {suspense:true}
)
const ProdsAndSers = dynamic(
  ()=>import('@/components/Home/ProdsAndSers/prodsandsers'),
  {suspense:true}
)

export default function Home() {
  return (
    <div>
      <PageBanner />
      <Services />
      <ProdsAndSers/>
    </div>
  )
}
