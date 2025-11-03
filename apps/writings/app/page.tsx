import Link from "next/link"

export default function Page() {
  return (
    <main className="grid min-h-screen place-content-center">
      <p>Hey!</p>
      <Link className="font-medium text-ios-blue" href="/w">
        Visit the writings →
      </Link>
    </main>
  )
}
