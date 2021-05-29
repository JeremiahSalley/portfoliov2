import React from "react";
import Link from "@material-ui/core/Link";
import NbaGraph from "../images/nbaGraph.png";
import Motivational from "../images/MotivationalQuotes.png";
import NetflixClone from "../images/popcornTime.png";
import CowboysApi from "../images/CowboysApi.png";
import pythonContactBook from "../images/pythonContactBook.png";

function Projects() {
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center text-white font-mono  lg:mt-0"
        style={{
          background: "#0A192E",
        }}
        id="/portfolio"
      >
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* <!--Card 1--> */}
          <div
            className="rounded overflow-hidden shadow-2xl"
            style={{
              background: "#112340",
            }}
          >
            <img className="h-80 w-max" src={NetflixClone} alt="Netflix" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">PopCorn Time!</div>
              <p className=" text-base">
                Working with React, Firebase, React-youtube, and Axios to fetch
                data. Netflix clone allows users to play a trailer of a movie.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <Link href="https://github.com/JeremiahSalley/popcorntime">
                <button>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Github
                  </span>
                </button>
              </Link>
              <Link href="https://popcorntime-55ab1.web.app/">
                <button>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Deployed Site
                  </span>
                </button>
              </Link>
            </div>
          </div>
          {/* <!--Card 2--> */}
          <div
            class="rounded overflow-hidden shadow-2xl "
            style={{
              background: "#112340",
            }}
          >
            <img class="h-80  w-max" src={NbaGraph} alt="Nba" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Nba Graph</div>
              <p class=" text-base">
                Working with React, Chart.js and Axios to fetch data from
                ballislife api. Nba Graph compares two players stats from the
                current Nba season.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <Link href="https://github.com/JeremiahSalley/Nba-graph2">
                <button>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Github
                  </span>
                </button>
              </Link>
              <Link href= 'https://nba-graph-98a16.web.app/'>
                <button>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Deployed Site
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div
            class="rounded overflow-hidden shadow-2xl "
            style={{
              background: "#112340",
            }}
          >
            <img class="h-80 w-max" src={Motivational} alt="Forest" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 ">Motivational Quotes</div>
              <p class=" text-base">
                Working with Html Css and Vanilla JavaScript this application
                generates random motivational quotes.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <Link href="https://github.com/JeremiahSalley/RandomQuotes">
                <button>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Github
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div
            class="rounded overflow-hidden shadow-2xl "
            style={{
              background: "#112340",
            }}
          >
            <img class="h-80  w-max" src={CowboysApi} alt="Cowboys" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Dallas Cowboys Api</div>
              <p class=" text-base">
                Working with Node and Express built a full CRUD Api for the 2019-2020 Dallas Cowboys
                team
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <Link href="https://github.com/JeremiahSalley/JSON-API">
                <button>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Github
                  </span>
                </button>
              </Link>
              <Link href='https://young-ravine-83271.herokuapp.com/schedule'>
                <button>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Deployed Site
                  </span>
                </button>
              </Link>
            </div>
          </div>
          {/* Card 5 */}
          <div
            class="rounded overflow-hidden shadow-2xl "
            style={{
              background: "#112340",
            }}
          >
            <img class="h-80  w-max" src={pythonContactBook} alt="Contact" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Black Book</div>
              <p class=" text-base">
                Working with Python and peewee. Contact book aka black book is all in the command line. 
                User is able to see full list of contacts, create a contact, search contact by first name run the file main.py and follow the propmt.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <Link href="https://github.com/JeremiahSalley/Contact-book">
                <button>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Github
                  </span>
                </button>
              </Link>
              <Link href='https://github.com/JeremiahSalley/Contact-book'>
                <button>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    Deployed Site
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
