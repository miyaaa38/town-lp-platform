# Town LP Platform (Next.js Demo)

観光用の「まち紹介LP」を **共通コンポーネント × 動的ルーティング × 会員機能** で構築する
Next.js（App Router）ベースのデモプロジェクトです。

本プロジェクトは、LP群構造リニューアルの設計思想を
**観光LP（尾道・倉敷・山口）** に置き換えて再現することを目的としています。

---

## 🔖 コンセプト

- 観光LPを **データ駆動 × コンポーネント構成** で生成
- 会員登録後、**お気に入り登録した地域LPを一覧で管理**
- Next.js の強み（SSG / Metadata / Image最適化 / 状態管理）を自然にPR

---

## 🌍 対象ページ（初期）

- `/town/onomichi`（最優先）
- `/town/kurashiki`
- `/town/yamaguchi`

---

## 🧭 LP ページ構成（現状）

1. **Header**
   - 左：ロゴ
   - 右：ログインボタン
   - 右：お気に入り保存ボタン（ログイン状態により挙動切替）

2. **Hero**
   - キャッチコピー
   - 地名
   - 横幅いっぱいのメインビジュアル画像

3. **Lead**
   - リードタイトル
   - リード文

4. **About**
   - 「（地域名）を楽しむ3つのコツ」

5. **観るスポット**
   - スポット3件
   - カード形式（静的グリッド）
   - 詳細はモーダル表示（Radix Dialog）

6. **食べるスポット**
   - スポット5件
   - カード形式＋横スライド（Swiper）

7. **体験するスポット**
   - スポット3件
   - カード形式（静的グリッド）

8. **モデルコース**
   - 上記スポットを組み合わせた半日コース1パターン

9. **アクセス**

10. **CTA**
    - 会員登録 or お気に入り一覧への導線

11. **Footer**
    - 必要最小限のリンクのみ

---

## 👤 会員・お気に入り機能（最小仕様）

### 会員登録

- 登録項目：名前 / メールアドレス
- ログイン後状態をグローバルで管理

### お気に入り

- 地域LP単位でお気に入り登録
- ログインユーザーは `/me/favorites` で一覧表示

### 想定データ構造（最小）

```ts
User {
  id: string
  name: string
  email: string
}

Favorite {
  userId: string
  townSlug: 'onomichi' | 'kurashiki' | 'yamaguchi'
  createdAt: Date
}
```

※ 初期は MSWでAPIモック、後続で簡易DBに差し替え可

---

## 🧱 技術スタック

- Next.js（App Router）
- React
- TypeScript
- Sass + CSS Modules
- Radix UI（Dialog）
- Zustand（認証・お気に入り状態）
- SWR（API通信）
- MSW（APIモック）
- next/image / next/metadata

---

## 📁 ディレクトリ方針（ベース）

```
src/
├── app/
│   ├── town/
│   │   └── [slug]/
│   │       └── page.tsx        # 尾道LPなど
│   ├── login/
│   ├── me/
│   │   └── favorites/
│   └── api/
│       ├── auth/
│       └── favorites/
│
├── components/
│   ├── layout/
│   │   ├── Header/
│   │   └── Footer/
│   ├── sections/
│   │   ├── Hero/
│   │   ├── Lead/
│   │   ├── AboutTips/
│   │   ├── ViewSpots/
│   │   ├── EatSpots/
│   │   ├── ExperienceSpots/
│   │   ├── ModelCourse/
│   │   ├── Access/
│   │   └── CTA/
│   └── ui/
│       ├── SpotCarousel/
│       └── Dialog/
│
├── lib/
│   ├── data/
│   │   └── towns.ts            # 尾道・倉敷・山口データ
│   ├── hooks/
│   └── utils/
│
├── styles/
│   ├── base/
│   ├── tokens/
│   └── globals.scss
│
└── mocks/                       # MSW
```

---

## 🎯 初期実装ゴール（Codex向け）

- 上記ディレクトリ構造を作成
- `/town/onomichi` が表示できる
- Hero / ViewSpots（観るスポット）まで実装
- ダミーデータでカード表示（食べるスポットは横スライド）
- READMEの仕様とズレがないこと

---

## ✅ 現在の実装状況

- `/town/onomichi` ページ骨組みを実装済み
- Hero / Lead / AboutTips / ViewSpots / EatSpots / ExperienceSpots / ModelCourse / Access / CTA まで配置済み
- ダミーデータは `src/lib/data/towns.ts` に集約
- 画像は各セクション配下 `images/` に配置（Hero/View/Eat/Experience）
- モーダルは Radix Dialog で制御
- SWR + Zustand + MSW を導入済み

---

## ✅ Status

- [x] Onomichi town LP
- [ ] Favorite feature (WIP)
- [ ] Multi-town support

---

## ▶ 開発手順

### 必要環境

- Node.js 22 LTS

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

---

## 📝 メモ

- MSW の Service Worker は `public/mockServiceWorker.js` に配置

---

## 🌐 Production URL

- https://town-lp-platform.vercel.app/town/onomichi
