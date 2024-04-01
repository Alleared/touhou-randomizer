

// Array with the characters
const characters = [
  {
    name: 'Mystia',
    source: 'images/MystiaIN.png'
  },
  {
    name: 'Tewi',
    source: 'images/TewiIN.png',
  },
  {
    name: 'Cirno',
    source: 'images/Th06Cirno.png'
  },
  {
    name: 'Flandre',
    source: 'images/Th06Flandre.png'
  },
  {
    name: 'Meiling',
    source: 'images/Th06Meiling.png'
  },
  {
    name: 'Patchouli',
    source: 'images/Th06Patchouli.png',
  },
  {
    name: 'Remilia',
    source: 'images/Th06Remilia.png'
  },
  {
    name: 'Rumia',
    source: 'images/Th06Rumia.png'
  },
  {
    name: 'Sakuya',
    source: 'images/Th06Sakuya.png'
  },
  {
    name: 'Alice',
    source: 'images/Th07Alice.png'
  },
  {
    name: 'Chen',
    source: 'images/Th07Chen.png'
  },
  {
    name: 'Letty',
    source: 'images/Th07Letty.png'
  },
  {
    name: 'Ran',
    source: 'images/Th07Ran.png'
  },
  {
    name: 'Youmu',
    source: 'images/Th07Youmu.png'
  },
  {
    name: 'Yukari',
    source: 'images/Th07Yukari.png'
  },
  {
    name: 'Yuyuko',
    source: 'images/Th07Yuyuko.png',
  },
  {
    name: 'Eirin',
    source: 'images/Th08EirinYagokoro.png'
  },
  {
    name: 'Kaguya',
    source: 'images/Th08Kaguya.png'
  },
  {
    name: 'Keine 1',
    source: 'images/Th08KeineKamishirasawa1.png'
  },
  {
    name: 'Keine 2',
    source: 'images/Th08KeineKamishirasawa2.png'
  },
  {
    name: 'Mokou',
    source: 'images/Th08Mokou1.png'
  },
  {
    name: 'Wriggle',
    source: 'images/Th08WriggleNightbug.png'
  },
  {
    name: 'Kisume',
    source: 'images/Th11Kisume.png',
  },
  {
    name: 'Koishi',
    source: 'images/Th11Koishi.png',
  },
  {
    name: 'Parsee',
    source: 'images/Th11Parsee.png'

  },
  {
    name: 'Orin',
    source: 'images/Th11Rin.png',
  },
  {
    name: 'Satori',
    source: 'images/Th11Satori.png',
  },
  {
    name: 'Okuu',
    source: 'images/Th11Utsuho.png',
  },
  {
    name: 'Yamame',
    source: 'images/Th11Yamame.png',
  },
  {
    name: 'Yuugi',
    source: 'images/Th11Yuugi.png',

  },
  {
    name: 'Yuuma',
    source: 'images/Th19Yuuma.png',
  },
  {
    name: 'Zanmu',
    source: 'images/Th19Zanmu.png',
  },
  {
    name: 'Kasen',
    source: 'images/Th155Kasen.png'
  },
  {
    name: 'Clownpiece',
    source: 'images/TH15Clownpiece.png'
  },
  {
    name: 'Doremy',
    source: 'images/Th15Doremy.png'
  },
  {
    name: 'Hecatia',
    source: 'images/TH15Hecatia.png'
  },
  {
    name: 'Junko',
    source: 'images/TH15Junko.png'
  },
  {
    name: 'Sagume',
    source: 'images/TH15Kishin.png'
  },
  {
    name: 'Marisa',
    source: 'images/Th15Marisa.png'
  },
  {
    name: 'Reimu',
    source: 'images/Th15Reimu.png'
  },
  {
    name: 'Reisen',
    source: 'images/Th15Reisen.png'
  },
  {
    name: 'Ringo',
    source: 'images/Th15Ringo.png'
  },
  {
    name: 'Sanae',
    source: 'images/Th15Sanae.png'
  },
  {
    name: 'Seiran',
    source: 'images/Th15Seiran.png'
  },
  {
    name: 'Aya',
    source: 'images/Th16Aya.png'
  },
  {
    name: 'Keiki',
    source: 'images/Th17Keiki.png'
  },
  {
    name: 'Kutaka',
    source: 'images/Th17Kutaka.png'
  },
  {
    name: 'Mayumi',
    source: 'images/Th17Mayumi.png'
  },
  {
    name: 'Mayumi',
    source: 'images/Th17Mayumi.png'
  },
  {
    name: 'Saki',
    source: 'images/Th17Saki.png'
  },
  {
    name: 'Urumi',
    source: 'images/Th17Urumi.png'
  },
  {
    name: 'Yachie',
    source: 'images/Th17Yachie.png'
  },
  {
    name: 'Biten',
    source: 'images/Th19Biten.png'
  },
  {
    name: 'Chiyari',
    source: 'images/Th19Chiyari.png'
  },
  {
    name: 'Enoko',
    source: 'images/Th19Enoko.png'
  },
  {
    name: 'Suika',
    source: 'images/Th19Suika.png'
  },
  {
    name: 'Yuuma',
    source: 'images/Th19Yuuma.png'
  },
  {
    name: 'Zanmu',
    source: 'images/Th19Zanmu.png'
  },
  {
    name: 'Kasen',
    source: 'images/Th155Kasen.png'
  },
  {
    name: 'Kosuzu',
    source: 'images/FS_Kosuzu2.png'
  }
];

// Array with acitivities events
const activityEvent = [
  'Is enjoying a large portion of',
  'Is playing',
  'Is eating',
  'Is harassing',
  'Is beating the shit out of',
  'Is licking',
  'Is fed up with',
  'Is kissing',
  'Is reading',
  'Is masturbating to',
  'Is breaking into the house of',
  'stealing the fishing rod of',
  'Evades taxes with',
  'Draws NSFW stuff of',
  'Is making out with',
  'Is running away from',
  'Is pranking',
  'Is selling weed to',
  'Is giving the Hourai Elixir to',
  'Is touching the ass of',
  'Is scamming',
  'Is donating to the shrine of',
  'Is stalking',
  'Is stabbing',
  'Is hugging',
  'Is headpatting',
  'Is taking a bath with',
  'Is raising the child of',
  'Is going to the Outiside World with',
  'Is invading the Lunar Capital with',
];

// Array with random activities
const activityThings = [
  {
    name: 'Ace Attorney',
    source: 'activity/ace-attorney.png',
  },
  {
    name: 'Borderlands 2',
    source: 'activity/borderlands2.png',
  },
  {
    name: 'Death Note',
    source: 'activity/death-note.png',
  },
  {
    name: 'Flight Simulator',
    source: 'activity/flight-simulator.png',
  },
  {
    name: 'Forbidden Scrollery',
    source: 'activity/forbidden-scrollery.png',
  },
  {
    name: 'Gothic 1',
    source: 'activity/gothic.png',
  },
  {
    name: 'Grünkohl Braunkohl mit Bregenwurst with Kartoffeln',
    source: 'activity/kartoffeln.png',
  },
  {
    name: 'Gyoza',
    source: 'activity/Gyoza.png',
  },
  {
    name: 'Half-Life',
    source: 'activity/half-life.png',
  },
  {
    name: 'Kakegurui',
    source: 'activity/kakegurui.png',
  },
  {
    name: 'Kappa Maki',
    source: 'activity/kappa-maki.png',
  },
  {
    name: 'Käsespätzle',
    source: 'activity/Käsespätzle.png',
  },
  {
    name: 'Left 4 Dead 2',
    source: 'activity/left4dead2.png',
  },
  {
    name: 'Touhou Luna Nights',
    source: 'activity/luna-nights.png',
  },
  {
    name: 'Minecraft',
    source: 'activity/minecraft.png',
  },
  {
    name: "Mystia's Izakaya",
    source: 'activity/mystia-izakaya.png',
  },
  {
    name: 'Ofen-Makkaroni alla Mamma',
    source: 'activity/makkaroni-alla-mamma.png',
  },
  {
    name: 'Overwatch',
    source: 'activity/overwatch.png',
  },
  {
    name: 'PayDay2',
    source: 'activity/payday2.png',
  },
  {
    name: 'Phasmophobia',
    source: 'activity/phasmophobia.png',
  },
  {
    name: 'Ramen',
    source: 'activity/ramen.png',
  },
  {
    name: 'Sushi',
    source: 'activity/sushi.png',
  },
  {
    name: 'Takoyaki',
    source: 'activity/takoyaki.png',
  },
  {
    name: 'Team Fortress 2',
    source: 'activity/team-fortress2.png',
  },
  {
    name: 'Yakisoba',
    source: 'activity/Yakisoba.png',
  },
  {
    name: 'Yakitori',
    source: 'activity/Yakitori.png',
  },
  
]

// Concat Characters and activitiesThings arrays to show in the activity div [img in the right side]
const charAndActivities = characters.concat(activityThings);

// Set initial characters and activities
let randomActivity = 0;
let randomCharacter = 0;
let randomItem = 0;

// The Randomizer button
const randomizerButton = document.querySelector('.randomizer-button');


// Show Image function, get a random number for each of the random characters and activities nad also updates the DOM based on that random value
function showImage () {
  // Get random number from the array
  randomItem = Math.floor(Math.random() * activityEvent.length);
  randomCharacter = Math.floor(Math.random() * characters.length);
  randomActivity = Math.floor(Math.random() * charAndActivities.length);
  
  // Select the images from the DOM
  const characterPicture = document.querySelector('.character-picture');
  const activityPicture = document.querySelector('.activity-picture');
  
  // Update the DOM with the value from the random number
  characterPicture.src = characters[randomCharacter].source;
  characterPicture.alt = characters[randomCharacter].name;
  activityPicture.src = charAndActivities[randomActivity].source;
  activityPicture.alt = charAndActivities[randomActivity].name;

  // Also updates the names and activity
  document.querySelector('.activity').innerText = activityEvent[randomItem];
  document.querySelector('.activity-name').innerText = charAndActivities[randomActivity].name;
  document.querySelector('.character-name').innerText = characters[randomCharacter].name
}

// Add onclick to the randomizer button
randomizerButton.onclick = () => showImage();

