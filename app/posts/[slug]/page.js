import Head from 'next/head'
import ErrorPage from 'next/error'
import PostBody from './post-body'
import MoreStories from '../../../components/more-stories'
import PostHeader from './post-header'
import SectionSeparator from '../../../components/section-separator'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../../lib/api'
import { CMS_NAME } from '../../../lib/constants'

export default function Post({ post = {}, morePosts, preview }) {
  // if (!router.isFallback && !post) {
  //   return <ErrorPage statusCode={404} />
  // }

  return (
    <>
      // <article>
      //   <Head>
      //     <title>
      //       {post.title} | Next.js Blog Example with {CMS_NAME}
      //     </title>
      //     <meta property="og:image" content={post.coverImage.url} />
      //   </Head>
      //   <PostHeader
      //     title={post.title}
      //     coverImage={post.coverImage}
      //     date={post.date}
      //     author={post.author}
      //   />
      //   <PostBody content={post.content} />
      // </article>
      // <SectionSeparator />
      // {morePosts && morePosts.length > 0 && (
      //   <MoreStories posts={morePosts} />
      // )}
    </>
  )
}

// export async function getStaticProps({ params, preview = false }) {
//   const data = await getPostAndMorePosts(params.slug, preview)

//   return {
//     props: {
//       preview,
//       post: data?.post ?? null,
//       morePosts: data?.morePosts ?? null,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug()
//   return {
//     paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
//     fallback: true,
//   }
// }
