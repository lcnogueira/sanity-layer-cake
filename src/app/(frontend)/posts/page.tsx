import Expandable from '@/components/Expandable'
import Posts from '@/components/Posts'
import { Title } from '@/components/Title'

// Pages in Next.js are Server Components by default
export default function Page() {
  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Post Index</Title>
      {/* Passing a Server Component (Posts) to Client Components (Expandable) as Props */}
      {/* https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props */}
      <Expandable label="Posts">
        <Posts />
      </Expandable>
    </main>
  )
}