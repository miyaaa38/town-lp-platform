import { notFound } from "next/navigation";
import { Header } from "../../../components/layout/Header";
import { Footer } from "../../../components/layout/Footer";
import { Hero } from "../../../components/sections/Hero";
import { Lead } from "../../../components/sections/Lead";
import { AboutTips } from "../../../components/sections/AboutTips";
import { ViewSpots } from "../../../components/sections/ViewSpots";
import { EatSpots } from "../../../components/sections/EatSpots";
import { ExperienceSpots } from "../../../components/sections/ExperienceSpots";
import { ModelCourse } from "../../../components/sections/ModelCourse";
import { Access } from "../../../components/sections/Access";
import { CTA } from "../../../components/sections/CTA";
import { getTownBySlug } from "../../../lib/data/towns";

type TownPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function TownPage({ params }: TownPageProps) {
  const { slug } = await params;
  const town = getTownBySlug(slug);

  if (!town) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <Hero
          catchCopy={town.hero.catchCopy}
          place={town.hero.place}
          imageSrc={town.hero.imageSrc}
        />
        <Lead title={town.lead.title} body={town.lead.body} />
        <AboutTips title={`${town.name}を楽しむ3つのコツ`} tips={town.tips} />
        <ViewSpots spots={town.spots.view} />
        <ExperienceSpots spots={town.spots.experience} />
        <EatSpots spots={town.spots.eat} />
        <ModelCourse
          title={town.modelCourse.title}
          summary={town.modelCourse.summary}
          stops={town.modelCourse.stops}
        />
        <Access
          title={town.access.title}
          details={town.access.details}
          mapSrc={town.access.mapSrc}
        />
        <CTA title={town.cta.title} description={town.cta.description} />
      </main>
      <Footer />
    </>
  );
}
