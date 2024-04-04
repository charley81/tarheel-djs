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
    imageUrl:
      'https://images.unsplash.com/photo-1554068864-19d0b49cbbda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 2,
    name: 'MC Raleigh Rhythm',
    slug: 'mc-raleigh-rhythm',
    city: 'Raleigh',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/mc-raleigh-rhythm',
    bio: 'Commanding the decks in the state capital, MC Raleigh Rhythm brings an electrifying energy to every performance, captivating audiences with his dynamic stage presence and unparalleled lyrical prowess.',
    imageUrl:
      'https://images.unsplash.com/photo-1560164950-68d6a03a829d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 3,
    name: 'Bassline Asheville',
    slug: 'bassline-asheville',
    city: 'Asheville',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/bassline-asheville',
    bio: 'Nestled in the heart of the Blue Ridge Mountains, Bassline Asheville is a driving force in the local drum n bass scene, known for their innovative mixes and deep, soulful grooves that capture the spirit of the mountain city.',
    imageUrl:
      'https://images.unsplash.com/photo-1613480469996-af8fa28ff0f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 4,
    name: 'DJ Durham Dynamo',
    slug: 'dj-durham-dynamo',
    city: 'Durham',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/dj-durham-dynamo',
    bio: 'Lighting up the Bull City with their explosive sets, DJ Durham Dynamo brings an unmatched intensity to the Durham drum n bass scene, delivering high-energy mixes that leave crowds electrified and craving more.',
    imageUrl:
      'https://images.unsplash.com/photo-1571151457508-7f6e95061773?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 5,
    name: 'Subsonic Wilmington',
    slug: 'subsonic-wilmington',
    city: 'Wilmington',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/subsonic-wilmington',
    bio: 'From the shores of the Cape Fear River, Subsonic Wilmington dives deep into the underground with their bass-heavy beats and hypnotic melodies, creating an immersive sonic experience that transports listeners to another dimension.',
    imageUrl:
      'https://images.unsplash.com/photo-1595000660716-e23c369f056d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 6,
    name: 'DJ Jungle',
    slug: 'dj-jungle-greensboro',
    city: 'Greensboro',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/dj-jungle-greensboro',
    bio: 'Venturing into the urban jungle of Greensboro, DJ Jungle brings a fierce energy to the Triad drum n bass scene, captivating audiences with their untamed mixes and primal rhythms that ignite the dancefloor.',
    imageUrl:
      'https://images.unsplash.com/photo-1612402688103-5e883c09a0f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 7,
    name: 'Voltage Fayetteville',
    slug: 'voltage-fayetteville',
    city: 'Fayetteville',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/voltage-fayetteville',
    bio: 'Shocking the senses in Fayetteville, Voltage brings a jolt of energy to the local drum n bass community, with thunderous beats and electrifying drops that keep the party going until the break of dawn.',
    imageUrl:
      'https://images.unsplash.com/photo-1593785040351-e40d4bb5e047?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 8,
    name: 'DnB Winston',
    slug: 'dnb-winston',
    city: 'Winston-Salem',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/dnb-winston',
    bio: 'Keeping it gritty in Winston-Salem, DnB Winston is a powerhouse DJ known for their raw, unapologetic style and relentless dedication to the drum n bass sound, keeping the Twin City scene alive and kicking.',
    imageUrl:
      'https://images.unsplash.com/photo-1586992092832-b451eee14d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 9,
    name: 'Beat Asheville',
    slug: 'beat-asheville',
    city: 'Asheville',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/beat-asheville',
    bio: 'Pounding the pavement in Asheville, Beat Asheville is a driving force in the local drum n bass scene, with thunderous beats and infectious energy that keep audiences coming back for more.',
    imageUrl:
      'https://images.unsplash.com/photo-1613480469996-af8fa28ff0f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 10,
    name: 'Pulse Wilmington',
    slug: 'pulse-wilmington',
    city: 'Wilmington',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/pulse-wilmington',
    bio: 'Sending shockwaves through the Port City, Pulse Wilmington is a force to be reckoned with in the drum n bass community, with heart-pounding beats and pulsating rhythms that keep the dancefloor packed all night long.',
    imageUrl:
      'https://images.unsplash.com/photo-1642178225043-f299072af862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100'
  },
  {
    id: 11,
    name: 'Tempo Triad',
    slug: 'tempo-triad',
    city: 'Greensboro',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/tempo-triad',
    bio: 'Dominating the Triad with their impeccable timing and seamless mixes, Tempo Triad keeps the beats flowing and the dance floor packed, ensuring an unforgettable experience for all drum n bass enthusiasts.',
    imageUrl:
      'https://images.unsplash.com/photo-1600187647460-d0104c380ae3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 12,
    name: 'Groove Guru',
    slug: 'groove-guru',
    city: 'Charlotte',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/groove-guru',
    bio: 'Unlocking the secrets of the dancefloor, Groove Guru mesmerizes audiences with their infectious rhythms and undeniable charisma. With a deep understanding of the power of music, Guru creates a transcendent experience for all who listen.',
    imageUrl:
      'https://images.unsplash.com/photo-1620778451305-8df1663f8ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 13,
    name: 'Sonic Surgeon',
    slug: 'sonic-surgeon',
    city: 'Durham',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/sonic-surgeon',
    bio: 'Cutting through the sonic landscape with precision and finesse, Sonic Surgeon delivers heart-pounding beats and electrifying melodies that leave audiences in awe. Prepare to be operated on by the master of sound.',
    imageUrl:
      'https://images.unsplash.com/photo-1552675880-95f31f3d518e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 14,
    name: 'Bass Bender',
    slug: 'bass-bender',
    city: 'Asheville',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/bass-bender',
    bio: 'Twisting and bending basslines like never before, Bass Bender takes listeners on a journey through the depths of sound. With their unique style and infectious energy, Bender pushes the boundaries of drum n bass.',
    imageUrl:
      'https://images.unsplash.com/photo-1514738887-4cbf6984276d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 15,
    name: 'Frequency Fiend',
    slug: 'frequency-fiend',
    city: 'Wilmington',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/frequency-fiend',
    bio: 'Obsessed with finding the perfect frequency, Frequency Fiend manipulates soundwaves with precision and finesse. With their knack for crafting immersive sonic experiences, Fiend leaves audiences mesmerized and hungry for more.',
    imageUrl:
      'https://images.unsplash.com/photo-1561936751-601da174a5d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 16,
    name: 'Rhythm Rebel',
    slug: 'rhythm-rebel',
    city: 'Raleigh',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/rhythm-rebel',
    bio: 'Breaking free from the constraints of traditional rhythms, Rhythm Rebel marches to the beat of their own drum. With their rebellious spirit and infectious energy, Rebel ignites the dance floor and sparks a revolution of sound.',
    imageUrl:
      'https://images.unsplash.com/photo-1601996573099-9fda21a27902?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 17,
    name: 'Drumstep Dynamo',
    slug: 'drumstep-dynamo',
    city: 'Durham',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/drumstep-dynamo',
    bio: 'Fusing the best of drum n bass and dubstep, Drumstep Dynamo brings a thunderous energy to the dancefloor. With their explosive beats and electrifying drops, Dynamo sends shockwaves through the crowd and leaves them begging for more.',
    imageUrl:
      'https://images.unsplash.com/photo-1572465606712-5b566b8ba5c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 18,
    name: 'Bassline Bender',
    slug: 'bassline-bender',
    city: 'Charlotte',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/bassline-bender',
    bio: 'Bending basslines and breaking barriers, Bassline Bender pushes the limits of drum n bass with their innovative sound and relentless energy. With every drop, Bender sends shockwaves through the crowd and leaves them craving more.',
    imageUrl:
      'https://images.unsplash.com/photo-1565575765915-d1e9ed023ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 19,
    name: 'Jungle Jammer',
    slug: 'jungle-jammer',
    city: 'Winston-Salem',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/jungle-jammer',
    bio: 'Jamming to the rhythms of the urban jungle, Jungle Jammer brings a wild energy to the dance floor. With their untamed beats and primal rhythms, Jammer ignites the night and keeps the party going until dawn.',
    imageUrl:
      'https://images.unsplash.com/photo-1531716330657-c44c3a185b05?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: 20,
    name: 'Velocity Vibes',
    slug: 'velocity-vibes',
    city: 'Fayetteville',
    genre: 'Drum & Bass',
    musicLink: 'https://soundcloud.com/velocity-vibes',
    bio: 'Racing through the night with unparalleled speed and energy, Velocity Vibes delivers high-octane beats that keep the dance floor pulsating. With their relentless tempo and infectious energy, Vibes leaves audiences exhilarated and hungry for more.',
    imageUrl:
      'https://images.unsplash.com/photo-1625771576886-6327486896ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
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
