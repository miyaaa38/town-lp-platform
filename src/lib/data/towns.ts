import type { StaticImageData } from "next/image";
import onomichiHero from "../../components/sections/Hero/images/onomichi-hero.jpg";
import view01 from "../../components/sections/ViewSpots/images/onomichi-view01-sencouji.jpg";
import view02 from "../../components/sections/ViewSpots/images/onomichi-view02-onomichisuidou.jpg";
import view03 from "../../components/sections/ViewSpots/images/onomichi-view03-nekonohosomichi.jpg";
import eat01 from "../../components/sections/EatSpots/images/onomichi-eat01-ramen.jpg";
import eat02 from "../../components/sections/EatSpots/images/onomichi-eat02-seacafe.jpg";
import eat03 from "../../components/sections/EatSpots/images/onomichi-eat03-lemon.jpeg";
import eat04 from "../../components/sections/EatSpots/images/onomichi-eat04-fish.jpeg";
import eat05 from "../../components/sections/EatSpots/images/onomichi-eat05-bakery.jpeg";
import eat06 from "../../components/sections/EatSpots/images/onomichi-eat06-retrocafe.jpg";
import experience01 from "../../components/sections/ExperienceSpots/images/onomichi-experience01-tosen.jpg";
import experience02 from "../../components/sections/ExperienceSpots/images/onomichi-experience02-roji.jpg";
import experience03 from "../../components/sections/ExperienceSpots/images/onomichi-experience03-bicycle.jpg";

export type Spot = {
  id: string;
  name: string;
  summary: string;
  detail: string;
  image: string | StaticImageData;
};

export type Town = {
  slug: "onomichi" | "kurashiki" | "yamaguchi";
  name: string;
  hero: {
    catchCopy: string;
    place: string;
    imageSrc: string | StaticImageData;
  };
  lead: {
    title: string;
    body: string;
  };
  tips: string[];
  spots: {
    view: Spot[];
    eat: Spot[];
    experience: Spot[];
  };
  modelCourse: {
    title: string;
    summary: string;
    stops: string[];
  };
  access: {
    title: string;
    details: string[];
    mapSrc: string;
  };
  cta: {
    title: string;
    description: string;
  };
};

export const towns: Town[] = [
  {
    slug: "onomichi",
    name: "尾道",
    hero: {
      catchCopy: "路地と坂、海辺の風がほどける港町",
      place: "尾道",
      imageSrc: onomichiHero,
    },
    lead: {
      title: "穏やかな瀬戸内の時間を歩く",
      body: "古い商家と坂道が織りなす街並みを、のんびり歩きながら味わう旅。\n港の景色と路地の猫たちが迎えてくれます。",
    },
    tips: [
      "坂道から海までの眺めをゆっくり楽しむ",
      "渡船と路地裏を組み合わせて歩く",
      "夕方の港で地元の味を満喫する",
    ],
    spots: {
      view: [
        {
          id: "view-1",
          name: "千光寺公園",
          summary: "尾道の街と瀬戸内海を一望",
          detail:
            "ロープウェーで上がる展望台は夕暮れが特に人気。坂道散策の起点にも。",
          image: view01,
        },
        {
          id: "view-2",
          name: "尾道水道",
          summary: "船が行き交う水辺の散歩道",
          detail: "潮の香りとゆっくり流れる時間を感じながら歩ける定番ルート。",
          image: view02,
        },
        {
          id: "view-3",
          name: "猫の細道",
          summary: "猫と出会える路地裏",
          detail: "小さな路地にアートと猫が点在。のんびり歩いてみたいエリア。",
          image: view03,
        },
      ],
      eat: [
        {
          id: "eat-1",
          name: "尾道ラーメン",
          summary: "醤油ベースのご当地ラーメン",
          detail: "背脂のコクと瀬戸内の魚介が香る一杯。",
          image: eat01,
        },
        {
          id: "eat-2",
          name: "海辺のカフェ",
          summary: "港を眺めながらティータイム",
          detail: "夕方の光が入るカフェで一休み。",
          image: eat02,
        },
        {
          id: "eat-3",
          name: "瀬戸内レモンスイーツ",
          summary: "甘酸っぱい香りのご褒美",
          detail: "レモンを使ったタルトやジェラートが人気。",
          image: eat03,
        },
        {
          id: "eat-4",
          name: "地魚の定食",
          summary: "旬の魚を味わうランチ",
          detail: "小さな食堂で地元の味を。",
          image: eat04,
        },
        {
          id: "eat-5",
          name: "海沿いのベーカリー",
          summary: "焼き立てパンの香り",
          detail: "朝の港散歩のお供に人気のベーカリー。",
          image: eat05,
        },
        {
          id: "eat-6",
          name: "レトロ喫茶",
          summary: "ノスタルジックなひととき",
          detail: "港町の雰囲気に浸れる喫茶店。",
          image: eat06,
        },
      ],
      experience: [
        {
          id: "exp-1",
          name: "渡船体験",
          summary: "港を渡る小さな船",
          detail: "地元の人に混ざって乗る渡船は旅の思い出に。",
          image: experience01,
        },
        {
          id: "exp-2",
          name: "路地裏散策",
          summary: "カメラ片手に街歩き",
          detail: "坂と路地、猫に出会う撮影タイム。",
          image: experience02,
        },
        {
          id: "exp-3",
          name: "サイクリング",
          summary: "しまなみ海道を走る",
          detail: "瀬戸内の島々を巡る人気体験。",
          image: experience03,
        },
      ],
    },
    modelCourse: {
      title: "モデルコース",
      summary: "半日で巡る尾道ハイライトコース",
      stops: [
        "千光寺公園で景色を眺める",
        "尾道水道沿いを散策",
        "尾道ラーメンでランチ",
        "渡船で港町の風を感じる",
      ],
    },
    access: {
      title: "アクセス",
      details: [
        "広島駅からJRで約1時間",
        "尾道駅から徒歩5分で港エリアへ",
        "市内は徒歩＋渡船で回遊がおすすめ",
      ],
      mapSrc:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.860339416195!2d133.1909746117981!3d34.404895572913716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35510035fa7a6507%3A0x447111a31f89fa78!2z5bC-6YGT6aeF!5e0!3m2!1sja!2sjp!4v1768149067863!5m2!1sja!2sjp",
    },
    cta: {
      title: "お気に入りの街を保存しよう",
      description: "会員登録すると、お気に入りの観光LPを一覧で管理できます。",
    },
  },
  {
    slug: "kurashiki",
    name: "倉敷",
    hero: {
      catchCopy: "白壁と水路のまち",
      place: "倉敷",
      imageSrc: onomichiHero,
    },
    lead: {
      title: "準備中",
      body: "倉敷のコンテンツは後続で追加予定です。",
    },
    tips: [],
    spots: {
      view: [],
      eat: [],
      experience: [],
    },
    modelCourse: {
      title: "モデルコース",
      summary: "準備中",
      stops: [],
    },
    access: {
      title: "アクセス",
      details: [],
      mapSrc: "",
    },
    cta: {
      title: "お気に入りの街を保存しよう",
      description: "会員登録すると、お気に入りの観光LPを一覧で管理できます。",
    },
  },
  {
    slug: "yamaguchi",
    name: "山口",
    hero: {
      catchCopy: "歴史と温泉の街",
      place: "山口",
      imageSrc: onomichiHero,
    },
    lead: {
      title: "準備中",
      body: "山口のコンテンツは後続で追加予定です。",
    },
    tips: [],
    spots: {
      view: [],
      eat: [],
      experience: [],
    },
    modelCourse: {
      title: "モデルコース",
      summary: "準備中",
      stops: [],
    },
    access: {
      title: "アクセス",
      details: [],
      mapSrc: "",
    },
    cta: {
      title: "お気に入りの街を保存しよう",
      description: "会員登録すると、お気に入りの観光LPを一覧で管理できます。",
    },
  },
];

export const getTownBySlug = (slug: string) =>
  towns.find((town) => town.slug === slug);
