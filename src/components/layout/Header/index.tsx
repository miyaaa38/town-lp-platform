"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
import { useAuthStore } from "../../../lib/stores/authStore";

export default function Header() {
  const [isFavorite, setIsFavorite] = useState(false);
  const user = useAuthStore((state) => state.user);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          まちなび<small>demo</small>
        </Link>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.favoriteButton}
            onClick={() => setIsFavorite((prev) => !prev)}
            disabled={!user}
          >
            <span className={styles.favoriteIcon} aria-hidden="true">
              <Image
                src={
                  isFavorite
                    ? "/icons/heart-filled.svg"
                    : "/icons/heart-outline.svg"
                }
                alt=""
                width={24}
                height={24}
              />
            </span>
            <span className={styles.favoriteText}>
              {isFavorite ? "お気に入り登録済み" : "お気に入りに登録"}
            </span>
          </button>
          <Link href="/login" className={styles.loginLink}>
            ログイン
          </Link>
        </div>
      </div>
    </header>
  );
}
