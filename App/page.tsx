import Hero from "@/components/hero"
import Introduction from "@/components/introduction"
import AnimalCategories from "@/components/animal-categories"
import FeaturedAnimals from "@/components/featured-animals"
import ConservationSection from "@/components/conservation-section"
import NewsSection from "@/components/news-section"
import ExploreSection from "@/components/explore-section"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <AnimalCategories />
      <FeaturedAnimals />
      <ConservationSection />
      <NewsSection />
      <ExploreSection />
      <BackToTop />
    </>
  )
}

