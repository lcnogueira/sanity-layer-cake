
import { notFound } from "next/navigation";
// import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/components/Post";
import { client } from "@/sanity/lib/client";

const options = { next: { revalidate: 60 } };

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const { data: post } = await sanityFetch({
  //   query: POST_QUERY,
  //   params: await params,
  // });
  const { slug } = await params;
  const post = await client.fetch(POST_QUERY, { slug }, options);

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
    </main>
  )
}