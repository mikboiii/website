import { ArticleLayout } from '@/components/ArticleLayout'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Head from 'next/head'
import Image from 'next/image'

import animationController from '@/images/SolarSpark/CombatAnimationController.png'
import animationLayerOne from '@/images/SolarSpark/PrimaryLayer.png'
import HealGif from '@/images/SolarSpark/Heal.gif'
import SpecialGif from '@/images/SolarSpark/Special.gif'
import MusicExample from '@/images/SolarSpark/MusicTracks.png'

// ' is &apos;
export default function solarSpark()
{
    return(
    <>
    <Head>
        <title>Projects - Solar Spark</title>
        <meta
          name="description"
          content="My third year university group project"
        />
    </Head>
    <SimpleLayout
    title="My third year final team project"
    intro="This was the big one, this was the project to really show off what we could do. 
    The third year team project was definitely the toughest, but it was also the most enriching.
    Read below to understand the journey of the project.">
    
    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
      <iframe class="w-full aspect-auto"  frameborder="0" src="https://itch.io/embed/1939160"></iframe>
      <div className="">
        <iframe class="w-full aspect-video" src="https://www.youtube.com/embed/qgrneknSSBU" title="Solar Spark Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">Overview</h2>
        <p>
            Solar Spark is an action-adventure hack and slash set in a solarpunk world inspired by ancient Egyptian mythology. 
            Playing as the powerful exiled queen Eset, you undertake a journey to rescue your beloved Osiris from the dark clutches of Set.
            The game features fast-paced combat, exploration and puzzles to provide a balanced game experience.
        </p>
        <p>
            This project was the largest I had worked on during my time at Falmouth University. 
            The range of tasks I performed was diverse, and I learned a lot during the production of Solar Spark.
            I had a hand in many aspects of the game as producer, but I only made judgements I was qualified to make, 
            and I trusted each team member&apos;s individual capabilities to fulfil their tasks.
        </p>
        <ul class="list-disc list-inside">
            <p><b>Summary of roles:</b></p>
            <li><b>Producer</b> - This was a role I picked up later during development as the team found its footing. 
            I had little experience with a leadership role at the time, so it was an incredible learning experience for me and I was driven to not neglect this essential responsibility.</li>
            <li><b>Programmer</b> - This is my specialism, so this carried the greatest share of work for me. 
            My primary mechanic focuses were the player combat, the entire audio system and the narrative screens.</li>
            <li><b>Audio Director</b> - This is a role I was very excited to take on. 
            I carry immense love for audio design and music systems in games so I was happy to be responsible for every single sound, track and voice line within the game.</li>
        </ul> 
        <p>
            Our main selling points for the game were the combat, the story and the exploration. 
            The combat was difficult to polish as we were constrained by the modelling and animation pipeline and 
            responding to feedback from playtesting given incomplete or missing assets was a difficulty. The system we settled on 
        </p>
        <p>
            Teamwork was critical to the success of our game. We had a team of thirteen people, which was one of the largest within our year group.
            This led to challenges with management and pipeline, but we found our flow and methods to maintain the vision for the game.
            I loved the creative collaboration we fostered within our team; our discussions, negotiations and celebrations were among the most valuable learning experiences for me.
            We integrated our disciplines together very well, as good communication was practiced over the course of production, 
            and weaving the overlaps in our skills together was an intricate and rewarding process.
        </p>
        <p>
            The game we were left with was one we could be proud of. 
        </p>
    </div>
        
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">My individual contributions to the project:</h2>
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">Player Combat and Animation:</h2>
              <p>
                I was one of the main advocates for the combat system we have in the game.
                I was part of the designing process and was solely responsible for producing the mechanic.
                It was important for our genre of game that the combat was fluid and flexible.
                Given that our combat was very animation-heavy, I elected to use Unity&apos;s animation controller to work as a finite state machine for player combat
              </p>
              <Image class="object-center mx-auto" src={animationController}/>
              <p>
                The premise that the combos are linear and have a pattern, but every attack would lead into another perfectly.
                You could seamlessly switch from a light attack to a heavy attack.
                I was happy with this system as it suited the game very well, letting the player mix and match their own combos.
              </p>
              <p>
                We also had a basic special attack and heal within the game, both of which used the &quot;heat gauge&quot;.
                Heat would build up with every hit the player scored on an enemy, much like soul from <i><b>Hollow Knight</b></i> (Team Cherry, 2017).
                The design motivation behind this was to keep the player engaged in every encounter. The lack of regenerative health would stop the player from being able to endlessly 
                kite enemies around to heal. Building up this resource would allow players to recover health, or get a strong AoE attack to 
                reward skillful play.
              </p>
              <div className="flex flex-row overflow auto object-center">
              <Image src={HealGif} class="shrink w-full aspect-square m-4"/>
              <Image src={SpecialGif} class="shrink w-full aspect-square m-4"/>
              </div>
              <p>
                Our animation choices were constrained as our player model was delivered very late in development, so I used Adobe Mixamo animations for the player, adjusting them to suit our needs.
                Animation events controlled much of the mechanic; enabling or disabling variables (hitbox, movement, etc.), controlling timings and playing sounds.
                I found that animation events made it easy to tailor the macro aspects of each attack. It allowed our designers to tweak elements of 
                the combat and avoid using scripts and having to adjust specific timings relative to the animation.
              </p>
              <p>
                I actually ended up handling all animations for the player. I was happy to work with the other programmers and their scripts and implement animations with my system to maintain consistency and avoid spaghetti-ing the code.
                The image below is the primary layer for the player, covering movement and combat actions. 
                The other layers covered damage animations and dash animations, so that the motions didn&apos;t interrupt the player&apos;s momentum.
                Mixamo wasn&apos;t made with this sort of system in mind. The animations from it were more rigid and seemingly intended to be used &quot;out-of-the-box&quot;.
                The lack of custom animations led to a feeling of stagnation within our attacks. We mitigated it as much as we could, but it wasn&apos;t quite <i>perfect</i>.
              </p>
              <Image class="object-center mx-auto" src={animationLayerOne}/>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">Audio Systems:</h2>
              <p>
                Producing the audio system was enjoyable. I created a selection of functions to play sounds in different ways.
                I made liberal use of a trick I learned in my first year of uni: using one sound and slightly adjusting its pitch every time it was played added easy variety and prevented it from getting old.
                I only had a small number of recurring sounds but by implementing that simple functionality made it sound like there were more.
              </p>
              <p>
                The way most sounds were played was through a single script on each object. This script stored all the sounds and audio sources an object would use.
                This made it easy to have one script work for multiple different objects, and could handle being played in code and through animation events.
                Some objects needed more bespoke audio work, but that was handled through inheritance so only minor changes would need to be made.
                The system was flexible and spending the effort to make it reusable made it significantly faster and easier to implement audio across all required objects.
              </p>
              <p>
                Some sounds I had made myself by recording and adapting sound clips, turning them into something wildly different. Most sounds, however, were taken from <b><i>Soundly</i></b>.
                The sounds were all adjusted to fit our specific needs, and our game audio sounded diverse and complete.
                The voice lines were recorded in a studio on campus with Toby Cooper and Ellie Potter as voice actors, Ernest directing the delivery, and me managing all the audio tech.
                Collaborating with the acting students from the same university was incredibly fun. We had to send out a casting call and audition every candidate together.
                Scheduling the recording sessions alongside our routine studio working sessions was a time management challenge but we made it work.
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">Loading and Intro screens:</h2>
              <p>
                The loading screens and intro screens taught some new skills about instances and how to prevent leaks of objects duplicating themselves across scenes.
              </p>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">Music System:</h2>
              <p>
                Producing the music for the game was the most creatively enriching part of development for me.
                We wanted to reflect the themes and artistic influences within the music. I tried to reflect the character of the game in the instrumentation, rhythm and tonality of the music.
                It was difficult to settle on a particular key for any given track, some used standard scales, but some used dominant Phrygian scales to really convey the harmony of Egyptian-style music.
              </p>
              <p>
                When making the tracks for the game, I wanted the character of the music to reflect the in-game situation. I designed the music so that each track had two versions: calm and aggressive.
                To avoid abrupt cuts and changes in track, I wanted to seamlessly crossfade between the two moods of the same track.
                While this led to a greater creative challenge when composing the music, it enabled an immersive and compelling experience in-game.
              </p>
              <p>
                Sobek is the only track which didn&apos;t need the smooth change in track, and instead I wanted a powerful piece of music which reflected him.
                I wanted something along the lines of Toby Fox&apos;s <i>Battle Against a True Hero</i>, as that reflected a deadly turmoil and I broadly followed that structure.
                The track needed to be crunchy and electrifying, and it enhanced the boss battle experience when it was added, and became something of a highlight, like a pretty bow to top it off.
              </p>
              <div className="flex flex-row object-center overflow-auto">
              <iframe class="shrink m-4 w-full aspect-video" src="https://www.youtube.com/embed/tDiUBuhjCbE?si=WcUP8cvLlw7F7upN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe class="shrink m-4 w-full aspect-video" src="https://www.youtube.com/embed/m0tihyLOYUM?si=UmS6_2GB9muPSnww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <div className="flex flex-row object-center overflow-auto">
              <iframe class="shrink m-4 w-full aspect-video" src="https://www.youtube.com/embed/q0YPzDnxElg?si=65nJ2FDZSzkB1JSt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <iframe class="shrink m-4 w-full aspect-video" src="https://www.youtube.com/embed/y_p7jPSw39M?si=cJOSz33CCmlshMPO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <p>
                I put myself forward for the responsibility of music early on because I wanted to develop my composition skills. 
                I tried for a long time over the year to produce the music but I had the <i>worst</i> creative block I&apos;ve ever had.
                I&apos;d work for several hours making a track to a point where I felt somewhat happy with it, but the next day I&apos;d listen back and delete it.
                When the deadline was a few months away and time was getting tight, I suddenly had creative clarity. 
                The tutorial and city tracks were my first lot, so they didn&apos;t have the same level of polish as the temple and Sobek tracks.
              </p>
              <Image class="object-center mx-auto"src={MusicExample}/>
              <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">Trailer:</h2>
              <p>
                Making the trailer was a tense process as it was left late to focus on polishing the boss battle against Sobek.
                I put myself forward to make it because it would have been unfair to let my managerial decisions befall someone else with the consequences.
                It was a fun adventure, though, as stitching together gameplay footage with a the voiceover and music over it made the game suddenly more attractive.
                I made sure to showcase everything the player could do, along with a bit of each of the game&apos;s pillars to provide a well-rounded image of the game.
              </p>
              <p>
                I worked closely with our writer, Ernest, to record lines for the trailer well in advance. We actually had three different versions of the trailer lines: one voiced by Eset, 
                one by Sobek and one by the villainous Set. It actually gave us a good deal of choice where we could have mixed and matched the lines. We settled on only using Eset&apos;s lines 
                because she was the main character, and her voice acting was central to the game and the narrative.
              </p>
            </div>
   </SimpleLayout>
</>
      )
}

/*
<div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">Pre-production</h2>
              <p>
                The priority when assembling the team was ensuring that the range of skills was balanced and could fill out the needs of any given project we would settle on.
                Before the start of the academic year, we held a meeting to pitch game ideas and worlds to set out the possible candidates for our working IP. 
                We held a vote and then a few meetings to discuss how we would connect the best of each idea into a hybrid for smoother development in the long run.
              </p>
              <p>
                
              </p>
              <p>

              </p>
              <p>

              </p>
            </div>
            */
