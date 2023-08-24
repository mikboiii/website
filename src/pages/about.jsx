import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function PhoneIcon(props)
{
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
      />
    </svg>
  )
}

//mention game master in dnd

export default function About() {
  return (
    <>
      <Head>
        <title>About - Mikolaj Greszta</title>
        <meta
          name="description"
          content="I’m Mikolaj Greszta."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Mikolaj Greszta, and I bring a diverse set of skills to the table.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                My name is Mikolaj and I&apos;m an early access Games Dev!
                My love for games started when I was six and I received my first ever console: the PlayStation 2. 
                I was blown away. From that moment I knew exactly what I wanted to pursue in the future.
              </p>
              <p>
                I started by making fledgling games on Scratch after finishing all my tasks in a computing lessons.
                Simple platformers found on tutorials or janky two-player battle arenas were my favourites.
                One activity that really thrust forward my creative ability and love for game development was being a Dungeons & Dragons DM for seven years.
                Having to meticulously carve out worlds, memorise mechanics and then put it all together in a live session was a joy like no other.
                Now I&apos;ve taken on larger development projects in groups during my time at Falmouth University and produced some awesome projects.
              </p>
              <p>
                The individual skills I&apos;ve built and put to the test over that time have proved to be invaluable. 
                I believe the most important lessons I have learned involved the workings within a team, however.
                The collaboration, the discussions, the challenges faced together are what make a team work.
              </p>
              <p>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/mikboiii" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>

              <SocialLink href="https://github.com/mikboiii" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/mikolaj-greszta-392757278/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:mikolajgreszta@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                mikolajgreszta@gmail.com
              </SocialLink>
              <SocialLink
              href={""}
              icon={PhoneIcon}>
                07702 763785</SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

/*
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              */