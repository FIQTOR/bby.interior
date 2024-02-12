import BaseLayout from '@/common/layouts/base'
import { METADATA } from '@/common/layouts/constant/metadata'
import Contact from '@/modules/contact/contact'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `Contact ${METADATA.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
}

const ContactPage = () => {
  return (
    <BaseLayout>
      <Contact />
    </BaseLayout>
  )
}

export default ContactPage