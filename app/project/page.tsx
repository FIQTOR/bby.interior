import BaseLayout from '@/common/layouts/base'
import { METADATA } from '@/common/layouts/constant/metadata'
import Project from '@/modules/project/project'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `Project ${METADATA.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
}

const ProjectPage = () => {
  return (
    <BaseLayout>
      <Project />
    </BaseLayout>
  )
}

export default ProjectPage