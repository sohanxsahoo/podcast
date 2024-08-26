import React from "react";
import { Button } from "@/components/ui/button";
import { podcastData } from "@/constants";
import PodcastCard from "@/components/PodcastCard";

const Home = () => {
  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        {/* {podcastData.map(({id, title, description, imgURL}) => {
          <PodcastCard
          key={podcast.id}
          />
        })} */}
      </section>
    </div>
  );
};

export default Home;
