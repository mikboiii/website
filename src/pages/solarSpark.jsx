import { ArticleLayout } from '@/components/ArticleLayout'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import Head from 'next/head'
import Image from 'next/image'

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
    Read below to understand the journey of the project."
    
    >
    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
    
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
            and I trusted each team member's individual capabilities to fulfil their tasks.
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
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">My individual contributions to the project</h2>
              <p>
                <b>Player Combat</b>
                I was responsible for the player combat 
              </p>
              <p>
                The audio systems
              </p>
              <p>
                The loading + intro screens
              </p>
              <p>
                The music
              </p>
            </div>
   </SimpleLayout>
</>
      )
}
