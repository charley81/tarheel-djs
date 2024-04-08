import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const djs = [
  {
    id: 1,
    name: 'DJ Charlotte Beatmaster',
    slug: 'dj-charlotte-beatmaster',
    city: 'Charlotte',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/dj-charlotte-beatmaster',
    bio: 'Reigning supreme in the Queen City, DJ Charlotte Beatmaster is a master of drum n bass fusion, seamlessly blending pulsating rhythms and infectious beats to keep the Charlotte dance scene alive and thriving.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 2,
    name: 'MC Raleigh Rhythm',
    slug: 'mc-raleigh-rhythm',
    city: 'Raleigh',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/mc-raleigh-rhythm',
    bio: 'Commanding the decks in the state capital, MC Raleigh Rhythm brings an electrifying energy to every performance, captivating audiences with his dynamic stage presence and unparalleled lyrical prowess.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 3,
    name: 'Bassline Asheville',
    slug: 'bassline-asheville',
    city: 'Asheville',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/bassline-asheville',
    bio: 'Nestled in the heart of the Blue Ridge Mountains, Bassline Asheville is a driving force in the local drum n bass scene, known for their innovative mixes and deep, soulful grooves that capture the spirit of the mountain city.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 4,
    name: 'DJ Durham Dynamo',
    slug: 'dj-durham-dynamo',
    city: 'Durham',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/dj-durham-dynamo',
    bio: 'Lighting up the Bull City with their explosive sets, DJ Durham Dynamo brings an unmatched intensity to the Durham drum n bass scene, delivering high-energy mixes that leave crowds electrified and craving more.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 5,
    name: 'Subsonic Wilmington',
    slug: 'subsonic-wilmington',
    city: 'Wilmington',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/subsonic-wilmington',
    bio: 'From the shores of the Cape Fear River, Subsonic Wilmington dives deep into the underground with their bass-heavy beats and hypnotic melodies, creating an immersive sonic experience that transports listeners to another dimension.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 6,
    name: 'DJ Jungle',
    slug: 'dj-jungle-greensboro',
    city: 'Greensboro',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/dj-jungle-greensboro',
    bio: 'Venturing into the urban jungle of Greensboro, DJ Jungle brings a fierce energy to the Triad drum n bass scene, captivating audiences with their untamed mixes and primal rhythms that ignite the dancefloor.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 7,
    name: 'Voltage Fayetteville',
    slug: 'voltage-fayetteville',
    city: 'Fayetteville',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/voltage-fayetteville',
    bio: 'Shocking the senses in Fayetteville, Voltage brings a jolt of energy to the local drum n bass community, with thunderous beats and electrifying drops that keep the party going until the break of dawn.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 8,
    name: 'DnB Winston',
    slug: 'dnb-winston',
    city: 'Winston-Salem',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/dnb-winston',
    bio: 'Keeping it gritty in Winston-Salem, DnB Winston is a powerhouse DJ known for their raw, unapologetic style and relentless dedication to the drum n bass sound, keeping the Twin City scene alive and kicking.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 9,
    name: 'Beat Asheville',
    slug: 'beat-asheville',
    city: 'Asheville',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/beat-asheville',
    bio: 'Pounding the pavement in Asheville, Beat Asheville is a driving force in the local drum n bass scene, with thunderous beats and infectious energy that keep audiences coming back for more.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 10,
    name: 'Pulse Wilmington',
    slug: 'pulse-wilmington',
    city: 'Wilmington',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/pulse-wilmington',
    bio: 'Sending shockwaves through the Port City, Pulse Wilmington is a force to be reckoned with in the drum n bass community, with heart-pounding beats and pulsating rhythms that keep the dancefloor packed all night long.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 11,
    name: 'Tempo Triad',
    slug: 'tempo-triad',
    city: 'Greensboro',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/tempo-triad',
    bio: 'Dominating the Triad with their impeccable timing and seamless mixes, Tempo Triad keeps the beats flowing and the dance floor packed, ensuring an unforgettable experience for all drum n bass enthusiasts.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 12,
    name: 'Groove Guru',
    slug: 'groove-guru',
    city: 'Charlotte',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/groove-guru',
    bio: 'Unlocking the secrets of the dancefloor, Groove Guru mesmerizes audiences with their infectious rhythms and undeniable charisma. With a deep understanding of the power of music, Guru creates a transcendent experience for all who listen.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 13,
    name: 'Sonic Surgeon',
    slug: 'sonic-surgeon',
    city: 'Durham',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/sonic-surgeon',
    bio: 'Cutting through the sonic landscape with precision and finesse, Sonic Surgeon delivers heart-pounding beats and electrifying melodies that leave audiences in awe. Prepare to be operated on by the master of sound.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 14,
    name: 'Bass Bender',
    slug: 'bass-bender',
    city: 'Asheville',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/bass-bender',
    bio: 'Twisting and bending basslines like never before, Bass Bender takes listeners on a journey through the depths of sound. With their unique style and infectious energy, Bender pushes the boundaries of drum n bass.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 15,
    name: 'Frequency Fiend',
    slug: 'frequency-fiend',
    city: 'Wilmington',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/frequency-fiend',
    bio: 'Obsessed with finding the perfect frequency, Frequency Fiend manipulates soundwaves with precision and finesse. With their knack for crafting immersive sonic experiences, Fiend leaves audiences mesmerized and hungry for more.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 16,
    name: 'Rhythm Rebel',
    slug: 'rhythm-rebel',
    city: 'Raleigh',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/rhythm-rebel',
    bio: 'Breaking free from the constraints of traditional rhythms, Rhythm Rebel marches to the beat of their own drum. With their rebellious spirit and infectious energy, Rebel ignites the dance floor and sparks a revolution of sound.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 17,
    name: 'Drumstep Dynamo',
    slug: 'drumstep-dynamo',
    city: 'Durham',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/drumstep-dynamo',
    bio: 'Fusing the best of drum n bass and dubstep, Drumstep Dynamo brings a thunderous energy to the dancefloor. With their explosive beats and electrifying drops, Dynamo sends shockwaves through the crowd and leaves them begging for more.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 18,
    name: 'Bassline Bender',
    slug: 'bassline-bender',
    city: 'Charlotte',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/bassline-bender',
    bio: 'Bending basslines and breaking barriers, Bassline Bender pushes the limits of drum n bass with their innovative sound and relentless energy. With every drop, Bender sends shockwaves through the crowd and leaves them craving more.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 19,
    name: 'Jungle Jammer',
    slug: 'jungle-jammer',
    city: 'Winston-Salem',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/jungle-jammer',
    bio: 'Jamming to the rhythms of the urban jungle, Jungle Jammer brings a wild energy to the dance floor. With their untamed beats and primal rhythms, Jammer ignites the night and keeps the party going until dawn.',
    imageUrl: '/controller-image.jpg'
  },
  {
    id: 20,
    name: 'Velocity Vibes',
    slug: 'velocity-vibes',
    city: 'Fayetteville',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/velocity-vibes',
    bio: 'Racing through the night with unparalleled speed and energy, Velocity Vibes delivers high-octane beats that keep the dance floor pulsating. With their relentless tempo and infectious energy, Vibes leaves audiences exhilarated and hungry for more.',
    imageUrl: '/controller-image.jpg'
  }
]

async function main() {
  console.log(`Start seeding ...`)

  for (const dj of djs) {
    const result = await prisma.dj.upsert({
      where: { id: dj.id },
      update: {},
      create: dj
    })
    console.log(`Created event with id: ${result.id}`)
  }

  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
