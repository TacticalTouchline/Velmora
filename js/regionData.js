export const nationData = {
  name: "Velmora",
  language: "Velmoran",
  capital: "Valdren",
}

export const regionData = {
  "central-velmora": {
    id: "central-velmora",
    name: "Central Velmora",
    description: "The political and economic heart of Velmora, home to the capital city and the nation's most prestigious institutions.",
    cities: {"Valdren": {
              climate: "Continental Mild with Seasonal Contrast",
              clubs: [
                { name: "Valdren Atletika", 
                  nickname:"The Iron Eagles", 
                  six_letter_name: "VALATK",
                  three_letter_name: "VAA",
                  hashtag: "#ValdrenA",
                  founded: 1903, 
                  colors: ["#0a173d", "#79af37"], 
                  stadium: "Titan Forge Arena", 
                  coord: [200, 210],
                  club_history: "",
                  club_values: [],
                  club_slogan: "",
                  competition_history:{
                    VSL:{
                      winnerIn: [1924, 1935, 1946, 1961, 1963, 1967, 1968, 1969, 1973, 1974, 1977, 1989, 1995, 2006, 2010, 2015, 2016, 2022, 2023, ],
                    },
                    VNN:{
                      winnerIn: [],
                    },
                    VRL:{
                      winnerIn: [],
                    },
                    TVC:{
                      winnerIn: [],
                    }
                  },
                  kits: {
                    home: "assets/kits/valatk/home.svg",
                    away: "assets/kits/valatk/away.svg"
                  },
                  supporter_profile: {loyalty:19,passion:17,patience:10,affluence:10,temprament:8,expectations:14},
                  rivals: [
                    {club:"Zarnov Union", level: 80, reason: "Historic"},
                    {club:"Braknov Spartak", level: 60, reason: "Competitive"},
                    {club:"Velgrad '04", level: 54, reason: "Competitive"},
                  ],
                  derbies: [
                    {name:"Industrial Iron Derby", team2: "Zarnov Union", history: ""},
                    {name:"Border Steel Derby", team2:"Braknov Spartak", history: ""},
                    {name:"Capital Fireline", team2:"Velgrad '04", history: ""},
                  ],
                  players_alumni: {
                    favorites: ["fav"],
                    icons: ["icon"],
                    legends: ["legend"],
                  }
                },
              ],
            }, 
            "Zarnov": {
              climate: "Continental Mild with Seasonal Contrast",
              clubs: [
                { name: "Zarnov Union", 
                  nickname:"The Riveters", 
                  six_letter_name: "ZARUNI",
                  three_letter_name: "ZUN",
                  hashtag: "#ZarnovU",
                  founded: 1927, 
                  colors: ["#58595b", "#800020"], 
                  stadium: "Red Foundry Park", 
                  coord: [240, 220],
                  club_history: "",
                  club_values: [],
                  club_slogan: "",
                  competition_history:{
                    VSL:{
                      winnerIn: [1954, 1965, 1979, 2021, ],
                    },
                    VNN:{
                      winnerIn: [],
                    },
                    VRL:{
                      winnerIn: [],
                    },
                    TVC:{
                      winnerIn: [],
                    }
                  },
                  kits: {
                    home: "assets/kits/zaruni/home.svg",
                    away: "assets/kits/zaruni/away.svg"
                  },
                  supporter_profile: {loyalty:20,passion:18,patience:13,affluence:6,temprament:15,expectations:13},
                  rivals: [
                    {club:"Valdren Atletika", level: 90, reason: "Historic"},
                    {club:"Sevrin Lokomotiv", level: 67, reason: "Competitive"},
                  ],
                  derbies: [
                    {name:"Industrial Iron Derby", team2: "Valdren Atletika", history: ""},
                    {name:"Eastern Foundry Clash", team2:"Sevrin Lokomotiv", history: ""},
                  ],
                  players_alumni: {
                    favorites: [],
                    icons: [],
                    legends: [],
                  }
                },
                { name: "Red Hearth Wanderers", 
                  nickname:"The Reds",
                  six_letter_name: "REHEWA",
                  three_letter_name: "RHW",
                  hashtag: "#RedHearthW", 
                  founded: 1985, 
                  colors: ["#ffeb3b", "#f44336"], 
                  stadium: "Hearth Stadium", 
                  coord: [250, 230],
                  club_history: "",
                                    club_values: [],
                  club_slogan: "",
                  competition_history:{
                    VSL:{
                      winnerIn: [],
                    },
                    VNN:{
                      winnerIn: [1997],
                    },
                    VRL:{
                      winnerIn: [],
                    },
                    TVC:{
                      winnerIn: [],
                    }
                  },
                  kits: {
                    home: "assets/kits/rehewa/home.svg",
                    away: "assets/kits/rehewa/away.svg"
                  },
                  supporter_profile: {loyalty:12,passion:14,patience:16,affluence:6,temprament:15,expectations:7},
                  rivals: [],
                  derbies: [],
                  players_alumni: {
                    favorites: [],
                    icons: [],
                    legends: [],
                  }
                },
              ],
            }},
  },

  "northern-highlands": {
    id: "northern-highlands",
    name: "Northern Highlands",
    description: "A cold, mountainous region known for its resilience and homegrown talent from harsh conditions.",
    cities: ["Sevrin", "Kresna", "Braskov", "Novastral"],
    clubs: [
      { name: "Braskov Rangers", founded: 1931, colors: ["ice blue", "white"], stadium: "Snowcap Field" }
    ],
    landmarks: ["Miners' Stadium", "Velmora Ice Training Dome"],
    style: "defensive and disciplined",
    climate: "alpine",
    terrain: "mountains",
    rivalries: ["southern-lakes"],
    language: ["Velmoran", "Braskian"],
    notable_players: ["Davor Brakan"],
    history: "Football grew out of mining communities and army training camps in the early days.",
    badge: "assets/badges/northern-highlands.svg"
  },

  "southern-lakes": {
    id: "southern-lakes",
    name: "Southern Lakes",
    description: "Culturally rich and tactically gifted, this lake-filled region has produced many of Velmora’s most technical midfielders.",
    cities: ["Drosna", "Vernek", "Stravna", "Radomir"],
    clubs: [
      { name: "Drosna Waves", founded: 1960, colors: ["teal", "white"], stadium: "Crystal Bay Arena" }
    ],
    landmarks: ["Velmoran Institute of Tactics"],
    style: "technical and possession-based",
    climate: "mild",
    terrain: "lakes / lowlands",
    rivalries: ["northern-highlands"],
    language: ["Velmoran"],
    notable_players: ["Luka Straven", "Mira Zelic"],
    history: "The region hosts the oldest tactics school and prides itself on intellectual football.",
    badge: "assets/badges/southern-lakes.svg"
  },

  "eastern-reaches": {
    id: "eastern-reaches",
    name: "Eastern Reaches",
    description: "A borderland of fierce pride and multilingual culture, where derbies are intense and football is aggressive.",
    cities: ["Braknov", "Lurngrad", "Ostravaj"],
    clubs: [
      { name: "Ostravaj Steel", founded: 1939, colors: ["red", "black"], stadium: "Steelworks Ground" }
    ],
    landmarks: ["Union Derby Monument"],
    style: "aggressive pressing",
    climate: "continental",
    terrain: "borderland / mixed forests",
    rivalries: ["central-velmora"],
    language: ["Velmoran", "Ostraj"],
    notable_players: ["Milan Ruzic"],
    history: "Shaped by proximity to foreign powers and industrial migration.",
    badge: "assets/badges/eastern-reaches.svg"
  },

  "western-plateau": {
    id: "western-plateau",
    name: "Western Plateau",
    description: "An industrial zone reborn as a tech-forward football region blending old grit with analytics.",
    cities: ["Karnov", "Velgrad", "Thuvak", "Velmorsk"],
    clubs: [
      { name: "Velgrad Forge", founded: 1953, colors: ["grey", "orange"], stadium: "The Furnace" }
    ],
    landmarks: ["Tech Arena"],
    style: "data-driven direct play",
    climate: "dry",
    terrain: "flat / industrial",
    rivalries: ["central-velmora"],
    language: ["Velmoran"],
    notable_players: ["Rados Karnov"],
    history: "Traditionally factory workers' clubs, now a center for tactical analytics.",
    badge: "assets/badges/western-plateau.svg"
  },

  "northern-bay": {
    id: "northern-bay",
    name: "Northern Bay",
    description: "Remote and mysterious, this isolated coastal land produces enigmatic talents and bold styles.",
    cities: ["Unknown"],
    clubs: [
      { name: "Bay Shadows", founded: 1991, colors: ["midnight", "silver"], stadium: "Twilight Harbor" }
    ],
    landmarks: ["Fog Tower"],
    style: "fluid and improvisational",
    climate: "foggy / maritime",
    terrain: "coastline and cliffs",
    rivalries: [],
    language: ["Velmoran"],
    notable_players: ["Ilya Fenrick"],
    history: "Legends surround this region more than records. Scouting is difficult but rewarding.",
    badge: "assets/badges/northern-bay.svg"
  }
};