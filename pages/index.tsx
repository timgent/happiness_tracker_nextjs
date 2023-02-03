import Head from 'next/head'
import { PrimaryButton } from '@/components/buttons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Happiness Tracker</title>
        <meta name="description" content="Track your happy thing each day!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-slate-400">
        <h1>Happiness Tracker with NextJS</h1>
        <PrimaryButton>Woop woop</PrimaryButton>
      </main>
    </>
  )
}
