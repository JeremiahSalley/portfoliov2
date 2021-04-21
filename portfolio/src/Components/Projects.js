import React from "react";
import NbaGraph from '../images/nbaGraph.png'
import Motivational from '../images/MotivationalQuotes.png'
import NetflixClone from '../images/popcornTime.png'


function Projects() {
  return (
    <div className="h-screen flex items-center justify-center text-white"
    style={{
        background: '#0A192E'
    }}
    >
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* <!--Card 1--> */}
        <div className="rounded overflow-hidden shadow-2xl"
        style={{
            background: '#112340'
        }}>
          <img className="h-80 w-max" src={NetflixClone} alt="Netflix" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">PopCorn Time!</div>
            <p className=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
        {/* <!--Card 2--> */}
        <div class="rounded overflow-hidden shadow-2xl "
        style={{
            background: '#112340'
        }}>
          <img class="h-80  w-max" src={NbaGraph} alt="Nba" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Nba Graph</div>
            <p class=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #summer
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div class="rounded overflow-hidden shadow-2xl "
        style={{
            background: '#112340'
        }}>
          <img class="h-80" src={Motivational} alt="Forest" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 ">Motivational Quotes</div>
            <p class=" text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #fall
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
