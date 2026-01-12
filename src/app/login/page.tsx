"use client";

import { useAuth } from "../../lib/hooks/useAuth";

export default function LoginPage() {
  const { user, isLoading, error } = useAuth();

  return (
    <main className="section">
      <div className="container">
        <h1>ログイン / 会員登録</h1>
        {isLoading && <p>読み込み中...</p>}
        {error && <p>ログイン状態の取得に失敗しました。</p>}
        {!isLoading && !error && (
          <p>{user ? `${user.name}としてログイン中` : "未ログインです。"}</p>
        )}
        <p>名前とメールアドレスで登録するフォームをここに配置予定です。</p>
      </div>
    </main>
  );
}
