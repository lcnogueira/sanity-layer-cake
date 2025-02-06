import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from '@/sanity/lib/queries'
import { PostCard } from '@/components/PostCard'
import Expandable from "@/components/Expandable";

// Server Component
export default async function Posts() {
  const {data: posts} = await sanityFetch({query: POSTS_QUERY});

  return (
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post, index) => (
            // Client Component receiving props from Server Component
            <Expandable key={index} label="Card">
                <PostCard {...post} />
            </Expandable>
        ))}
      </div>
  )
}