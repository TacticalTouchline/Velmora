export const southernLakes = {
    id: "southern-lakes",
    name: "Southern Lakes",
    description:
      "The Velmar heartland, where the clans settled after they left Northern Bay. Lakeside towns, merchant and teachers' clubs, and a habit of doing things slowly and well. Picturesque towns and lakefront stadiums define this region, with clubs rich in local identity.",
    cities: {
      Drosna: {
        climate: "Mild Lakeside with Long Green Summers",
        clubs: [
          {
            name: "Red Quarry Rovers",
            nickname: "The Diggers",
            six_letter_name: "REDQUA",
            three_letter_name: "RQR",
            hashtag: "#RedQuarryRise",
            founded: 1924,
            reputation: 730,
            status: "Semi-Professional",
            competition_tier: "South Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Build around youth; mid-table finish with home focus",
              balance: 630000,
              transfer_budget: 650000,
              avg_match_ticket_price: 12,
              avg_season_ticket_price: 216,
              season_ticket_holders: 180,
              income: {
                kit_sponsor: 20000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 38000,
                other: 13000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 4000,
              min_attendance: 2000,
              max_attendance: 4800,
              training: 6,
              youth_coaching: 7,
              youth_facilities: 6,
              youth_recruitment: 6,
              youth_importance: 8,
              corporate_facilities: 4,
            },
            supporter_profile: {
              loyalty: 18,
              passion: 16,
              patience: 17,
              affluence: 7,
              temprament: 9,
              expectations: 9,
            },
            supporter_objectives: {
              "Play defensive football": 4,
              "Play possession football": 3,
              "Make most of set-pieces": 4,
              "Develop Players using club's youth system": 4,
            },
            colors: ["rgb(187,72,67)", "rgb(168,125,90)"],
            stadium: "Stonecutter Field",
            coord: [70, 250],
            club_history:`
                <h3>Quarrymen in the Lake Country <span class="era-range">(1924)</span></h3>
                <p>Founded in 1924 by quarrymen in the red-stone canyons east of Drosna, Red Quarry Rovers are a rare Kovarai-descended pocket inside Velmora's old Velmar heartland, industrial grit that put down roots in lake country and never left. Nobody has ever fully explained how a mining crew ended up on the gentlest ground in the Southern Lakes. The Diggers have simply always been there.</p>
                <h3>Stonecutter Field <span class="era-range">(1924–1960s)</span></h3>
                <p>The club rose to prominence in the post-war era, briefly reaching the second tier on the strength of a rugged underdog spirit that the rest of Drosna found faintly bewildering. Stonecutter Field, cut into the canyon itself, is a reminder that the Southern Lakes' gentle reputation was never quite universal.</p>
                <h3>The Odd Ones Out <span class="era-range">(1970s–present)</span></h3>
                <p>FK Drosna Lok, the town's other industrial club, gives Red Quarry a natural rival, and the two share a feeder relationship that runs deeper than the fixture list suggests: both know what it is to be the harder-edged club in a lake town that mostly prefers its football unhurried.</p>
                <h3>Still the Exception <span class="era-range">(2026)</span></h3>
                <p>A century on, Stonecutter Field remains the Southern Lakes' one stubborn pocket of Kovarai grit. Red Quarry's rugged underdog identity hasn't softened just because the region around it never shared its industrial roots.</p>
            `,
            club_values: ["Grit, Community, Persistence"],
            club_slogan: '"We Dig Deep."',
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/redqua/home.svg",
              home_back: "assets/kits/redqua/home_back.svg",
              away: "assets/kits/redqua/away.svg",
              away_back: "assets/kits/redqua/away_back.svg",
            },
            rivals: [
              { club: "FK Drosna Lok", level: 65, reason: "Local" },
            ],
            derbies: [],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Yara Pell",
                  "role": "Manager"
                }
              ],
              "legends": [
                {
                  "name": "Emil Grost",
                  "role": "Player"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Quarry Line"
            ],
            traditions: [
              "Red Stone: supporters bring a piece of red canyon stone to their first match and keep it for life."
            ],
            chants: [
              {
              "title": "Mining Spirit",
              "lyrics": [
                "Deep in the quarry, strong and bold,",
                "Rovers’ tales of glory told!",
                "Through sweat and dust, we play with might,",
                "The Diggers cheer loud into the night!"
              ]
            },
            {
            "title": "Quarry Anthem",
            "lyrics": [
              "Raise your voices, stomp the ground!",
              "Rovers’ victories will resound!",
              "With every match, we stand and sing,",
              "Red Quarry Rovers, hear us ring!"
            ]
          }
            ],
            supporter_quotes: [
              {
                "text": "Everyone else in this lake country plays like the water taught them patience. We were taught by rock.",
                "author": "Emil Grost, Stonecutter Field"
              }
            ],
          },
          {
            name: "FK Drosna Lok",
            nickname: "The Second Wave",
            six_letter_name: "DRSLOK",
            three_letter_name: "DLK",
            hashtag: "#DrosnaLok",
            founded: 1967,
            reputation: 1080,
            status: "Professional",
            competition_tier: "Velmoran National Liga",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Limited Liability Company",
              board_expectations: "Play tough, grounded football; embody resistance and pride; compete fiercely against rivals.",
              balance: 4650000,
              transfer_budget: 2100000,
              avg_match_ticket_price: 16,
              avg_season_ticket_price: 288,
              season_ticket_holders: 700,
              income: {
                kit_sponsor: 75000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 55000,
                other: 18000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 8500,
              min_attendance: 5200,
              max_attendance: 9500,
              training: 9,
              youth_coaching: 8,
              youth_facilities: 8,
              youth_recruitment: 9,
              youth_importance: 10,
              corporate_facilities: 7,
            },
            supporter_profile: {
              loyalty: 17,
              passion: 18,
              patience: 14,
              affluence: 8,
              temprament: 9,
              expectations: 11,
            },
            supporter_objectives: {
              "Play defensive football": 3,
              "Play direct football": 5,
              "Make most of set-pieces": 4,
              "Play counter-attacking football": 5,
              "Develop Players using club's youth system": 3,
            },
            colors: ["rgb(0,56,168) ", "rgb(245,245,245)"],
            stadium: "Portline Grounds",
            coord: [100, 280],
            club_history:`
                <h3>The Younger, Harder Sibling <span class="era-range">(1967)</span></h3>
                <p>Created in 1967 as the industrial works team for Drosna's growing logistics and ferry industries, Drosna Lok is the younger sibling of the venerable Drosna FK, a pragmatic, fast-break Kovarai counterpoint to the older club's measured Velmar philosophy. It arrived sixty-two years after Drosna FK with no intention of imitating it.</p>
                <h3>Portline Grounds <span class="era-range">(1967–1970s)</span></h3>
                <p>The club took its first honor almost immediately, winning the <strong class="hl">National Liga in 1979</strong>, and Portline Grounds hosted top-flight football before the decade was out. It has since become a club that takes real pride in being the people's alternative to its more polished, more decorated neighbor across town.</p>
                <h3>The Drosna Derby <span class="era-range">(1979–present)</span></h3>
                <p>The rivalry with Drosna FK, old money against the harder-edged industrial answer to it, defines the club more than any single result. A second <strong class="hl">National Liga title in 2007</strong> returned Lok to the top flight once more, and Red Quarry Rovers, its feeder club, keeps supplying the Portline dressing room with the same rugged temperament that built the town's quarry club.</p>
                <h3>Still the People's Alternative <span class="era-range">(2026)</span></h3>
                <p>Nearly sixty years on, Portline Grounds still hosts Drosna's harder-edged, fast-break answer to its more decorated neighbor. Drosna Lok wears the "younger sibling" tag with real pride rather than resentment.</p>
            `,
            club_values: ["Hard Work. Transition. Tenacity."],
            club_slogan: "We move. We break. We conquer.",
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [1979, 2007],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
              VHC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/drslok/home.svg",
              home_back: "assets/kits/drslok/home_back.svg",
              away: "assets/kits/drslok/away.svg",
              away_back: "assets/kits/drslok/away_back.svg",
            },
            rivals: [
              { club: "Drosna FK", level: 75, reason: "Local" },
              { club: "Red Quarry Rovers", level: 65, reason: "Local" },
            ],
            derbies: [
              {
                name: "Drosna Derby",
                team2: "Drosna FK",
                history: "Drosna FK's old-money civic pride against FK Drosna Lok's harder-edged, industrial answer to it — same city, different Drosna entirely.",
              },
            ],
            affiliations: [
              { club: "Red Quarry Rovers", type: "Feeder Team" },
              { club: "Rustfield Rovers", type: "Good Relations" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Tove Ahlin",
                  "role": "Manager"
                }
              ],
              "legends": [
                {
                  "name": "Rasmus Kell",
                  "role": "Player"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Portline Crew"
            ],
            traditions: [
              "The Ferry Horn: a ship's horn sounds from the harbor whenever Lok score, audible across half the town."
            ],
            chants: [
              {
                "title": "Heritage Song",
                "lyrics": [
                  "Born of lakes and iron might,",
                  "Drosna Lok shines through the fight!",
                  "Fans unite, we cheer and sing,",
                  "For the pride that the second wave will bring!"
                ]
              }
            ],
            supporter_quotes: [
              {
                "text": "Drosna FK think deeper. We just get there faster.",
                "author": "Rasmus Kell, Portline Grounds"
              }
            ],
          },
          {
            name: "Drosna FK",
            nickname: "The Lake Kings",
            six_letter_name: "DRSNAF",
            three_letter_name: "DRO / DFK",
            hashtag: "#DrosnaFK",
            founded: 1905,
            reputation: 1730,
            status: "Professional",
            competition_tier: "Velmoran Super League",
            finances: {
              chairperson_title: "General Manager",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play attacking football and establish regional identity",
              balance: 5400000,
              transfer_budget: 2500000,
              avg_match_ticket_price: 18,
              avg_season_ticket_price: 324,
              season_ticket_holders: 800,
              income: {
                kit_sponsor: 100000,
                government_grant: 60000,
                stadium_sponsor: 150000,
                club_membership: 80000,
                other: 25000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 9500,
              min_attendance: 6500,
              max_attendance: 11000,
              training: 14,
              youth_coaching: 15,
              youth_facilities: 15,
              youth_recruitment: 14,
              youth_importance: 15,
              corporate_facilities: 11,
            },
            supporter_profile: {
              loyalty: 18,
              passion: 15,
              patience: 16,
              affluence: 14,
              temprament: 17,
              expectations: 13,
            },
            supporter_objectives: {
              "Play possession football": 5,
              "Play entertaining football": 5,
              "Develop Players using club's youth system": 5,
            },
            colors: ["rgb(0,56,168)", "rgb(255,255,255)"],
            stadium: "Lakefront Field",
            coord: [105, 300],
            club_history:`
                <h3>Velmora's Thinking Club <span class="era-range">(1905)</span></h3>
                <p>Founded in 1905 by lakeside merchants and teachers, Drosna FK is one of the oldest clubs in Velmora, old Velmar heartland football, born of the same ancestral lake-country settlement, founded fourteen years after the Great Collapse in the unhurried spirit the lake country had always kept. Education, strategy, and sportsmanship were core values from the very first season.</p>
                <h3>Measured Football, Municipal Pride <span class="era-range">(1905–1960s)</span></h3>
                <p>Municipally owned and supported by the City of Drosna, Lakefront Field is as much a civic symbol as a football ground: measured football, deep-rooted philosophy, and the kind of historical elegance younger clubs can only imitate. The first honors came late but arrived in earnest, a <strong class="hl">Velmoran Cup in 1969</strong>.</p>
                <h3>Two Rivalries, Two Eras <span class="era-range">(1970s–2010s)</span></h3>
                <p>Drosna FK won the <strong class="hl">Super League in 1972</strong>, its first, and added Cups in <strong class="hl">1999, 2011 and 2015</strong> and a second league title in <strong class="hl">2018</strong>. Throughout, two rivalries defined it: the <strong class="hl">Lake-River Classic</strong> against Stravna Velkomir, the Southern Lakes' two oldest institutions meeting in a fixture nearly as old as organized football itself, and the <strong class="hl">Drosna Derby</strong> against its own younger sibling, FK Drosna Lok, founded in 1967 as the industrial answer to Drosna FK's civic one.</p>
                <h3>Still Thinking Deeper <span class="era-range">(2026)</span></h3>
                <p>More than a century since the lakeside merchants first organized, Lakefront Field remains a civic symbol as much as a football ground. Drosna FK's measured, philosophical style has aged into one of Velmora's most respected footballing traditions, and Ploughline Albion and Red Quarry Rovers, on good terms and feeder relationships respectively, keep the club's influence spreading quietly through the region.</p>
            `,
            club_values: ["“Think deeper, play cleaner.”"],
            club_slogan:
              "“Calm as the Lake, Sharp as the Blade – Drosna Will Not Fade!”",
            competition_history: {
              VSL: {
                winnerIn: [1972, 2018],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [1969, 1999, 2011, 2015],
              },
              VHC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/drsnaf/home.svg",
              home_back: "assets/kits/drsnaf/home_back.svg",
              away: "assets/kits/drsnaf/away.svg",
              away_back: "assets/kits/drsnaf/away_back.svg",
            },
            rivals: [
              { club: "Stravna Velkomir", level: 85, reason: "Historic" },
              { club: "FK Drosna Lok", level: 75, reason: "Local" },
              { club: "Red Quarry Rovers", level: 60, reason: "Local" },
            ],
            derbies: [
              {
                name: "Lake-River Classic",
                team2: "Stravna Velkomir",
                history: "Velmora's two oldest Southern Lakes institutions, Drosna FK and Stravna Velkomir, meeting in a fixture almost as old as organized football in the country.",
              },
              {
                name: "Drosna Derby",
                team2: "FK Drosna Lok",
                history: "Drosna FK's old-money civic pride against FK Drosna Lok's harder-edged, industrial answer to it — same city, different Drosna entirely.",
              },
            ],
            affiliations: [
              { club: "Ploughline Albion", type: "Good Relations" },
              { club: "Red Quarry Rovers", type: "Feeder Team" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Marit Sund",
                  "role": "General Manager"
                }
              ],
              "legends": [
                {
                  "name": "Professor Lenna Aask",
                  "role": "Founding Member"
                },
                {
                  "name": "Otto Brenn",
                  "role": "Player"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Lakefront Assembly"
            ],
            traditions: [
              "The Reading: before every home game a supporter reads a short passage on sportsmanship from the club's founding charter."
            ],
            chants: [
              {
                "title": "Kings of the Lakes",
                "lyrics": [
                  "On the waters, strong and free,",
                  "Drosna FK rules the sea!",
                  // "Waves may crash, winds may roar,",
                  // "But our lads will fight for more!",
                  // "Red and blue, our banners fly,",
                  // "We conquer lakes beneath the sky!",
                  // "Every pass and every goal,",
                  // "Echoes across the waters’ soul!",
                  "Hear the fans, their voices wake,",
                  "For Drosna FK, Kings of the Lake!"
                ]
              }
            ],
            supporter_quotes: [
              {
                "text": "We have never once won by accident. Every result here was argued for first.",
                "author": "Professor Lenna Aask, Lakefront Field"
              }
            ],
          },
          {
            name: "Oakshroud AFC",
            nickname: "The Grove",
            six_letter_name: "OAKSHR",
            three_letter_name: "OAK / OKA",
            hashtag: "#OakshroudAFC",
            founded: 1953,
            reputation: 620,
            status: "Semi-Professional",
            competition_tier: "South Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Embrace analytics and modern tactics; prioritize youth development; play dynamic attacking football.",
              balance: 390000,
              transfer_budget: 320000,
              avg_match_ticket_price: 6,
              avg_season_ticket_price: 108,
              season_ticket_holders: 70,
              income: {
                kit_sponsor: 6500,
                government_grant: 7000,
                stadium_sponsor: 0,
                club_membership: 20000,
                other: 6500,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 3600,
              min_attendance: 1600,
              max_attendance: 4300,
              training: 7,
              youth_coaching: 9,
              youth_facilities: 9,
              youth_recruitment: 8,
              youth_importance: 12,
              corporate_facilities: 6,
            },
            supporter_profile: {
              loyalty: 16,
              passion: 13,
              patience: 19,
              affluence: 12,
              temprament: 18,
              expectations: 8,
            },
            supporter_objectives: {
              "Play possession football": 4,
              "Play entertaining football": 4,
              "Develop Players using club's youth system": 5,
            },
            colors: ["rgb(141,101,65)","rgb(136,167,73) ", ],
            stadium: "The Grove Grounds",
            coord: [70, 300],
            club_history:`
                <h3>Named for the Ancient Groves <span class="era-range">(1953)</span></h3>
                <p>Oakshroud AFC takes its name from the ancient oak groves surrounding their original pitch. Formed in 1953 by environmentalists and scouts, old Velmar reverence for the land translated directly into club philosophy: sustainability and youth development above all else, decades before either word became fashionable in football.</p>
                <h3>Roots Underground <span class="era-range">(1953–1990s)</span></h3>
                <p>Tactically, The Grove Grounds plays host to a zonal press with smart rotations, like forest roots weaving underground. Calm, ethical, and well organized, in a region that prizes exactly those qualities, Oakshroud has never chased a result it couldn't justify afterward.</p>
                <h3>Woolstack, and the Slow Rivalry <span class="era-range">(2000s–present)</span></h3>
                <p>The rivalry with Woolstack United, a Western Plateau club with a similarly agricultural bent, is fought more in comparison than in regular fixtures, two clubs that recognise the same values in each other from opposite ends of the country.</p>
                <h3>Still Rooted <span class="era-range">(2026)</span></h3>
                <p>Over seventy years on, The Grove Grounds still runs the same zonal press its founders built. Oakshroud's calm, ethical, sustainability-first identity has aged from a curiosity into something close to a house philosophy for the region.</p>
            `,
            club_values: ["Sustainability, Youth Trust, Intelligence"],
            club_slogan: '"From Roots to Rise"',
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/oakshr/home.svg",
              home_back: "assets/kits/oakshr/home_back.svg",
              away: "assets/kits/oakshr/away.svg",
              away_back: "assets/kits/oakshr/away_back.svg",
            },
            rivals: [
              { club: "Woolstack United", level: 50, reason: "Local" },
            ],
            derbies: [],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Rasmus Uden",
                  "role": "Academy Director"
                }
              ],
              "legends": [
                {
                  "name": "Sela Vinter",
                  "role": "Founding Member"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Grove Keepers"
            ],
            traditions: [
              "Acorn Day: every autumn, supporters plant an acorn on the grounds for each academy graduate of the year."
            ],
            "chants": [
              {
                "title": "Shroud the Field",
                "lyrics": [
                  "Oakshroud AFC, take the lead!",
                  "Pass it, strike it, plant the seed!",
                  "Defend the goal, attack with might!",
                  "Oakshroud lads, win the fight!"
                ]
              },
            ],
            supporter_quotes: [
              {
                "text": "We planted the philosophy before we planted the pitch. The oaks came first, if you believe the old photographs.",
                "author": "Sela Vinter, The Grove Grounds"
              }
            ],
          },
        ],
      },
      Radomir: {
        climate: "Temperate Lake Country with Gentle Seasons",
        clubs: [
          {
            name: "Hearthside United",
            nickname: "The Flames",
            six_letter_name: "HEAUNI",
            three_letter_name: "HSU",
            hashtag: "#HearthsideFire",
            founded: 1907,
            reputation: 800,
            status: "Professional",
            competition_tier: "South Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Defend fiercely and nurture local talent",
              balance: 1800000,
              transfer_budget: 800000,
              avg_match_ticket_price: 12,
              avg_season_ticket_price: 216,
              season_ticket_holders: 600,
              income: {
                kit_sponsor: 60000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 40000,
                other: 15000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 8000,
              min_attendance: 4500,
              max_attendance: 9000,
              training: 7,
              youth_coaching: 8,
              youth_facilities: 8,
              youth_recruitment: 7,
              youth_importance: 10,
              corporate_facilities: 6,
            },
            supporter_profile: {
              loyalty: 17,
              passion: 16,
              patience: 15,
              affluence: 8,
              temprament: 13,
              expectations: 8,
            },
            supporter_objectives: {
              "Sign Players of Nationality": 4,
              "Play direct football": 3,
              "Develop Players using club's youth system": 4,
            },
            colors: ["rgb(164,98,76)", "rgb(242,225,205)"],
            stadium: "Emberfall Ground",
            coord: [190, 285],
            club_history:`
                <h3>Warmth Before Glory <span class="era-range">(1907)</span></h3>
                <p>Hearthside was established in 1907 in the southern quarter of Radomir by local merchants and teachers seeking unity through football, old Velmar heartland stock, born the same generation as Drosna FK and carrying the same unhurried civic pride. It has never once tried to be anything grander than what its founders intended.</p>
                <h3>The Fire Never Dies <span class="era-range">(1907–1960s)</span></h3>
                <p>Emberfall Ground's legacy centers on family warmth, local loyalty, and a slow-burning rise built on consistency rather than ambition. <em>The fire never dies</em> isn't a boast; it's a description, and the club has lived up to it for well over a century without ever once threatening to win anything major.</p>
                <h3>The Radomir Rumble <span class="era-range">(1970s–present)</span></h3>
                <p>The <strong class="hl">Radomir Rumble</strong> against Radomir Eagles is Hearthside's one real fixture of consequence: slow-burning civic pride against Crown Estate patronage, old warmth against old money. Crowspire FC feeds Hearthside its academy graduates, and Golden Acre FC keeps good relations, two more of Radomir's agricultural and civic clubs bound by the same unhurried temperament.</p>
                <h3>The Fire Still Doesn't Die <span class="era-range">(2026)</span></h3>
                <p>Well over a century on, Emberfall Ground still lives up to its slogan. Hearthside's slow-burning consistency has never once translated into a major trophy, and the fanbase has never once seemed to mind.</p>
            `,
            club_values: ["Togetherness, Stability, Local Roots"],
            club_slogan: '"The Fire Never Dies."',
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/heauni/home.svg",
              home_back: "assets/kits/heauni/home_back.svg",
              away: "assets/kits/heauni/away.svg",
              away_back: "assets/kits/heauni/away_back.svg",
            },
            rivals: [
              { club: "Radomir Eagles", level: 70, reason: "Local" },
              { club: "Radomir Veles", level: 65, reason: "Local" },
            ],
            derbies: [
              {
                name: "Radomir Rumble",
                team2: "Radomir Eagles",
                history: "Hearthside United's slow-burning civic pride against Radomir Eagles' Crown Estate patronage — old money against old warmth.",
              },
            ],
            affiliations: [
              { club: "Crowspire FC", type: "Feeder Team" },
              { club: "Golden Acre FC", type: "Good Relations" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Nora Blix",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Elias Fromm",
                  "role": "Founding Member"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Emberfall Circle"
            ],
            traditions: [
              "The Hearth: a small fire is lit outside the main stand before every home match and kept burning until the final whistle."
            ],
            chants: [
              {
                "title": "Warmth of the Crowd",
                "lyrics": [
                  "Hear the fans, their voices rise!",
                  "Hearthside United claims the prize!",
                  "Through storm and sun, our spirits shine!",
                  "For club, for town, till end of time!"
                ]
              },
              {
                "title": "United Flames",
                "lyrics": [
                  "Flames of courage, flames of might!",
                  "Hearthside United lights the night!",
                  "Strike the ball, defend the wall!",
                  "Together we rise, we never fall!"
                ]
              }
            ],
            supporter_quotes: [
              {
                "text": "We've never won the league. We've also never once had a supporter leave angry. I call that a trade worth making.",
                "author": "Elias Fromm, Emberfall Ground"
              }
            ],
          },
          {
            name: "Golden Acre FC",
            nickname: "The Harvesters",
            six_letter_name: "GOLACR",
            three_letter_name: "GAF",
            hashtag: "#AcreToGlory",
            founded: 1945,
            reputation: 635,
            status: "Semi-Professional",
            competition_tier: "South Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play attractive football; Grow fanbase; Push for promotion with style",
              balance: 405000,
              transfer_budget: 330000,
              avg_match_ticket_price: 7,
              avg_season_ticket_price: 126,
              season_ticket_holders: 75,
              income: {
                kit_sponsor: 7000,
                government_grant: 8000,
                stadium_sponsor: 0,
                club_membership: 21000,
                other: 6800,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 3600,
              min_attendance: 1600,
              max_attendance: 4200,
              training: 5,
              youth_coaching: 6,
              youth_facilities: 6,
              youth_recruitment: 6,
              youth_importance: 8,
              corporate_facilities: 4,
            },
            supporter_profile: {
              loyalty: 18,
              passion: 16,
              patience: 18,
              affluence: 8,
              temprament: 12,
              expectations: 7,
            },
            supporter_objectives: {
              "Play defensive football": 4,
              "Make most of set-pieces": 5,
              "Develop Players using club's youth system": 4,
            },
            colors: ["rgb(66,107,63)", "rgb(241,179,44)"],
            stadium: "The Granary",
            coord: [170, 270],
            club_history:`
                <h3>From Soil to Summit <span class="era-range">(1945)</span></h3>
                <p>Golden Acre FC represents the farmland towns of southern Radomir, rooted in the agricultural cooperatives of old Velmar lake country since 1945. Players often emerge straight from local schools rather than formal academies, and the club has never much minded that its best talent sometimes arrives already knowing how to work a harvest.</p>
                <h3>The Granary <span class="era-range">(1945–1990s)</span></h3>
                <p>Known for field discipline and set-piece strength, The Granary is a club built the way its founders built a harvest: patiently, and with nothing wasted. The cooperatives that founded the club still hold a seat on its board, a rare arrangement that has outlasted three generations of farmers.</p>
                <h3>Neighbors, Not Rivals <span class="era-range">(2000s–present)</span></h3>
                <p>Radomir Eagles gives Golden Acre its one real local fixture, a mismatch in prestige that the Harvesters have never let become a mismatch in effort. The club's ambitions remain modest and openly stated: push for promotion, and do it with style rather than compromise.</p>
                <h3>Still Growing <span class="era-range">(2026)</span></h3>
                <p>Eight decades on, The Granary remains a club built the way its founders built a harvest, patiently, with nothing wasted, and still proud that its best players often learn the game on a school pitch rather than an academy one.</p>
            `,
            club_values: ["Humility, Growth, Resilience"],
            club_slogan: '"From Soil to Summit."',
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/golacr/home.svg",
              home_back: "assets/kits/golacr/home_back.svg",
              away: "assets/kits/golacr/away.svg",
              away_back: "assets/kits/golacr/away_back.svg",
            },
            rivals: [
              { club: "Radomir Eagles", level: 55, reason: "Local" },
            ],
            derbies: [],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Freya Adler",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Karsten Ode",
                  "role": "Player"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Harvest Line"
            ],
            traditions: [
              "First Cut: the club captain receives a sheaf of wheat from the founding cooperative before the season opener."
            ],
            chants: [
              {
              "title": "Harvest Roar",
              "lyrics": [
                "From the fields to the stands we go!",
                "Golden Acre fans steal the show!",
                "Tackle, shoot, defend the line!",
                "The Harvesters, forever shine!"
              ]
            },
            {
              "title": "The Acre Song",
              "lyrics": [
                "Fields of gold and hearts so true!",
                "Golden Acre, we sing for you!",
                "Dribble, tackle, strike and score!",
                "We lift our voices evermore!",
                // "Fans united, shout and sing!",
                // "For glory, pride, and everything!"
              ]
            },
            ],
            supporter_quotes: [
              {
                "text": "We grow players the way we grow everything else here. Slowly, and only when the season is right.",
                "author": "Karsten Ode, The Granary"
              }
            ],
          },
          {
            name: "Crowspire FC",
            nickname: "The Blackwings",
            six_letter_name: "CROFCE",
            three_letter_name: "CFC / CRF",
            hashtag: "#CrowspireRise",
            founded: 1937,
            reputation: 680,
            status: "Semi-Professional",
            competition_tier: "South Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Limited Liability Company",
              board_expectations: "Play composed, structured football; Represent Braknov’s elite; Focus on discipline",
              balance: 525000,
              transfer_budget: 480000,
              avg_match_ticket_price: 9,
              avg_season_ticket_price: 162,
              season_ticket_holders: 140,
              income: {
                kit_sponsor: 13000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 29000,
                other: 9800,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 4000,
              min_attendance: 2000,
              max_attendance: 4900,
              training: 7,
              youth_coaching: 7,
              youth_facilities: 6,
              youth_recruitment: 8,
              youth_importance: 10,
              corporate_facilities: 5,
            },
            supporter_profile: {
              loyalty: 15,
              passion: 14,
              patience: 16,
              affluence: 11,
              temprament: 13,
              expectations: 9,
            },
            supporter_objectives: {
              "Play counter-attacking football": 5,
              "Develop Players using club's youth system": 4,
            },
            colors: ["rgb(63,37,72)", "rgb(159,152,160)"],
            stadium: "Spirewatch Grounds",
            coord: [150, 290],
            club_history:`
                <h3>Dark Horses of the South <span class="era-range">(1937)</span></h3>
                <p>Founded in 1937 by scholars and hunters, Crowspire FC built a reputation on unpredictable counter-attacking football, old Velmar lake country's more mysterious corner, content to watch, wait, and strike from the shadows rather than dominate possession. The badge, a blackwing over a spire, was drawn by one of the founding hunters and has never been redesigned.</p>
                <h3>Spirewatch Grounds <span class="era-range">(1937–1980s)</span></h3>
                <p>Spirewatch Grounds has never sought the spotlight Radomir Eagles or Radomir Veles attract across town, and the Blackwings seem to prefer it that way. The club feeds its most promising players to Hearthside United and Radomir Veles in a quiet arrangement that has run for decades.</p>
                <h3>Watching From the Wings <span class="era-range">(1990s–present)</span></h3>
                <p>Crowspire's rivalry with Radomir Eagles is more theatrical than bitter, the counter-attacking outsider against the region's grandest patron club, a fixture Crowspire has never expected to dominate and has occasionally, gleefully, spoiled.</p>
                <h3>Still Watching From the Shadows <span class="era-range">(2026)</span></h3>
                <p>Nearly ninety years since the scholars and hunters first organized, Spirewatch Grounds remains the quietest, most unpredictable corner of Radomir's football scene. The Blackwings still prefer to strike rather than to shine.</p>
            `,
            club_values: [
              "Watch, wait, strike",
              " Outsmart, outlast",
              " Wings over war",
            ],
            club_slogan: "From shadows, we soar!",
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/crofce/home.svg",
              home_back: "assets/kits/crofce/home_back.svg",
              away: "assets/kits/crofce/away.svg",
              away_back: "assets/kits/crofce/away_back.svg",
            },
            rivals: [
              { club: "Radomir Eagles", level: 55, reason: "Local" },
            ],
            derbies: [],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Mira Falk",
                  "role": "Manager"
                }
              ],
              "legends": [
                {
                  "name": "Aksel Thorn",
                  "role": "Player"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Spirewatch"
            ],
            traditions: [
              "The Blackwing Call: supporters caw like a crow whenever Crowspire win possession in the opposition half."
            ],
            chants: [
              {
              "title": "Tower Roar",
              "lyrics": [
                "From the spire, the crows descend!",
                "The Blackwings will never bend!",
                "Kick it high, run the line!",
                "Victory will soon be mine!"
              ]
            },
            ],
            supporter_quotes: [
              {
                "text": "We don't need the ball for long. We just need it once, at the right moment.",
                "author": "Aksel Thorn, Spirewatch Grounds"
              }
            ],
          },
          {
            name: "Radomir Veles",
            nickname: "The Falcons",
            six_letter_name: "RADVEL",
            three_letter_name: "RDV",
            hashtag: "#RadomirVeles",
            founded: 1929,
            reputation: 1080,
            status: "Professional",
            competition_tier: "Velmoran National Liga",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Limited Liability Company",
              board_expectations: "Be competitive; build toward promotion push",
              balance: 4500000,
              transfer_budget: 2100000,
              avg_match_ticket_price: 17,
              avg_season_ticket_price: 306,
              season_ticket_holders: 690,
              income: {
                kit_sponsor: 75000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 55000,
                other: 19000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 3600,
              min_attendance: 1600,
              max_attendance: 4200,
              training: 6,
              youth_coaching: 10,
              youth_facilities: 8,
              youth_recruitment: 7,
              youth_importance: 12,
              corporate_facilities: 4,
            },
            supporter_profile: {
              loyalty: 16,
              passion: 15,
              patience: 16,
              affluence: 9,
              temprament: 12,
              expectations: 8,
            },
            supporter_objectives: {
              "Play defensive football": 5,
              "Make most of set-pieces": 4,
              "Develop Players using club's youth system": 4,
            },
            colors: ["rgb(119,25,26) ", "rgb(202,165,87)"],
            stadium: "Veles Heights",
            coord: [190, 250],
            club_history:`
                <h3>The Bohemian Academy <span class="era-range">(1929)</span></h3>
                <p>Radomir Veles was built in 1929 around the athletic academy of the Radomir Noble Academy, focusing on speed, elevation, and raw flair. A more expressive and bohemian alternative to the conservative Radomir Eagles, old Velmar aristocracy's rebellious younger branch, still noble in origin but allergic to the Eagles' formality.</p>
                <h3>Promotion, Three Times Over <span class="era-range">(1963–1977)</span></h3>
                <p>The club spent its middle decades finding its level, winning the <strong class="hl">National Liga in 1963, 1972 and 1977</strong>, promoted each time on the strength of the instinctive, attacking football that Veles Heights had built its name on and relegated each time for lack of the discipline the Eagles never lacked.</p>
                <h3>The Golden Run <span class="era-range">(1991–2000)</span></h3>
                <p>It finally held. Veles won <strong class="hl">four Super League titles in six seasons, 1991, 1993, 1994 and 1996</strong>, the best spell in the club's history, and added the <strong class="hl">Velmoran Cup in 2000</strong> for good measure. It was proof that not every club descended from the old clan-lord world plays like it's still trying to impress a Crown Estate inspector.</p>
                <h3>The Royal Rift <span class="era-range">(Today)</span></h3>
                <p>The <strong class="hl">Royal Rift</strong> against Radomir Eagles, the same aristocracy arguing with itself, remains the club's defining fixture. Crowspire FC still feeds Veles its academy talent, and Meadowbell Athletic, on good relations since a Braknov schoolteacher's visit decades ago, gives the Falcons a friendly face outside the region. Nearly a century on, Veles Heights remains Radomir's more instinctive, less formal answer to the Eagles across town.</p>
            `,
            club_values: ["Expression. Pace. Daring."],
            club_slogan: "Fly fearless, strike fast.",
            competition_history: {
              VSL: {
                winnerIn: [1991, 1993, 1994, 1996],
              },
              VNN: {
                winnerIn: [1963, 1972, 1977],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [2000],
              },
              VHC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/radvel/home.svg",
              home_back: "assets/kits/radvel/home_back.svg",
              away: "assets/kits/radvel/away.svg",
              away_back: "assets/kits/radvel/away_back.svg",
            },
            rivals: [
              { club: "Radomir Eagles", level: 80, reason: "Local" },
              { club: "Hearthside United", level: 65, reason: "Local" },
            ],
            derbies: [
              {
                name: "Royal Rift",
                team2: "Radomir Eagles",
                history: "Radomir Eagles' Crown Estate patronage against Radomir Veles' more instinctive, less formal noble line — the same aristocracy, arguing with itself.",
              },
            ],
            affiliations: [
              { club: "Crowspire FC", type: "Feeder Team" },
              { club: "Meadowbell Athletic", type: "Good Relations" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Vera Osten",
                  "role": "Manager"
                }
              ],
              "legends": [
                {
                  "name": "Ines Doran",
                  "role": "Player"
                },
                {
                  "name": "Casimir Lund",
                  "role": "Player"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Bohemian Stand"
            ],
            traditions: [
              "Falcon's Flight: goalscorers spread their arms like wings toward the Veles Heights ultras."
            ],
            chants: [
              {
                "title": "Veles Anthem",
                "lyrics": [
                  "Strong of heart, fierce of will!",
                  "Radomir Veles conquers still!",
                  "From the first whistle to the last blow,",
                  "Our fans cheer loud, let the world know!"
                ]
              }
            ],
            supporter_quotes: [
              {
                "text": "The Eagles play like they're still being watched by a Crown inspector. We play like the inspector left decades ago and nobody told the Eagles.",
                "author": "Ines Doran, Veles Heights"
              }
            ],
          },
          {
            name: "Radomir Eagles",
            nickname: "The Red Talons",
            six_letter_name: "RADEAG",
            three_letter_name: "RAD / RAE",
            hashtag: "#RadomirE",
            founded: 1908,
            reputation: 2554,
            status: "Professional",
            competition_tier: "Velmoran Super League",
            finances: {
              chairperson_title: "President",
              ownership_type: "Public Liability Company",
              board_expectations: "Play attractive football and invest in youth development",
              balance: 8100000,
              transfer_budget: 4000000,
              avg_match_ticket_price: 28,
              avg_season_ticket_price: 504,
              season_ticket_holders: 1150,
              income: {
                kit_sponsor: 170000,
                government_grant: 95000,
                stadium_sponsor: 230000,
                club_membership: 120000,
                other: 40000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 12000,
              min_attendance: 8000,
              max_attendance: 15000,
              training: 14,
              youth_coaching: 13,
              youth_facilities: 12,
              youth_recruitment: 12,
              youth_importance: 10,
              corporate_facilities: 17,
            },
            supporter_profile: {
              loyalty: 17,
              passion: 11,
              patience: 10,
              affluence: 20,
              temprament: 19,
              expectations: 15,
            },
            supporter_objectives: {
              "Become Most Reputable In Nation": 4,
              "Sign High Reputation Player": 4,
              "Play entertaining football": 3,
            },
            colors: ["rgb(200,16,46)", "rgb(255,255,255)"],
            stadium: "Red Talon Stadium",
            coord: [205, 265],
            club_history:`
                <h3>The House of Radomir <span class="era-range">(before 1908)</span></h3>
                <p>The Southern Lakes are where the Velmar settled after they left Northern Bay, and the house that stewarded the largest of them was the <strong class="hl">House of Radomir</strong>. It was the oldest family in the country after the Valdrens, and it had kept the lake shores through a thousand years of saga by the simple method of never picking a fight it could not win. When the Collapse came, Radomir's lords did not raise their militias. They read the Charter carefully, signed it early, and put their lands into the Crown Estate on terms the other houses envied for the next fifty years.</p>
                <p>It gave the House something the other clan families lacked: money that nobody could take away, and a reputation for sense. It also gave it an unshakable conviction that the way to survive a republic was to be the most graceful institution in it.</p>

                <h3>Officers, Nobles, and Philosophers <span class="era-range">(1908–1926)</span></h3>
                <p><strong class="hl">Radomir Eagles</strong> were established in <strong class="hl">1908</strong> under the patronage of the House of Radomir, and they have never stopped receiving ceremonial support from the Crown Estate, which is the old clan heraldry preserved almost intact through the republic's founding. The first team was a club of officers, nobles and philosophers who played football the way they played chess, in silence and with a view to the long game. They took the <strong class="hl">Cup in 1922</strong>, their first honor, and again in <strong class="hl">1925</strong>.</p>
                <p>The badge is an eagle rather than a hawk, on the grounds that the Radomirs never entirely agreed the hawk was theirs. Their colors are red and white, and the crest has a talon on it.</p>

                <h3>The First Dynasty <span class="era-range">(1927–1933)</span></h3>
                <p>Between <strong class="hl">1927 and 1933</strong> the Eagles were the best club in the country by some distance. They won the <strong class="hl">league in 1927, 1928 and 1929</strong>, then again in <strong class="hl">1931</strong> and <strong class="hl">1933</strong>, and added the <strong class="hl">Cup in 1927, 1931 and 1932</strong>. It was the era of <em>grace in control</em>: a side that seemed to play at an unhurried pace and finish every move on time. The Ironworks club in the capital, beaten to the title five times in seven years, took it personally, and the rivalry between the Lord's club and the Lakes' noble one has never quite faded.</p>

                <h3>The Interior Champions <span class="era-range">(1940–1960)</span></h3>
                <p>The coast occupation took the ports and left the lakes, and the league went on among the clubs that could still travel. The Eagles won it in <strong class="hl">1940</strong> and <strong class="hl">1943</strong>, and the Cup in <strong class="hl">1940</strong> and <strong class="hl">1943</strong>, with a squad that played in the club's usual manner in front of crowds who had a great deal else to think about. Some supporters have never forgiven the club for making it look easy. Others treasure the memory of a side that played as though the war were happening to somebody else.</p>
                <p>After it the Compact gave the state's attention to the railway clubs, and the Eagles carried on on their endowment. They won the <strong class="hl">Cup in 1948</strong>, the <strong class="hl">league in 1949</strong>, the <strong class="hl">league in 1958</strong> and the <strong class="hl">Cup in 1960</strong>, and Radomir's velvet-and-red matchday ceremony, designed to make a football match feel like a ceremony of state, grew steadily more elaborate.</p>

                <h3>A Fall and a Return <span class="era-range">(1970s–2000s)</span></h3>
                <p>The elegance did not survive the 1970s. The Eagles were relegated, and in <strong class="hl">1978</strong> they won the <strong class="hl">National Liga</strong> to come back. They won the <strong class="hl">league in 1984</strong>, in the last flourish of the Compact era, and the <strong class="hl">Cup in 1983</strong> and <strong class="hl">1986</strong> either side of it. Then the Thaw came and the cycle repeated: <strong class="hl">National Liga titles in 1991, 1996 and 2000</strong>, each one a promotion after a relegation, each one greeted in Radomir with the tolerant patience of a house that had seen everything.</p>
                <p>It was in these years that <strong class="hl">Red Talon Stadium</strong> was built, or rather rebuilt, a domed, red-accented ground of velvet seating and curated ceremony that is now regarded as an architectural marvel and once as an act of considerable optimism.</p>

                <h3>Old Blood, New Ground <span class="era-range">(2000s–present)</span></h3>
                <p>The Eagles now play in the Super League as the Velmoran Crown Estate's most visible beneficiary and as the club that best embodies the country's high-society tradition: careful, ceremonial and slightly amused by everyone else. The <strong class="hl">Royal Rift</strong> against Radomir Veles, the more instinctive branch of the same aristocratic line, is the same family arguing with itself, and its supporters treat it accordingly.</p>
                <p>The House of Radomir still owns the lake shore. It still keeps its word. And the Red Talons still expect, with the confidence of a club that has been elegant for over a century, to win.</p>
              `,
            club_values: ["“Grace in control.”"],
            club_slogan: "“By Crown, By Right – Radomir Soars into the Night!”",
            competition_history: {
              VSL: {
                winnerIn: [1927, 1928, 1929, 1931, 1933, 1940, 1943, 1949, 1958, 1984],
              },
              VNN: {
                winnerIn: [1978, 1991, 1996, 2000],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [1922, 1925, 1927, 1931, 1932, 1940, 1943, 1948, 1960, 1983, 1986],
              },
              VHC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/radeag/home.svg",
              home_back: "assets/kits/radeag/home_back.svg",
              away: "assets/kits/radeag/away.svg",
              away_back: "assets/kits/radeag/away_back.svg",
            },
            rivals: [
              { club: "Radomir Veles", level: 80, reason: "Local" },
              { club: "Stravna Velkomir", level: 60, reason: "Competitive" },
            ],
            derbies: [
              {
                "name": "Royal Rift",
                "team2": "Radomir Veles",
                "history": "Radomir Eagles' Crown Estate patronage against Radomir Veles' more instinctive, less formal noble line — the same aristocracy, arguing with itself."
              },
              {
                "name": "Radomir Rumble",
                "team2": "Hearthside United",
                "history": "Hearthside United's slow-burning civic pride against Radomir Eagles' Crown Estate patronage — old money against old warmth."
              }
            ],
            affiliations: [
              { club: "Golden Acre FC", type: "Feeder Team" },
              { club: "Crowspire FC", type: "Good Relations" },
            ],
            players_alumni: {
              favorites: [],
              icons: [],
              legends: [],
            },
            schedule: [],
            fan_clubs: [],
            chants: [
              {
                "title": "Eagles Soar",
                "lyrics": [
                  "Up we rise, the Eagles soar!",
                  "Red and white, we win once more!",
                  "Dribble, pass, and strike it true!",
                  "Radomir Eagles fight for you!"
                ]
              },
              {
                "title": "Claws and Wings",
                "lyrics": [
                  "Claws out, wings spread wide!",
                  "Radomir Eagles rule the sky!",
                  "Tackle hard, defend the goal!",
                  "Victory burns within our soul!"
                ]
              },
            ],
            supporter_quotes: [],
          },
        ],
      },
      Vernek: {
        climate: "Damp Hillside Town Prone to Fog",
        clubs: [
          {
            name: "Ploughline Albion",
            nickname: "The Tillers",
            six_letter_name: "PLOALB",
            three_letter_name: "PLA",
            hashtag: "#PloughlinePush",
            founded: 1922,
            reputation: 650,
            status: "Semi-Professional",
            competition_tier: "South Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Fight for top half; maintain Glen derby supremacy",
              balance: 450000,
              transfer_budget: 400000,
              avg_match_ticket_price: 8,
              avg_season_ticket_price: 144,
              season_ticket_holders: 100,
              income: {
                kit_sponsor: 10000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 25000,
                other: 8000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 3800,
              min_attendance: 1800,
              max_attendance: 4500,
              training: 5,
              youth_coaching: 6,
              youth_facilities: 6,
              youth_recruitment: 7,
              youth_importance: 9,
              corporate_facilities: 4,
            },
            supporter_profile: {
              loyalty: 18,
              passion: 17,
              patience: 18,
              affluence: 7,
              temprament: 10,
              expectations: 7,
            },
            supporter_objectives: {
              "Play defensive football": 4,
              "Make most of set-pieces": 5,
              "Play high-tempo pressing football": 5,
              "Develop Players using club's youth system": 3,
            },
            colors: ["rgb(90,150,90)", "rgb(255,255,255)"],
            stadium: "Furrow End",
            coord: [155, 325],
            club_history:`
                <h3>Row by Row <span class="era-range">(1922)</span></h3>
                <p>Founded in 1922 by farming syndicates along the Vernek plains, Ploughline Albion's traditions are tied directly to the land and the rhythm of the seasons, old Velmar lake-country farming culture, tactically compact and unglamorous by design. The syndicates that founded it still hold an informal say in team selection, a custom nobody has ever formally written down.</p>
                <h3>Furrow End <span class="era-range">(1922–1980s)</span></h3>
                <p>Furrow End has built a habit of upsetting bigger teams through organized pressing and long throws, simplicity as a weapon, not a limitation. Ploughline has never chased a reputation beyond the Vernek plains, and the plains have never asked it to.</p>
                <h3>The Albion Derby <span class="era-range">(1930s–present)</span></h3>
                <p>Vernek Albion, the hillside town's bigger and more ideological club, gives Ploughline its one real local rivalry, an argument between the farming syndicates and the trade-union eco-socialists over which one actually represents Vernek's working people. Drosna FK, on good terms since the two clubs' civic-minded founders corresponded by letter decades ago, treats Ploughline as a kindred spirit from the other side of the lake country.</p>
                <h3>Still Row by Row <span class="era-range">(2026)</span></h3>
                <p>A century on, Furrow End still produces the same compact, unglamorous football that has occasionally embarrassed much bigger clubs. Ploughline's farming-syndicate roots remain the clearest possible explanation for why.</p>
            `,
            club_values: ["Simplicity, Discipline, Work Rate"],
            club_slogan: '"Row by Row."',
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/ploalb/home.svg",
              home_back: "assets/kits/ploalb/home_back.svg",
              away: "assets/kits/ploalb/away.svg",
              away_back: "assets/kits/ploalb/away_back.svg",
            },
            rivals: [
              { club: "Vernek Albion", level: 60, reason: "Local" },
            ],
            derbies: [],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Ruth Corvin",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Henning Aas",
                  "role": "Player"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Furrow Line"
            ],
            traditions: [
              "Row by Row: supporters walk to the ground in single file along the old plough furrow that gives the club its name."
            ],
            chants: [
              {
              "title": "Albion Anthem",
              "lyrics": [
                "Strong of heart, fierce of will!",
                "Ploghline Albion conquers still!",
                "From first whistle to the final horn,",
                "Our fans cheer loud, our pride reborn!"
              ]
            }
            ],
            supporter_quotes: [
              {
                "text": "We don't have Vernek Albion's ideology. We have a plough, and a plan, and it's worked for a hundred years.",
                "author": "Henning Aas, Furrow End"
              }
            ],
          },
          {
            name: "FC Zoryn Vatra",
            nickname: "The Flamekeepers",
            six_letter_name: "ZORVAT",
            three_letter_name: "FZV",
            hashtag: "#ZorynVatra",
            founded: 1941,
            reputation: 1000,
            status: "Professional",
            competition_tier: "Velmoran National Liga",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play with passion and energy; Engage community roots; Develop young local talent",
              balance: 4350000,
              transfer_budget: 1950000,
              avg_match_ticket_price: 15,
              avg_season_ticket_price: 270,
              season_ticket_holders: 670,
              income: {
                kit_sponsor: 69000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 49000,
                other: 16500,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 8300,
              min_attendance: 4900,
              max_attendance: 9300,
              training: 9,
              youth_coaching: 11,
              youth_facilities: 10,
              youth_recruitment: 11,
              youth_importance: 14,
              corporate_facilities: 6,
            },
            supporter_profile: {
              loyalty: 19,
              passion: 19,
              patience: 17,
              affluence: 8,
              temprament: 8,
              expectations: 10,
            },
            supporter_objectives: {
              "Sign Players of Nationality": 4,
              "Play attacking football": 4,
              "Play entertaining football": 4,
              "Develop Players using club's youth system": 5,
            },
            colors: ["rgb(30,30,30)", "rgb(255,69,0)"],
            stadium: "Vatra Grounds",
            coord: [125, 330],
            club_history:`
                <h3>The Fire of Resistance <span class="era-range">(1941)</span></h3>
                <p>Zoryn Vatra was formed in 1941 by resistance workers as a mobile sports club symbolizing the survival of culture through hardship, <em>vatra</em> meaning fire, in the older, harder sense the word carried during the years the coast lived under occupation. It had no fixed ground for its first four years, meeting at a different farm every week and using the match as cover for passing messages.</p>
                <h3>The Flame Kept Hidden <span class="era-range">(1941–1945)</span></h3>
                <p>The club has retained that rebel identity at <strong class="hl">Vatra Grounds</strong> ever since: community, courage, and youth upliftment over spectacle, a Kovarai club that never forgot what it means to keep something alive against the odds. When the occupation ended in 1945, Vatra was one of the first clubs in the country to field a settled side again.</p>
                <h3>The Green Derby <span class="era-range">(1990s–present)</span></h3>
                <p>The rivalry with Vernek Albion, once purely a local fixture, sharpened into the <strong class="hl">Green Derby</strong> when Albion's own eco-socialist rewrite of the 1990s gave the two clubs a shared vocabulary: Zoryn Vatra's Kovarai resistance roots against Vernek Albion's Velmar eco-socialist idealism, different roads to the same green politics. Ploughline Albion feeds Vatra academy talent, and Meadowbell Athletic, on good terms since the war years, still sends a delegation whenever the two clubs meet.</p>
                <h3>The Flame Still Burns <span class="era-range">(2026)</span></h3>
                <p>More than eighty years since the resistance workers first carried it, Vatra Grounds still holds the same rebel identity. A Kovarai club built to keep something alive against the odds is, eighty years on, still doing exactly that.</p>
            `,
            club_values: ["Resilience. Spirit. Hope."],
            club_slogan: "Keep the flame alive.",
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/zorvat/home.svg",
              home_back: "assets/kits/zorvat/home_back.svg",
              away: "assets/kits/zorvat/away.svg",
              away_back: "assets/kits/zorvat/away_back.svg",
            },
            rivals: [
              { club: "Vernek Albion", level: 70, reason: "Local" },
              { club: "Stravna Velkomir", level: 60, reason: "Historic" },
            ],
            derbies: [
              {
                name: "Green Derby",
                team2: "Vernek Albion",
                history: "Zoryn Vatra's Kovarai resistance roots against Vernek Albion's Velmar eco-socialist idealism — different roads to the same green politics.",
              },
            ],
            affiliations: [
              { club: "Ploughline Albion", type: "Feeder Team" },
              { club: "Meadowbell Athletic", type: "Good Relations" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Damir Vok",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Unnamed founding resistance eleven",
                  "role": "Founders"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Flamekeepers"
            ],
            traditions: [
              "The Moving Match: once a season, Vatra plays a friendly at a different farm outside the city, in memory of the club's founding years."
            ],
            chants: [
               {
                "title": "The Fire Lives On",
                "lyrics": [
                  "From the ashes, we take flight!",
                  "The Flamekeepers fights with might!",
                  "Pass, strike, defend with pride!",
                  "Our legacy burns deep inside!"
                ]
              },
          { 
                "title": "Vatra Victors",
                "lyrics": [
                  "From the old town to the roaring crowd!",
                  "Zoryn Vatra makes us proud!",
                  "Strike with power, defend with might!",
                  "For our legacy, we’ll win tonight!"
                ]
              },
          {
                "title": "Vatra Eternal",
                "lyrics": [
                  "Oh Zoryn Vatra, flame of old!",
                  "Through every match, your story’s told!",
                  "From first whistle to final bell,",
                  "Our hearts and fire will never quell!"
                ]
              },
            ],
            supporter_quotes: [
              {
                "text": "We met in a different barn every week so nobody could find the meeting. The football was real. So was the reason we needed an excuse for it.",
                "author": "Old resistance ledger, attributed to a founding member"
              }
            ],
          },
          {
            name: "Vernek Albion",
            nickname: "The Fogmen",
            six_letter_name: "VERALB",
            three_letter_name: "VER / VAL",
            hashtag: "#VernekAlbion",
            founded: 1932,
            reputation: 1550,
            status: "Professional",
            competition_tier: "Velmoran Super League",
            finances: {
              chairperson_title: "President",
              ownership_type: "Member-owned (Elections / Ltd)",
              board_expectations: "Reach playoffs; become a feared counter-attacking side.",
              balance: 5700000,
              transfer_budget: 2700000,
              avg_match_ticket_price: 20,
              avg_season_ticket_price: 360,
              season_ticket_holders: 850,
              income: {
                kit_sponsor: 110000,
                government_grant: 0,
                stadium_sponsor: 160000,
                club_membership: 100000,
                other: 40000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 9200,
              min_attendance: 6000,
              max_attendance: 10500,
              training: 13,
              youth_coaching: 14,
              youth_facilities: 14,
              youth_recruitment: 13,
              youth_importance: 15,
              corporate_facilities: 10,
            },
            supporter_profile: {
              loyalty: 18,
              passion: 16,
              patience: 19,
              affluence: 13,
              temprament: 17,
              expectations: 12,
            },
            supporter_objectives: {
              "Sign Players of Nationality": 4,
              "Play counter-attacking football": 5,
              "Develop Players using club's youth system": 5,
            },
            colors: ["rgb(74, 74, 74)", "rgb(164,182,158)"],
            stadium: "Fogmoor Grounds",
            coord: [150, 360],
            club_history:`
                <h3>From Trade Unions to Eco-Socialism <span class="era-range">(1932)</span></h3>
                <p>Vernek Albion was born in 1932 in a foggy hillside town known for craft guilds, windmills, and philosophical schools. Its football culture emerged from Kovarai trade-union roots and was later rejuvenated by eco-socialist thinkers in the 1990s, giving the club an unusually ideological throughline for a hillside town most of the country still underestimates.</p>
                <h3>The First Promotion <span class="era-range">(1989)</span></h3>
                <p>The union-era club won its first honor, the <strong class="hl">National Liga</strong>, in <strong class="hl">1989</strong>, arriving in the top flight decades before the eco-socialist rewrite of its identity had even begun. It would take until the 1990s for the philosophy the club is known for today to properly take hold.</p>
                <h3>Principles, and Three Titles <span class="era-range">(2003–2012)</span></h3>
                <p>The rejuvenated Albion won the <strong class="hl">Velmoran Cup in 2003, 2004 and 2007</strong>, then the <strong class="hl">Super League in 2009, 2011 and 2012</strong>, three titles in four years that did little to correct the rest of the country's habit of underestimating a hillside town. Fogmoor Grounds operates under a hybrid ownership model, majority fan-and-local controlled, minority privately funded, a compromise the club treats as a point of pride rather than a limitation.</p>
                <h3>Back Where It Started <span class="era-range">(2022–present)</span></h3>
                <p>A relegation after the golden run sent Albion back to the second tier, and a second <strong class="hl">National Liga title in 2022</strong> brought them home. The <strong class="hl">Green Derby</strong> against FC Zoryn Vatra, Kovarai resistance roots against Velmar eco-socialist idealism, different roads to the same green politics, remains the fixture both sets of supporters take more seriously than any other on the calendar. <em>Principles over power</em>, as the terraces put it, on the way back up as much as on the way down.</p>
            `,
            club_values: ["“Principles over power.”"],
            club_slogan:
              "“In Mist We March, Through Fog We Fight – Albion Burns the Brightest Light!”",
            competition_history: {
              VSL: {
                winnerIn: [2009, 2011, 2012],
              },
              VNN: {
                winnerIn: [1989, 2022],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [2003, 2004, 2007],
              },
              VHC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/veralb/home.svg",
              home_back: "assets/kits/veralb/home_back.svg",
              away: "assets/kits/veralb/away.svg",
              away_back: "assets/kits/veralb/away_back.svg",
            },
            rivals: [
              { club: "FC Zoryn Vatra", level: 70, reason: "Local" },
              { club: "Stravna Velkomir", level: 60, reason: "Competitive" },
            ],
            derbies: [
              {
                name: "Green Derby",
                team2: "FC Zoryn Vatra",
                history: "Vernek Albion's Velmar eco-socialist idealism against Zoryn Vatra's Kovarai resistance roots — different roads to the same green politics.",
              },
            ],
            affiliations: [
              { club: "Ploughline Albion", type: "Feeder Team" },
              { club: "Meadowbell Athletic", type: "Good Relations" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Rin Aldous",
                  "role": "President"
                }
              ],
              "legends": [
                {
                  "name": "Ilona Marsk",
                  "role": "Player"
                },
                {
                  "name": "Petar Vane",
                  "role": "Founding Union Member"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Weaver's Line",
              "Fogmoor Collective"
            ],
            traditions: [
              "The Manifesto Read: before the season opener, a supporter reads a passage from the 1990s eco-socialist charter that reshaped the club."
            ],
            chants: [
              {
                "title": "The Weaver's Chant",
                "lyrics": [
                  "We are the weavers, we are the wise,",
                  "Building a future beneath misty skies.",
                  "From union roots, a new story grows,",
                  "With every footstep where the green river flows."
                ]
              },
            ],
            supporter_quotes: [
              {
                "text": "We were a trade union before we were an ideology, and an ideology before we were a trophy case. People forget the order.",
                "author": "Ilona Marsk, Fogmoor Grounds"
              },
              {
                "text": "Zoryn Vatra fought fire with fire. We fought it with a windmill and a pamphlet. Somehow we ended up agreeing on almost everything.",
                "author": "Petar Vane, The Weaver's Line"
              }
            ],
          },
          {
            name: "Gullwing Albion",
            nickname: "The Feathers",
            six_letter_name: "GULLAL",
            three_letter_name: "GWA / GUL",
            hashtag: "#GullwingAlbion",
            founded: 1955,
            reputation: 630,
            status: "Semi-Professional",
            competition_tier: "West Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play tough, defensively strong football; reflect working-class identity; survive financial cycles.",
              balance: 405000,
              transfer_budget: 350000,
              avg_match_ticket_price: 7,
              avg_season_ticket_price: 126,
              season_ticket_holders: 75,
              income: {
                kit_sponsor: 7000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 21000,
                other: 6800,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 4100,
              min_attendance: 2100,
              max_attendance: 5000,
              training: 7,
              youth_coaching: 8,
              youth_facilities: 9,
              youth_recruitment: 8,
              youth_importance: 11,
              corporate_facilities: 7,
            },
            supporter_profile: {
              loyalty: 16,
              passion: 14,
              patience: 19,
              affluence: 13,
              temprament: 18,
              expectations: 9,
            },
            supporter_objectives: {
              "Play attacking football": 4,
              "Play entertaining football": 5,
              "Develop Players using club's youth system": 4,
            },
            colors: ["rgb(21,54,87) ", "rgb(118,191,223)"],
            stadium: "Cliffside Arena",
            coord: [140, 345],
            club_history:`
                <h3>Schoolteachers and Birdwatchers <span class="era-range">(1955)</span></h3>
                <p>Gullwing Albion was founded in 1955 by schoolteachers and birdwatchers on the high cliffs, old Velmar coastal poetry, modeling its football after the seaborne birds its founders spent their weekends watching: agile, observant, always aware of the wind. Vernek's cliffs, high above the lake country proper, gave the club a vantage point nobody else in the region shared.</p>
                <h3>Cliffside Arena <span class="era-range">(1955–1990s)</span></h3>
                <p>Kits carry wingspan motifs, and matchdays at Cliffside Arena include nature hymns before kickoff, cultured, calm, and expressive, the poetic side of regional football. The club has never chased promotion with any urgency, preferring to let its academy develop at the pace of a proper apprenticeship.</p>
                <h3>A Distant Rivalry <span class="era-range">(2000s–present)</span></h3>
                <p>Thuvak Harriers, across the water on the Western Plateau coast, give Gullwing its one real rival, a fixture built more on shared coastal temperament than proximity, two clubs of watchers and wind-readers who recognise something of themselves in the other.</p>
                <h3>Still Agile, Still Observant <span class="era-range">(2026)</span></h3>
                <p>Seventy years on, Cliffside Arena's nature hymns still precede kickoff. Gullwing's poetic, birdwatcher-founded identity remains one of the most distinctive matchday experiences anywhere on the Southern Lakes coast.</p>
            `,
            club_values: ["Movement, Creativity, Balance"],
            club_slogan: '"Fly Together, Fall Never"',
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/gullal/home.svg",
              home_back: "assets/kits/gullal/home_back.svg",
              away: "assets/kits/gullal/away.svg",
              away_back: "assets/kits/gullal/away_back.svg",
            },
            rivals: [
              { club: "Thuvak Harriers", level: 50, reason: "Local" },
            ],
            derbies: [],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Tamsin Reed",
                  "role": "Manager"
                }
              ],
              "legends": [
                {
                  "name": "Wren Halvard",
                  "role": "Founding Member"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Cliffside Watchers"
            ],
            traditions: [
              "The Morning Watch: before every home game, supporters gather at dawn on the cliff path to watch the actual gulls the club is named for."
            ],
            chants: [
              {
              "title": "Flight of the Albion",
              "lyrics": [
                "In calm and grace we take our flight,",
                "A team of beauty, day and night.",
                "From cliff to sea, our anthem rings,",
                "As every Albion player sings."
              ]
            },
            ],
            supporter_quotes: [
              {
                "text": "We watched gulls for years before we understood we were describing a football team.",
                "author": "Wren Halvard, Cliffside Arena"
              }
            ],
          },
        ],
      },
      Stravna: {
        climate: "Cool Lake-and-River Climate with Misty Mornings",
        clubs: [
          {
            name: "Dockland Dandies",
            nickname: "The Stylish Stevedores",
            six_letter_name: "DOCDAN",
            three_letter_name: "DCD",
            hashtag: "#DocklandDandies",
            founded: 1971,
            reputation: 1010,
            status: "Professional",
            competition_tier: "Velmoran National Liga",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Limited Liability Company",
              board_expectations: "Mid-table finish, maintain local player presence",
              balance: 4500000,
              transfer_budget: 2000000,
              avg_match_ticket_price: 15,
              avg_season_ticket_price: 270,
              season_ticket_holders: 680,
              income: {
                kit_sponsor: 70000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 50000,
                other: 17000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 3700,
              min_attendance: 1600,
              max_attendance: 4300,
              training: 7,
              youth_coaching: 11,
              youth_facilities: 10,
              youth_recruitment: 12,
              youth_importance: 15,
              corporate_facilities: 4,
            },
            supporter_profile: {
              loyalty: 16,
              passion: 15,
              patience: 17,
              affluence: 6,
              temprament: 14,
              expectations: 6,
            },
            supporter_objectives: {
              "Develop Players using club's youth system": 5,
            },
            colors: ["rgb(255,105,180) ", "rgb(15, 60, 120)"],
            stadium: "Moda Quay",
            coord: [190, 380],
            club_history:`
                <h3>A Rebellion Against Drab Port Football <span class="era-range">(1971)</span></h3>
                <p>Founded in 1971 by fashion-forward dockhands who mixed Saturday shipping shifts with Sunday style shows, Dockland Dandies exist to be the exception in a maritime city full of hard-nosed union clubs. Flashy kits, ball flair, and an anti-traditional stance define Moda Quay, a ground that looks more like a runway than a stadium on matchday.</p>
                <h3>Moda Quay <span class="era-range">(1971–1990s)</span></h3>
                <p>Velmora's footballing iconoclasts, proof the old Velmar coastal towns could produce something loud, even if most of them never wanted to. The club's early years were treated as a joke by the rest of Stravna's dockland clubs. The joke outlasted every one of the clubs that laughed at it.</p>
                <h3>Port Rivalry <span class="era-range">(2010s–present)</span></h3>
                <p>The <strong class="hl">Port Rivalry</strong> against Velmorsk Mariners, dockyard grit versus dockland flair, is a fixture about style as much as supremacy, and the Dandies have never once pretended they wouldn't rather win it with a good outfit than a clean sheet. Anchor FC gives them a sharper, more competitive local fixture, and Silverboot Rangers and Harborlight Athletic, feeder and friendly respectively, keep the Dandies' influence spreading along the coast.</p>
                <h3>Still the Iconoclasts <span class="era-range">(2026)</span></h3>
                <p>More than fifty years on, Moda Quay remains the loudest rebellion against drab port football the Southern Lakes has ever produced. The Dandies' flashy kits and flair-first identity have only gotten louder with time, not quieter.</p>
            `,
            club_values: ["Flair. Rebellion. Art."],
            club_slogan: "We style the game.",
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/docdan/home.svg",
              home_back: "assets/kits/docdan/home_back.svg",
              away: "assets/kits/docdan/away.svg",
              away_back: "assets/kits/docdan/away_back.svg",
            },
            rivals: [
              { club: "Velmorsk Mariners", level: 65, reason: "Local" },
              { club: "Anchor FC", level: 60, reason: "Competitive" },
            ],
            derbies: [
              {
                "name": "Port Rivalry",
                "team2": "Velmorsk Mariners",
                "history": "Velmorsk Mariners against Dockland Dandies: dockyard grit versus dockland flair, a rivalry about style as much as supremacy."
              }
            ],
            affiliations: [
              { club: "Silverboot Rangers", type: "Feeder Team" },
              { club: "Harborlight Athletic", type: "Good Relations" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Bibi Larsen",
                  "role": "Manager"
                }
              ],
              "legends": [
                {
                  "name": "Corin Vale",
                  "role": "Founding Member"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Runway Row"
            ],
            traditions: [
              "Kit Reveal Night: a new kit is unveiled each season with a full fashion-show presentation rather than a press release."
            ],
            chants: [
              {
                "title": "Raise the Flag, Dockland!",
                "lyrics": [
                  "Raise the flag along the quay!",
                  "Dockland Dandies play with glee!",
                  "From port to pitch, the Stevedores unite,",
                  "Together we shine bright!"
                ]
              }
            ],
            supporter_quotes: [
              {
                "text": "We work the docks on Saturday and style the runway on Sunday. Nobody ever explained why football couldn't have both.",
                "author": "Corin Vale, Moda Quay"
              }
            ],
          },
          {
            name: "Anchor FC",
            nickname: "The Moorings",
            six_letter_name: "ANCHOR",
            three_letter_name: "AFC / ANR",
            hashtag: "#AnchorFC",
            founded: 1920,
            reputation: 700,
            status: "Professional",
            competition_tier: "South Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play attractive football; finish top 8",
              balance: 1375000,
              transfer_budget: 1170000,
              avg_match_ticket_price: 13,
              avg_season_ticket_price: 234,
              season_ticket_holders: 620,
              income: {
                kit_sponsor: 62000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 42000,
                other: 15000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 8100,
              min_attendance: 4600,
              max_attendance: 9000,
              training: 9,
              youth_coaching: 8,
              youth_facilities: 7,
              youth_recruitment: 6,
              youth_importance: 7,
              corporate_facilities: 6,
            },
            supporter_profile: {
              loyalty: 18,
              passion: 17,
              patience: 14,
              affluence: 9,
              temprament: 8,
              expectations: 10,
            },
            supporter_objectives: {
              "Play defensive football": 5,
              "Play direct football": 4,
              "Make most of set-pieces": 4,
              "Develop Players using club's youth system": 2,
            },
            colors: ["rgb(33,53,86)", "rgb(226,40,54) "],
            stadium: "Ironhook Stadium",
            coord: [240, 370],
            club_history:`
                <h3>We Don't Drift, We Hold <span class="era-range">(1920)</span></h3>
                <p>Anchor FC began in 1920 as a naval engineering club in Stravna's dry docks, backed by shipwright unions from the start. The identity has a militaristic edge, strict formations, high conditioning, no-nonsense coaching, that sits closer to Kovarai discipline than the softer Velmar maritime culture around it.</p>
                <h3>Ironhook Stadium <span class="era-range">(1920–1980s)</span></h3>
                <p>The shipwright unions that founded the club still send a representative to every board meeting, a tradition that has outlasted the unions' own decline elsewhere in the country. Ironhook Stadium has never once been redecorated to look friendlier than it is.</p>
                <h3>Two Rivalries on the Water <span class="era-range">(1980s–present)</span></h3>
                <p>The <strong class="hl">Drydock Derby</strong> against Velmorsk Mariners, two ports arguing over who actually built the fleet, and the <strong class="hl">Maritime Clash</strong> against Dockside Union, naval discipline against stevedore grit, are the two fixtures that define Anchor's season regardless of where the club finishes. Silverboot Rangers feed the club academy talent, and Harborlight Athletic keeps good relations, a coast-guard club and a naval one recognising a shared temperament.</p>
                <h3>Still Holding <span class="era-range">(2026)</span></h3>
                <p>A century on, Ironhook Stadium still runs on the same militaristic discipline the shipwright unions instilled from day one. The Maritime Clash against Dockside Union remains dockland's fiercest local argument, fought every season with no sign of either side backing down.</p>
            `,
            club_values: ["Structure, Fitness, Honor"],
            club_slogan: '"We Don’t Drift. We Hold."',
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/anchor/home.svg",
              home_back: "assets/kits/anchor/home_back.svg",
              away: "assets/kits/anchor/away.svg",
              away_back: "assets/kits/anchor/away_back.svg",
            },
            rivals: [
              { club: "Velmorsk Mariners", level: 75, reason: "Local" },
              { club: "Dockside Union", level: 65, reason: "Local" },
            ],
            derbies: [
              {
                "name": "The Drydock Derby",
                "team2": "Velmorsk Mariners",
                "history": "Velmorsk's shipyard club against Stravna's naval engineers: two ports, one argument about who actually built the fleet."
              },
              {
                "name": "The Maritime Clash",
                "team2": "Dockside Union",
                "history": "Anchor FC's naval discipline against Dockside Union's stevedore grit — dockland's fiercest local argument, fought every season with no sign of either side backing down."
              }
            ],
            affiliations: [
              { club: "Silverboot Rangers", type: "Feeder Team" },
              { club: "Harborlight Athletic", type: "Good Relations" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Petr Olsen",
                  "role": "Manager"
                }
              ],
              "legends": [
                {
                  "name": "Commander Alva Reinholt",
                  "role": "Founding Member"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Ironhook Watch"
            ],
            traditions: [
              "The Salute: players face the harbor and salute before kickoff, a custom inherited from the shipwright unions who founded the club."
            ],
            chants: [
              {
                "title": "Dockside Dreams",
                "lyrics": [
                  "By the harbour, banners wave,",
                  "The Moorings are bold and brave!",
                  "From the docks to every pitch,",
                  "Victory sails, no one can ditch!"
                ]
              },
              {
                "title": "Hoist the Anchor",
                "lyrics": [
                  "Hoist the anchor, hear the call!",
                  "Anchor FC will conquer all!",
                  "From harbour lights to cheering stands,",
                  "Together we rise, hearts in our hands!"
                ]
              },
            ],
            supporter_quotes: [
              {
                "text": "A ship that drifts sinks eventually. So does a football club. We chose not to.",
                "author": "Commander Alva Reinholt (ret.), Ironhook Stadium"
              }
            ],
          },
          {
            name: "Dockside Union",
            nickname: "The Longshoremen",
            six_letter_name: "DOCKUN",
            three_letter_name: "DUN / DKN",
            hashtag: "#DocksideU",
            founded: 1914,
            reputation: 690,
            status: "Semi-Professional",
            competition_tier: "South Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Push for top-half finish with high-press football",
              balance: 540000,
              transfer_budget: 500000,
              avg_match_ticket_price: 10,
              avg_season_ticket_price: 180,
              season_ticket_holders: 150,
              income: {
                kit_sponsor: 15000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 30000,
                other: 10000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 4000,
              min_attendance: 2000,
              max_attendance: 5000,
              training: 5,
              youth_coaching: 5,
              youth_facilities: 4,
              youth_recruitment: 6,
              youth_importance: 8,
              corporate_facilities: 3,
            },
            supporter_profile: {
              loyalty: 19,
              passion: 20,
              patience: 15,
              affluence: 5,
              temprament: 6,
              expectations: 7,
            },
            supporter_objectives: {
              "Play defensive football": 5,
              "Play direct football": 4,
              "Make most of set-pieces": 4,
              "Develop Players using club's youth system": 3,
            },
            colors: ["rgb(94,109,128) ", "rgb(187,88,59)"],
            stadium: "Dockworker’s End",
            coord: [220, 365],
            club_history:`
                <h3>Stevedores and Freight Rails <span class="era-range">(1914)</span></h3>
                <p>Dockside Union was formed in 1914 by stevedores and port clerks along Stravna's industrial docklands, rising through factory leagues in the 1920s on gravel pitches near the freight rails, Kovarai union culture reaching the southern coast a generation after it first took hold inland. It arrived without ceremony and built its reputation the same way.</p>
                <h3>Dockworker's End <span class="era-range">(1914–1970s)</span></h3>
                <p>Gritty defense and storm-hardened players define Dockworker's End, a club that has always symbolized blue-collar endurance more than technical polish. The union that founded it never fully dissolved, and its old charter still hangs, faded, in the clubhouse hallway.</p>
                <h3>Two Fierce Fixtures <span class="era-range">(1970s–present)</span></h3>
                <p>Their fiercest rivals, Woolstack United across the country in the <strong class="hl">Weave-Dock Derby</strong> and Anchor FC across town in the <strong class="hl">Maritime Clash</strong>, give Dockside two very different arguments to fight every season: stevedore grit against wool-guild craft on one side, and stevedore grit against naval discipline on the other. Dockside has never lost an argument about which club worked harder for less.</p>
                <h3>Still Blue-Collar <span class="era-range">(2026)</span></h3>
                <p>More than a century since the stevedores first organized, Dockworker's End remains Stravna's clearest surviving symbol of Kovarai union culture on the southern coast, gritty, storm-hardened, and entirely unconcerned with polish.</p>
            `,
            club_values: ["Hard Work, Loyalty, Defensive Unity"],
            club_slogan: '"Forged by Tides, Bonded by Brotherhood"',
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/dockun/home.svg",
              home_back: "assets/kits/dockun/home_back.svg",
              away: "assets/kits/dockun/away.svg",
              away_back: "assets/kits/dockun/away_back.svg",
            },
            rivals: [
              { club: "Woolstack United", level: 70, reason: "Local" },
              { club: "Anchor FC", level: 65, reason: "Local" },
            ],
            derbies: [
              {
                name: "Weave-Dock Derby",
                team2: "Woolstack United",
                history: "Dockside Union's stevedore grit against Woolstack United's wool-guild craft — two working-class Western Plateau traditions with very different textures.",
              },
              {
                name: "The Maritime Clash",
                team2: "Anchor FC",
                history: "Anchor FC's naval discipline against Dockside Union's stevedore grit — dockland's fiercest local argument, fought every season with no sign of either side backing down.",
              },
            ],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Sanna Pell",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Milo Drask",
                  "role": "Player"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Quay Workers"
            ],
            traditions: [
              "The Charter Reading: the club's founding union charter is read aloud in the clubhouse on the anniversary of its 1914 founding."
            ],
            chants: [
              {
                "title": "The Quay Song",
                "lyrics": [
                  "From quay to pitch, our voices ring,",
                  "Dockside Union, hear us sing!",
                  "With every cheer, with every hand,",
                  "Together we rule this harbour land!"
                ]
              }
            ],
            supporter_quotes: [
              {
                "text": "Anchor FC salute the harbor. We just carry the cargo. Somebody has to.",
                "author": "Milo Drask, Dockworker's End"
              }
            ],
          },
          {
            name: "Stravna Wakes",
            nickname: "The River Blues",
            six_letter_name: "STRWAK",
            three_letter_name: "STW",
            hashtag: "#StravnaWakes",
            founded: 1954,
            reputation: 985,
            status: "Professional",
            competition_tier: "Velmoran National Liga",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play expressive, emotionally driven football; preserve cultural identity; develop creative playmakers.",
              balance: 4260000,
              transfer_budget: 1800000,
              avg_match_ticket_price: 14,
              avg_season_ticket_price: 252,
              season_ticket_holders: 670,
              income: {
                kit_sponsor: 68000,
                government_grant: 30000,
                stadium_sponsor: 0,
                club_membership: 46000,
                other: 15000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 8200,
              min_attendance: 4900,
              max_attendance: 9200,
              training: 9,
              youth_coaching: 10,
              youth_facilities: 9,
              youth_recruitment: 10,
              youth_importance: 11,
              corporate_facilities: 7,
            },
            supporter_profile: {
              loyalty: 18,
              passion: 18,
              patience: 16,
              affluence: 9,
              temprament: 12,
              expectations: 10,
            },
            supporter_objectives: {
              "Play attacking football": 5,
              "Play possession football": 4,
              "Play entertaining football": 5,
              "Develop Players using club's youth system": 4,
            },
            colors: ["rgb(13,56,85)", "rgb(122,78,36)"],
            stadium: "Riverfront Rise",
            coord: [180, 325],
            club_history:`
                <h3>Boating Unions and River Festivals <span class="era-range">(1954)</span></h3>
                <p>Stravna Wakes emerged in 1954 from boating unions and local river festivals, combining sport and culture on the water's edge in classic old Velmar fashion. They play open, flowing football that mirrors the Velmoran river system itself, unhurried until it suddenly, decisively, is not.</p>
                <h3>Riverfront Rise <span class="era-range">(1954–1990s)</span></h3>
                <p>A proud cultural club, chants at Riverfront Rise echo off canoes and bridges every derby day, fluidity and festivity treated as club values as real as any tactical principle. The river festival that gave the club its founding spirit still shares a calendar date with the club's own anniversary match.</p>
                <h3>The Riverbend Derby <span class="era-range">(1954–present)</span></h3>
                <p>Stravna Velkomir, the city's older and more decorated institution, gives Wakes the <strong class="hl">Riverbend Derby</strong>: culture and heritage against the river-festival crowd, fought out on the same stretch of water both clubs call home. Drosna FK, a competitive if less bitter fixture, and Thunderspire Rovers and Redbraid Harriers on the coast, feeder and friendly respectively, round out a club deeply networked along the water it was born on.</p>
                <h3>Still Riding the Current <span class="era-range">(2026)</span></h3>
                <p>Over seventy years on, Riverfront Rise still echoes with the same chants off canoes and bridges every derby day. Stravna Wakes' fusion of sport and river festival culture remains one of the region's most distinctive traditions.</p>
            `,
            club_values: ["Fluidity. Festivity. Loyalty."],
            club_slogan: "We ride the current, we roar.",
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/strwak/home.svg",
              home_back: "assets/kits/strwak/home_back.svg",
              away: "assets/kits/strwak/away.svg",
              away_back: "assets/kits/strwak/away_back.svg",
            },
            rivals: [
              { club: "Stravna Velkomir", level: 70, reason: "Local" },
              { club: "Drosna FK", level: 60, reason: "Competitive" },
            ],
            derbies: [
              {
                name: "Riverbend Derby",
                team2: "Stravna Velkomir",
                history: "Stravna Velkomir against Stravna Wakes — culture and heritage versus the river-festival crowd, fought out on the same stretch of water both clubs call home.",
              },
            ],
            affiliations: [
              { club: "Thunderspire Rovers", type: "Feeder Team" },
              { club: "Redbraid Harriers", type: "Good Relations" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Corin Halse",
                  "role": "Manager"
                }
              ],
              "legends": [
                {
                  "name": "Ida Brant",
                  "role": "Player"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The River Choir"
            ],
            traditions: [
              "The Wake: after every home win, a flotilla of small boats circles the harbor at dusk, horns sounding."
            ],
            chants: [
              {
                "title": "Coastal Crash",
                "style": "terrace",
                "lyrics": [
                  "Crash the tide, hit the post!",
                  "Stravna Wakes, we cheer the most!",
                  "Pass it quick, shoot it right!",
                  "Opponents fear the Wakes tonight!"
                ]
              },
            ],
            supporter_quotes: [
              {
                "text": "Velkomir has the songs of the choir. We have the songs of the river. Ours get louder when we're winning.",
                "author": "Ida Brant, Riverfront Rise"
              }
            ],
          },
          {
            name: "Stravna Velkomir",
            nickname: "Blues of the South",
            six_letter_name: "STRVEL",
            three_letter_name: "STR / STV",
            hashtag: "#StravnaV",
            founded: 1899,
            reputation: 2100,
            status: "Professional",
            competition_tier: "Velmoran Super League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Consortium Private Limited",
              board_expectations: "Develop youth talent and maintain strong community engagement",
              balance: 8400000,
              transfer_budget: 4500000,
              avg_match_ticket_price: 25,
              avg_season_ticket_price: 450,
              season_ticket_holders: 1100,
              income: {
                kit_sponsor: 180000,
                government_grant: 0,
                stadium_sponsor: 250000,
                club_membership: 150000,
                other: 50000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 11500,
              min_attendance: 7500,
              max_attendance: 14000,
              training: 12,
              youth_coaching: 14,
              youth_facilities: 13,
              youth_recruitment: 13,
              youth_importance: 14,
              corporate_facilities: 9,
            },
            supporter_profile: {
              loyalty: 19,
              passion: 19,
              patience: 14,
              affluence: 9,
              temprament: 12,
              expectations: 12,
            },
            supporter_objectives: {
              "Play attacking football": 4,
              "Make most of set-pieces": 3,
              "Develop Players using club's youth system": 5,
            },
            colors: ["rgb(54, 69, 79)", "rgb(44, 82, 140)",],
            stadium: "Velkomir SkyDome",
            coord: [190, 350],
            club_history:`
                <h3>The Choral Society <span class="era-range">(1899)</span></h3>
                <p>The first football club of the republic was founded by a choir. In the winter of 1898–99 the members of the Stravna Choral Society, who met in a boathouse on the river to sing the old sagas in parts, decided that the country had been quiet long enough and that the young men of the town needed something to do with their Saturdays. They added a sports committee, borrowed a ball and, in the spring of <strong class="hl">1899</strong>, played the first organized match of the new republic on a field by the water.</p>
                <p>They named the club <strong class="hl">Stravna Velkomir</strong>. <em>Velkomir</em> means <em>great peace</em>. It was chosen eight years after the Great Collapse, by a society that included Velmar fishermen and Kovarai railway clerks and had never been asked to choose between them. The word <em>mir</em>, peace, is the only one that the two languages share.</p>

                <h3>The First Fixture <span class="era-range">(1900–1939)</span></h3>
                <p>In the spring of 1900 the second club of the republic, Ostravaj Korona, was founded in the east under noble patronage, and the two sides met that summer for a friendly on the lakeshore in what is generally accepted as the first fixture of the new era. It was peace against crown, and the choir sang. Korona won, and were applauded. Stravna have been quietly proud of that result ever since.</p>
                <p>The early decades belonged to music as much as football. The club became the cultural torchbearer for the entire south, tied to regional folk music and folk sport, and the old hall-ball rules survived for a generation in the town's rural fixtures. Trophies were not the point. <em>Where football sings</em> was the point, and the terraces sang.</p>

                <h3>Songs in Relays <span class="era-range">(1940–1953)</span></h3>
                <p>When the occupier took the ports in 1940, it banned public gatherings of more than twenty. Stravna's supporters, who had never gone anywhere without singing, responded by singing in relays of nineteen along the riverbank, one group taking up the verse as the last dispersed. The songs are still sung on matchdays in the same order, a mile of terrace passing the tune from stand to stand. Nobody in Stravna remembers a match that was played that year, but everybody remembers the songs.</p>

                <h3>The Singing Decade <span class="era-range">(1961–1977)</span></h3>
                <p>The trophies came late and, when they came, came together. Velkomir won the <strong class="hl">Velmoran Cup in 1961</strong>, the club's first honor after sixty-two years, then the <strong class="hl">league in 1966</strong> and the <strong class="hl">Cup in 1967</strong>. They added the <strong class="hl">Cup in 1973</strong>, a second <strong class="hl">league title in 1975</strong> and another <strong class="hl">Cup in 1977</strong>. They were <strong class="hl">The Blues of the South</strong>, and it was the loudest decade in the history of the Southern Lakes.</p>
                <p>Their rivalry with Drosna FK, the other old institution of the lakes, grew into the <strong class="hl">Lake-River Classic</strong>, a fixture almost as old as organized football in the country. Their rivalry with the town's other club, Stravna Wakes, the river-festival crowd, became the <strong class="hl">Riverbend Derby</strong>, fought out on the same stretch of water both clubs call home.</p>

                <h3>Foreign Owners, Old Songs <span class="era-range">(1990s–present)</span></h3>
                <p>The Thaw brought the same question to every old club: who pays? For Stravna Velkomir the answer, eventually, was <strong class="hl">Aurek Partners LLP</strong>, a foreign private equity firm, and the choir's members held a meeting on the boathouse steps to decide whether to mind. The ownership model is pragmatic in a way that irks the purists, who would rather the club's finances matched its heritage, but the songs survive, and so does the boathouse.</p>
                <p>The <strong class="hl">Velkomir SkyDome</strong> is a modern ground, glass-roofed and comfortable, and on matchdays the whole terrace still sings in relays of nineteen. It is a very old institution with a very modern complaint, and the choir, at last report, is still meeting in the boathouse on Thursdays.</p>
              `,
            club_values: ["Where football sings."],
            club_slogan:
              "Sing it Loud from Hill to Shore – Stravna Lives Forevermore!",
            competition_history: {
              VSL: {
                winnerIn: [1966, 1975],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [],
              },
              VWRL: {
                winnerIn: [],
              },
              VNRL: {
                winnerIn: [],
              },
              VSRL: {
                winnerIn: [],
              },
              TVC: {
                winnerIn: [1961, 1967, 1973, 1977],
              },
              VHC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/strvel/home.svg",
              home_back: "assets/kits/strvel/home_back.svg",
              away: "assets/kits/strvel/away.svg",
              away_back: "assets/kits/strvel/away_back.svg",
            },
            rivals: [
              { club: "Drosna FK", level: 85, reason: "Historic" },
              { club: "Stravna Wakes", level: 70, reason: "Local" },
              { club: "Radomir Eagles", level: 60, reason: "Competitive" },
            ],
            derbies: [
              {
                name: "Lake-River Classic",
                team2: "Drosna FK",
                history: "Velmora's two oldest Southern Lakes institutions, Drosna FK and Stravna Velkomir, meeting in a fixture almost as old as organized football in the country.",
              },
              {
                name: "Riverbend Derby",
                team2: "Stravna Wakes",
                history: "Stravna Velkomir against Stravna Wakes — culture and heritage versus the river-festival crowd, fought out on the same stretch of water both clubs call home.",
              },
            ],
            affiliations: [
              { club: "FC Zoryn Vatra", type: "Good Relations" },
              { club: "Thunderspire Rovers", type: "Feeder Team" },
            ],
            players_alumni: {
              favorites: [],
              icons: [],
              legends: [],
            },
            schedule: [],
            fan_clubs: [],
            chants: [
              {
                "title": "Lake-River Glory",
                "lyrics": [
                  "By the lake and river bend,",
                  "Velkomir cheers will never end!",
                  "With every goal and every fight,",
                  "Our southern hearts shine bright!"
                ]
              },
              {
                "title": "Catch the Wave",
                "lyrics": [
                  "Catch the wave, lads on the run!",
                  "Velkomir strikes, we score a ton!",
                  "Pass it fast, shoot it true,",
                  "Every match, we’ll see it through!"
                ]
              },
            ],
            supporter_quotes: [],
          },
        ],
      },
    },
  };