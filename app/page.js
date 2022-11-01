import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'

export default async function Index({ preview }) {
  const allPosts = await getAllPostsForHome(preview) ?? [];
  // console.log('allPosts', JSON.stringify(allPosts, null, 2))
  const heroPost = allPosts[0] || {}
  const morePosts = allPosts?.slice(1) ?? []
  return (
    <>
      <Intro />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
    </>
  )
}
