// Story tags: which of the founding stories a club belongs to, and which chapter of about.html it sits in.
// people: 'velmar' | 'kovarai' | 'both' | 'neither' | 'unknown'
// chapter: an id from CHAPTERS (the matching section of about.html)
// Clubs without a tag simply show no story card. Add a line here as each club's lore is written.

export const PEOPLES = {
  velmar:  { label: 'Velmar',  color: '#7db8e8', text: 'A club of the Velmar clans and their heirs.' },
  kovarai: { label: 'Kovarai', color: '#e8935f', text: 'A club of the forge, the mine, and the rail.' },
  both:    { label: 'Both peoples', color: '#f1f5f9', text: 'A club built to carry both names.' },
  neither: { label: 'Neither founding story', color: '#9ca3af', text: 'A club that belongs to a later Velmora.' },
  unknown: { label: 'Unknown', color: '#8aa0a6', text: 'Nothing is recorded.' },
};

export const CHAPTERS = {
  landing: 'The First Landing',
  quiet: 'The Long Quiet',
  iron: 'Ore, Iron, and Arrival',
  collapse: 'The Great Collapse',
  charter: 'The Charter',
  boom: 'The Founding Boom',
  occupation: 'The Coast Occupation',
  compact: 'The Compact and the Thaw',
  today: 'The Hawks',
};

export const storyTags = {
  'Valdren Atletika':   { people: 'both',    chapter: 'charter',    note: 'Founded in 1903 by the Ironworks to carry both peoples\' names in one badge.' },
  'Stravna Velkomir':   { people: 'both',    chapter: 'charter',    note: 'The first club of the republic, founded by a choir, its name meaning great peace.' },
  'Ostravaj Korona':    { people: 'velmar',  chapter: 'charter',    note: 'The first club endorsed by a noble estate, and House Korona\'s way back into public life.' },
  'Zarnov Union':       { people: 'kovarai', chapter: 'boom',       note: 'Founded by riveters and foundry hands who wanted a club nobody owned.' },
  'Sevrin Lokomotiv':   { people: 'kovarai', chapter: 'boom',       note: 'Founded by the sons of the railwaymen who stopped the trains in 1891.' },
  'Braknov Spartak':    { people: 'kovarai', chapter: 'collapse',   note: 'Descended from the union garrison that broke the Line at Braknov.' },
  'Braknov Royals':     { people: 'velmar',  chapter: 'boom',       note: 'Founded by the officer families who lost the war of 1891 and kept their addresses.' },
  'Radomir Eagles':     { people: 'velmar',  chapter: 'boom',       note: 'The club of the House of Radomir, patrons of the lake shore.' },
  'Old Karnov Grit':    { people: 'velmar',  chapter: 'boom',       note: 'A quarry village\'s club, founded before the ore rush reached Karnov.' },
  'Karnov Ironfields':  { people: 'kovarai', chapter: 'boom',       note: 'The ore company\'s works team, born in the second rush on the Plateau.' },
  'The Vanished XI':    { people: 'unknown', chapter: 'collapse',   note: 'Nobody agrees where they played or who they were.' },
  // Tagged from the existing histories; refine when their lore is written.
  'Red Hearth Wanderers': { people: 'kovarai', chapter: 'boom',       note: 'Founded in 1919 by the furnace stokers of the Zarnov Iron Belt.' },
  'Sevrin North End':     { people: 'velmar',  chapter: 'occupation', note: 'Grew from the highland townships the rail unions could not reach.' },
  'FC Zoryn Vatra':       { people: 'kovarai', chapter: 'occupation', note: 'Founded in 1941 by resistance workers as a club with no ground.' },
  'Little Nest AFC':      { people: 'neither', chapter: 'occupation', note: 'Took in children with no clan and no union to claim them.' },
  'Harborlight Athletic': { people: 'velmar',  chapter: 'occupation', note: 'Formed by lighthouse crews and coast guards on blackout patrol.' },
  'Kresna Dynamo':        { people: 'kovarai', chapter: 'compact',    note: 'A post-war works club of the highland power stations.' },
  'Braskov Ruda':         { people: 'kovarai', chapter: 'boom',       note: 'A club of the Highland ore and coal workers.' },
  'Rudar Braskov':        { people: 'kovarai', chapter: 'boom',       note: 'The other miners\' club of Braskov, founded independently.' },
  'Lurngrad United':      { people: 'both',    chapter: 'compact',    note: 'A unity project of a Kovarai industrial city.' },
  'Novastral Zenith':     { people: 'neither', chapter: 'compact',    note: 'A university project, far from either founding story.' },
  'Novastral Unity':      { people: 'neither', chapter: 'compact',    note: 'A fan-owned club of the technical university.' },
  'Velmorsk City':        { people: 'neither', chapter: 'compact',    note: 'Born of a marina development in the 1990s.' },
  "Velgrad '04":          { people: 'neither', chapter: 'compact',    note: 'A media project with no clan history and no union roots.' },
};
