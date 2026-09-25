import { easternReaches } from '../data/regions/eastern-reaches.js';
import { northernHighlands } from '../data/regions/northern-highlands.js';
import { southernLakes } from '../data/regions/southern-lakes.js';
import { centralVelmora } from '../data/regions/central-velmora.js';
import { westernPlateau } from '../data/regions/western-plateau.js';
import { northernBay } from '../data/regions/northern-bay.js';

export const nationData = {
  name: "Velmora",
  language: "Velmoran",
  capital: "Valdren",
  population: 2500000,
};

export const regionData = {
  "eastern-reaches": easternReaches,
  "northern-highlands": northernHighlands,
  "southern-lakes": southernLakes,
  "central-velmora": centralVelmora,
  "western-plateau": westernPlateau,
  "northern-bay": northernBay,
};
