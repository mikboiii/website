import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

import birdBrains from '@/images/logos/birdbrains.png'
import birdbrainsSplash from '@/images/photos/birdbrainsSplash.png'
import caliCat from '@/images/logos/calicat.png'
import caliCatSplash from '@/images/photos/calicatSplash.png'
import butterDogs from '@/images/logos/butterdogs.png'
import myceliaSplash from '@/images/photos/MyceliaSplash.png'
/*
const projects = [
  {
    name: "A Woman's Duty",
    description:
      "A Woman's Duty is a 1950's inspired satirical zombie beat 'em up based around subverting stereotypes in a comedic manner.",
    link: { href: 'https://ryan-kerry.itch.io/a-womans-duty', label: 'itch.io' },
    logo: birdBrains,
  },
  {
    name: 'Animaginary',
    description:
      'High performance web animation library, hand-written in optimized WASM.',
    link: { href: '#', label: 'github.com' },
    logo: logoAnimaginary,
  },
  {
    name: 'HelioStream',
    description:
      'Real-time video streaming library, optimized for interstellar transmission.',
    link: { href: '#', label: 'github.com' },
    logo: logoHelioStream,
  },
  {
    name: 'cosmOS',
    description:
      'The operating system that powers our Planetaria space shuttles.',
    link: { href: '#', label: 'github.com' },
    logo: logoCosmos,
  },
  {
    name: 'OpenShuttle',
    description:
      'The schematics for the first rocket I designed that successfully made it to orbit.',
    link: { href: '#', label: 'github.com' },
    logo: logoOpenShuttle,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}
*/

const posts = [


  {
    id: 1,
    title: 'Solar Spark',
    href: 'https://calicatgamesstudio.itch.io/solar-spark',
    description:
      'Embark on an extraordinary journey where SolarPunk meets Ancient Egyptian Mythology.',
    imageUrl:
    caliCatSplash,
    date: '18th May 2023',
    datetime: '2023-05-18',
    author: {
      name: 'CaliCat Studios',
      imageUrl:
      caliCat,
    },
  },
  {
    id: 2,
    title: 'Mycelia',
    href: 'https://lewisgads02.itch.io/mycelia',
    description: 
    'Mycelia is a narrative-driven, first-person puzzle game inspired by Half-Life, Portal and Firewatch.',
    imageUrl:
    myceliaSplash,
    date: '30th June 2022',
    dateTime: '2022-06-30',
    author:{
      name: 'Butter Dog Games',
      imageUrl: butterDogs,
    },
  },
  {
    id: 3,
    title: "A Woman's Duty",
    href: 'https://ryan-kerry.itch.io/a-womans-duty',
    description:
    "Does Your Husband Know You're Killing Zombies??",
    imageUrl:
    birdbrainsSplash,
    date: '21st May 2021',
    dateTime: '2021-05-21',
    author:{
      name: 'Birdbrains Games',
      imageUrl: birdBrains
    }
  }
]

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Spencer Sharp</title>
        <meta
          name="description"
          content="The things I've made with love and care."
        />
      </Head>
      <SimpleLayout
        title="The things I've made with love and care."
        intro="I've worked on a few game projects during my studies at uni, and they've all been made in the span of one year. 
        I hope to fill this page with more and more awesome games as time goes on."
      >
      <div className="bg-light-gray">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">Projects</h2>
          <p className="mt-2 text-lg leading-8 text-black dark:text-white">
            These are the projects I have worked on and have contributed towards
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 border-solid border-4 border-transparent transition ease-in-out hover:border-sky-500"
            >
              <Image src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="flex gap-x-2.5">
                    <Image src={post.author.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />
                    {post.author.name}
                  </div>
                </div>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
      </SimpleLayout>
    </>
  )
}
