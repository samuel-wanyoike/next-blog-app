
import { Inter } from 'next/font/google'
import Posts from './components/Posts'

export const revalidate = 10;

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='p-2 mx-auto'>
      <p className='mt-12 mb-12 text-3xl text-center text-white'>
        Hello and Welcome 👋
        <span className='whitespace-nowrap'>
          I&apos;m <span className='font-bold'>Wanyoike</span>
        </span>
      </p>
      <Posts />
     
    </main>
  )
}
