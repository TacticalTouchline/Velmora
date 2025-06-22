export const regionData = {
  "central-velmora": {
    id: "central-velmora",
    name: "Central Velmora",
    description: "The political and economic heart of Velmora, home to the capital city and the nation's most prestigious institutions.",
    cities: ["Valdren (Capital)", "Zarnov"],
    clubs: [
      { name: "Valdren United", founded: 1912, colors: ["navy", "gold"], stadium: "Valdren Arena" },
      { name: "Zarnov Dynamo", founded: 1947, colors: ["maroon", "silver"], stadium: "Ironforge Park" }
    ],
    landmarks: ["National Stadium", "Velmoran FA HQ"],
    style: "possession-heavy",
    climate: "temperate",
    terrain: "urban / plains",
    rivalries: ["eastern-reaches", "western-plateau"],
    language: ["Velmoran"],
    notable_players: ["Niko Velgar", "Ilana Drevik"],
    history: "The oldest footballing region, the first FA was formed here in the early 20th century.",
    badge: "assets/badges/central-velmora.svg"
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