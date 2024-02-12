import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React, { ReactNode } from 'react'

interface BaseProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseProps) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout