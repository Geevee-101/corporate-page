import {
  imgInsightCamera,
  imgInsightLaptop,
  imgInsightPlant,
  imgInsightTablet,
} from "@/app/assets/images";
import InsightCard from "../InsightCard";

const InsightCardData = [
  {
    linkPath: "",
    title: "Ut labore et dolore magna 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    cardImage: imgInsightTablet.src,
  },
  {
    linkPath: "",
    title: "Ut labore et dolore magna 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    cardImage: imgInsightLaptop.src,
  },
  {
    linkPath: "",
    title: "Ut labore et dolore magna 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    cardImage: imgInsightPlant.src,
  },
  {
    linkPath: "",
    title: "Ut labore et dolore magna 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    cardImage: imgInsightCamera.src,
  },
];

export default function LatestInsights() {
  return (
    <section className="container mx-auto flex flex-col items-center py-16">
      <h2>Latest Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-8 gap-3">
        {InsightCardData.map((item, index) => (
          <InsightCard
            key={index}
            linkPath={item.linkPath}
            title={item.title}
            description={item.description}
            cardImage={item.cardImage}
          />
        ))}
      </div>
    </section>
  );
}
