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

const posts = [


  {
    id: 1,
    title: 'Solar Spark',
    href: '/solarSpark',
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
        <title>Projects - Mikolaj Greszta</title>
        <meta
          name="description"
          content="The things I've made with love and care."
        />
      </Head>
      <SimpleLayout
        title="The things I've made with love and care."
        intro="I've worked on a few game projects during my studies at university, and they've all been made in the span of one year. 
        I hope to fill this page with more and more awesome games as time goes on. Each project below presented its own set of unique problems to overcome, and with that came the character of each game."
      >
      <div className="bg-light-gray">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
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
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 border-solid border-4 border-transparent transition ease-in-out hover:border-teal-500"
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
        <div> </div>
        <div className="mx-auto max-w-2xl text-center py-8">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">Personal Projects</h2>
          <p className="mt-2 text-lg leading-8 text-black dark:text-white">
            These are the projects which only I have worked on
          </p>
        </div>
      </div>
    </div>
      </SimpleLayout>
    </>
  )
}
