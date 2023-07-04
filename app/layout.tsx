import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
  title: "Wanyoike's Blog",
  description: 'Created by Samuel Wanyoike',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-800'>
        <Navbar />
        <MyProfilePic />
        {children}
        </body>
    </html>
  )
}
