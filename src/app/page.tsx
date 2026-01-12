import Link from "next/link";

export default function HomePage() {
  return (
    <main className="section">
      <div className="container">
        <h1>Town LP Platform</h1>
        <p>観光LPをデータ駆動で構築するNext.jsデモ。</p>
        <Link href="/town/onomichi">尾道LPを見る</Link>
      </div>
    </main>
  );
}
