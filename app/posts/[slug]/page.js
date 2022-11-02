import { notFound } from 'next/navigation';

import PostBody from './post-body'
import MoreStories from '../../../components/more-stories'
import PostHeader from './post-header'
import SectionSeparator from '../../../components/section-separator'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../../lib/api'
import { CMS_NAME } from '../../../lib/constants'

export default async function Post({ params: { slug = 'alpen-tage-0'}, preview }) {
  const data = await getPostAndMorePosts(slug, preview);
  const post = data?.post ?? null;
  const morePosts = data?.morePosts ?? null

  if (!post) {
    notFound();
    return;
  }

  return (
    <>
      <article>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.content} />
      </article>
      <SectionSeparator />
      {morePosts && morePosts.length > 0 && (
        <MoreStories posts={morePosts} />
      )}
    </>
  )
}
