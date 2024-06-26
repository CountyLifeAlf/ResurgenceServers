import { Config } from './src/lib/config.types';

export const config: Config = {
  runtime: 'nodejs',
  themeColor: "#5789f6",
  logoURL: "/images/logo.png",
  site: {
    url: "https://www.dayzresurgence.com/",
    title: "",
    twitter: {
      site: "@site",
      creator: "@creator",
      card: "summary_large_image",
      images: [
        {
          url: "/images/marketing/banner.png",
          alt: "Marketing Banner for Resurgence Community",
        },
      ],
    },
  },
  pages: {
    home: {
      title: "Home | Resurgence Community",
      description: "Welcome to the Resurgence!",
      sections: {
        network: {
          title: "Resurgence EU",
          description: "Join The Resurgence.",
        },
        about: {
          title: "About Us",
          description: "DayZ Resurgence offers an immersive and action-packed experience with a wide range of features and customizations. Engage in intense PvP battles with other survivors. Build, Raid & fight to win events come try us out..",
          rows: {
            1: {
              title: "Events",
              description: "We host regular events and competitions for our players to participate in. These events are a great way to meet new people and have fun in the game.",
              image: {
                url: "/images/about/events.jpg",
                alt: "Events Image",
              },
            },
            2: {
              title: "Community",
              description: "We believe that a strong community is the key to a successful server. We work hard to foster a positive and inclusive community for all players.",
              image: {
                url: "/images/about/community.jpg",
                alt: "Community Image",
              },
            },
            3: {
              title: "Development",
              description: "Our team of developers are constantly working to improve the server and add new features. We welcome feedback and suggestions from our players.",
              image: {
                url: "/images/about/development.png",
                alt: "Development Image",
              },
            },
          },
        },
        leaderboard: {
          title: "Leaderboard",
          description: "Check out the top players on our servers and see how you compare. Can you make it to the top of the leaderboard?",
        },
        contact: {
          title: "Contact Us",
          description: "If you have any questions or concerns, please don't hesitate to contact us through the following channels.",
          links: {
            'Discord': "https://discord.gg/48UA4cmzsR",
            'Email': "resurgenceserver@gmail.com",
          },
        },
      },
    },
  },
  hero: {
    title: "Resurgence DayZ.",
    description: "Suck peen play clean!",
    background: {
      color: 'rgb(51 65 85)',
      image: {
        url: "/images/hero.jpg",
        alt: "Hero Image",
      },
    },
    cta: {
      label: "Join us today!",
      href: "https://discord.gg/48UA4cmzsR",
    },
  },
  servers: [
    {
      name: 'Resurgence EU',
      ipv4: '51.195.189.110',
      gamePort: 2302,
      steamQueryPort: 27016,
      cftoolsApiId: '66322b584071f253e4da1b58',
    },
  ],
  cftools: {
    leaderboard: {
      enabled: true,
      defaultSortValue: 'kills',
      allowedSortValues: ['kills', 'deaths', 'kdratio', 'longest_kill', 'longest_shot', 'playtime', 'suicides'],
      blacklistedCFToolsIds: [],
      showAmount: 100,
    },
  },
  footer: {
    trademarkNotice: "The DayZ logo is a registered trademark of Bohemia Interactive a.s. Resurgence is not affiliated with Bohemia Interactive a.s. or DayZ. All other trademarks are the property of their respective owners.",
    brandingName: "Resurgence Community",
    brandingURL: '/',
    initialCopyrightYear: 2024,
    copyrightBrandName: "Resurgence",
    copyrightBrandUrl: '/',
    links: [
      {
        url: '#',
        label: 'About',
      },
    ],
  },
};
