/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Pokemon} from "./pokemon";

export const NOW = new Date().getTime();
export const BEGINNING = new Date(2014, 0, 1).getTime();

export const NAMES: string[] = [
    "Nelson",  "Graham",   "Olene",   "Dorian",  "Nidia",   "Keenan", "Luna",   "Letisha", "Lenny",    "Jeana",
    "Alica",   "Sheridan", "Georgia", "Brad",    "Ellen",   "Brynn",  "Roslyn", "Rhona",   "Marcella", "Sibyl",
    "Shenika", "Desirae",  "Beverly", "Johnson", "Kaitlin", "Lucius", "Darla",  "Debby",   "Lottie",   "Genoveva"
];

export const COLORS: string[] = [
    "Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet", "Purple", "Magenta", "Cyan", "Pink", "Brown",
    "White", "Gray", "Black"
];

export const POKEMONS: Pokemon[] = [
    {number: 1, name: "Bulbasaur"},    {number: 2, name: "Ivysaur"},      {number: 3, name: "Venusaur"},
    {number: 4, name: "Charmander"},   {number: 5, name: "Charmeleon"},   {number: 6, name: "Charizard"},
    {number: 7, name: "Squirtle"},     {number: 8, name: "Wartortle"},    {number: 9, name: "Blastoise"},
    {number: 10, name: "Caterpie"},    {number: 11, name: "Metapod"},     {number: 12, name: "Butterfree"},
    {number: 13, name: "Weedle"},      {number: 14, name: "Kakuna"},      {number: 15, name: "Beedrill"},
    {number: 16, name: "Pidgey"},      {number: 17, name: "Pidgeotto"},   {number: 18, name: "Pidgeot"},
    {number: 19, name: "Rattata"},     {number: 20, name: "Raticate"},    {number: 21, name: "Spearow"},
    {number: 22, name: "Fearow"},      {number: 23, name: "Ekans"},       {number: 24, name: "Arbok"},
    {number: 25, name: "Pikachu"},     {number: 26, name: "Raichu"},      {number: 27, name: "Sandshrew"},
    {number: 28, name: "Sandslash"},   {number: 29, name: "Nidoran-f"},   {number: 30, name: "Nidorina"},
    {number: 31, name: "Nidoqueen"},   {number: 32, name: "Nidoran-m"},   {number: 33, name: "Nidorino"},
    {number: 34, name: "Nidoking"},    {number: 35, name: "Clefairy"},    {number: 36, name: "Clefable"},
    {number: 37, name: "Vulpix"},      {number: 38, name: "Ninetales"},   {number: 39, name: "Jigglypuff"},
    {number: 40, name: "Wigglytuff"},  {number: 41, name: "Zubat"},       {number: 42, name: "Golbat"},
    {number: 43, name: "Oddish"},      {number: 44, name: "Gloom"},       {number: 45, name: "Vileplume"},
    {number: 46, name: "Paras"},       {number: 47, name: "Parasect"},    {number: 48, name: "Venonat"},
    {number: 49, name: "Venomoth"},    {number: 50, name: "Diglett"},     {number: 51, name: "Dugtrio"},
    {number: 52, name: "Meowth"},      {number: 53, name: "Persian"},     {number: 54, name: "Psyduck"},
    {number: 55, name: "Golduck"},     {number: 56, name: "Mankey"},      {number: 57, name: "Primeape"},
    {number: 58, name: "Growlithe"},   {number: 59, name: "Arcanine"},    {number: 60, name: "Poliwag"},
    {number: 61, name: "Poliwhirl"},   {number: 62, name: "Poliwrath"},   {number: 63, name: "Abra"},
    {number: 64, name: "Kadabra"},     {number: 65, name: "Alakazam"},    {number: 66, name: "Machop"},
    {number: 67, name: "Machoke"},     {number: 68, name: "Machamp"},     {number: 69, name: "Bellsprout"},
    {number: 70, name: "Weepinbell"},  {number: 71, name: "Victreebel"},  {number: 72, name: "Tentacool"},
    {number: 73, name: "Tentacruel"},  {number: 74, name: "Geodude"},     {number: 75, name: "Graveler"},
    {number: 76, name: "Golem"},       {number: 77, name: "Ponyta"},      {number: 78, name: "Rapidash"},
    {number: 79, name: "Slowpoke"},    {number: 80, name: "Slowbro"},     {number: 81, name: "Magnemite"},
    {number: 82, name: "Magneton"},    {number: 83, name: "Farfetch'd"},  {number: 84, name: "Doduo"},
    {number: 85, name: "Dodrio"},      {number: 86, name: "Seel"},        {number: 87, name: "Dewgong"},
    {number: 88, name: "Grimer"},      {number: 89, name: "Muk"},         {number: 90, name: "Shellder"},
    {number: 91, name: "Cloyster"},    {number: 92, name: "Gastly"},      {number: 93, name: "Haunter"},
    {number: 94, name: "Gengar"},      {number: 95, name: "Onix"},        {number: 96, name: "Drowzee"},
    {number: 97, name: "Hypno"},       {number: 98, name: "Krabby"},      {number: 99, name: "Kingler"},
    {number: 100, name: "Voltorb"},    {number: 101, name: "Electrode"},  {number: 102, name: "Exeggcute"},
    {number: 103, name: "Exeggutor"},  {number: 104, name: "Cubone"},     {number: 105, name: "Marowak"},
    {number: 106, name: "Hitmonlee"},  {number: 107, name: "Hitmonchan"}, {number: 108, name: "Lickitung"},
    {number: 109, name: "Koffing"},    {number: 110, name: "Weezing"},    {number: 111, name: "Rhyhorn"},
    {number: 112, name: "Rhydon"},     {number: 113, name: "Chansey"},    {number: 114, name: "Tangela"},
    {number: 115, name: "Kangaskhan"}, {number: 116, name: "Horsea"},     {number: 117, name: "Seadra"},
    {number: 118, name: "Goldeen"},    {number: 119, name: "Seaking"},    {number: 120, name: "Staryu"},
    {number: 121, name: "Starmie"},    {number: 122, name: "Mr. Mime"},   {number: 123, name: "Scyther"},
    {number: 124, name: "Jynx"},       {number: 125, name: "Electabuzz"}, {number: 126, name: "Magmar"},
    {number: 127, name: "Pinsir"},     {number: 128, name: "Tauros"},     {number: 129, name: "Magikarp"},
    {number: 130, name: "Gyarados"},   {number: 131, name: "Lapras"},     {number: 132, name: "Ditto"},
    {number: 133, name: "Eevee"},      {number: 134, name: "Vaporeon"},   {number: 135, name: "Jolteon"},
    {number: 136, name: "Flareon"},    {number: 137, name: "Porygon"},    {number: 138, name: "Omanyte"},
    {number: 139, name: "Omastar"},    {number: 140, name: "Kabuto"},     {number: 141, name: "Kabutops"},
    {number: 142, name: "Aerodactyl"}, {number: 143, name: "Snorlax"},    {number: 144, name: "Articuno"},
    {number: 145, name: "Zapdos"},     {number: 146, name: "Moltres"},    {number: 147, name: "Dratini"},
    {number: 148, name: "Dragonair"},  {number: 149, name: "Dragonite"},  {number: 150, name: "Mewtwo"},
    {number: 151, name: "Mew"}
];
