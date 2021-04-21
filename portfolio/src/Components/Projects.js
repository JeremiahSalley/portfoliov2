import React from "react";
import NbaGraph from '../images/nbaGraph.png'
import Motivational from '../images/MotivationalQuotes.png'
import NetflixClone from '../images/popcornTime.png'


function Projects() {
  return (
    <div className="h-screen flex items-center justify-center"
    style={{
        background: '#091c29'
    }}>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* <!--Card 1--> */}
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src={NetflixClone} alt="Netflix" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">PopCorn Time!</div>
            <p class="text-gray-700 text-base">
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
              #winter
            </span>
          </div>
        </div>
        {/* <!--Card 2--> */}
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src={NbaGraph} alt="River" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">River</div>
            <p class="text-gray-700 text-base">
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
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full" src={Motivational} alt="Forest" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Forest</div>
            <p class="text-gray-700 text-base">
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
