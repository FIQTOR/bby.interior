
type Props = {
  params: { slug: string }
}

import BaseLayout from '@/common/layouts/base'
import { METADATA } from '@/common/layouts/constant/metadata'
import ProjectSlug from '@/modules/project/slug/project-slug'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: `Blog ${METADATA.exTitle}`,
  alternates: {
    canonical: process.env.DOMAIN,
  },
}

const SlugBlogPage = ({ params }: Props) => {

  return (
    <BaseLayout>
      <ProjectSlug slug={params.slug} />
    </BaseLayout>
  )
}

export default SlugBlogPage
