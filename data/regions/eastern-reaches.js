export const easternReaches = {
    id: "eastern-reaches",
    name: "Eastern Reaches",
    description:
      "Where the ore was found first, and where the Line once ran along the forest's western edge. Railheads, foundry towns, and Braknov, which still argues about which side of the Line it was on, make this a hardworking region with strong community ties, known for producing grassroots talent.",
    cities: {
      Braknov: {
        climate: "Cool and Damp, with Fog off the Bay",
        clubs: [
          {
            name: "Honeybell AFC",
            nickname: "The Bees",
            six_letter_name: "HONAFC",
            three_letter_name: "HON / HBA",
            hashtag: "#HoneybellAFC",
            founded: 1935,
            reputation: 710,
            status: "Semi-Professional",
            competition_tier: "East Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play quick, attacking football; Represent coastal identity; Build eco-conscious brand",
              balance: 570000,
              transfer_budget: 580000,
              avg_match_ticket_price: 11,
              avg_season_ticket_price: 198,
              season_ticket_holders: 160,
              income: {
                kit_sponsor: 17000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 34000,
                other: 11500,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 4200,
              min_attendance: 2200,
              max_attendance: 5200,
              training: 7,
              youth_coaching: 10,
              youth_facilities: 9,
              youth_recruitment: 9,
              youth_importance: 13,
              corporate_facilities: 6,
            },
            supporter_profile: {
              loyalty: 17,
              passion: 15,
              patience: 18,
              affluence: 10,
              temprament: 15,
              expectations: 8,
            },
            supporter_objectives: {
              "Play entertaining football": 4,
              "Develop Players using club's youth system": 5,
            },
            colors: ["rgb(255,223,0)", "rgb(0,0,0)"],
            stadium: "The Hive Ground",
            coord: [340, 160],
            club_history:`
                <h3>The Valley Before the Ore <span class="era-range">(before 1935)</span></h3>
                <p>Honeybell Valley lies just west of Braknov, on the safe side of the Line, and for eighty years it was the one stretch of the Eastern Reaches that the ore never touched. The valley grew apples and kept bees. The Line's customs posts stood a few miles to the east, checking the passes of the Kovarai, and the beekeepers of both peoples went on trading honey across it because, as the valley likes to say, <em>bees do not carry passes</em>. The Honey Road was the one crossing in the country that nobody bothered to guard.</p>
                <h3>From Orchard to Pitch <span class="era-range">(1935–1950s)</span></h3>
                <p>Honeybell AFC was founded in <strong class="hl">1935</strong> by orchard farmers and local beekeepers, on a rough field behind the old cider press. Its golden yellow and black mirrored the blossoms and the bees, and the crest bound honeycomb to blooming apple branches. Matches were as much about community as competition, and the fixture list was arranged around the harvest calendar.</p>
                <p>The Honeybell Agricultural Cooperative gifted the club its ground, <strong class="hl">The Hive Ground</strong>, framed by orchards, in the years after the war. Braknov spent those years arguing about guard and crown. The valley kept out of it, and the Bees became the club both sides of the city liked and neither claimed.</p>
                <h3>Traditions Take Root <span class="era-range">(1960s–1990s)</span></h3>
                <p>By the 1960s the club had developed the customs that still define it. Visiting captains are presented with a ceremonial honey jar. The first home game of spring begins with the Blossom Toss. The Hive Bell is rung three times after every home victory. The club's identity was built on youth development, and the annual Orchard Cup, which blends academy football with local fairs and honey tastings, became a fixture of the valley calendar.</p>
                <h3>The Children Who Left <span class="era-range">(1955–2010s)</span></h3>
                <p>In <strong class="hl">1955</strong> a group of Honeybell players moved west to Ostravaj in search of work and founded Bumblefield FC there, carrying the bee theme with them and sharpening it. The Bees regard the Stingers as their children, and treat them with the mixture of pride and disapproval that children of that kind deserve. The <strong class="hl">Hive Road Derby</strong> is the only fixture in the valley's calendar that anybody has ever tried to win.</p>
                <h3>Slow Growth <span class="era-range">(2000s–present)</span></h3>
                <p>Honeybell have never played above the regional leagues and have never tried to. The club's board expects quick, attacking football, an eco-conscious brand and a strong local identity, and delivers all three. The Bee Day Festival raises money for bee conservation, every new signing plants an apple tree on the grounds, and the club's own view of its history is that football, like an orchard, is played on a scale of decades.</p>
            `,
            club_values: [
              "High-tempo and forward-thinking",
              "Homegrown and academy-focused",
              "Disciplined and defensively resilient",
            ],
            club_slogan: "From the Orchard, To the Pitch",
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
              home_kit_svg: 50,
              home: [[254, 251, 232], [241, 191, 60], [0, 0, 0], [255, 255, 255]],
              home_back: 'same_as_front',
              away_kit_svg: 49,
              away: [[227, 213, 184], [201, 123, 101], [227, 213, 184], [255, 255, 255]],
              away_back: 'same_as_front',
            },
            rivals: [
              {
                "club": "Ostravaj Korona",
                "level": 50,
                "reason": "Local"
              },
              {
                "club": "Bumblefield FC",
                "level": 55,
                "reason": "Local"
              }
            ],
            derbies: [
              {
                "name": "The Hive Road Derby",
                "team2": "Bumblefield FC",
                "history": "A family quarrel: the Bees who stayed on the orchard road against the Stingers who left it."
              }
            ],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Tamsin Orr",
                  "role": "Chairperson"
                },
                {
                  "name": "Wren Alder",
                  "role": "Academy Director"
                }
              ],
              "legends": [
                {
                  "name": "Anselm Bright",
                  "role": "Player"
                },
                {
                  "name": "Petra Hollin",
                  "role": "Player / Groundskeeper"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Swarm March",
              "Cider Barn Collective"
            ],
            chants: [
              {
                "title": "From the Orchard to the Goal",
                "type": "Song",
                "lyrics": [
                  "From the orchard to the goal,",
                  "We will fight for every ball,",
                  "Black and yellow through and through,",
                  "Honeybell, we're proud of you!"
                ]
              },
              {
                "title": "Buzz, Buzz, Bees!",
                "type": "Call and Response",
                "lyrics": [
                  "Capo: Buzz, Buzz, Bees!",
                  "Crowd: We sting for the win!"
                ]
              },
              {
                "title": "Honeybell AFC (Guantanamera Tune)",
                "type": "Song",
                "lyrics": [
                  "Ohhh Honeybell AFC,",
                  "Oh Honeybell AFC,",
                  "We’re The Bees from the Orchard,",
                  "Oh Honeybell AFC"
                ]
              },
              {
                "title": "Hive Hum Chant",
                "type": "Chant",
                "lyrics": [
                  "(Supporters hum in a deep, continuous drone for 30 seconds)",
                  "(Break into a loud clap and shout 'Go Bees!')"
                ]
              },
              {
                "title": "Victory Sting",
                "type": "Post-Goal Chant",
                "lyrics": [
                  "Sting ’em once, sting ’em twice,",
                  "Bees don’t play — we take the prize!"
                ]
              }
            ],
            traditions: [
              "Ceremonial honey jar presented to visiting captain before each home match.",
              "Blossom Toss: fans shower the pitch with apple blossom petals at the first home game of spring.",
              "The Swarm March: supporters gather at the old cider barn and march to The Hive Ground with honeycomb-shaped banners.",
              "The Bee Day Festival charity match supporting bee conservation.",
              "Player initiation ritual: each new signing plants an apple tree at the club grounds.",
              "Ringing the Hive Bell three times after every home victory.",
            ],
            supporter_quotes: [
              {
                "text": "We swarm forward, we defend the hive, and no one leaves with our points.",
                "author": "Tamsin Orr, The Swarm March"
              },
              {
                "text": "My father planted his apple tree the day he signed. It's taller than the stand now.",
                "author": "Bertil Nash, Hive Bell Terrace"
              }
            ],
          },
          {
            name: "Braknov Royals",
            nickname: "The Crown Blues",
            six_letter_name: "BRKROY",
            three_letter_name: "BRR",
            hashtag: "#BraknovRoyals",
            founded: 1938,
            reputation: 1150,
            status: "Professional",
            competition_tier: "Velmoran National Liga",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Public Liability Company",
              board_expectations: "Play direct, physical football; Embody working-class grit; Fight for regional pride",
              balance: 4950000,
              transfer_budget: 2250000,
              avg_match_ticket_price: 17,
              avg_season_ticket_price: 306,
              season_ticket_holders: 720,
              income: {
                kit_sponsor: 85000,
                government_grant: 35000,
                stadium_sponsor: 0,
                club_membership: 62000,
                other: 21000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 4700,
              min_attendance: 2700,
              max_attendance: 5700,
              training: 6,
              youth_coaching: 6,
              youth_facilities: 5,
              youth_recruitment: 7,
              youth_importance: 8,
              corporate_facilities: 6,
            },
            supporter_profile: {
              loyalty: 17,
              passion: 18,
              patience: 16,
              affluence: 12,
              temprament: 10,
              expectations: 9,
            },
            supporter_objectives: {
              "Play counter-attacking football": 5,
              "Play high-tempo pressing football": 5,
              "Develop Players using club's youth system": 3,
            },
            colors: ["rgb(0,0,102) ", "rgb(255,255,255)"],
            stadium: "Royal Parade Grounds",
            coord: [350, 200],
            club_history:`
                <h3>The Families Who Lost <span class="era-range">(1891–1938)</span></h3>
                <p>When the Line broke at Braknov, the men who had held it went home. They were the officers of the clan militias, sons and nephews of the clan-lords, trained to command and now commanding nothing. The Charter of 1891 let them keep their houses, their manners and, for the families that qualified, their titles as courtesies. It also placed the clans' lands in the Crown Estate, which paid the old families small annuities in exchange for never claiming anything else. They settled on the genteel side of Braknov, a safe distance from the garrison road, and did what defeated aristocracies do: they drilled, they gave dinners and they waited for someone to ask them to do something.</p>
                <p>Nobody did. The republic had a Border Guard that was made of the men who had broken the Line, and a new class of officers who had learned the trade on the other side. The old families had nothing left to govern except the manner of governing, and they governed it beautifully.</p>

                <h3>Drills for the Officers' Sons <span class="era-range">(1938–1944)</span></h3>
                <p><strong class="hl">Braknov Royals</strong> began in 1938 as a school sports programme for the sons of the old officer families, the last generation to carry the manner of authority without any of the substance. Cadets ran fitness drills in the shadow of the republic's border garrison, under officers who still addressed each other by titles the republic no longer recognized. The irony of drilling in the garrison's shadow was, by all accounts, lost on nobody and mentioned by nobody.</p>
                <p>What began as conditioning became competitive by accident. The cadets, it turned out, were rather good at the sport the British traders had left behind. That spring the officers' own side, the fathers' eleven, won the <strong class="hl">1938 Velmoran Cup</strong>, and when the programme was incorporated that autumn the club counted the trophy as its own, a piece of bookkeeping the rest of the country has never quite accepted. By 1941, with the coast under occupation and half the young men of the district on coast-watch duty, the cadets were fielding a proper eleven against garrison sides from neighboring towns, and their fathers, with nothing left to govern but plenty to spend, discovered that a subsidy could buy back a little of the prestige a republic had taken away.</p>

                <h3>Royal Parade Grounds <span class="era-range">(1945–1960s)</span></h3>
                <p>The cadets' elder brothers came home from the coast watch in 1945 and won the <strong class="hl">league that year</strong>, still amateurs, in a season the club calls its first. The club turned semi-professional in <strong class="hl">1946</strong>, funded by a standing subsidy from the Crown Estate that survives, in reduced form, to this day, and won the <strong class="hl">Velmoran Cup</strong> that same year. <strong class="hl">Royal Parade Grounds</strong> was laid out on the genteel side of the city, deliberately distant from the garrison district, a statement of postcode as much as of football. A <strong class="hl">second league title followed in 1948</strong>.</p>
                <p>The tactical identity set here has never changed: composed, patient, allergic to chaos, built on shape and control rather than grit, and modeled consciously on the elite British academy football the old officer class had grown fond of watching abroad. It earned them the nickname <strong class="hl">The Crown Blues</strong>: navy and white, with a crest that still nods quietly to a coat of arms nobody is allowed to fly officially anymore. The Cup of <strong class="hl">1957</strong> came the way everything did in those years, without anyone raising their voice.</p>

                <h3>The Guard and Crown <span class="era-range">(1950s–1970s)</span></h3>
                <p>As Braknov Spartak grew into the city's other club, union-born, army-funded and everything the Royals had been built to be the opposite of, the fixture between them hardened. The <strong class="hl">Guard and Crown Derby</strong> is, in practice, the border town re-litigating the Great Eastern Uprising in public, ninety minutes at a time, old patronage against organized labor, on the same streets that lived through the original argument. The Royals' supporters sit in Royal Parade Grounds in coats and ties. Spartak's stand at the Bastion sings a song about passes.</p>
                <p>After the Cup of 1957 the Royals won nothing more for two decades, until 1978, and the club has always insisted it was merely rebuilding. The Compact had given the union-born clubs the state's attention, and the Royals' subsidy, which had once looked generous, began to look like a family's pension in a country that had stopped noticing families.</p>

                <h3>An Unlikely Golden Age <span class="era-range">(1978–1990)</span></h3>
                <p>What nobody expected was that the composure would start winning again. Between <strong class="hl">1978 and 1990</strong> the Royals won <strong class="hl">six Super League titles</strong> (1978, 1981, 1982, 1985, 1986, 1990) and the Cup in <strong class="hl">1982</strong>, quietly and almost apologetically, on the same allergy to chaos that had defined them since the officers' mess. With the earlier <strong class="hl">titles of 1945 and 1948</strong>, the club finished the Compact era with eight league championships, one of the most decorated records in the country. It was old money outlasting everyone's expectations, including, at times, its own.</p>

                <h3>The Long Decline <span class="era-range">(1990s–present)</span></h3>
                <p>The subsidy that had built the club could not keep pace with the professional era. A last <strong class="hl">Cup in 1998</strong> was the final trophy from the top of the game, and the dominance faded as quietly as it had arrived. <strong class="hl">National Liga titles in 2006 and 2011</strong>, each a promotion followed by a demotion, were consolation prizes for a club that had once ruled the top flight, and a difficult 2023 campaign ended in relegation once more.</p>
                <p>In a city that remembers exactly which side everyone was on, Braknov Royals are no longer measured by silverware. They are measured by whether the manner survives the decline. So far, it has. Whether the football can climb back to meet it is the only real question the club has left to answer.</p>
              `,
            club_values: ["Composure over chaos", "Prestige, quietly worn", "Control the tempo, control the room"],
            club_slogan: "By class, with courage.",
            competition_history: {
              VSL: {
                winnerIn: [1945, 1948, 1978, 1981, 1982, 1985, 1986, 1990],
              },
              VNN: {
                winnerIn: [2006, 2011],
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
                winnerIn: [1938, 1946, 1957, 1982, 1998],
              },
              VHC: {
                winnerIn: [],
              },
            },
            kits: {
              home_kit_svg: 25,
              home: [[0, 0, 102], [255, 255, 255], [0, 0, 102], [0, 0, 102]],
              home_back: 'same_as_front',
              away: [[255, 255, 255], [0, 0, 102], [0, 0, 102], [255, 255, 255]],
              away_kit_svg: 7,
              away_back: 'same_as_front',
            },
            rivals: [
              { club: "Braknov Spartak", level: 70, reason: "Local" },
              { club: "Ostravaj Korona", level: 60, reason: "Historic" },
            ],
            derbies: [
              {
                name: "The Guard and Crown Derby",
                team2: "Braknov Spartak",
                history: "Braknov's own city derby — the union garrison against the officer-class patronage club, replaying the Great Eastern Uprising on opposite sides of town every season.",
              },
            ],
            affiliations: [
              { club: "Honeybell AFC", type: "Feeder Team" },
              { club: "Union of the Forge", type: "Good Relations" },
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
                "title": "Royal Parade",
                "type": "Song",
                "lyrics": [
                  "Navy and white on parade,",
                  "We play with class, never fade,",
                  "Pass, possess, shift the play,",
                  "Crown Blues lead the way!"
                ]
              },
              {
                "title": "Raise the Standard",
                "type": "Call and Response",
                "lyrics": [
                  "Capo: Raise!",
                  "Crowd: The Standard!",
                  "Capo: Hold!",
                  "Crowd: The Line!",
                  "Capo: Press!",
                  "Crowd: As one!",
                  "All: Brak-nov! Brak-nov!"
                ]
              },
              {
                "title": "Crown Press",
                "type": "In-Play Chant",
                "lyrics": [
                  "Press as one — Royals press!",
                  "Win it back — we possess!",
                  "Pass and move — set the pace!",
                  "Braknov rules this place!"
                ]
              },
              {
                "title": "Royal Salute",
                "type": "Post-Goal Chant",
                "lyrics": [
                  "One! Two! Three! Salute!",
                  "Crown Blues strike absolute!",
                  "Raise the flag — hear us sing!",
                  "Braknov — rule the Grounds!"
                ]
              }
            ],
            supporter_quotes: [],
          },
          {
            name: "Braknov Spartak",
            nickname: "The Border Guards",
            six_letter_name: "BRASPA",
            three_letter_name: "BRA / BSP",
            hashtag: "#BraknovS",
            founded: 1918,
            reputation: 2300,
            status: "Professional",
            competition_tier: "Velmoran Super League",
            finances: {
              chairperson_title: "President",
              ownership_type: "Public Liability Company",
              board_expectations: "Mid-table finish; remain hard to beat at home",
              balance: 7200000,
              transfer_budget: 3200000,
              avg_match_ticket_price: 25,
              avg_season_ticket_price: 450,
              season_ticket_holders: 1050,
              income: {
                kit_sponsor: 150000,
                government_grant: 85000,
                stadium_sponsor: 210000,
                club_membership: 100000,
                other: 35000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 15000,
              min_attendance: 10000,
              max_attendance: 17500,
              training: 15,
              youth_coaching: 13,
              youth_facilities: 14,
              youth_recruitment: 14,
              youth_importance: 15,
              corporate_facilities: 13,
            },
            supporter_profile: {
              loyalty: 19,
              passion: 18,
              patience: 11,
              affluence: 11,
              temprament: 7,
              expectations: 17,
            },
            supporter_objectives: {
              "Play defensive football": 5,
              "Make most of set-pieces": 4,
              "Play high-tempo pressing football": 5,
              "Develop Players using club's youth system": 4,
            },
            colors: ["rgb(178, 34, 34)", "rgb(105,105, 105)"],
            stadium: "Spartak Ironfield",
            coord: [370, 180],
            club_history:`
                <h3>The Line Meadow <span class="era-range">(1870s–1891)</span></h3>
                <p>Braknov is where the Line turned a corner, and for some fifteen years it was the only place in Velmora where the Line could be crossed by a football. Beside the customs post, someone laid out a pitch and painted its halfway line across the boundary cairns. The Velmar side kicked off from the west and the Kovarai side from the east, and for ninety minutes the Line was something you passed the ball over. Spartak's supporters claim the eastern half of the meadow as the club's true birthplace, and Braknov Royals' supporters claim the western half. The two claims have never been reconciled, because both are true.</p>
                <p>Nobody wrote the fixtures down. What survives is the meadow itself, behind a fence on the garrison road, and a custom: on the anniversary of the Line's breaking, the two clubs' supporters lay a ball on the centre circle and go home without speaking.</p>

                <h3>The Great Eastern Uprising <span class="era-range">(1891)</span></h3>
                <p>Braknov calls the war of 1891 the <strong class="hl">Great Eastern Uprising</strong>, and it should know: the Line broke here in the fourth week, in a night that the town's Kovarai remember as the moment the passes stopped mattering. The frontier towns took the worst of it. When the union column took the garrison the next morning, the first thing its men are said to have done was to play football on the meadow, because there was a ball, and because it seemed the thing to do. Nobody in Braknov will say who scored.</p>
                <p>Some of Spartak's older supporters insist that the last eleven to play on that meadow before the war were the <strong class="hl">Vanished XI</strong>. The club's archive contains no record of any such team, and the club's official position is that it has none, which nobody in the city believes is the whole answer.</p>

                <h3>The Border Guards <span class="era-range">(1891–1917)</span></h3>
                <p>The Charter abolished the Line but not the garrison. The union columns that had broken it became the republic's <strong class="hl">Border Guard</strong>, posted along the old customs road to keep order in the eastern districts, and their off-duty football on the garrison pitch was one of the few things that held their morale together in the years the republic was finding its feet. It outlived the war it was born in by a generation, passed on among the veterans before anyone thought to organize it properly.</p>
                <p>In 1914 the Guard was mobilized along the eastern approaches for four years while the great powers fought elsewhere, and its football went with it, on parade grounds and railheads, wherever there was flat ground and a ball.</p>

                <h3>The Bastion <span class="era-range">(1918–1938)</span></h3>
                <p>Braknov Spartak was formally founded in <strong class="hl">1918</strong>, when the veterans of that tradition organized it as a proper club under the newly established <strong class="hl">Velmoran Armed Sports Foundation</strong>, funded by veterans' dues and a share of the Guard's budget. A garrison chaplain suggested the name, after the slave who rebelled, and nobody has ever proposed another. The funding gave the club a stability it has never lost, at the cost of the risk-taking that might have chased silverware harder.</p>
                <p><strong class="hl">Spartak Ironfield</strong>, a brutalist fortress of a ground that supporters soon nicknamed <strong class="hl">The Bastion</strong>, went up the same year, banners on its walls repeating the old mottos of the Line posts turned upside down: where the posts had said <em>no pass, no entry</em>, the banners said that nobody had issued the Kovarai a pass in the first place. The style never wavered from what the garrison pitch had taught them: rigid defensive shapes, relentless work rate and zero tolerance for theatrics.</p>

                <h3>Guard and Crown <span class="era-range">(1938–1970s)</span></h3>
                <p>In 1938 the old officer families of the vanished clan-lord system, who had lost the war and kept the address, started a school sports programme for their sons on the genteel side of the city. It became <strong class="hl">Braknov Royals</strong>, and from then on Braknov had two football clubs. The <strong class="hl">Guard and Crown Derby</strong> hardened into something more than a local fixture: the border town re-litigating the Great Eastern Uprising in public, union garrison against old patronage, on the same streets that lived through the original argument.</p>
                <p>The Compact of 1948 gave the Foundation a share of every budget and Spartak a steady supply of conscripts with nothing to do on Saturdays. It produced a club that was hard to beat and nearly impossible to love, and that suited it. Spartak were feared, never pitied, and did not want to be either.</p>

                <h3>The Lift <span class="era-range">(1980s)</span></h3>
                <p>The 1980s were the years supporters call <strong class="hl">The Lift</strong>. Spartak won the National Liga in <strong class="hl">1981</strong>, <strong class="hl">1983</strong> and <strong class="hl">1987</strong>, and each time they were promoted, and each time the Super League sent them back down within a season or two, as if the club were an elevator that could not decide which floor it belonged on. The Foundation's budget was being trimmed as the Compact wound down, and the defensive discipline that had made the club hard to beat in the lower division was not enough to make it interesting in the upper one.</p>
                <p>It was also the decade in which the <strong class="hl">Border Steel Derby</strong> against Valdren Atletika became the most ideologically loaded fixture in the country: Spartak's unreconstructed Kovarai roots against the capital's own reconciliation project, the union garrison against a club that had been founded to carry both names in one badge and, Spartak's supporters point out, had never once asked their opinion.</p>

                <h3>The Bastion Holds <span class="era-range">(1990s–present)</span></h3>
                <p>The Thaw took the Foundation's money and left the Bastion. The club that survived was leaner and, to its own surprise, better. Spartak won the <strong class="hl">Super League</strong> in <strong class="hl">2005</strong>, earned through attrition rather than flair, the way everything else in Braknov is earned. The academy's finest, tactically astute defenders and midfielders built on work rate, are still routinely recruited away by bigger clubs before they can add to the collection.</p>
                <p>Spartak remain <strong class="hl">The Border Guards</strong>, in a town that remembers which side everyone was on. The banners still hang. The motto is still discipline. And on the anniversary of the Line's breaking, a ball still lies on the centre circle of a meadow behind a fence, and nobody in the stadium will tell you who put it there.</p>
              `,
            club_values: ["Discipline is victory."],
            club_slogan:
              "“Steel Walls Stand, Never Fall – Spartak Answers Duty’s Call!”",
            competition_history: {
              VSL: {
                winnerIn: [2005],
              },
              VNN: {
                winnerIn: [1981, 1983, 1987],
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
              home_kit_svg: 45,
              home: [[105, 105, 105], [178, 34, 34], [0, 0, 0], [255, 255, 255]],
              home_back: 'same_as_front',
              away: [[175, 180, 143], [220, 231, 117], [255, 255, 255], [20, 20, 20]],
              away_kit_svg: 56,
              away_back: 'same_as_front',
            },
            rivals: [
              { club: "Valdren Atletika", level: 90, reason: "Historic" },
              { club: "Braknov Royals", level: 70, reason: "Local" },
              { club: "Union of the Forge", level: 60, reason: "Competitive" },
            ],
            derbies: [
              {
                name: "Border Steel Derby",
                team2: "Valdren Atletika",
                history: "Spartak's unreconstructed Kovarai roots against the capital's own reconciliation project — the most ideologically loaded fixture in the country.",
              },
              {
                name: "The Guard and Crown Derby",
                team2: "Braknov Royals",
                history: "Braknov's own city derby — the union garrison against the officer-class patronage club, replaying the Great Eastern Uprising on opposite sides of town every season.",
              },
            ],
            affiliations: [
              { club: "Union of the Forge", type: "Feeder Team" },
              { club: "Blackpick FC", type: "Good Relations" },
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
                "title": "Braknov’s Fortress",
                "structure": "call-and-response",
                "lyrics": [
                  "No one leaves with points from here,",
                  "Spartak’s roar is all they hear!",
                  "Stand together, One and all!",
                  "Where are we? This is Braknov, this our wall!"
                ]
              },
              {
                "title": "Bounce With Braknov",
                "structure": "chant",
                "lyrics": [
                  "Bounce, bounce, bounce with Braknov,",
                  "We’re the Spartak red and white!",
                  "Win or lose, we’re singing,",
                  "Through the day and through the night!",
                  "Hey! Hey! Hey!"
                ]
              },
              {
                "title": "We’re Spartak (And We Know It)",
                "structure": "call-and-response",
                "lyrics": [
                  { "call": "Who’s the team that’s hard to beat?", "response": "Spartak Braknov, on our feet!" },
                  { "call": "Who’s the crowd that sings all day?", "response": "We’re the Spartak, come what may!" },
                  { "call": "We’re Spartak!", "response": "And we know it!" },
                  { "call": "We’re Spartak!", "response": "And we show it!" }
                ]
              },
              {
                "title": "Goals Like Snowflakes",
                "structure": "chant",
                "lyrics": [
                  "Goals like snowflakes, falling down,",
                  "Spartak’s scoring all around!",
                  "Clap your hands and stomp your feet,",
                  "We’re the team they can’t defeat!"
                ]
              },
              {
                "title": "Let’s Go, Spartak!",
                "structure": "call-and-response",
                "lyrics": [
                  { "call": "Let’s go, Spartak!", "response": "Let’s go, Spartak!" },
                  { "call": "One more goal!", "response": "We want more!" },
                  { "call": "Push on through!", "response": "We’re with you!" }
                ]
              },
              {
                "title": "Never Stop the Song",
                "structure": "chant",
                "lyrics": [
                  "We’ll sing through the frost,",
                  "We’ll sing through the rain,",
                  "Spartak Braknov will rise again!",
                  "Raise your scarves, let’s sing along,",
                  "Win or lose, we’ll never stop the song!"
                ]
              }
            ],
            supporter_quotes: [],
          },
          {
            name: "Meadowbell Athletic",
            nickname: "The Songbirds",
            six_letter_name: "MEADAT",
            three_letter_name: "MBA / MEA",
            hashtag: "#MeadowbellRise",
            founded: 1940,
            reputation: 725,
            status: "Semi-Professional",
            competition_tier: "South Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play quick, counter-attacking football; Push for local dominance; Operate with efficiency",
              balance: 600000,
              transfer_budget: 600000,
              avg_match_ticket_price: 12,
              avg_season_ticket_price: 216,
              season_ticket_holders: 165,
              income: {
                kit_sponsor: 19000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 36000,
                other: 12000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 4400,
              min_attendance: 2400,
              max_attendance: 5400,
              training: 8,
              youth_coaching: 10,
              youth_facilities: 9,
              youth_recruitment: 9,
              youth_importance: 12,
              corporate_facilities: 6,
            },
            supporter_profile: {
              loyalty: 15,
              passion: 13,
              patience: 18,
              affluence: 12,
              temprament: 16,
              expectations: 9,
            },
            supporter_objectives: {
              "Play attacking football": 4,
              "Play possession football": 4,
              "Play entertaining football": 5,
              "Develop Players using club's youth system": 5,
            },
            colors: ["rgb(206, 255, 190)", "rgb(40, 80, 60)"],
            stadium: "Meadowring Park",
            coord: [375, 215],
            club_history:`
                <h3>Two Clubs and a Meadow <span class="era-range">(1918–1939)</span></h3>
                <p>By the end of the 1930s Braknov had two football clubs and one argument. Spartak Ironfield had the garrison, and the banners that turned the old Line mottos upside down. Royal Parade Grounds had the old officer families, and the manner of authority that came with them. Every derby was the Great Eastern Uprising in ninety-minute installments, and the town had begun to notice that it could no longer walk down a street without being asked which side it stood on.</p>
                <h3>A Club With No Side to Take <span class="era-range">(1940–1945)</span></h3>
                <p>A group of schoolteachers and music instructors, tired of choosing a side neither of them believed in, founded something else in <strong class="hl">1940</strong>, on the meadows outside town. <strong class="hl">Meadowbell Athletic</strong> was meant to be football the way the founders remembered it before the city split into guard and crown: played for the joy of it, not for anyone's cause. The colors, pale green and forest green, came from the meadow. The name came from the old bell the meadow choir used to ring for evensong.</p>
                <p>The occupation of the coast in 1940 never reached Braknov, but it emptied the town of young men, and for five years the club was mostly teachers, choirmasters and boys too young to be called up. The Songbirds trained by singing, which the founders swore was sound tactical practice.</p>
                <h3>The Songbirds Find Their Voice <span class="era-range">(1946–1970s)</span></h3>
                <p>The style that earned the nickname set in early: light on the ball, expressive, more interested in a passage of play that sings than a scoreline that settles an argument. <strong class="hl">Meadowring Park</strong> never flew banners or recited mottos. What carried across the meadow on matchday was old Braknov folk harmony, terraces humming before they broke into song, the way meadow choirs had done long before anyone in this city thought to divide it in two.</p>
                <p>The club also became, in the 1950s, the unofficial keeper of the <strong class="hl">Line Meadow</strong>. Its groundsmen mend the fence around the old pitch on the garrison road, and every year on the anniversary of the Line's breaking they are the ones who unlock the gate for the two sets of supporters who come to lay a ball on the centre circle.</p>
                <h3>Neutral Ground <span class="era-range">(1980s–2000s)</span></h3>
                <p>Meadowbell's youth programme has quietly become the most productive in the city, a training ground that families from both Spartak Ironfield and Royal Parade Grounds send their children to without a second thought. It may be the single most subversive thing about the club: everyone in Braknov agrees to disagree, right up until their kids need somewhere to actually learn the game.</p>
                <p>The Songbirds play in the <strong class="hl">South Velmoran Regional League</strong> by an accident of railway geography. The regional leagues are named for the four lines out of Valdren, not for the compass, and the Braknov meadow halt sits on a branch of the Southern Line.</p>
                <h3>The Third Option <span class="era-range">(2010s–present)</span></h3>
                <p>Meadowbell has no rival in Braknov and means to keep it that way. The only club that has ever got under its skin is Vernek Albion, on the southern line, whose supporters mocked the singing in a fixture in 1974 and have not been forgiven. In a city built on two histories still settling old scores, staying out of the argument entirely turned out to be its own kind of tradition.</p>
            `,
            club_values: [
              "Play in harmony", "Pass with poetry", "Sing with the fans", "No side to take",
            ],
            club_slogan: "Let the pitch sing!",
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
              home_kit_svg: 30,
              home: [[162, 141, 182], [192, 217, 125], [147, 214, 231], [255, 255, 255]],
              home_back: 'same_as_front',
              away: [[192, 217, 125], [147, 214, 231], [147, 214, 231], [147, 214, 231]],
              away_kit_svg: 1,
              away_back: 'same_as_front',
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
                  "name": "Elin Ravn",
                  "role": "Chairperson"
                },
                {
                  "name": "Jorun Veld",
                  "role": "Academy Director"
                }
              ],
              "legends": [
                {
                  "name": "Thora Lindqvist",
                  "role": "Player"
                },
                {
                  "name": "Osk Merrin",
                  "role": "Manager"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Choir End",
              "Evensong Ultras"
            ],
            traditions: [
              "The Opening Verse: the terrace sings a hymn from the meadow choir's songbook before every kick-off.",
              "The Gate Key: the club's groundsmen unlock the Line Meadow for both sets of supporters each year on the anniversary of the Line's breaking.",
              "No Banners: the terrace has never flown one, and the rule is older than anyone can remember."
            ],
            chants: [
              {
              "title": "Sing for the Meadow",
              "style": "folk harmony",
              "lyrics": [
                "Sing for the meadow, sing for the bell,",
                "Sing for the stories our fathers tell,",
                "Sing for the shirt, the badge on our chest,",
                "Meadowbell forever — the club that’s the best!"
              ]
            }
            ],
            supporter_quotes: [
              {
                "text": "Spartak want you to pick a side and Royals want you to pick a suit. Here you just pick a verse.",
                "author": "Halvard Sten, the Choir End"
              },
              {
                "text": "My two sons play for the youth side. One is a Spartak family and the other a Royals family. We are Meadowbell.",
                "author": "Elin Ravn, Meadowring Park"
              }
            ],
          },
        ],
      },
      Lurngrad: {
        climate: "Cold Winters under Foundry Smoke",
        clubs: [
          {
            name: "Sootmark Town",
            nickname: "The Charcoals",
            six_letter_name: "SOOTWN",
            three_letter_name: "SOT / STM",
            hashtag: "#SootmarkTown",
            founded: 1957,
            reputation: 590,
            status: "Semi-Professional",
            competition_tier: "East Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Maintain control and tactical elegance; preserve heritage; avoid controversy and negative press.",
              balance: 300000,
              transfer_budget: 300000,
              avg_match_ticket_price: 6,
              avg_season_ticket_price: 108,
              season_ticket_holders: 70,
              income: {
                kit_sponsor: 5000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 18000,
                other: 6000,
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
              max_attendance: 4100,
              training: 3,
              youth_coaching: 3,
              youth_facilities: 3,
              youth_recruitment: 4,
              youth_importance: 5,
              corporate_facilities: 3,
            },
            supporter_profile: {
              loyalty: 18,
              passion: 19,
              patience: 16,
              affluence: 5,
              temprament: 6,
              expectations: 7,
            },
            supporter_objectives: {
              "Play defensive football": 3,
              "Play direct football": 5,
              "Play entertaining football": 3,
              "Develop Players using club's youth system": 2,
            },
            colors: ["rgb(205,32,26)", "rgb(203,203,203)"],
            stadium: "Ashfield Park",
            coord: [310, 200],
            club_history:`
                <h3>The Smokehouse District <span class="era-range">(1880s–1956)</span></h3>
                <p>Lurngrad's smokehouse district grew up beside the eastern quays, where the coal-boats loaded and the fish came in to be cured over open fires. Kovarai families who had come ashore at the eastern quays in the 1880s settled there, in streets that were black by the end of every shift. The district had cobbles, coal yards and a great many children, and until the middle of the twentieth century it did not have a single proper football pitch.</p>
                <h3>Born in the Smokehouse District <span class="era-range">(1957)</span></h3>
                <p><strong class="hl">Sootmark Town</strong> was founded in <strong class="hl">1957</strong> by street footballers and factory hands from the district, a wave of Kovarai industrial families two generations removed from the Line, playing on cobbles and coal-yard scraps because nobody had built them a pitch. The rebellion is in the name. Soot was not something to hide from. It was proof of a shift's work done.</p>
                <p>The first ground was a strip of cinder between two smokehouses. The first kit was red and grey, the colors of a coal fire and the ash left behind by it, sewn together from three donated jerseys.</p>
                <h3>No Shine Without Soot <span class="era-range">(1960s–1980s)</span></h3>
                <p><strong class="hl">Ashfield Park</strong> was built on slag and cinder, and it never lost its unpolished edge. The Charcoals played fierce, scrappy football, and the terrace motto, <em>No Shine Without Soot</em>, doubled as the district's verdict on the genteel clubs across town. Blossomridge, with its botanists, and Lurngrad United, with its Trade Alliance, were regarded on the terraces as clubs for people who had never had to wash.</p>
                <p>The club began to feed Bluehollow Atlantic with young players, who went down to the estuary quarter with the district's accent and came back on loan with the estuary's.</p>
                <h3>The Smoke Clears <span class="era-range">(1990s–2000s)</span></h3>
                <p>The Thaw closed the smokehouses one by one. Fewer families cured fish, the coal-boats loaded less, and the district began to empty. Sootmark Town declined every offer to rebrand around the change, and kept the cinder, the red and grey, and the motto. The rest of Lurngrad tidied itself up. The Charcoals did not.</p>
                <h3>Still Unpolished <span class="era-range">(2026)</span></h3>
                <p>The smokehouse district doesn't smoke much anymore, but Sootmark Town has never bothered rebranding around that fact. Ashfield Park still fills with the same rebellious, unpolished crowd, and the Charcoals remain proudly one of the least glamorous names in the Eastern Reaches pyramid. The <strong class="hl">Smokehouse Derby</strong> against Lurngrad United is the fixture the district cares about most: the unpolished pride of the old quarter against the civic project that was built to unify it, and has never once asked its opinion.</p>
            `,
            club_values: ["Defiance, street smarts, working-class pride"],
            club_slogan: "No Shine Without Soot",
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
              home: "assets/kits/sootwn/home.svg",
              home_back: "assets/kits/sootwn/home_back.svg",
              away: "assets/kits/sootwn/away.svg",
              away_back: "assets/kits/sootwn/away_back.svg",
            },
            rivals: [
              { club: "Lurngrad United", level: 60, reason: "Local" },
            ],
            derbies: [
              {
                "name": "The Smokehouse Derby",
                "team2": "Lurngrad United",
                "history": "The smokehouse district's unpolished pride against the civic project that was built to unify it, and has never once asked its opinion."
              }
            ],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Nadja Prell",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Osip Vranek",
                  "role": "Player"
                },
                {
                  "name": "Bela Dorn",
                  "role": "Player / Manager"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "Coal Dust Army",
              "The Smokehouse Boys"
            ],
            traditions: [
              "The Black Scarf: supporters dip their scarves in coal dust before the first home game of the season.",
              "The Cinder Walk: fans march to Ashfield Park along the old smokehouse road before every derby."
            ],
            chants: [
              {
                "title": "Clap Your Hands for Sootmark",
                "style": "clap chant",
                "lyrics": [
                  "Clap, clap, clap your hands for Sootmark!",
                  "Stamp your feet and sing along!",
                  "We’ll beat ‘em high, we’ll beat ‘em low,",
                  "Come on Charcoals, let’s steal the show!"
                ]
              },
              {
                "title": "We’re Sootmark Town",
                "style": "bouncy sing-along",
                "lyrics": [
                  "We’re Sootmark Town, we’re coal and proud,",
                  "We sing it strong, we sing it loud!",
                  "From blackened boots to smokey sky,",
                  "We’ll fight ‘til we win, we’ll never say die!"
                ]
              },
              {
                "title": "Oh Sootmark Boys (Ole Ole Ole)",
                "style": "repetitive crowd favourite",
                "lyrics": [
                  "Ohhh Sootmark boys, ole ole ole!",
                  "Black and grey, we’re here to play!",
                  "We’ll score one, we’ll score two,",
                  "And the Town will run right through!"
                ]
              },
              {
                "title": "Coal Dust Army",
                "style": "drum beat anthem",
                "lyrics": [
                  "We are, we are, the coal dust army!",
                  "Fight all night, and fight all day!",
                  "We are, we are, the coal dust army!",
                  "Black and grey will win the way!"
                ]
              },
              {
                "title": "Black Smoke Party",
                "style": "party terrace song",
                "lyrics": [
                  "Hey, hey, Sootmark’s here,",
                  "Pour the pints and raise a cheer!",
                  "Black smoke, loud crowd,",
                  "Sing Sootmark Town proud!"
                ]
              }],
            supporter_quotes: [
              {
                "text": "They scrub the terrace at Griffin's Nest. Ours has been black since 1957 and it is staying that way.",
                "author": "Osip Vranek, Coal Dust End"
              },
              {
                "text": "No shine without soot. It's on my wall, and on my father's, and on his.",
                "author": "Nadja Prell, Ashfield Park"
              }
            ],
          },
          {
            name: "Blossomridge FC",
            nickname: "The Bloom",
            six_letter_name: "BLSRFC",
            three_letter_name: "BFC / BSR",
            hashtag: "#Blossomridge",
            founded: 1963,
            reputation: 680,
            status: "Semi-Professional",
            competition_tier: "East Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Use innovation and data-led tactics; invest in youth and potential; become a modern football model.",
              balance: 525000,
              transfer_budget: 500000,
              avg_match_ticket_price: 10,
              avg_season_ticket_price: 180,
              season_ticket_holders: 145,
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
              max_attendance: 4900,
              training: 7,
              youth_coaching: 10,
              youth_facilities: 10,
              youth_recruitment: 10,
              youth_importance: 14,
              corporate_facilities: 6,
            },
            supporter_profile: {
              loyalty: 16,
              passion: 14,
              patience: 18,
              affluence: 11,
              temprament: 16,
              expectations: 9,
            },
            supporter_objectives: {
              "Play possession football": 4,
              "Play entertaining football": 5,
              "Develop Players using club's youth system": 5,
            },
            colors: ["rgb(255,182,193)", "rgb(255,255,255)"],
            stadium: "The Petal Grounds",
            coord: [330, 230],
            club_history:`
                <h3>The Upper Town <span class="era-range">(before 1963)</span></h3>
                <p>Lurngrad grew fast and unevenly. The Kovarai foundry districts filled the flat ground by the quays and the railway, while the old Velmar hamlets on the ridge above, orchards, a chapel and a small botanic garden, were swallowed by the expansion without ever quite joining it. The people of the ridge kept their gardens, their manners and their view of the smoke, and had little interest in the coal-yard football rising below them.</p>
                <h3>Schoolteachers and Botanists <span class="era-range">(1963)</span></h3>
                <p><strong class="hl">Blossomridge FC</strong> was started in <strong class="hl">1963</strong> by schoolteachers and botanists, old Velmar Lurngrad, more interested in a well-tended garden and a well-worked passing move than in the football of the yards. They adopted floral-themed kits from the first season, pink and white, and never once considered changing them. The Petal Grounds was laid out on the ridge beside the botanic garden, and the groundsmen were paid partly in cuttings.</p>
                <h3>Technicians, Not Enforcers <span class="era-range">(1970s–1990s)</span></h3>
                <p>The Petal Grounds houses a youth academy that became locally famous for producing technicians rather than enforcers: elegant, patient, occasionally accused of being too pretty to win anything, and entirely unbothered by the accusation. The club became a feeder to Lurngrad United, which took its most gifted teenagers to Griffin's Nest and, the Bloom's supporters note, never once sent one back.</p>
                <h3>The Garden Derby <span class="era-range">(1968–2010s)</span></h3>
                <p>Five years after the botanists came the seamstresses. Daisybank Wanderers, founded by textile workers in the daisy fields on the same ridge, became Blossomridge's near neighbor and only real rival, and the <strong class="hl">Garden Derby</strong> grew up between them: the politest argument in the Eastern Reaches, fought with flowers thrown from both terraces and a solemn exchange of cuttings at the final whistle. Nobody has ever been sent off in it.</p>
                <h3>Still Blooming <span class="era-range">(2026)</span></h3>
                <p>Blossomridge's academy remains one of the most respected in Lurngrad, still producing technicians more than sixty years after the botanists first planted the idea. The board's brief is to use innovation and data-led tactics, invest in youth and become a modern football model, and the Bloom has taken it seriously: the club keeps a seasonal ledger of every pass its academy sides attempt, pressed between the pages like a flower. The Petal Grounds hasn't changed much, still floral, still unhurried, still convinced that patience wins in the end.</p>
            `,
            club_values: ["Elegance, education, growth"],
            club_slogan: "Let It Bloom",
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
              home: "assets/kits/blsrfc/home.svg",
              home_back: "assets/kits/blsrfc/home_back.svg",
              away: "assets/kits/blsrfc/away.svg",
              away_back: "assets/kits/blsrfc/away_back.svg",
            },
            rivals: [
              {
                "club": "Lurngrad United",
                "level": 55,
                "reason": "Local"
              },
              {
                "club": "Daisybank Wanderers",
                "level": 60,
                "reason": "Local"
              }
            ],
            derbies: [
              {
                "name": "The Garden Derby",
                "team2": "Daisybank Wanderers",
                "history": "Two floral clubs five years apart, one founded by botanists and one by seamstresses: the politest argument in the Eastern Reaches, fought with flowers."
              }
            ],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Oskar Fenn",
                  "role": "Academy Director"
                }
              ],
              "legends": [
                {
                  "name": "Ingrid Solheim",
                  "role": "Player"
                },
                {
                  "name": "Fenwick Aldous",
                  "role": "Manager"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Ridge Circle",
              "Petal Terrace"
            ],
            traditions: [
              "The Cutting Swap: at the final whistle of every Garden Derby, players and captains exchange cuttings from the two clubs' gardens.",
              "Petal Terrace: supporters hand out pressed flowers to every visiting fan at the gate."
            ],
            chants: [
              {
                "title": "You Can’t Stop the Bloom",
                "style": "fast-paced terrace chant",
                "lyrics": [
                  "You can’t stop the bloom, (Hey hey!)",
                  "You can’t stop our run, (Hey hey!)",
                  "We’re Blossomridge forever,",
                  "And we’re here to have some fun!"
                ]
              },
              {
                "title": "Blossom Boogie",
                "style": "clap and stomp",
                "lyrics": [
                  "We do the Blossom boogie,",
                  "We do it all day long,",
                  "We’ll score a goal, we’ll rock and roll,",
                  "And sing the Blossom song!"
                ]
              },
              {
                "title": "Ridge Ridge Baby",
                "style": "humorous pop-culture reference",
                "lyrics": [
                  "Ridge, ridge baby…",
                  "Duh duh duh duh duh duh duh duh!",
                  "Ridge, ridge baby…",
                  "Go Blossomridge go!"
                ]
              },
              {
                "title": "Petals in the Air",
                "style": "jump-and-chant",
                "lyrics": [
                  "Throw your petals in the air,",
                  "Wave ’em like you just don’t care!",
                  "Shout it loud, we’re Blossomridge,",
                  "Other teams just can’t compare!"
                ]
              },
              {
                "title": "We’ve Got the Power of the Flowers",
                "style": "playful rhyme chant",
                "lyrics": [
                  "We’ve got the power of the flowers,",
                  "We’ll score in extra hours,",
                  "From the ridge to every ground,",
                  "Our victory’s world-renowned!"
                ]
              }],
            supporter_quotes: [
              {
                "text": "They call us too pretty to win. We have been too pretty to win for sixty years and it has been wonderful.",
                "author": "Ingrid Solheim, Petal Terrace"
              },
              {
                "text": "Every child in the academy learns the name of a plant before the name of a formation.",
                "author": "Oskar Fenn, the Ridge Circle"
              }
            ],
          },
          {
            name: "Daisybank Wanderers",
            nickname: "The Blossoms",
            six_letter_name: "DAIBWA",
            three_letter_name: "DAI / DSW",
            hashtag: "#DaisybankWFC",
            founded: 1968,
            reputation: 650,
            status: "Semi-Professional",
            competition_tier: "East Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Avoid relegation, retain veteran players",
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
              training: 6,
              youth_coaching: 8,
              youth_facilities: 7,
              youth_recruitment: 8,
              youth_importance: 10,
              corporate_facilities: 5,
            },
            supporter_profile: {
              loyalty: 18,
              passion: 17,
              patience: 18,
              affluence: 7,
              temprament: 16,
              expectations: 7,
            },
            supporter_objectives: {
              "Play entertaining football": 5,
              "Develop Players using club's youth system": 4,
            },
            colors: ["rgb(240,230,140)", "rgb(0,100,0)"],
            stadium: "The Meadow End",
            coord: [290, 225],
            club_history:`
                <h3>The Daisy Fields <span class="era-range">(before 1968)</span></h3>
                <p>The textile mills of Lurngrad stood on the ridge above the foundry town, where the wind carried the smoke the other way, and the daisy fields below them ran down to the river. The women who worked the looms were Kovarai and Velmar in nearly equal numbers, more than any other trade in the city, and they were the only people in Lurngrad who had ever been obliged to sit next to each other for ten hours a day and make something together.</p>
                <h3>Seamstresses and the Daisy Fields <span class="era-range">(1968)</span></h3>
                <p><strong class="hl">Daisybank Wanderers</strong> were established in <strong class="hl">1968</strong> by textile workers and seamstresses in the daisy fields near Lurngrad, and grew up somewhere between Blossomridge's old Velmar gentleness and the harder Kovarai identity taking root elsewhere in the city. The first kit, pale yellow with green trim, was cut and sewn by the founders themselves. The crest is a daisy stitched in chain-stitch, and the club's oldest surviving shirt is still in the trophy cabinet, patched at the elbow.</p>
                <p>The <em>Wanderers</em> in the name was earned. The club had no ground for its first two seasons and played wherever the mill owners would lend a field, until the seamstresses' union bought a meadow at the river's edge and called it <strong class="hl">The Meadow End</strong>.</p>
                <h3>Underdogs Who Are Loved <span class="era-range">(1970s–1990s)</span></h3>
                <p>The Blossoms spent most of their history as underdogs and were loved for it in equal measure: a romantic, wandering style of play and a loyal away following that treated a mid-table finish as a personal victory over the odds. Their supporters travel in numbers out of all proportion to the club's league position, carrying daisy-chain garlands to every ground in the East league.</p>
                <h3>The Garden Derby <span class="era-range">(1990s–2010s)</span></h3>
                <p>The <strong class="hl">Garden Derby</strong> against Blossomridge, five years the elder and up the ridge, is the fixture the Blossoms live for, and the one they have lost most often. The seamstresses' granddaughters see it as a family matter, and it is, in its way: the two clubs' supporters often have grandparents in common, and cannot agree whose.</p>
                <h3>Still Wandering <span class="era-range">(2026)</span></h3>
                <p>Nearly six decades on, the Blossoms remain Lurngrad's most romantic underdogs, a club whose away support still outnumbers what its league position would suggest it deserves. The board's expectations are modest: avoid relegation, and keep the veterans. That is exactly the kind of loyalty the mill-town seamstresses who founded it would recognize, and they would have sewn the badges on themselves.</p>
            `,
            club_values: ["Spirit, charm, graceful defiance"],
            club_slogan: "Keep Wandering",
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
              home: "assets/kits/daibwa/home.svg",
              home_back: "assets/kits/daibwa/home_back.svg",
              away: "assets/kits/daibwa/away.svg",
              away_back: "assets/kits/daibwa/away_back.svg",
            },
            rivals: [
              {
                "club": "Lurngrad United",
                "level": 55,
                "reason": "Local"
              },
              {
                "club": "Blossomridge FC",
                "level": 60,
                "reason": "Local"
              }
            ],
            derbies: [
              {
                "name": "The Garden Derby",
                "team2": "Blossomridge FC",
                "history": "Two floral clubs five years apart, one founded by botanists and one by seamstresses: the politest argument in the Eastern Reaches, fought with flowers."
              }
            ],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Gerd Alsen",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Marit Kolvek",
                  "role": "Player"
                },
                {
                  "name": "Edda Rasmus",
                  "role": "Founding Member"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Chain Stitch",
              "Meadow End Choir"
            ],
            traditions: [
              "The Daisy Chain: supporters string garlands across the terrace before every home game and leave them for the opposition.",
              "The Patched Elbow: the club's founding shirt is carried onto the pitch before each season's first match."
            ],
            chants: [
              {
                "title": "Pick Our Petals? Good Luck!",
                "style": "cheeky taunt",
                "lyrics": [
                  "Pick our petals, try your best,",
                  "We’ll still beat you like the rest,",
                  "From Daisybank we’ve come to play,",
                  "And send you cryin’ home today!"
                ]
              },
              {
                "title": "Weeds in Your Garden",
                "style": "mocking rivals",
                "lyrics": [
                  "We’re the weeds in your garden,",
                  "The ones you can’t pull out,",
                  "We’re Daisybank Wanderers,",
                  "We’ll knock your flowers out!"
                ]
              },
              {
                "title": "Daisies Don’t Back Down",
                "style": "playful arrogance",
                "lyrics": [
                  "Oh, daisies look so gentle,",
                  "But don’t be fooled, my friend,",
                  "We’ll kick and run and rattle,",
                  "And fight you till the end!"
                ]
              },
              {
                "title": "We’re the Blooming Best",
                "style": "pub-singalong",
                "lyrics": [
                  "We’re blooming, we’re booming, we’re better than you,",
                  "Our daisy’s the badge and our hearts beat true,",
                  "So pour us a pint and we’ll show you the rest,",
                  "Daisybank Wanderers, the blooming best!"
                ]
              },
              {
                "title": "Pollen in Your Eyes",
                "style": "rowdy and humorous",
                "lyrics": [
                  "Pollen in your eyes, you can’t see the ball,",
                  "Daisybank scores and we’re having a ball,",
                  "We’ll run you ragged, make you sneeze,",
                  "Three more goals before we leave!"
                ]
              }],

            supporter_quotes: [
              {
                "text": "You don't pick your daisies. You pick a side of the ridge and stay on it.",
                "author": "Marit Kolvek, Meadow End"
              },
              {
                "text": "Nobody in this town has ever sewn a shirt as well as the founders did. We wear it as a vow.",
                "author": "Gerd Alsen, the Chain Stitch"
              }
            ],
          },
          {
            name: "Bluehollow Atlantic",
            nickname: "The Tide",
            six_letter_name: "BLUHOL",
            three_letter_name: "BHA",
            hashtag: "#BluehollowA",
            founded: 1958,
            reputation: 1008,
            status: "Professional",
            competition_tier: "Velmoran National Liga",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Limited Liability Company",
              board_expectations: "Play compact, disciplined football; avoid risky signings; focus on consistency and resilience.",
              balance: 4500000,
              transfer_budget: 2000000,
              avg_match_ticket_price: 16,
              avg_season_ticket_price: 288,
              season_ticket_holders: 680,
              income: {
                kit_sponsor: 70000,
                government_grant: 30000,
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
              attendance: 8400,
              min_attendance: 5100,
              max_attendance: 9400,
              training: 10,
              youth_coaching: 11,
              youth_facilities: 10,
              youth_recruitment: 11,
              youth_importance: 12,
              corporate_facilities: 8,
            },
            supporter_profile: {
              loyalty: 16,
              passion: 16,
              patience: 15,
              affluence: 11,
              temprament: 13,
              expectations: 10,
            },
            supporter_objectives: {
              "Play attacking football": 4,
              "Play counter-attacking football": 5,
              "Develop Players using club's youth system": 4,
            },
            colors: ["rgb(0,105,162) ", "rgb(255,255,255)"],
            stadium: "Tidemark Park",
            coord: [270, 170],
            club_history:`
                <h3>The Eastern Quays <span class="era-range">(1850s–1957)</span></h3>
                <p>Lurngrad's estuary quarter is where the Kovarai came ashore. The eastern quays, where the steamers put in from across the water and the railway ran straight onto the jetty, were the first ground the immigrants stood on in Velmora, and the Velmar pilots, fishermen and harbor men who worked the estuary long before them called the bay by its old name, <em>Bluehollow</em>. It is the one corner of the Eastern Reaches where the two peoples have always worked side by side, since neither could dock a ship without the other.</p>
                <h3>Beachside Leagues <span class="era-range">(1958–1970s)</span></h3>
                <p>Bluehollow Atlantic was born from a coastal shipping firm's youth initiative in <strong class="hl">1958</strong>: a beach league for the sons of the pilots, the stevedores and the quay clerks, played at low tide on the estuary sands. Old Velmar maritime stock, the founders were drawn to swift counter-attacking play and wide formations, a mirror to the rhythm of the sea they worked. The club grew from those beachside leagues into a semi-professional force, and its first matches at <strong class="hl">Tidemark Park</strong> were played where the high-tide line had once been.</p>
                <h3>Turning Professional <span class="era-range">(1980s–1990s)</span></h3>
                <p>The shipping firm's backing turned the club fully professional in the 1980s, and the Tide took its place in the National Liga. Players came down from the smokehouse district, Sootmark Town supplying a steady line of them, and the club acquired a reputation for compact, disciplined football and a defence that sailed in formation.</p>
                <h3>The Tidemark <span class="era-range">(2000s–2010s)</span></h3>
                <p>The firm sold to a limited liability company, which kept the name, the badge and the anchor. Tidemark Park became known as much for its partnerships with oceanic conservation organizations as for its football, a rare case of an old fishing-and-shipping club finding a genuinely modern identity without losing its origin story. The board's expectations are consistency and resilience, and the club avoids risky signings on principle.</p>
                <h3>Griffin and Ocean <span class="era-range">(2010s–present)</span></h3>
                <p>The <strong class="hl">Griffin-Ocean Derby</strong> against Lurngrad United is the fixture that defines the club. It is the reconciliation project of the city against the old maritime pride of the quays, and it is played with a good deal of mutual respect and a good deal of chanting. The Tide sing that they were here first, which is true, and that the Griffins were built by a committee, which is also true.</p>
            `,
            club_values: ["Speed. Spirit. Flow."],
            club_slogan: "Ride the wave, rule the pitch.",
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
              home: "assets/kits/bluhol/home.svg",
              home_back: "assets/kits/bluhol/home_back.svg",
              away: "assets/kits/bluhol/away.svg",
              away_back: "assets/kits/bluhol/away_back.svg",
            },
            rivals: [
              { club: "Lurngrad United", level: 70, reason: "Local" },
              { club: "Ostravaj Sporting", level: 60, reason: "Competitive" },
            ],
            derbies: [
              {
                name: "Griffin-Ocean Derby",
                team2: "Lurngrad United",
                history: "Lurngrad United's reconciliation project against Bluehollow Atlantic's old coastal maritime pride.",
              },
            ],
            affiliations: [
              { club: "Sootmark Town", type: "Feeder Team" },
              { club: "Pebbleline Albion", type: "Good Relations" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Solveig Maar",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Torvald Reik",
                  "role": "Player"
                },
                {
                  "name": "Hanne Brak",
                  "role": "Manager"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Anchor End",
              "Tidemark Crew"
            ],
            traditions: [
              "The Tide Line: fans hold a blue-and-white scarf at chest height until the first goal, then raise it like a rising tide.",
              "Low Tide Cup: an annual youth tournament played on the estuary sands at the lowest tide of the summer."
            ],
            chants: [
              {
                "title": "Roll With the Tide",
                "style": "anthemic pride",
                "lyrics": [
                  "Roll with the tide, Bluehollow’s here,",
                  "Sailing strong year after year,",
                  "Atlantic hearts, we fight, we roar,",
                  "Our waves will crash and sink your score!"
                ]
              },
              {
                "title": "Anchor Down",
                "style": "matchday rally",
                "lyrics": [
                  "Anchor down, hold the line,",
                  "Bluehollow’s glory will be mine,",
                  "From the docks to the stadium stand,",
                  "We’re the fiercest crew in the land!"
                ]
              },
              {
                "title": "Sailors Never Surrender",
                "style": "battle cry",
                "lyrics": [
                  "Sailors never surrender, sailors never fall,",
                  "Bluehollow Atlantic will conquer them all,",
                  "From the gulls in the sky to the waves below,",
                  "We’re the pride of the port and we’re here to show!"
                ]
              },
              {
                "title": "Oh When the Blues Set Sail",
                "style": "fun singalong",
                "lyrics": [
                  "Oh when the Blues… set sail,",
                  "Oh when the Blues set sail,",
                  "We’re gonna sink the opposition,",
                  "When the Blues set sail!"
                ]
              },
              {
                "title": "We’ve Got the Ocean Behind Us",
                "style": "cheeky banter",
                "lyrics": [
                  "We’ve got the ocean behind us,",
                  "We’ve got the wind in our sails,",
                  "Your keeper looks seasick already,",
                  "And your defence is starting to fail!"
                ]
              }
            ],
            supporter_quotes: [
              {
                "text": "We were here when the steamers came. Everyone else in Lurngrad arrived on one.",
                "author": "Torvald Reik, the Anchor End"
              },
              {
                "text": "When the tide's in, the whole ground rings. It's the only ground I know that keeps time with the sea.",
                "author": "Solveig Maar, Tidemark Park"
              }
            ],
          },
          {
            name: "Lurngrad United",
            nickname: "The Griffins",
            six_letter_name: "LURUNI",
            three_letter_name: "LUR / LGU",
            hashtag: "#LurngradU",
            founded: 1950,
            reputation: 1550,
            status: "Professional",
            competition_tier: "Velmoran Super League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (Elections / Ltd)",
              board_expectations: "Play possession-based, intelligent football; develop technical midfielders; represent city elegance.",
              balance: 5700000,
              transfer_budget: 2700000,
              avg_match_ticket_price: 19,
              avg_season_ticket_price: 342,
              season_ticket_holders: 870,
              income: {
                kit_sponsor: 105000,
                government_grant: 0,
                stadium_sponsor: 155000,
                club_membership: 90000,
                other: 30000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 9400,
              min_attendance: 6100,
              max_attendance: 11000,
              training: 14,
              youth_coaching: 15,
              youth_facilities: 15,
              youth_recruitment: 14,
              youth_importance: 16,
              corporate_facilities: 12,
            },
            supporter_profile: {
              loyalty: 17,
              passion: 16,
              patience: 19,
              affluence: 13,
              temprament: 16,
              expectations: 11,
            },
            supporter_objectives: {
              "Sign Players of Nationality": 4,
              "Play possession football": 4,
              "Play entertaining football": 4,
              "Develop Players using club's youth system": 5,
            },
            colors: ["rgb(0, 128, 0)", "rgb(255, 255, 255)"],
            stadium: "Griffin's Nest",
            coord: [310, 165],
            club_history:`
                <h3>The Junction <span class="era-range">(1873–1949)</span></h3>
                <p>Lurngrad Junction is where the country's football began. In 1873 an engineers' side played a foundry side there, at the meeting of the eastern quays and the first railway inland, and three hundred railwaymen watched. By the twentieth century the town that grew around the Junction was a patchwork of Kovarai foundry districts, old Velmar hamlets swallowed by the expansion, quays, mills and smokehouses, and it fielded a dozen clubs, each representing its own streets and none the city. Lurngrad was the industrial heart of the Eastern Reaches and its most fragmented town.</p>
                <h3>A Unity Project <span class="era-range">(1950)</span></h3>
                <p><strong class="hl">Lurngrad United</strong> was founded in <strong class="hl">1950</strong> as a deliberate unity project, a civic attempt to bind the districts of a Kovarai industrial city into a single footballing identity. It was created and is owned to this day by the <strong class="hl">Lurngrad Trade Alliance</strong>, a coalition of local businesses and civic groups who decided that a city of a dozen clubs and no team was an embarrassment. The Alliance has kept the club stable, community-accountable and deliberately boring in its finances.</p>
                <h3>A Model of Reconciliation <span class="era-range">(1950s–1990s)</span></h3>
                <p>The Griffins built a name for possession-based, intelligent football, the development of technical midfielders and a cool civic elegance that other Eastern clubs found infuriating. <strong class="hl">Griffin's Nest</strong> became exactly what its founders hoped for: a club with no single faction to answer to, and a model, on a city scale, of the same reconciliation Valdren Atletika represents nationally. Blossomridge supplied it with academy talent, and Daisybank Wanderers were kept on good terms.</p>
                <p>It also, inevitably, became the club the rest of the city loved to resent. Sootmark Town, in the old smokehouse district, regarded it as a project run by people who had never had to wash.</p>
                <h3>The Griffin Years <span class="era-range">(2001–2004)</span></h3>
                <p>After the Thaw left the industrial clubs of the East adrift, the Alliance's caution came into its own. Lurngrad United won the <strong class="hl">Super League in 2001</strong>, the club's first title, and the <strong class="hl">league again in 2004</strong>, two championships in four years for a side that nobody had ever thought of as a champion. The Alliance, which had never spent a coin it could not account for, put a small plaque in the boardroom and returned to its ledgers.</p>
                <h3>Down and Back <span class="era-range">(2005–2015)</span></h3>
                <p>The good years did not last. Relegated in the middle of the decade, the Griffins spent ten years in the National Liga before winning it in <strong class="hl">2015</strong> and returning to the top flight. It was the first time in the club's history that the Alliance had been asked to spend money to save the club, and it did so after a very long meeting.</p>
                <h3>One City, One Fight <span class="era-range">(2016–present)</span></h3>
                <p>Today the club is back among the Velmoran Super League's regulars. The <strong class="hl">Griffin-Ocean Derby</strong> against Bluehollow Atlantic remains the city's great fixture, and the <strong class="hl">Smokehouse Derby</strong> against Sootmark Town its sorest. Griffin's Nest is full most weeks. The club owns no one, and the whole city owns a share of it.</p>
            `,
            club_values: ["“Built by the city, for the future.”"],
            club_slogan:
              "One City, One Fight – Griffins Soar Through Day and Night!",
            competition_history: {
              VSL: {
                winnerIn: [2001, 2004],
              },
              VNN: {
                winnerIn: [2015],
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
              home: "assets/kits/luruni/home.svg",
              home_back: "assets/kits/luruni/home_back.svg",
              away: "assets/kits/luruni/away.svg",
              away_back: "assets/kits/luruni/away_back.svg",
            },
            rivals: [
              { club: "Bluehollow Atlantic", level: 70, reason: "Local" },
              { club: "Sootmark Town", level: 60, reason: "Local" },
            ],
            derbies: [
              {
                "name": "Griffin-Ocean Derby",
                "team2": "Bluehollow Atlantic",
                "history": "Lurngrad United's reconciliation project against Bluehollow Atlantic's old coastal maritime pride."
              },
              {
                "name": "The Smokehouse Derby",
                "team2": "Sootmark Town",
                "history": "The smokehouse district's unpolished pride against the civic project that was built to unify it, and has never once asked its opinion."
              }
            ],
            affiliations: [
              { club: "Blossomridge FC", type: "Feeder Team" },
              { club: "Daisybank Wanderers", type: "Good Relations" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Anders Kovac",
                  "role": "Chairperson (Trade Alliance)"
                },
                {
                  "name": "Lena Marsk",
                  "role": "Manager"
                }
              ],
              "legends": [
                {
                  "name": "Petra Ostrum",
                  "role": "Player"
                },
                {
                  "name": "Rurik Dane",
                  "role": "Player / Manager"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Alliance Circle",
              "Nest Terrace"
            ],
            traditions: [
              "One City Roll Call: before kick-off the stadium announcer reads the name of every district in Lurngrad, and each is answered by its supporters.",
              "The Junction Ball: the club keeps the match ball from every game played at Lurngrad Junction in its boardroom."
            ],
            chants: [
              {
                "title": "One City, One Crest",
                "style": "unity anthem",
                "lyrics": [
                  "From east to west, from north to south,",
                  "The Griffins are strong, there’s no doubt,",
                  "One city, one voice, one team we cheer,",
                  "United forever, year after year!"
                ]
              },
              {
                "title": "Griffin’s Nest Roar",
                "style": "stadium pride",
                "lyrics": [
                  "Hear the roar from Griffin’s Nest,",
                  "This is where we play our best,",
                  "Every pass, every goal, we fight,",
                  "Lurngrad United, red and white!"
                ]
              },
            ],
            supporter_quotes: [
              {
                "text": "The Alliance asks us for nothing but a full ground. Somebody in this city finally did.",
                "author": "Petra Ostrum, Nest Terrace"
              },
              {
                "text": "One city, one crest. It took a committee, but it took.",
                "author": "Anders Kovac, the Alliance Circle"
              }
            ],
          },
        ],
      },
      Ostravaj: {
        climate: "Mild Forest Valley with Damp Summers",
        clubs: [
          {
            name: "Plumstead Juniors",
            nickname: "The Colts",
            six_letter_name: "PLUJUN",
            three_letter_name: "PLU / PJN",
            hashtag: "#PlumsteadJuniors",
            founded: 1971,
            reputation: 630,
            status: "Semi-Professional",
            competition_tier: "East Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play attractive football, develop technical wingers",
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
              attendance: 8300,
              min_attendance: 5000,
              max_attendance: 9200,
              training: 10,
              youth_coaching: 10,
              youth_facilities: 9,
              youth_recruitment: 11,
              youth_importance: 9,
              corporate_facilities: 9,
            },
            supporter_profile: {
              loyalty: 14,
              passion: 18,
              patience: 12,
              affluence: 10,
              temprament: 8,
              expectations: 10,
            },
            supporter_objectives: {
              "Play attacking football": 5,
              "Play entertaining football": 5,
              "Develop Players using club's youth system": 3,
            },
            colors: ["rgb(61, 16, 45)", "rgb(12, 170, 77)"],
            stadium: "The Colts Field",
            coord: [330, 270],
            club_history:`
                <h3>A School Club <span class="era-range">(1971)</span></h3>
                <p><strong class="hl">Plumstead Juniors</strong> started as a school club in <strong class="hl">1971</strong>, run by two teachers at the Plumstead orchard school on the edge of Ostravaj, who noticed that the town's best teenagers were leaving for bigger academies at fifteen and never coming back. They founded the club on a single unwavering promise: give local teenagers a route into senior football, and get out of their way. The colors, plum and green, came from the school's own uniform.</p>
                <h3>First Boots <span class="era-range">(1970s–1980s)</span></h3>
                <p>The Colts were slow to become a senior side. For a decade the club fielded only under-eighteen teams, and its matches were played on the school's playing field, <strong class="hl">The Colts Field</strong>, in front of parents. The first senior team was assembled in 1981 from the club's own graduates, the oldest of whom was nineteen. It played in the East regional league, finished eighth, and was considered a triumph.</p>
                <h3>Stepping Stones <span class="era-range">(1990s–2000s)</span></h3>
                <p>The club became Ostravaj's proving ground of choice. Many of the town's better players used The Colts Field as a stepping stone to bigger academies elsewhere in Velmora, and the Juniors developed a reputation for producing wingers: technical, quick and disciplined about the ball. Bigger clubs began to send scouts to the Colts Field on Saturdays, and to leave before the second half, having seen what they came for.</p>
                <h3>Careers Launched <span class="era-range">(2010s)</span></h3>
                <p>The board's expectations are attractive football and technical wingers, and the club has delivered. It is member-owned, its accounts are published on the club noticeboard, and it measures itself by a single statistic printed in the matchday programme: the number of former players currently earning a living from the game. It is now over two hundred.</p>
                <h3>Still First Boots <span class="era-range">(2026)</span></h3>
                <p>More than fifty years on, The Colts Field remains Ostravaj's proving ground of choice, a club whose entire modern identity is still measured in careers launched rather than trophies won, and proud enough of that to have never seriously tried to change it. Its slogan, <em>First Boots, Not Last Steps</em>, is printed on the inside of every player's first pair.</p>
            `,
            club_values: ["Youth focus, pathway football, humility"],
            club_slogan: "First Boots, Not Last Steps",
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
              home: "assets/kits/plujun/home.svg",
              home_back: "assets/kits/plujun/home_back.svg",
              away: "assets/kits/plujun/away.svg",
              away_back: "assets/kits/plujun/away_back.svg",
            },
            rivals: [
              {
                "club": "Bumblefield FC",
                "level": 45,
                "reason": "Local"
              }
            ],
            derbies: [],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Karin Dols",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Nils Havard",
                  "role": "Player / Coach"
                },
                {
                  "name": "Sofie Brandt",
                  "role": "Founding Teacher"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Orchard School Circle"
            ],
            traditions: [
              "First Boots: every new academy player receives a pair of boots from the club, whatever their family can afford.",
              "The Programme Count: the matchday programme prints the number of former players who now earn a living from the game."
            ],
            chants : [
            {
              "title": "Future of Velmora",
              "style": "academy focus",
              "lyrics": [
                "Tomorrow’s stars are here today,",
                "Plumstead Juniors lead the way,",
                "Watch the pass, watch the score,",
                "This is the team you can’t ignore!"
              ]
            },
            {
              "title": "We’re the Juniors",
              "style": "matchday hype",
              "lyrics": [
                "We’re the Juniors, clap your hands,",
                "Best young side in all the lands,",
                "Speed and skill in red and white,",
                "Plumstead Juniors fight, fight, fight!"
              ]
            }
            ],
            supporter_quotes: [
              {
                "text": "I've watched sixty of our lads sign somewhere else. I've never once been disappointed.",
                "author": "Nils Havard, Colts Field"
              },
              {
                "text": "Every kid gets the same first boots. Nobody's father buys a better pair.",
                "author": "Karin Dols, the Orchard School Circle"
              }
            ],
          },
          {
            name: "Pebbleline Albion",
            nickname: "The Shoremen",
            six_letter_name: "PEBALB",
            three_letter_name: "PEB / PAL",
            hashtag: "#PebbleAlbion",
            founded: 1939,
            reputation: 645,
            status: "Semi-Professional",
            competition_tier: "East Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play modern, collective football; Engage fans in decision-making; Promote inclusive values",
              balance: 435000,
              transfer_budget: 380000,
              avg_match_ticket_price: 8,
              avg_season_ticket_price: 144,
              season_ticket_holders: 90,
              income: {
                kit_sponsor: 9000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 24000,
                other: 7500,
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
              min_attendance: 1700,
              max_attendance: 4400,
              training: 6,
              youth_coaching: 7,
              youth_facilities: 7,
              youth_recruitment: 6,
              youth_importance: 9,
              corporate_facilities: 5,
            },
            supporter_profile: {
              loyalty: 16,
              passion: 14,
              patience: 19,
              affluence: 9,
              temprament: 16,
              expectations: 8,
            },
            supporter_objectives: {
              "Play defensive football": 4,
              "Play possession football": 3,
              "Develop Players using club's youth system": 4,
            },
            colors: ["rgb(22,61,90)", "rgb(163,194,196)"],
            stadium: "Pebblepark Arena",
            coord: [365, 280],
            club_history:`
                <h3>The Lighthouse Path <span class="era-range">(before 1939)</span></h3>
                <p>The coast east of Ostravaj is a long shingle shore, pale pebbles for miles, with a lighthouse every few of them. The keepers walked the shore between their shifts, and the port workers who supplied the lights walked it with them. Old Velmar coastal stock, defined by wind, water and the long walks they took to get from one to the other, they were the only people in the district who had never been in a hurry.</p>
                <h3>Lighthouse Keepers and Port Workers <span class="era-range">(1939)</span></h3>
                <p>Pebbleline Albion was formed in <strong class="hl">1939</strong> by lighthouse keepers and port workers, in the last year of peace. It carries the old Velmar coastal temperament in full: a calm but serious club that plays structured football and values slow, steady growth over flash. <strong class="hl">Pebblepark Arena</strong> sits exactly where you would expect, close enough to hear the tide, far enough from the noise of the city's newer, harder clubs.</p>
                <h3>The Dark Lights <span class="era-range">(1940–1945)</span></h3>
                <p>The occupation of the coast in 1940 put out the lights. The keepers were ordered to darken every lamp on the Ostravaj shore, and the club's first five years were played in a landscape that had, for the first time in living memory, no lighthouses. The players walked to matches along the shingle in the dark, and the club still counts the miles.</p>
                <h3>Rock Steady <span class="era-range">(1950s–1990s)</span></h3>
                <p>The Shoremen settled into a structure they have never left: a back line that moves as one, a midfield that never hurries, and a coach's notebook that has, in seventy years, changed formation twice. Pebbleline became a feeder for Ostravaj Sporting, and were on good terms with Bluehollow Atlantic down the coast. It never sought promotion and never pretended not to want it.</p>
                <h3>Still Watching the Water <span class="era-range">(2000s–present)</span></h3>
                <p>The board's brief is modern, collective football, engagement with supporters in decisions and inclusive values, and Pebbleline has delivered all three, quietly. The Shoremen's steady, patient temperament has aged into something close to a house style for the old Velmar coastal clubs, and Pebbleline was simply early to it. Their slogan, <em>Rock Steady, Tides Will Turn</em>, is understood in the district as a statement of faith.</p>
            `,
            club_values: ["Stability, structure, shoreline pride"],
            club_slogan: "Rock Steady, Tides Will Turn",
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
              home: "assets/kits/pebalb/home.svg",
              home_back: "assets/kits/pebalb/home_back.svg",
              away: "assets/kits/pebalb/away.svg",
              away_back: "assets/kits/pebalb/away_back.svg",
            },
            rivals: [
              { club: "Ostravaj Sporting", level: 55, reason: "Local" },
            ],
            derbies: [],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Ivar Moe",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Gunnar Lie",
                  "role": "Player"
                },
                {
                  "name": "Ase Ristad",
                  "role": "Manager"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Keepers' Bench",
              "Shingle End"
            ],
            traditions: [
              "The Lamp Lighting: before every home game a lantern is lit on the roof of Pebblepark Arena and kept burning until the final whistle.",
              "The Shingle Walk: supporters walk the pebble shore from the old lighthouse to the ground on matchday."
            ],
            chants: [
              {
                "title": "By the Pebbleline Pub",
                "style": "matchday banter",
                "lyrics": [
                  "By the Pebbleline pub,",
                  "We’ll drink and we’ll sing,",
                  "Then march to the ground,",
                  "And watch Albion win!"
                ]
              },
              {
                "title": "You Can’t Beat the Shore",
                "style": "mocking opponents",
                "lyrics": [
                  "You can’t beat the shore,",
                  "No matter how you try,",
                  "We’ll smash you in the first half,",
                  "And finish with a fry!"
                ]
              },
              {
                "title": "Albion Till We Sink",
                "style": "funny loyalty",
                "lyrics": [
                  "Albion till we sink,",
                  "Into the sea we drink,",
                  "We’ll play all day, we’ll score away,",
                  "Albion till we sink!"
                ]
              },
              {
                "title": "Rock Solid Defence",
                "style": "defensive pride",
                "lyrics": [
                  "Rock solid, rock solid, Pebbleline wall,",
                  "You won’t get through, you’ll trip and fall,",
                  "Cross the halfway, you’ll be done,",
                  "Pebbleline’s second to none!"
                ]
              },
              {
                "title": "We’ve Got Pebbles",
                "style": "cheeky & proud",
                "lyrics": [
                  "We’ve got pebbles, yes we do,",
                  "We’ve got pebbles, more than you,",
                  "Kick the ball, we’ll kick it back,",
                  "Pebbleline’s on the attack!"
                ]
              },
            ],
            supporter_quotes: [
              {
                "text": "You can hear the tide from the stand. Some Saturdays it's louder than we are.",
                "author": "Gunnar Lie, Shingle End"
              },
              {
                "text": "We've had two formations in seventy years. Both were correct.",
                "author": "Ase Ristad, the Keepers' Bench"
              }
            ],
          },
          {
            name: "Bumblefield FC",
            nickname: "The Stingers",
            six_letter_name: "BUMFCF",
            three_letter_name: "BUM / BFC",
            hashtag: "#BumblefieldFC",
            founded: 1955,
            reputation: 685,
            status: "Semi-Professional",
            competition_tier: "East Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play attacking, high-profile football; pursue top-tier finishes; support commercial brand growth.",
              balance: 525000,
              transfer_budget: 500000,
              avg_match_ticket_price: 10,
              avg_season_ticket_price: 180,
              season_ticket_holders: 148,
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
              attendance: 3900,
              min_attendance: 1900,
              max_attendance: 4600,
              training: 6,
              youth_coaching: 8,
              youth_facilities: 7,
              youth_recruitment: 8,
              youth_importance: 11,
              corporate_facilities: 5,
            },
            supporter_profile: {
              loyalty: 18,
              passion: 17,
              patience: 18,
              affluence: 8,
              temprament: 14,
              expectations: 8,
            },
            supporter_objectives: {
              "Play entertaining football": 4,
              "Develop Players using club's youth system": 5,
            },
            colors: ["rgb(255,215,0)", "rgb(0,0,0)"],
            stadium: "The Buzzbox",
            coord: [280, 260],
            club_history:`
                <h3>Honeybell's Children <span class="era-range">(1955)</span></h3>
                <p><strong class="hl">Bumblefield FC</strong> was started in <strong class="hl">1955</strong> by former Honeybell players who moved west to Ostravaj in search of work. They carried the bee theme with them and sharpened it: the same yellow and black, but more speed and less sweetness. Bumblefield is a direct offshoot of Honeybell's old Velmar orchard culture, transplanted into a harder, more industrial city and toughened by the move.</p>
                <h3>A Harder Hive <span class="era-range">(1955–1970s)</span></h3>
                <p>Ostravaj had work for anyone who would take it, and the club's first players were joiners, coopers and fitters who trained after their shifts under the floodlights of a hardware yard. <strong class="hl">The Buzzbox</strong>, the ground that eventually grew out of the yard, is named for the noise the terrace makes in an empty ground, and the noise it makes in a full one.</p>
                <h3>The Family Quarrel <span class="era-range">(1970s–1990s)</span></h3>
                <p>The Stingers regard themselves as a grown-up Honeybell, and Honeybell regard them as the child who left. The <strong class="hl">Hive Road Derby</strong> is the one fixture in Ostravaj's calendar with any real family feeling in it, and the argument on the terraces, which side of the hive is the true one, has been going for fifty years. They are on good terms with Ostravaj Sporting and rivals with them at the same time, a habit the town takes as a compliment.</p>
                <h3>Second Chances <span class="era-range">(2000s–2010s)</span></h3>
                <p>The club found a niche in players released by the bigger academies at sixteen: fast, hungry, and with something to prove. The Stingers played with pace and directness, known for quick transitions and sharp counters, and the family resemblance to Honeybell was there if you looked for it, but only just. The board's brief, to play attacking, high-profile football, pursue top-tier finishes and support commercial brand growth, was ambitious for a club its size, and the club has never been embarrassed by ambition.</p>
                <h3>We Swarm Again <span class="era-range">(2020s)</span></h3>
                <p>Bumblefield have never played above the regional leagues, but they have never been out of sight of promotion either. Their slogan is <em>We Swarm Again</em>, and they mean it in the sense that nobody in the club has ever been allowed to stay down. Every new signing is given the same speech, in the same words: <em>You left something behind, so go and win it back.</em></p>
            `,
            club_values: ["Energy, tempo, second-chance spirit"],
            club_slogan: "We Swarm Again",
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
              home: "assets/kits/bumfcf/home.svg",
              home_back: "assets/kits/bumfcf/home_back.svg",
              away: "assets/kits/bumfcf/away.svg",
              away_back: "assets/kits/bumfcf/away_back.svg",
            },
            rivals: [
              {
                "club": "Ostravaj Sporting",
                "level": 60,
                "reason": "Local"
              },
              {
                "club": "Honeybell AFC",
                "level": 55,
                "reason": "Local"
              }
            ],
            derbies: [
              {
                "name": "The Hive Road Derby",
                "team2": "Honeybell AFC",
                "history": "A family quarrel: the Bees who stayed on the orchard road against the Stingers who left it."
              }
            ],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Katya Mirov",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Rudi Halvard",
                  "role": "Player"
                },
                {
                  "name": "Ottar Grimm",
                  "role": "Founding Member"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Buzzbox End",
              "Second Chance Ultras"
            ],
            traditions: [
              "The Speech: every new signing is read the same three sentences by the captain in the changing room.",
              "Honey and Sting: before each Hive Road Derby, the two clubs' captains exchange a jar of honey and a wasp-tail feather."
            ],
            chants: [
              {
                "title": "We’re the Bees",
                "style": "club identity",
                "lyrics": [
                  "We’re the Bees, the mighty Bees,",
                  "Buzzing round with so much ease,",
                  "Bumblefield will sting you twice,",
                  "Once for fun and once for spice!"
                ]
              },
              {
                "title": "Buzz Buzz Goal!",
                "style": "goal celebration",
                "lyrics": [
                  "Buzz buzz, goal, goal, goal,",
                  "Bumblefield’s on a roll,",
                  "From the hive to the net,",
                  "Best football you’ve seen yet!"
                ]
              },
              {
                "title": "Can’t Stop the Hive",
                "style": "intimidating opponents",
                "lyrics": [
                  "You can’t stop the hive,",
                  "We’re alive, we’re alive,",
                  "One sting, two sting, three sting, four,",
                  "Bumblefield’s gonna score once more!"
                ]
              },
              {
                "title": "From the Hive to the Pitch",
                "style": "matchday banter",
                "lyrics": [
                  "From the hive to the pitch,",
                  "We’ll make your defence twitch,",
                  "Pass and run, pass and run,",
                  "Bumblefield’s second to none!"
                ]
              },
              {
                "title": "Sweet as Honey",
                "style": "supporters’ pride",
                "lyrics": [
                  "Sweet as honey, sharp as a sting,",
                  "Bumblefield’s gonna win the thing,",
                  "Yellow and black, we’ve got your back,",
                  "Bumblefield attack, attack!"
                ]
              }
            ],
            supporter_quotes: [
              {
                "text": "Honeybell are sweet. We're the part of the bee that actually does something.",
                "author": "Rudi Halvard, the Buzzbox End"
              },
              {
                "text": "Half our team was told at sixteen it wasn't good enough. We swarm.",
                "author": "Katya Mirov, Second Chance Ultras"
              }
            ],
          },
          {
            name: "Ostravaj Sporting",
            nickname: "The Royals",
            six_letter_name: "OSTSPT",
            three_letter_name: "OSP",
            hashtag: "#OstravajS",
            founded: 1925,
            reputation: 1040,
            status: "Professional",
            competition_tier: "Velmoran National Liga",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Promote at least 3 academy players; push for playoffs",
              balance: 4800000,
              transfer_budget: 2200000,
              avg_match_ticket_price: 16,
              avg_season_ticket_price: 288,
              season_ticket_holders: 700,
              income: {
                kit_sponsor: 80000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 60000,
                other: 20000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 8800,
              min_attendance: 5500,
              max_attendance: 10000,
              training: 10,
              youth_coaching: 11,
              youth_facilities: 10,
              youth_recruitment: 11,
              youth_importance: 12,
              corporate_facilities: 8,
            },
            supporter_profile: {
              loyalty: 16,
              passion: 17,
              patience: 12,
              affluence: 11,
              temprament: 12,
              expectations: 11,
            },
            supporter_objectives: {
              "Play attacking football": 5,
              "Play entertaining football": 5,
              "Develop Players using club's youth system": 4,
            },
            colors: ["rgb(123,17,17)", "rgb(255,181,132)"],
            stadium: "Artisan Field",
            coord: [315, 250],
            club_history:`
                <h3>The Guilds of Ostravaj <span class="era-range">(before 1925)</span></h3>
                <p>Ostravaj was two towns in one. Uphill stood the estate of House Korona and the clan-lords' inheritance, with the club they had founded in 1900 and the manner they had kept. Downhill were the guilds: the coopers, cartwrights, saddlers and stone masons who did the actual work of the eastern valley, and who had been paying tolls to the Korona estate long before the Charter took the estate's powers away. The two halves of the town lived beside one another with great civility and no visible warmth.</p>
                <h3>The Civilian Answer <span class="era-range">(1925)</span></h3>
                <p><strong class="hl">Ostravaj Sporting</strong> was founded in <strong class="hl">1925</strong> as the civilian counterpart to the noble-founded Korona. While Korona catered to aristocracy, Sporting was built by the town's artisans, athletes and local guilds, a working answer to old money, in the same spirit that had split Braknov into guard and crown. The colors, deep red and a warm peach, came from the guild banners hung in the guildhall, and the badge was drawn by a saddler.</p>
                <p>Korona's supporters called them <em>The Royals</em>, as an insult: guildsmen with pretensions. The guildsmen adopted the name with relish. Royal blood, the terraces said, was still only blood, and theirs at least had earned its keep.</p>
                <h3>Artisan Field <span class="era-range">(1930s–1960s)</span></h3>
                <p><strong class="hl">Artisan Field</strong> was built on the guilds' old fairground, and financed by a levy that every guild paid on the first of every month. It is the only ground in the East that was paid for by subscription and has never been in debt. The club played expansive, attacking football, built from crossing and running, and sold its best players to the bigger clubs with the guilds' full and cheerful consent.</p>
                <h3>The Duel of Crowns <span class="era-range">(1970s–1990s)</span></h3>
                <p>The <strong class="hl">Duel of Crowns</strong> against Korona grew in these decades from a local grudge into a national fixture, the most class-conscious derby in the East. The town has never agreed which club represents it. Korona's supporters say that Ostravaj is a noble town with a trade attached. Sporting's supporters say it is a trading town with a noble attached, and both say so at the top of their voices, in front of the other.</p>
                <h3>Expansive and Ambitious <span class="era-range">(2000s–present)</span></h3>
                <p>Sporting now play modern, expansive football with an eye on reclaiming regional glory, and the club keeps a formal promise that few others do: the board's brief is to promote at least three academy players a season, and it has done so every year for two decades. Its slogan, <em>Courage over Crown</em>, is deliberately double-edged. It is a club that is still, defiantly, defined by who it isn't.</p>
            `,
            club_values: ["Flair. Pride. Ambition."],
            club_slogan: "Courage over Crown.",
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
              home: "assets/kits/ostspt/home.svg",
              home_back: "assets/kits/ostspt/home_back.svg",
              away: "assets/kits/ostspt/away.svg",
              away_back: "assets/kits/ostspt/away_back.svg",
            },
            rivals: [
              { club: "Ostravaj Korona", level: 80, reason: "Local" },
              { club: "Bumblefield FC", level: 60, reason: "Local" },
            ],
            derbies: [
              {
                name: "Duel of Crowns",
                team2: "Ostravaj Korona",
                history: "Ostravaj's civilian working answer to old money against the aristocratic original — a century-old argument over which club actually represents the town.",
              },
            ],
            affiliations: [
              { club: "Pebbleline Albion", type: "Feeder Team" },
              { club: "Bumblefield FC", type: "Good Relations" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Liv Ekeberg",
                  "role": "Chairperson"
                },
                {
                  "name": "Aksel Bru",
                  "role": "Manager"
                }
              ],
              "legends": [
                {
                  "name": "Osvald Trane",
                  "role": "Player"
                },
                {
                  "name": "Runa Gjerde",
                  "role": "Player"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "Guildhall End",
              "The Saddlers' Circle"
            ],
            traditions: [
              "The Guild Roll: before every home game the guild banners are carried around the pitch and dipped to the terrace.",
              "Monthly Levy Day: on the first of each month the club prints its accounts on the guildhall door."
            ],
            chants: [
              {
                "title": "Guild Hall Glory",
                "style": "stadium anthem",
                "lyrics": [
                  "Raise your voice, the hall is loud,",
                  "Sporting’s faithful, proud and proud,",
                  "From the river to the crown’s old gate,",
                  "We’ll write our name, it’s Sporting’s fate!"
                ]
              },
              {
                "title": "No Crown Needed",
                "style": "cheeky banter",
                "lyrics": [
                  "You can keep your golden crown,",
                  "We’ll still run you out of town,",
                  "Korona cries, the market sings,",
                  "Sporting rules without your kings!"
                ]
              }
             ],
            supporter_quotes: [
              {
                "text": "They call us the Royals to mock us. We took the name and kept the manners we like.",
                "author": "Osvald Trane, Guildhall End"
              },
              {
                "text": "A hundred years and we still haven't forgiven the hill. We're not planning to.",
                "author": "Liv Ekeberg, Artisan Field"
              }
            ],
          },
          {
            name: "Ostravaj Korona",
            nickname: "The Crowned Wolves",
            six_letter_name: "OSTKOR",
            three_letter_name: "OST / OKO",
            hashtag: "#OstravajK",
            founded: 1900,
            reputation: 2400,
            status: "Professional",
            competition_tier: "Velmoran Super League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Limited Liability Company",
              board_expectations: "Avoid relegation and maintain a strong physical playing style",
              balance: 7800000,
              transfer_budget: 3500000,
              avg_match_ticket_price: 28,
              avg_season_ticket_price: 504,
              season_ticket_holders: 1000,
              income: {
                kit_sponsor: 160000,
                government_grant: 90000,
                stadium_sponsor: 220000,
                club_membership: 100000,
                other: 30000,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 10500,
              min_attendance: 6000,
              max_attendance: 12500,
              training: 13,
              youth_coaching: 12,
              youth_facilities: 11,
              youth_recruitment: 10,
              youth_importance: 9,
              corporate_facilities: 14,
            },
            supporter_profile: {
              loyalty: 17,
              passion: 12,
              patience: 9,
              affluence: 18,
              temprament: 18,
              expectations: 14,
            },
            supporter_objectives: {
              "Play possession football": 4,
              "Make most of set-pieces": 3,
              "Develop Players using club's youth system": 3,
            },
            colors: ["rgb(230, 178, 76)", "rgb(21, 56, 98)"],
            stadium: "Korona Crown Arena",
            coord: [305, 260],
            club_history:`
                <h3>The Speaker's Crown <span class="era-range">(before 1900)</span></h3>
                <p>Every year at midsummer the clans met in the Hall at Valdren, and every year one man wore the bronze hawk-crown of the moot, the <em>korona</em>, and spoke for the assembly. For generations the office belonged to <strong class="hl">House Korona</strong>, whose lands lay in the east, where the hills come down to the forest. Its arms showed a wolf under the hawk-crown, and when the clans' age ended the wolf was the part that stayed.</p>
                <p>The Great Collapse took the office and the leases. The eastern estates, which the clans had let to ore companies, were left with nothing to let once the Line was gone, and the Charter of 1891 put what remained into the Crown Estate. House Korona kept its name, its old hall outside Ostravaj and a great deal of pride. It needed something to spend it on.</p>

                <h3>Velmora's Oldest Noble Son <span class="era-range">(1900–1939)</span></h3>
                <p><strong class="hl">Ostravaj Korona</strong> was founded in <strong class="hl">1900</strong>, nine years after the Collapse, by House Korona's eastern landowners and tutors. It was the first club in the country to be endorsed by a noble estate, and the clan-lord houses' first tentative attempt to buy back a little relevance through the new game. Old Velmar patronage was formalized in football just when the class it belonged to had lost every real power it ever held.</p>
                <p>The club set its stall out at once. It would play with technical precision, sportsmanship and defensive discipline, applaud the opposition's goals, and never argue with a referee. This was less a tactic than a code of conduct, drawn from the tutors' idea of how gentlemen should lose. In 1925 Ostravaj's working families answered with a club of their own, <strong class="hl">Ostravaj Sporting</strong>, and the <strong class="hl">Duel of Crowns</strong>, a century-old argument over which club actually represents the town, began.</p>

                <h3>Honor Through Precision <span class="era-range">(1940–1962)</span></h3>
                <p>The coast occupation missed Ostravaj, but it did not miss its principles. When the occupier's garrison on the coast sent a challenge to the inland clubs in 1942, Korona declined it in a letter the club still displays, two lines long and impeccably worded. The town has been quoting the second line ever since.</p>
                <p>After the war the Crown's decade arrived. Korona won the <strong class="hl">league in 1947</strong> and the <strong class="hl">Cup in 1949</strong>, and then, under the Compact, when every other serious club was leaning on the state, the noble amateurs quietly won on their endowment: the <strong class="hl">Cup in 1954</strong>, <strong class="hl">league titles in 1955 and 1956</strong> and the <strong class="hl">Cup in 1956</strong>, then the <strong class="hl">league in 1959</strong> and <strong class="hl">1962</strong>. <strong class="hl">Korona Crown Arena</strong> was never full for these triumphs, since the town was small, but it was always immaculate.</p>

                <h3>Descent, With Manners <span class="era-range">(1970s–1990)</span></h3>
                <p>The <strong class="hl">Cup in 1971</strong> was the last honor of the great era. By the early 1980s the club that had won everything by shape and control was relegated, and in 1984 it took the National Liga title and went back up, with a bow. Then, in <strong class="hl">1987</strong>, they won the <strong class="hl">Cup</strong>, in <strong class="hl">1988</strong> the <strong class="hl">league</strong>, and in <strong class="hl">1989</strong> the <strong class="hl">Cup</strong> again, as if the club had forgotten it was supposed to be in decline. It was the Crown's last dynasty, and it lasted three seasons.</p>

                <h3>Promoted Seven Times <span class="era-range">(1990s–2010s)</span></h3>
                <p>The Thaw did not favor gentlemen. <strong class="hl">House Korona Holdings</strong> continued to fund the club in part, an aristocratic endowment that outlasted the aristocracy's authority, but it could not compete with commercial money, and Korona became a lift. It won the National Liga in <strong class="hl">1995, 2001, 2005, 2010 and 2013</strong> (together with 1984, six promotions in all), and each time it went back up in the same tailored coat and each time it went back down without complaint. The terraces made their peace with it. A supporter's proverb says that a Korona fan knows how to lose, and that is not the same as being taught to.</p>

                <h3>Wolves of the Crown <span class="era-range">(2020s–)</span></h3>
                <p>Today <strong class="hl">The Crowned Wolves</strong> are back in the Super League, still partly funded by House Korona Holdings and still playing the game their tutors taught: technical, patient and scrupulously polite. Old money has outlasted the aristocracy it belonged to, and it has outlasted a fair few of the clubs that once mocked it. The Duel of Crowns against Ostravaj Sporting is still played every season for the honor of a town that has never agreed on which of them owns it.</p>
              `,
            club_values: ["“Honor through precision.”"],
            club_slogan:
              "“Wolves of Crown, Strike with Class – Ostravaj Stands First and Last!”",
            competition_history: {
              VSL: {
                winnerIn: [1947, 1955, 1956, 1959, 1962, 1988],
              },
              VNN: {
                winnerIn: [1984, 1995, 2001, 2005, 2010, 2013],
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
                winnerIn: [1949, 1954, 1956, 1971, 1987, 1989],
              },
              VHC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/ostkor/home.svg",
              home_back: "assets/kits/ostkor/home_back.svg",
              away: "assets/kits/ostkor/away.svg",
              away_back: "assets/kits/ostkor/away_back.svg",
            },
            rivals: [
              { club: "Ostravaj Sporting", level: 80, reason: "Local" },
              { club: "Braknov Royals", level: 65, reason: "Historic" },
            ],
            derbies: [
              {
                name: "Duel of Crowns",
                team2: "Ostravaj Sporting",
                history: "Ostravaj's civilian working answer to old money against the aristocratic original — a century-old argument over which club actually represents the town.",
              },
            ],
            affiliations: [
              { club: "Pebbleline Albion", type: "Feeder Team" },
              { club: "Honeybell AFC", type: "Good Relations" },
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
              "title": "Crown of the City",
              "lyrics": [
                "Raise the crown, hold it high,",
                "Korona shines in Ostravaj’s sky,",
                // "Gold and crimson, hearts aflame,",
                // "We rule this town in glory’s name.",
                // "",
                // "Korona! Korona!",
                "From palace halls to terrace roar!",
                "Korona! Korona!",
                "Forever we reign, forever more!"
              ]
              },
              {
                "title": "Korona ‘Til I Die",
                "lyrics": [
                  "Korona ‘til I die,",
                  "Korona ‘til I die,",
                  "I know I am, I’m sure I am,",
                  "Korona ‘til I die!"
                ]
              },
              {
                "title": "We Are the Crown",
                "lyrics": [
                  "We are the crown, the crimson and gold,",
                  "Our story’s proud, our history’s bold,",
                  "Wave those flags, the city’s ours,",
                  "Korona’s might, the finest powers!"
                ]
              },
              {
                "title": "Nobles on the March",
                "lyrics": [
                  "Nobles on the march,",
                  "Straight to victory,",
                  "Ostravaj’s finest,",
                  "Crown in history!"
                ]
              },
              {
                "title": "Sporting’s in Our Shadow",
                "lyrics": [
                  "Sporting’s in our shadow,",
                  "Always second best,",
                  "Green and gold’s for gardens,",
                  "Gold and crimson’s dressed!"
                ]
              },
              {
                "title": "Duel of Crowns",
                "lyrics": [
                  "Duel of Crowns, we’ll wear it proud,",
                  "Korona’s here, we’ll sing it loud,",
                  "Sporting dreams, they end today,",
                  "Korona rules in Ostravaj!"
                ]
              },
              {
                "title": "Korona Attack",
                "lyrics": [
                  "Korona attack, Korona attack,",
                  "We’ve got the crown, and we’re taking it back!",
                  "Gold and crimson, shining bright,",
                  "Korona’s kings will win tonight!"
                ]
              }
            ],
            supporter_quotes: [],
          },
        ],
      },
      Velmorsk: {
        climate: "Maritime, Windy, and Wet with Mild Winters",
        clubs: [
          {
            name: "Velmorsk City",
            nickname: "The Baylights",
            six_letter_name: "VELCIT",
            three_letter_name: "VMC",
            hashtag: "#VelmorskCity",
            founded: 1995,
            reputation: 1010,
            status: "Professional",
            competition_tier: "Velmoran National Liga",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Limited Liability Company",
              board_expectations: "Push for playoffs, maintain defensive record",
              balance: 4650000,
              transfer_budget: 2200000,
              avg_match_ticket_price: 20,
              avg_season_ticket_price: 360,
              season_ticket_holders: 700,
              income: {
                kit_sponsor: 90000,
                government_grant: 0,
                stadium_sponsor: 140000,
                club_membership: 70000,
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
              attendance: 8500,
              min_attendance: 5800,
              max_attendance: 9800,
              training: 12,
              youth_coaching: 12,
              youth_facilities: 11,
              youth_recruitment: 11,
              youth_importance: 10,
              corporate_facilities: 13,
            },
            supporter_profile: {
              loyalty: 13,
              passion: 14,
              patience: 11,
              affluence: 15,
              temprament: 14,
              expectations: 11,
            },
            supporter_objectives: {
              "Sign High Reputation Player": 4,
              "Play attacking football": 4,
              "Play possession football": 4,
              "Play entertaining football": 4,
              "Develop Players using club's youth system": 3,
            },
            colors: ["rgb(70,130,180) ", "rgb(255,255,255)"],
            stadium: "Baypoint Arena",
            coord: [250, 265],
            club_history:`
                <h3>The Marina Project <span class="era-range">(1993–1995)</span></h3>
                <p>By the early 1990s the Thaw had left Velmorsk's shipyards half empty and its waterfront full of empty sheds. The city council's answer was the marina development project, a scheme to replace the yards with a leisure harbor, a shopping quarter and, as a symbol of the future, a football club. The old Velmorsk clubs belonged to the arguments of a century earlier. The marina's backers wanted one that belonged to nobody.</p>
                <h3>Built for the Modern Coast <span class="era-range">(1995)</span></h3>
                <p>A commercial club spun out of the marina development in <strong class="hl">1995</strong>, <strong class="hl">Velmorsk City</strong> belongs to neither of Velmora's old founding stories. It is sleek, stylish and commercially ambitious by design, built for a coast that had moved past the arguments of the century before. The colors, steel blue and white, were chosen from a brand study. <strong class="hl">Baypoint Arena</strong> went up on the quayside in eighteen months, next to the marina, with the glass end of the stand facing the water.</p>
                <h3>Rising Stars <span class="era-range">(1998–2010s)</span></h3>
                <p>Known for technical football and smart marketing, the club rose steadily through the leagues, promoted out of the regional game in 2001, and built its identity on youth: a squad younger than any other in the National Liga, an academy tied to the technical school on the hill and a brand that gave away scarves at the marina. Velmorsk supporters of the older clubs sneered. Velmorsk's young people came in thousands.</p>
                <h3>The Bay Derby <span class="era-range">(2010s–present)</span></h3>
                <p>It took the Baylights twenty years to find a rival, and it was Velmorsk Mariners, the old salt of the waterfront, the club that had been building ships when City's owners were still building shopping centres. The <strong class="hl">Bay Derby</strong> is new money against old salt on the same waterfront, a fixture that both clubs claim to be too grown-up for and neither misses.</p>
                <h3>Thirty Years of Ambition <span class="era-range">(2026)</span></h3>
                <p>Three decades on from the marina project that created it, Velmorsk City remains the coast's most self-consciously modern club, technically sharp and commercially savvy, still the rising star it was billed as in 1995, and finally starting to look like it might actually arrive. The board's brief is to push for the playoffs and maintain a solid defensive record. Its slogan, <em>Bright lights, big dreams</em>, has stopped sounding like an advertisement.</p>
            `,
            club_values: ["Modernity. Style. Intelligence."],
            club_slogan: "Bright lights, big dreams.",
            competition_history: {
              VSL: {
                winnerIn: [],
              },
              VNN: {
                winnerIn: [],
              },
              VERL: {
                winnerIn: [2001],
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
              home: "assets/kits/velcit/home.svg",
              home_back: "assets/kits/velcit/home_back.svg",
              away: "assets/kits/velcit/away.svg",
              away_back: "assets/kits/velcit/away_back.svg",
            },
            rivals: [
              {
                "club": "Velmorsk Mariners",
                "level": 65,
                "reason": "Local"
              }
            ],
            derbies: [
              {
                "name": "The Bay Derby",
                "team2": "Velmorsk Mariners",
                "history": "New money against old salt on the same waterfront."
              }
            ],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Bjorn Faulk",
                  "role": "Chairperson"
                },
                {
                  "name": "Maren Holt",
                  "role": "Manager"
                }
              ],
              "legends": [
                {
                  "name": "Ylva Sund",
                  "role": "Player"
                },
                {
                  "name": "Kasper Roe",
                  "role": "Player"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Baylight Crew",
              "Marina Terrace"
            ],
            traditions: [
              "The Lights Up: the stadium's glass end is lit blue for the last ten minutes of every home win.",
              "The Marina Salute: players walk to the quayside after each home game and wave to the boats."
            ],
            chants: [
              {
              "title": "Velmorsk Forever",
              "lyrics": [
                "By the river, under steel-grey skies,",
                "Velmorsk rises, proud and wise,",
                // "From cobbled streets to factory light,",
                // "We’ll wear our colours in the fight.",
                // "",
                "Velmorsk forever, our hearts won’t sway,",
                "City’s ours, come what may,",
                "Velmorsk forever, stand and sing,",
                "City’s pride in everything!"
              ]
            },    
            {
                "title": "City Till We Die",
                "lyrics": [
                  "City till we die,",
                  "City till we die,",
                  "We know we are, we’re sure we are,",
                  "City till we die!"
                ]
              },
              {
                "title": "Blue and Steel",
                "lyrics": [
                  "Blue and steel, we fight, we feel,",
                  "Velmorsk City’s pride is real,",
                  "Marching forward, never still,",
                  "City boys with iron will!"
                ]
              },
              {
                "title": "Who’s the Pride of Velmorsk?",
                "lyrics": [
                  "Who’s the pride of Velmorsk?",
                  "C-I-T-Y!",
                  "Who’s the team you can’t ignore?",
                  "C-I-T-Y!",
                  "We’re the blues, we’re marching on,",
                  "Velmorsk City, number one!"
                ]
              },
              {
                "title": "You’ll Never Take Our City",
                "lyrics": [
                  "You’ll never take our city,",
                  "Our walls are built too high,",
                  "Our roar will shake the terraces,",
                  "Our colours touch the sky!"
                ]
              },
              {
                "title": "Velmorsk On the Rise",
                "lyrics": [
                  "Velmorsk on the rise,",
                  "We’ll take them by surprise,",
                  "From the docks to the square,",
                  "City’s name everywhere!"
                ]
              },
              {
                "title": "Mind the River",
                "lyrics": [
                  "Mind the river, mind the tide,",
                  "City’s coming from the side,",
                  "Velmorsk blues, we’ll sweep the land,",
                  "We’ve got victory in our hand!"
                ]
              }
            ],
            supporter_quotes: [
              {
                "text": "The old clubs are about who your grandfather was. Here it's about who you're going to be.",
                "author": "Ylva Sund, Marina Terrace"
              },
              {
                "text": "We had nothing to be loyal to, so we chose loyalty.",
                "author": "Bjorn Faulk, the Baylight Crew"
              }
            ],
          },
          {
            name: "Velmorsk Mariners",
            nickname: "The Baymen",
            six_letter_name: "VELMAR",
            three_letter_name: "VMO / VMN",
            hashtag: "#VelmorskM",
            founded: 1910,
            reputation: 2730,
            status: "Professional",
            competition_tier: "Velmoran Super League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Limited Liability Company",
              board_expectations: "Develop local prospects and offer stepping stone to bigger clubs",
              balance: 7500000,
              transfer_budget: 3000000,
              avg_match_ticket_price: 22,
              avg_season_ticket_price: 396,
              season_ticket_holders: 950,
              income: {
                kit_sponsor: 140000,
                government_grant: 0,
                stadium_sponsor: 200000,
                club_membership: 90000,
                other: 30000,
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
              min_attendance: 5000,
              max_attendance: 9500,
              training: 9,
              youth_coaching: 9,
              youth_facilities: 8,
              youth_recruitment: 8,
              youth_importance: 9,
              corporate_facilities: 7,
            },
            supporter_profile: {
              loyalty: 20,
              passion: 18,
              patience: 17,
              affluence: 8,
              temprament: 12,
              expectations: 9,
            },
            supporter_objectives: {
              "Sign Players of Nationality": 3,
              "Play direct football": 4,
              "Make most of set-pieces": 5,
              "Play counter-attacking football": 4,
            },
            colors: ["rgb(0, 51, 102)", "rgb(255, 255, 255)"],
            stadium: "Baylight Stadium",
            coord: [290, 290],
            club_history:`
                <h3>The Shipyards <span class="era-range">(1860s–1909)</span></h3>
                <p>Velmorsk's yards were built by British engineers and manned by Kovarai riveters, a partnership that built most of the ships in the country, and its naval engineers were the highest-paid tradesmen on the coast. The town was a mix of Kovarai and Velmar families, fishermen's sons who had learned to weld and welders' sons who had learned to sail, and its unions, which had been quiet before, ran the harbor after the Charter of 1891.</p>
                <h3>The Old Salt of Velmoran Football <span class="era-range">(1910)</span></h3>
                <p>Velmorsk Mariners were founded in <strong class="hl">1910</strong> by maritime workers and naval engineers, old salt, born on shipyards and raised on dock grit, forever shaped by the cold eastern seas. The club has always stood for survival, resilience and community strength, values that hardened when the men who founded it remembered the Great Collapse reaching the coast nineteen years earlier. <strong class="hl">Baylight Stadium</strong> was built beside the harbor light, and its terrace is still called the Slipway.</p>
                <h3>The Yards Under the Occupation <span class="era-range">(1940–1945)</span></h3>
                <p>In the spring of 1940 the occupier seized the ports and the Velmorsk yards, and for five years the Mariners played on in a town where half the shipwrights worked under guard. It is the club's most difficult memory, and it does not discuss it much. The season tickets of those years were stamped with a small anchor, so that everyone in the ground could tell who was there.</p>
                <h3>VelPort and Conservative Years <span class="era-range">(1950s–1990s)</span></h3>
                <p>After the war VelPort Maritime, the private shipping firm the Compact never quite nationalized, took over the club, and its conservative fiscal policy defined the Baymen for half a century: stability over ambition, the books balanced, the ground maintained, and nothing spent that could not be earned back. It was not glamorous, and it was never bankrupt, which in the East of the 1990s made it nearly unique.</p>
                <h3>The Double <span class="era-range">(2001–2002)</span></h3>
                <p>The conservative approach paid off at last. The Baymen won the <strong class="hl">Velmoran Cup in 2001</strong> and again in <strong class="hl">2002</strong>, and the <strong class="hl">Super League</strong> that same year, the only time in the club's history it has held both at once.</p>
                <h3>Still Holding the Line <span class="era-range">(2007–present)</span></h3>
                <p>A second <strong class="hl">Super League title in 2007</strong> proved the conservative approach could win outright as well as endure, though the club has never once let a trophy change how it talks about itself. The <strong class="hl">Drydock Derby</strong> against Anchor FC and the <strong class="hl">Port Rivalry</strong> against Dockland Dandies, two clubs of the southern harbors, keep the Baymen honest, and the Bay Derby against Velmorsk City keeps them young. They are VelPort Maritime's steady, unglamorous flagship, and would rather still be here in another hundred years than win something flashy this one.</p>
            `,
            club_values: ["“Grit, tide, and unity.”"],
            club_slogan:
              "“Anchor Down, Rise with Tide – Velmorsk Fights from the Waterside!”",
            competition_history: {
              VSL: {
                winnerIn: [2002, 2007],
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
                winnerIn: [2001, 2002],
              },
              VHC: {
                winnerIn: [],
              },
            },
            kits: {
              home: "assets/kits/velmar/home.svg",
              home_back: "assets/kits/velmar/home_back.svg",
              away: "assets/kits/velmar/away.svg",
              away_back: "assets/kits/velmar/away_back.svg",
            },
            rivals: [
              {
                "club": "Anchor FC",
                "level": 75,
                "reason": "Local"
              },
              {
                "club": "Dockland Dandies",
                "level": 65,
                "reason": "Local"
              },
              {
                "club": "Karnov Ironfields",
                "level": 55,
                "reason": "Competitive"
              },
              {
                "club": "Velmorsk City",
                "level": 60,
                "reason": "Local"
              }
            ],
            derbies: [
              {
                "name": "The Drydock Derby",
                "team2": "Anchor FC",
                "history": "Velmorsk's shipyard club against Stravna's naval engineers: two ports, one argument about who actually built the fleet."
              },
              {
                "name": "Port Rivalry",
                "team2": "Dockland Dandies",
                "history": "Velmorsk Mariners against Dockland Dandies: dockyard grit versus dockland flair, a rivalry about style as much as supremacy."
              },
              {
                "name": "The Bay Derby",
                "team2": "Velmorsk City",
                "history": "New money against old salt on the same waterfront."
              }
            ],
            affiliations: [
              { club: "Harborlight Athletic", type: "Feeder Team" },
              { club: "Silverboot Rangers", type: "Good Relations" },
            ],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Sigrun Aas",
                  "role": "Chairperson (VelPort Maritime)"
                },
                {
                  "name": "Erik Mund",
                  "role": "Manager"
                }
              ],
              "legends": [
                {
                  "name": "Halvor Skarn",
                  "role": "Player"
                },
                {
                  "name": "Ragna Haugen",
                  "role": "Manager"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Slipway",
              "Baylight Terrace"
            ],
            traditions: [
              "The Anchor Stamp: season tickets are stamped with a small anchor, in memory of the occupation years.",
              "The Harbor Bell: a bell from the old shipyard is rung before every home game."
            ],
            chants: [
              {    
                "title": "Sail On, Mariners",
                  "lyrics": [
                    "From the harbour to the deep blue sea,",
                    "Velmorsk sails to victory,",
                    "Through wind and wave, we’ll never fall,",
                    "The Mariners, the best of all!",
                    // "",
                    // "Sail on, lads, sail on true,",
                    // "Our ship flies high in white and blue,",
                    // "From dock to deck we’ll never yield,",
                    // "Velmorsk pride on every field!"
                  ]
              },
              {
                "title": "We’ll Send You Swimming",
                "lyrics": [
                  "Oh Velmorsk’s here to win, my friend,",
                  "Your little run is at its end,",
                  "Back to shore you’ll go, all wet,",
                  "We’re the best you’ve ever met!"
                ]
              },
              {
                "title": "Hoist the Sails",
                "lyrics": [
                  "Hoist the sails, boys, here we go,",
                  "Velmorsk charging, full wind blow,",
                  "In the net, that ball will sleep,",
                  "Send their keeper in the deep!"
                ]
              },
              {
                "title": "Dockyard Party",
                "lyrics": [
                  "From the docks to the stands,",
                  "We’ve got goals in our hands,",
                  "Velmorsk’s making waves today,",
                  "Send them sinking all the way!"
                ]
              },
              {
                "title": "Mariners in the Lead",
                "lyrics": [
                  "Mariners in the lead, my lad,",
                  "We’ve got the best this town has had,",
                  "One more goal, make it four,",
                  "Velmorsk’s knocking on your door!"
                ]
              },
              {
                "title": "The Harbour’s Ours",
                "lyrics": [
                  "The harbour’s ours, the sea’s ours too,",
                  "Velmorsk white, Velmorsk blue,",
                  "No landlub club can match our crew,",
                  "We’ll sail right over you!"
                ]
              },
              {
                "title": "Row the Ball",
                "lyrics": [
                  "Row, row, row the ball,",
                  "Right into their net,",
                  "Velmorsk Mariners, standing tall,",
                  "The best you’ve ever met!"
                ]
              }
            ],
            supporter_quotes: [
              {
                "text": "We'd rather be here in a hundred years than win something flashy in one.",
                "author": "Halvor Skarn, the Slipway"
              },
              {
                "text": "Everybody remembers the year we shared it. We remember the fog, and that we were level.",
                "author": "Sigrun Aas, Baylight Terrace"
              }
            ],
          },
          {
            name: "Sunhollow FC",
            nickname: "The Beams",
            six_letter_name: "SUNHOL",
            three_letter_name: "SHF / SUF",
            hashtag: "#SunhollowShine",
            founded: 1955,
            reputation: 700,
            status: "Semi-Professional",
            competition_tier: "East Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play principled, adaptive football; support local talent; operate sustainably and cooperatively.",
              balance: 540000,
              transfer_budget: 500000,
              avg_match_ticket_price: 10,
              avg_season_ticket_price: 180,
              season_ticket_holders: 140,
              income: {
                kit_sponsor: 15000,
                government_grant: 9000,
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
              max_attendance: 4800,
              training: 6,
              youth_coaching: 7,
              youth_facilities: 6,
              youth_recruitment: 7,
              youth_importance: 8,
              corporate_facilities: 4,
            },
            supporter_profile: {
              loyalty: 16,
              passion: 17,
              patience: 15,
              affluence: 8,
              temprament: 10,
              expectations: 9,
            },
            supporter_objectives: {
              "Play attacking football": 5,
              "Play direct football": 5,
              "Play counter-attacking football": 4,
              "Develop Players using club's youth system": 2,
            },
            colors: ["rgb(251, 222, 8)", "rgb(0,106,54)"],
            stadium: "Hollowlight Arena",
            coord: [260, 300],
            club_history:`
                <h3>The Grey Coast <span class="era-range">(before 1955)</span></h3>
                <p>Velmorsk has a great deal of weather and very little sun, and the district's people had long since stopped remarking on it. The town's gardeners grew what could be grown under glass, and its engineers, who knew a good deal about heat, began in the early 1950s to think about how to catch more of what little there was. Somebody had to be the first to care about the sun. It was a solar engineer and his neighbor the gardener, over a fence.</p>
                <h3>Solar Pioneers and Gardeners <span class="era-range">(1955)</span></h3>
                <p><strong class="hl">Sunhollow FC</strong> was established in <strong class="hl">1955</strong> by solar energy pioneers and local gardeners, and has always emphasized eco-consciousness and joyful football over grim results. The founders were a Velmar club content to grow slowly, like the gardens they tended. The colors, yellow and green, were chosen for sun and leaf. <strong class="hl">Hollowlight Arena</strong> was built in a hollow that caught the last light of the afternoon, its stand angled so that the terrace faced the low sun.</p>
                <h3>Where the Sun Never Sets <span class="era-range">(1960s–1990s)</span></h3>
                <p>At sixty-five degrees north the sun barely dips in June, and the club took the fact for a gift. The <strong class="hl">Midnight Match</strong>, a fixture played at eleven at night on the longest evening of the year, in daylight, became its most cherished tradition, and its slogan, <em>Where the sun never sets</em>, less a boast about form than a description of the matchday mood. The terrace sang the club's unofficial anthem, <em>Your Town's So Grey</em>, with affection.</p>
                <h3>Cooperative Roots <span class="era-range">(2000s–2010s)</span></h3>
                <p>The club found a new relevance as an eco-conscious brand: its floodlights ran on solar cells, its groundsmen composted the turf and its board, a cooperative of gardeners, engineers and teachers, ran a principled, adaptive football side that supported local talent and operated sustainably. It did not win a great deal.</p>
                <h3>Growing Slowly <span class="era-range">(2026)</span></h3>
                <p>Sunhollow's eco-conscious, joyful approach to football has aged well into a genuinely modern identity. A club that never chased results has found, seven decades later, that patience and good matchday mood were never actually opposed to winning. Its rivalry with the Mariners, the town's big club, is affectionate on one side and faintly weary on the other.</p>
            `,
            club_values: ["Shine together, Grow local, Never dim"],
            club_slogan: "Where the sun never sets!",
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
              home: "assets/kits/sunhol/home.svg",
              home_back: "assets/kits/sunhol/home_back.svg",
              away: "assets/kits/sunhol/away.svg",
              away_back: "assets/kits/sunhol/away_back.svg",
            },
            rivals: [
              { club: "Velmorsk Mariners", level: 55, reason: "Local" },
            ],
            derbies: [],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Anders Roth",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Freya Lund",
                  "role": "Player"
                },
                {
                  "name": "Torsten Vigg",
                  "role": "Founding Member"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "Solar Terrace",
              "The Greenhouse Choir"
            ],
            traditions: [
              "The Midnight Match: an annual fixture played at eleven at night on Midsummer's Eve, in daylight.",
              "Sun Salute: supporters hold up small mirrors to the sun before every home kick-off."
            ],
            chants :[
              {
                "title": "Your Town’s So Grey",
                "lyrics": [
                  "Your town’s so grey,",
                  "It’s dull all day,",
                  "Come to the Hollow,",
                  "And watch how we play!"
                ]
              },
            ],
            supporter_quotes: [
              {
                "text": "Our slogan is a lie for eight months a year and the truest thing in Velmorsk in June.",
                "author": "Freya Lund, Solar Terrace"
              },
              {
                "text": "At the Midnight Match you forget what day it is. That's the point.",
                "author": "Anders Roth, Hollowlight Arena"
              }
            ],
          },
          {
            name: "Thunderspire Rovers",
            nickname: "The Stormcallers",
            six_letter_name: "THUNRO",
            three_letter_name: "TSR / TPR",
            hashtag: "#SpireStorm",
            founded: 1933,
            reputation: 740,
            status: "Semi-Professional",
            competition_tier: "East Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play with grit and pride; Maintain strong work ethic; Compete fiercely with rivals",
              balance: 645000,
              transfer_budget: 680000,
              avg_match_ticket_price: 13,
              avg_season_ticket_price: 234,
              season_ticket_holders: 185,
              income: {
                kit_sponsor: 21000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 39000,
                other: 13500,
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
              min_attendance: 4700,
              max_attendance: 9200,
              training: 7,
              youth_coaching: 6,
              youth_facilities: 5,
              youth_recruitment: 6,
              youth_importance: 7,
              corporate_facilities: 4,
            },
            supporter_profile: {
              loyalty: 19,
              passion: 20,
              patience: 14,
              affluence: 6,
              temprament: 6,
              expectations: 9,
            },
            supporter_objectives: {
              "Play defensive football": 4,
              "Play direct football": 5,
              "Play counter-attacking football": 4,
              "Develop Players using club's youth system": 2,
            },
            colors: ["rgb(17,20,29)", "rgb(156,161,165)"],
            stadium: "Stormhead Hill",
            coord: [270, 340],
            club_history:`
                <h3>The Misty Peaks <span class="era-range">(before 1933)</span></h3>
                <p>Above Velmorsk the land rises fast into a chain of granite peaks that hold the clouds against them, and it thunders there more often than anywhere else on the coast. The shepherds and quarrymen who lived under them kept their own calendar, tied to the weather rather than the almanac, and the town's sailors, who read the same sky from the other side, regarded them with respect.</p>
                <h3>Down From the Misty Peaks <span class="era-range">(1933)</span></h3>
                <p>Formed in <strong class="hl">1933</strong> in the misty peaks above Velmorsk, <strong class="hl">Thunderspire Rovers</strong> built their identity on aggressive vertical play and intense matchdays under dark clouds: highland Velmar temperament, transplanted to a coastal city and made harder by the climb. The colors, black and stormy grey, were chosen for the sky. <strong class="hl">Stormhead Hill</strong> was the first ground to be cut into the hillside, and its terraces are still the steepest in the East.</p>
                <h3>Under Dark Clouds <span class="era-range">(1940s–1970s)</span></h3>
                <p>The occupation left the peaks alone, and the club played on through the war in front of a few hundred shepherds and a great many sheep. In the decades after it developed a reputation for the weather on its ground, hail in September, sleet in October, and a wind that carried the ball into the stand. Visiting sides began to talk about the weather almost as much as the football.</p>
                <h3>The Stormcallers <span class="era-range">(1980s–2010s)</span></h3>
                <p>The supporters gave the club its nickname and, in the 1980s, its ritual: a bass drum that beats thunder before every home kick-off, tuned to the noise of the peaks. <em>Bring the thunder!</em> is the club's slogan and the terrace's instruction. The board's expectations, grit and pride, a strong work ethic, and fierce competition with its rivals, have never needed restating.</p>
                <h3>The Weather Hasn't Changed <span class="era-range">(2026)</span></h3>
                <p>Stormhead Hill remains one of the most atmospheric grounds on the coast and one of Velmora's most dreaded away trips, and Thunderspire's aggressive, vertical style has barely softened in nearly a century. Visiting sides still talk about the climb and the clouds, and the Stormcallers wouldn't have it any other way. The <strong class="hl">High Road Derby</strong> against Redbraid Harriers, on the neighboring hill, is the fixture that decides whose slope is steeper.</p>
            `,
            club_values: ["Strike fast, Storm the line, Survive the elements"],
            club_slogan: "Bring the thunder!",
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
              home: "assets/kits/thunro/home.svg",
              home_back: "assets/kits/thunro/home_back.svg",
              away: "assets/kits/thunro/away.svg",
              away_back: "assets/kits/thunro/away_back.svg",
            },
            rivals: [
              {
                "club": "Redbraid Harriers",
                "level": 60,
                "reason": "Local"
              }
            ],
            derbies: [
              {
                "name": "The High Road Derby",
                "team2": "Redbraid Harriers",
                "history": "Two highland clubs above Velmorsk arguing about whose hill is steeper."
              }
            ],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Hildur Amund",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Sven Falk",
                  "role": "Player"
                },
                {
                  "name": "Ingolf Rask",
                  "role": "Manager"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Bass Drum",
              "Stormcallers' Choir"
            ],
            traditions: [
              "The Thunder Drum: a bass drum is struck once for every year since 1933 before each home kick-off.",
              "Wet Weather Rule: the ground has never once been called off for the weather, and the club is quite proud of it."
            ],
            chants: [
              {
                "title": "You’ll Get Soaked",
                "lyrics": [
                  "If you come to play our side,",
                  "Better bring a boat to ride,",
                  "’Cause the storm is here to stay,",
                  "And we’ll wash your dreams away!"
                ]
              },
            ],
            supporter_quotes: [
              {
                "text": "Visitors bring coats. The ones who bring two coats win.",
                "author": "Sven Falk, the Bass Drum"
              },
              {
                "text": "You don't see the ground until you're on it. By then it's too late.",
                "author": "Hildur Amund, Stormhead Hill"
              }
            ],
          },
          {
            name: "Redbraid Harriers",
            nickname: "The Harriers",
            six_letter_name: "REDBRA",
            three_letter_name: "RBH / RDH",
            hashtag: "#RedbraidRun",
            founded: 1948,
            reputation: 715,
            status: "Semi-Professional",
            competition_tier: "East Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play with tactical flexibility; Surprise bigger teams; Develop young forwards",
              balance: 570000,
              transfer_budget: 560000,
              avg_match_ticket_price: 11,
              avg_season_ticket_price: 198,
              season_ticket_holders: 150,
              income: {
                kit_sponsor: 16500,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 33000,
                other: 10500,
              },
              debts: {
                bank: 0,
                chairperson: 0,
                supporters_trust: 0,
                misc: 0,
              },
            },
            stadium_details: {
              attendance: 3900,
              min_attendance: 1900,
              max_attendance: 4700,
              training: 6,
              youth_coaching: 7,
              youth_facilities: 6,
              youth_recruitment: 7,
              youth_importance: 9,
              corporate_facilities: 4,
            },
            supporter_profile: {
              loyalty: 17,
              passion: 18,
              patience: 16,
              affluence: 8,
              temprament: 9,
              expectations: 9,
            },
            supporter_objectives: {
              "Play attacking football": 4,
              "Play direct football": 5,
              "Play high-tempo pressing football": 5,
              "Develop Players using club's youth system": 3,
            },
            colors: ["rgb(187, 33, 81)", "rgb(34, 30, 31)"],
            stadium: "Falcon's Crest",
            coord: [280, 315],
            club_history:`
                <h3>The Fell Runners <span class="era-range">(before 1948)</span></h3>
                <p>The hills above Velmorsk have been run over by fell runners since the shipyards began, and the local cross-country club held its annual race up the highest of them every autumn. The winner was awarded a length of red braid to wear on the shoulder for a year, and the red braid grew, over half a century, into the district's most coveted decoration.</p>
                <h3>From Cross-Country to the Crest <span class="era-range">(1948)</span></h3>
                <p>Redbraid Harriers were founded in <strong class="hl">1948</strong> by cross-country runners turned footballers, and built a club around the one thing their founders already knew how to do: outrun everybody else. Known for endurance, flank speed and blood-red mountain kits, they are a club defined by stamina before tactics. The crimson and black came from the braid and the mountain rock.</p>
                <h3>The Red Road <span class="era-range">(1950s–1980s)</span></h3>
                <p><strong class="hl">Falcon's Crest</strong> was cut into the fell at the top of the last long climb, and sits high enough that opposition sides arrive already tired from the ascent. The Harriers considered that a home advantage worth cultivating, and the club's training methods, hill repeats, fell races and a weekly climb of the peak, made them, for thirty years, the fittest side in the East.</p>
                <h3>Outpacing Everyone <span class="era-range">(1990s–2010s)</span></h3>
                <p>Under a run of coaches who believed in tactical flexibility, the Harriers learned to surprise bigger teams with speed on the flanks and late pressure from young forwards, and became a club that other sides did not enjoy playing in the last twenty minutes. Their slogan, <em>Run the red road!</em>, is on the wall of every changing room in the East.</p>
                <h3>Still Outrunning Everyone <span class="era-range">(2026)</span></h3>
                <p>Falcon's Crest still sits high enough to tire out visiting sides before kickoff, and the Harriers' stamina-first identity, nearly eighty years old now, remains the club's single clearest advantage, a founding idea that never needed updating. The club still holds the fell race every autumn, still awards the red braid, and still has a place for the winner in the first team squad.</p>
            `,
            club_values: ["Endure more, Outpace all, Earn the climb"],
            club_slogan: "Run the red road!",
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
              home: "assets/kits/redbra/home.svg",
              home_back: "assets/kits/redbra/home_back.svg",
              away: "assets/kits/redbra/away.svg",
              away_back: "assets/kits/redbra/away_back.svg",
            },
            rivals: [
              {
                "club": "Velmorsk Mariners",
                "level": 55,
                "reason": "Local"
              },
              {
                "club": "Thunderspire Rovers",
                "level": 60,
                "reason": "Local"
              }
            ],
            derbies: [
              {
                "name": "The High Road Derby",
                "team2": "Thunderspire Rovers",
                "history": "Two highland clubs above Velmorsk arguing about whose hill is steeper."
              }
            ],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Lars Ottesen",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Mette Brun",
                  "role": "Player"
                },
                {
                  "name": "Sigmund Hald",
                  "role": "Founding Member"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Red Braid",
              "Fell Runners' Circle"
            ],
            traditions: [
              "The Red Braid Race: the club's fell race is held every autumn, and the winner wears the red braid on the first-team shoulder for a year.",
              "The Climb: supporters walk the last mile up to the ground together on matchday."
            ],
            chants : [
              {
                  "title": "Wings of Redbraid",
                  "lyrics": [
                    // "On the wings of Redbraid, we rise,",
                    // "Under proud and fearless skies,",
                    // "Through the noise and through the fight,",
                    "Harriers shine in red so bright,",
                    "Every heart beats loud and true,",
                    "Every voice calls out for you,",
                    "Redbraid Harriers, bold and free,",
                    "Forever flying victory!"
                  ]
                }
            ],
            supporter_quotes: [
              {
                "text": "Every team in the East has been tired by the time it reaches our tunnel. We just wait.",
                "author": "Mette Brun, the Red Braid"
              },
              {
                "text": "The braid is wool and a little itchy. Nobody has ever taken theirs off.",
                "author": "Lars Ottesen, Falcon's Crest"
              }
            ],
          },
          {
            name: "Waveroot Wanderers",
            nickname: "The Creekmen",
            six_letter_name: "WAVWAN",
            three_letter_name: "WWR / WAW",
            hashtag: "#WaverootFC",
            founded: 1961,
            reputation: 590,
            status: "Semi-Professional",
            competition_tier: "South Velmoran Regional League",
            finances: {
              chairperson_title: "Chairperson",
              ownership_type: "Member-owned (No Elections / Ltd)",
              board_expectations: "Play methodical, technical football; preserve noble heritage; prioritize composed, smart players.",
              balance: 300000,
              transfer_budget: 300000,
              avg_match_ticket_price: 6,
              avg_season_ticket_price: 108,
              season_ticket_holders: 70,
              income: {
                kit_sponsor: 5000,
                government_grant: 0,
                stadium_sponsor: 0,
                club_membership: 18000,
                other: 6000,
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
              min_attendance: 1500,
              max_attendance: 4000,
              training: 4,
              youth_coaching: 5,
              youth_facilities: 4,
              youth_recruitment: 5,
              youth_importance: 7,
              corporate_facilities: 3,
            },
            supporter_profile: {
              loyalty: 18,
              passion: 17,
              patience: 18,
              affluence: 6,
              temprament: 11,
              expectations: 6,
            },
            supporter_objectives: {
              "Play attacking football": 4,
              "Play entertaining football": 3,
              "Play counter-attacking football": 4,
              "Develop Players using club's youth system": 3,
            },
            colors: ["rgb(60,90,60) ", "rgb(109,165,190)"],
            stadium: "Waveroot Bankside Park",
            coord: [240, 335],
            club_history:`
                <h3>The Marshes <span class="era-range">(before 1961)</span></h3>
                <p>South of Velmorsk the ground goes soft. The creeks that drain the eastern hills run down through wetland toward the Lakes, and the people of the marsh edge lived by fishing, reeds and eel traps, on ground that was half land and half something else. They were old Velmar wetland stock, and they liked being forgotten.</p>
                <h3>Trailblazers of the Marsh <span class="era-range">(1961)</span></h3>
                <p>Waveroot Wanderers were founded in <strong class="hl">1961</strong> by forest trailblazers and creek fishermen on the southern edge of the Velmorsk district, and played football as chaotic and opportunistic as the fluid home pitch by the marshes that shaped it. Their colors, marsh green and creek blue, were chosen because they did not show the mud. The Wanderers played on a different pitch every season for a decade, until the reed cutters lent them a field.</p>
                <h3>The Third Tier <span class="era-range">(1970s–1990s)</span></h3>
                <p>They have never played above the third tier, and do not seem especially bothered by it. They play in the <strong class="hl">South Velmoran Regional League</strong>, by the same accident of railway geography that keeps Meadowbell there: the regional leagues are named for the four lines out of Valdren, and the marsh halt sits on a branch of the Southern Line. Respected for unpredictability and close community ties, the Creekmen took to the league's long journeys with the patience of anglers.</p>
                <h3>Bankside <span class="era-range">(2000s–2010s)</span></h3>
                <p><strong class="hl">Waveroot Bankside Park</strong> floods every spring, and the club has developed an elaborate set of traditions around the fact. The first home match after the thaw is played in waders. The referee carries a spare whistle in case of water. The board's expectations, methodical, technical football and composed, smart players, do not include a promotion push, and have never been tested.</p>
                <h3>Still by the Marshes <span class="era-range">(2026)</span></h3>
                <p>Waveroot have still never played above the third tier, and still don't seem to mind. Six decades on, the Wanderers remain exactly what they were built to be: unpredictable, community-rooted, and entirely at peace with staying that way. Bankside Park is proof that not every club needs a promotion push to matter to the people who show up, and the water, once it recedes, leaves the best turf in the league.</p>
            `,
            club_values: ["Improvisation, Adventure, Local Youth"],
            club_slogan: '"Flow Free. Strike True."',
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
              home: "assets/kits/wavwan/home.svg",
              home_back: "assets/kits/wavwan/home_back.svg",
              away: "assets/kits/wavwan/away.svg",
              away_back: "assets/kits/wavwan/away_back.svg",
            },
            rivals: [
              {
                "club": "Meadowbell Athletic",
                "level": 50,
                "reason": "Local"
              }
            ],
            derbies: [],
            affiliations: [],
            players_alumni: {
              "favorites": [],
              "icons": [
                {
                  "name": "Kari Bakke",
                  "role": "Chairperson"
                }
              ],
              "legends": [
                {
                  "name": "Torbjorn Rye",
                  "role": "Player"
                },
                {
                  "name": "Solvi Dahl",
                  "role": "Founding Member"
                }
              ]
            },
            schedule: [],
            fan_clubs: [
              "The Reed Cutters",
              "Creek Choir"
            ],
            traditions: [
              "Waders: the first home match of the season after the thaw is played by both sides in waders.",
              "The Eel Trap: a small eel trap hangs above the tunnel and is touched by every player on the way out."
            ],
            chants: [
              {
                "title": "Sons and Daughters of the Tide",
                "lyrics": [
                  "We are the Creekmen, strong and free,",
                  "Bound by land and bound by sea,",
                  "Through the storm and through the rain,",
                  "We’ll rise and fight again,",
                  "Waveroot Wanderers, side by side,",
                  "Forever sons and daughters of the tide!"
                ]
              }
            ],
            supporter_quotes: [
              {
                "text": "We fish in the morning and play in the afternoon. Some of us do both at once.",
                "author": "Torbjorn Rye, the Reed Cutters"
              },
              {
                "text": "Nobody ever won anything on a marsh. Nobody ever lost anything either.",
                "author": "Kari Bakke, Bankside Park"
              }
            ],
          },
        ],
      },
    },
  };