import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <main>
      <h1 className='text-5xl font-bold text-center'>Hellow World</h1>
      <Link href='/users'>users</Link>
    </main>
  )
}
