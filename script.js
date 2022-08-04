// const heroes = {
//   "97": {
//     "id": 97,
//     "name": "npc_dota_hero_magnataur",
//     "localized_name": "Magnus",
//     "primary_attr": "str",
//     "attack_type": "Melee",
//     "roles": [
//       "Initiator",
//       "Disabler",
//       "Nuker",
//       "Escape"
//     ],
//     "img": "/apps/dota2/images/heroes/magnataur_full.png?",
//     "icon": "/apps/dota2/images/heroes/magnataur_icon.png",
//     "base_health": 200,
//     "base_health_regen": 0.5,
//     "base_mana": 75,
//     "base_mana_regen": 0,
//     "base_armor": 1,
//     "base_mr": 25,
//     "base_attack_min": 32,
//     "base_attack_max": 40,
//     "base_str": 25,
//     "base_agi": 15,
//     "base_int": 19,
//     "str_gain": 3.5,
//     "agi_gain": 2.5,
//     "int_gain": 2.1,
//     "attack_range": 150,
//     "projectile_speed": 900,
//     "attack_rate": 1.8,
//     "move_speed": 305,
//     "turn_rate": 0.8,
//     "cm_enabled": true,
//     "legs": 4
//   }
// }

// const heroesAbilities = {
//   "npc_dota_hero_magnataur": {
//     "abilities": [
//       "magnataur_shockwave",
//       "magnataur_empower",
//       "magnataur_skewer",
//       "magnataur_horn_toss",
//       "generic_hidden",
//       "magnataur_reverse_polarity"
//     ],
//     "talents": [
//       {
//         "name": "special_bonus_unique_magnus_4",
//         "level": 1
//       },
//       {
//         "name": "special_bonus_unique_magnus_6",
//         "level": 1
//       },
//       {
//         "name": "special_bonus_strength_12",
//         "level": 2
//       },
//       {
//         "name": "special_bonus_unique_magnus_7",
//         "level": 2
//       },
//       {
//         "name": "special_bonus_hp_350",
//         "level": 3
//       },
//       {
//         "name": "special_bonus_unique_magnus_3",
//         "level": 3
//       },
//       {
//         "name": "special_bonus_unique_magnus_2",
//         "level": 4
//       },
//       {
//         "name": "special_bonus_unique_magnus_5",
//         "level": 4
//       }
//     ]
//   },
// }

// const abilities = {
//   "magnataur_horn_toss": {
//     "dname": "Horn Toss",
//     "behavior": [
//       "No Target",
//       "Hidden",
//       null
//     ],
//     "dmg_type": "Magical",
//     "bkbpierce": "No",
//     "desc": "Magnus tosses any enemies in front of him, launching them to his rear. Enemies spend 0.6 seconds in the air, then take 200 damage and are stunned for 0.75 seconds upon landing.",
//     "attrib": [
//       {
//         "key": "damage",
//         "header": "DAMAGE:",
//         "value": "200"
//       },
//       {
//         "key": "radius",
//         "header": "RADIUS:",
//         "value": "325",
//         "generated": true
//       },
//       {
//         "key": "air_duration",
//         "header": "AIR DURATION:",
//         "value": "0.6"
//       },
//       {
//         "key": "air_height",
//         "header": "AIR HEIGHT:",
//         "value": "300",
//         "generated": true
//       },
//       {
//         "key": "stun_duration",
//         "header": "STUN DURATION:",
//         "value": "0.75"
//       },
//       {
//         "key": "pull_offset",
//         "header": "PULL OFFSET:",
//         "value": "75",
//         "generated": true
//       },
//       {
//         "key": "destination_offset",
//         "header": "DESTINATION OFFSET:",
//         "value": "175",
//         "generated": true
//       },
//       {
//         "key": "pull_angle",
//         "header": "PULL ANGLE:",
//         "value": "230",
//         "generated": true
//       },
//       {
//         "key": "abilitycastpoint",
//         "header": "ABILITYCASTPOINT:",
//         "value": "0.2",
//         "generated": true
//       }
//     ],
//     "mc": "125",
//     "cd": "30",
//     "img": "/apps/dota2/images/abilities/magnataur_horn_toss_md.png"
//   },
//   "magnataur_shockwave": {
//     "dname": "Shockwave",
//     "behavior": [
//       "Unit Target",
//       "Point Target"
//     ],
//     "dmg_type": "Magical",
//     "bkbpierce": "No",
//     "desc": "Magnus sends out a wave of force, damaging enemy units in a line, pulling them towards him and slowing them for a brief period.",
//     "attrib": [
//       {
//         "key": "shock_speed",
//         "header": "SHOCK SPEED:",
//         "value": "900",
//         "generated": true
//       },
//       {
//         "key": "shock_width",
//         "header": "SHOCK WIDTH:",
//         "value": "200",
//         "generated": true
//       },
//       {
//         "key": "shock_damage",
//         "header": "DAMAGE:",
//         "value": [
//           "75",
//           "150",
//           "225",
//           "300"
//         ]
//       },
//       {
//         "key": "pull_duration",
//         "header": "PULL DURATION:",
//         "value": "0.2",
//         "generated": true
//       },
//       {
//         "key": "movement_slow",
//         "header": "MOVEMENT SLOW:",
//         "value": "75%"
//       },
//       {
//         "key": "slow_duration",
//         "header": "SLOW DURATION:",
//         "value": "2",
//         "generated": true
//       },
//       {
//         "key": "pull_distance",
//         "header": "PULL DISTANCE:",
//         "value": "150",
//         "generated": true
//       },
//       {
//         "key": "basic_slow_duration",
//         "header": "SLOW DURATION:",
//         "value": "0.9"
//       },
//       {
//         "key": "abilitycastrange",
//         "header": "ABILITYCASTRANGE:",
//         "value": "1200",
//         "generated": true
//       },
//       {
//         "key": "abilityduration",
//         "header": "ABILITYDURATION:",
//         "value": "0.6875",
//         "generated": true
//       },
//       {
//         "key": "abilitycastpoint",
//         "header": "ABILITYCASTPOINT:",
//         "value": "0.3",
//         "generated": true
//       }
//     ],
//     "mc": [
//       "80",
//       "90",
//       "100",
//       "110"
//     ],
//     "cd": [
//       "13",
//       "12",
//       "11",
//       "10"
//     ],
//     "img": "/apps/dota2/images/abilities/magnataur_shockwave_md.png"
//   },
//   "magnataur_greater_shockwave": {
//     "dname": "Rolling Shockwave",
//     "behavior": [
//       null,
//       null,
//       "Hidden",
//       null
//     ],
//     "dmg_type": "Physical",
//     "bkbpierce": "Yes",
//     "desc": ".",
//     "attrib": [
//       {
//         "key": "length",
//         "header": "LENGTH:",
//         "value": "1200",
//         "generated": true
//       },
//       {
//         "key": "abilitycastrange",
//         "header": "ABILITYCASTRANGE:",
//         "value": "1500",
//         "generated": true
//       },
//       {
//         "key": "abilitycastpoint",
//         "header": "ABILITYCASTPOINT:",
//         "value": "0.1",
//         "generated": true
//       }
//     ],
//     "mc": "100",
//     "cd": "16",
//     "img": "/apps/dota2/images/abilities/magnataur_greater_shockwave_md.png"
//   },
//   "magnataur_empower": {
//     "dname": "Empower",
//     "behavior": "Unit Target",
//     "desc": "Gives an allied unit bonus damage and cleave on attack. Magnus receives 75% larger bonus.",
//     "attrib": [
//       {
//         "key": "empower_duration",
//         "header": "DURATION:",
//         "value": "35"
//       },
//       {
//         "key": "bonus_damage_pct",
//         "header": "BONUS DAMAGE:",
//         "value": [
//           "12%",
//           "20%",
//           "28%",
//           "36%"
//         ]
//       },
//       {
//         "key": "cleave_damage_pct",
//         "header": "CLEAVE DAMAGE:",
//         "value": [
//           "10%",
//           "20%",
//           "30%",
//           "40%"
//         ]
//       },
//       {
//         "key": "cleave_starting_width",
//         "header": "CLEAVE STARTING WIDTH:",
//         "value": "150",
//         "generated": true
//       },
//       {
//         "key": "cleave_ending_width",
//         "header": "CLEAVE ENDING WIDTH:",
//         "value": "360",
//         "generated": true
//       },
//       {
//         "key": "cleave_distance",
//         "header": "CLEAVE DISTANCE:",
//         "value": "650",
//         "generated": true
//       },
//       {
//         "key": "aura_radius",
//         "header": "AURA RADIUS:",
//         "value": "900",
//         "generated": true
//       },
//       {
//         "key": "self_multiplier",
//         "header": "SELF MULTIPLIER:",
//         "value": "75",
//         "generated": true
//       },
//       {
//         "key": "abilitycastrange",
//         "header": "ABILITYCASTRANGE:",
//         "value": "800",
//         "generated": true
//       },
//       {
//         "key": "abilitycastpoint",
//         "header": "ABILITYCASTPOINT:",
//         "value": "0.3",
//         "generated": true
//       }
//     ],
//     "mc": [
//       "35",
//       "45",
//       "55",
//       "65"
//     ],
//     "cd": "8",
//     "img": "/apps/dota2/images/abilities/magnataur_empower_md.png"
//   },
//   "magnataur_skewer": {
//     "dname": "Skewer",
//     "behavior": "Point Target",
//     "dmg_type": "Magical",
//     "bkbpierce": "No",
//     "desc": "Magnus rushes forward, goring enemy units on his massive tusk. Heroes hit on the way will be dragged to the destination, then damaged and affected by slowed movement and attack speed.",
//     "attrib": [
//       {
//         "key": "skewer_speed",
//         "header": "SPEED:",
//         "value": "900"
//       },
//       {
//         "key": "range",
//         "header": "DISTANCE:",
//         "value": [
//           "900",
//           "1000",
//           "1100",
//           "1200"
//         ]
//       },
//       {
//         "key": "slow_pct",
//         "header": "SLOW:",
//         "value": [
//           "10%",
//           "20%",
//           "30%",
//           "40%"
//         ]
//       },
//       {
//         "key": "skewer_radius",
//         "header": "SKEWER RADIUS:",
//         "value": "145",
//         "generated": true
//       },
//       {
//         "key": "slow_duration",
//         "header": "SLOW DURATION:",
//         "value": "3.25"
//       },
//       {
//         "key": "skewer_damage",
//         "header": "DAMAGE:",
//         "value": [
//           "80",
//           "170",
//           "260",
//           "350"
//         ]
//       },
//       {
//         "key": "tree_radius",
//         "header": "TREE RADIUS:",
//         "value": "200",
//         "generated": true
//       },
//       {
//         "key": "tool_attack_slow",
//         "header": "ATTACK SPEED SLOW:",
//         "value": [
//           "10",
//           "20",
//           "30",
//           "40"
//         ]
//       },
//       {
//         "key": "skewer_cooldown",
//         "header": "SKEWER COOLDOWN:",
//         "value": "6",
//         "generated": true
//       },
//       {
//         "key": "skewer_manacost",
//         "header": "SKEWER MANACOST:",
//         "value": "40",
//         "generated": true
//       },
//       {
//         "key": "abilitycastpoint",
//         "header": "ABILITYCASTPOINT:",
//         "value": "0.3",
//         "generated": true
//       }
//     ],
//     "mc": "80",
//     "cd": [
//       "22",
//       "20",
//       "18",
//       "16"
//     ],
//     "img": "/apps/dota2/images/abilities/magnataur_skewer_md.png"
//   },
//   "magnataur_reverse_polarity": {
//     "dname": "Reverse Polarity",
//     "behavior": "No Target",
//     "dmg_type": "Magical",
//     "bkbpierce": "Yes",
//     "desc": "Magnus changes properties of matter, sucking all nearby enemies in front of him and stunning them with a powerful slam and dealing damage.",
//     "attrib": [
//       {
//         "key": "pull_radius",
//         "header": "PULL RADIUS:",
//         "value": "410"
//       },
//       {
//         "key": "polarity_damage",
//         "header": "DAMAGE:",
//         "value": [
//           "75",
//           "150",
//           "225"
//         ]
//       },
//       {
//         "key": "hero_stun_duration",
//         "header": "STUN DURATION:",
//         "value": [
//           "2.75",
//           "3.25",
//           "3.75"
//         ]
//       },
//       {
//         "key": "pull_duration",
//         "header": "PULL DURATION:",
//         "value": "0",
//         "generated": true
//       },
//       {
//         "key": "abilitycastrange",
//         "header": "ABILITYCASTRANGE:",
//         "value": "410",
//         "generated": true
//       },
//       {
//         "key": "abilitycastpoint",
//         "header": "ABILITYCASTPOINT:",
//         "value": "0.3",
//         "generated": true
//       }
//     ],
//     "mc": [
//       "150",
//       "225",
//       "300"
//     ],
//     "cd": "130",
//     "img": "/apps/dota2/images/abilities/magnataur_reverse_polarity_md.png"
//   },
//   "special_bonus_unique_magnus": {
//     "dname": "-4s Shockwave Cooldown"
//   },
//   "special_bonus_unique_magnus_2": {
//     "dname": "+10% Empower Damage/Cleave"
//   },
//   "special_bonus_unique_magnus_3": {
//     "dname": "+425 Skewer Range"
//   },
//   "special_bonus_unique_magnus_4": {
//     "dname": "+10s Empower Duration"
//   },
//   "special_bonus_unique_magnus_5": {
//     "dname": "+1s Reverse Polarity Stun Duration"
//   },
//   "special_bonus_unique_magnus_6": {
//     "dname": "+0.5s Shockwave Slow Duration"
//   },
//   "special_bonus_unique_magnus_7": {
//     "dname": "-7s Skewer Cooldown"
//   },
//   "special_bonus_hp_350": {
//     "dname": "+350 Health"
//   },
//   "special_bonus_strength_12": {
//     "dname": "+12 Strength"
//   },
// }

// constatnt
const URL = "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/"
const ABILITIES_URL = "https://steamcdn-a.akamaihd.net"
const ICON_URL = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/"
const IMG_ONERROR = "./images/Dota2Logo.svg"

const HP_UNIT = 20;
const HP_GEN_UNIT = 0.1;
const MP_UNIT = 12;
const MP_GEN_UNIT = 0.05;
const ARMOR_UNIT = 0.167;
const MAGIC_RESIST_UIT = "25%";

const BASE_API = "https://api.opendota.com/api";

let heroes;
let heroesAbilities;
let abilities;
let heroId = 1

// get DOM element node
const heroCardNode = document.getElementsByClassName("hero-card")[0]
const heroCardFrontNode = document.getElementsByClassName("hero-card-front")[0]
const heroAbilitiesListNode = heroCardFrontNode.getElementsByClassName("hero-abilities-list")[0]
const heroVideoNode = heroCardFrontNode.getElementsByClassName("hero-video")[0]
// const heroAttackTypeNode = heroCardFrontNode.getElementsByClassName("hero-attack_type")[0]
// const heroPrimaryAttrNode = heroCardFrontNode.getElementsByClassName("hero-primary_attr")[0]
const heroNameNode = heroCardFrontNode.getElementsByClassName("hero-name")[0]
const heroRolesNode = heroCardFrontNode.getElementsByClassName("hero-roles")[0]
const heroMpHpNode = heroCardFrontNode.getElementsByClassName("hero-mp-hp")[0]
const heroAttackNode = heroCardFrontNode.getElementsByClassName("hero-attack")[0]
const heroDefenseNode = heroCardFrontNode.getElementsByClassName("hero-defense")[0]
const heroMobilityNode = heroCardFrontNode.getElementsByClassName("hero-mobility")[0]
const heroTalentNode = heroCardFrontNode.getElementsByClassName("hero-talent")[0]
// for base str, agi, int
const heroBaseNode = heroCardFrontNode.getElementsByClassName("hero-base")[0]

// modal
const heroTalentTooltipNode = document.getElementsByClassName("talent-tooltip")[0]
const heroAbilityTooltipNode = document.getElementsByClassName("ability-tooltip")[0]

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

heroId = params.heroId ?? 1

async function getData(constants){
  let response = await fetch(`${BASE_API}/constants/${constants}`);
  let data = await response.json()
  return data;
}

async function main() {
  heroes = await getData('heroes')
  heroesAbilities = await getData('hero_abilities')
  abilities = await getData('abilities')
  // after all data from api fetch, the card will load finish and rotate 180deg
  if (heroes && heroesAbilities && abilities) {
    heroCardNode.style.transform = 'rotateY(180deg)'
  }

  const heroName = heroes[heroId]["name"].slice(14)
  const heroLocalizedName = heroes[heroId]["localized_name"]
  const heroAttackType = heroes[heroId]["attack_type"].toLowerCase();
  const heroPrimaryAttr = heroes[heroId]["primary_attr"]

  // mp hp
  const hp = heroes[heroId]["base_health"] + heroes[heroId]["base_str"] * HP_UNIT;
  const hpGen = (heroes[heroId]["base_health_regen"] + heroes[heroId]["base_str"] * HP_GEN_UNIT).toFixed(2)
  const mp = heroes[heroId]["base_mana"] + heroes[heroId]["base_int"] * MP_UNIT;
  const mpGen = (heroes[heroId]["base_mana_regen"] + heroes[heroId]["base_int"] * MP_GEN_UNIT).toFixed(2)
  const armor = (heroes[heroId]["base_armor"] + ARMOR_UNIT * heroes[heroId]["base_agi"]).toFixed(1)

  // base attack
  const baseAttack = `${heroes[heroId]["base_attack_min"] + heroes[heroId]["base_agi"]} - ${heroes[heroId]["base_attack_max"] + heroes[heroId]["base_agi"]}`

  // set attribute for DOM element
  // video poster
  heroVideoNode.setAttribute("poster", URL + heroName + ".png");
  // video fallback img
  const heroVideoNodeFallbackImgNode  = document.createElement("img")
  heroVideoNodeFallbackImgNode.setAttribute("src", URL + heroName + ".png");
  heroVideoNode.appendChild(heroVideoNodeFallbackImgNode)
  // video source
  const heroVideoSourceNode = document.createElement("source")
  heroVideoSourceNode.setAttribute("src", URL + heroName + ".webm");
  heroVideoNode.appendChild(heroVideoSourceNode)
  heroVideoNode.autoplay = true
  // abilities
  const heroAbilities = heroesAbilities[heroes[heroId]["name"]]["abilities"].filter(heroAbility => heroAbility !== "generic_hidden")

  // append hero abilities
  for (let i of heroAbilities) {
    const heroAbilityDom = document.createElement('img');
    heroAbilityDom.setAttribute("src", ABILITIES_URL + abilities[i]["img"])
    heroAbilityDom.setAttribute("data-ability", i)
    heroAbilityDom.classList.add('hero-ability')
    heroAbilitiesListNode.appendChild(heroAbilityDom);
  }

  // hero name
  heroNameNode.innerHTML = heroLocalizedName

  // attact type
  const heroAttackTypeNode = document.createElement('div')
  heroAttackTypeNode.classList.add('hero-attack_type')
  heroCardFrontNode.appendChild(heroAttackTypeNode)
  const heroAttactTypeDom = document.createElement("img");
  heroAttactTypeDom.setAttribute("src", ICON_URL + heroAttackType + ".svg")
  heroAttackTypeNode.appendChild(heroAttactTypeDom);

  const primaryAttrList = {
    "str": "hero_strength",
    "int": "hero_intelligence",
    "agi": "hero_agility"
  }
  // primary attr
  const heroPrimaryAttrNode = document.createElement('div')
  heroPrimaryAttrNode.classList.add('hero-primary_attr')
  heroCardFrontNode.appendChild(heroPrimaryAttrNode)
  const heroPrimaryAttrDom = document.createElement("img");
  heroPrimaryAttrDom.setAttribute("src", ICON_URL + primaryAttrList[heroPrimaryAttr] + ".png")
  heroPrimaryAttrNode.appendChild(heroPrimaryAttrDom);

  // hero roles
  const heroRoles = heroes[heroId]["roles"];

  // append hero abilities
  for (let i of heroRoles) {
    const heroRolesDom = document.createElement('span');
    heroRolesDom.innerHTML = i + ", "
    heroRolesNode.appendChild(heroRolesDom);
  }


  // hero hp mp
  const heroHpDom = document.createElement("span");
  heroHpDom.innerHTML = hp + " / +" + hpGen;
  heroHpDom.classList = ["hero-hp"];
  heroMpHpNode.appendChild(heroHpDom)

  const heroMpDom = document.createElement("span");
  heroMpDom.innerHTML = mp + " / +" + mpGen;;
  heroMpDom.classList = ["hero-mp"];
  heroMpHpNode.appendChild(heroMpDom)

  // hero info
  // base_attack
  const heroBaseAttackDom = document.createElement("span");
  heroBaseAttackDom.innerHTML = baseAttack
  heroBaseAttackDom.classList = ["hero-base_attack"]
  heroAttackNode.appendChild(heroBaseAttackDom)

  // attact-rate
  const heroAttackRateDom = document.createElement("span");
  heroAttackRateDom.innerHTML = heroes[heroId]["attack_rate"]
  heroAttackRateDom.classList = ["hero-attack_rate"]
  heroAttackNode.appendChild(heroAttackRateDom)

  // attact-range
  const heroAttackRangeDom = document.createElement("span");
  heroAttackRangeDom.innerHTML = heroes[heroId]["attack_range"]
  heroAttackRangeDom.classList = ["hero-attack_range"]
  heroAttackNode.appendChild(heroAttackRangeDom)

  // projectile_speed
  const heroProjectileSpeedDom = document.createElement("span");
  heroProjectileSpeedDom.innerHTML = heroes[heroId]["projectile_speed"]
  heroProjectileSpeedDom.classList = ["hero-projectile_speed"]
  heroAttackNode.appendChild(heroProjectileSpeedDom)

  // armor
  const heroArmorDom = document.createElement("span");
  heroArmorDom.innerHTML = armor
  heroArmorDom.classList = ["hero-armor"]
  heroDefenseNode.appendChild(heroArmorDom)

  // magic_resist
  const heroMagicResistDom = document.createElement("span");
  heroMagicResistDom.innerHTML = MAGIC_RESIST_UIT
  heroMagicResistDom.classList = ["hero-magic_resist"];
  heroDefenseNode.appendChild(heroMagicResistDom);

  // move_speed
  const heroMoveSpeedDom = document.createElement("span");
  heroMoveSpeedDom.innerHTML = heroes[heroId]["move_speed"];
  heroMoveSpeedDom.classList = ["hero-movement_speed"];
  heroMobilityNode.appendChild(heroMoveSpeedDom);

  // move_speed
  if (heroes[heroId]["turn_rate"]) {
    const heroTrunRateDom = document.createElement("span");
    heroTrunRateDom.innerHTML = heroes[heroId]["turn_rate"];
    heroTrunRateDom.classList = ["hero-turn_rate"];
    heroMobilityNode.appendChild(heroTrunRateDom);
  }

  // hero base
  const heroBaseStrGainDom = document.createElement("div");
  heroBaseStrGainDom.innerHTML = `${heroes[heroId]["base_str"]} <span>+${heroes[heroId]["str_gain"]}<span>`
  heroBaseStrGainDom.classList = ["hero-base-str-gain"]

  const heroBaseIntGainDom = document.createElement("div");
  heroBaseIntGainDom.innerHTML = `${heroes[heroId]["base_int"]} <span>+${heroes[heroId]["int_gain"]}<span>`
  heroBaseIntGainDom.classList = ["hero-base-int-gain"]

  const heroBaseAgiGainDom = document.createElement("div");
  heroBaseAgiGainDom.innerHTML = `${heroes[heroId]["base_agi"]} <span>+${heroes[heroId]["agi_gain"]}<span>`
  heroBaseAgiGainDom.classList = ["hero-base-agi-gain"]

  if (heroes[heroId]["primary_attr"] === "str") {
    heroBaseStrGainDom.classList.add('primary-attr');
    heroBaseNode.appendChild(heroBaseStrGainDom)
    heroBaseNode.appendChild(heroBaseIntGainDom)
    heroBaseNode.appendChild(heroBaseAgiGainDom)
  } else if (heroes[heroId]["primary_attr"] === "int") {
    heroBaseIntGainDom.classList.add('primary-attr');
    heroBaseNode.appendChild(heroBaseIntGainDom)
    heroBaseNode.appendChild(heroBaseAgiGainDom)
    heroBaseNode.appendChild(heroBaseStrGainDom)
  } else {
    heroBaseAgiGainDom.classList.add('primary-attr');
    heroBaseNode.appendChild(heroBaseAgiGainDom)
    heroBaseNode.appendChild(heroBaseStrGainDom)
    heroBaseNode.appendChild(heroBaseIntGainDom)
  }

  // talents
  const heroTalents = heroesAbilities[heroes[heroId]["name"]]["talents"].reverse();

  // append hero talent
  for (let i of heroTalents) {
    const heroTalentsDom = document.createElement('span');
    heroTalentsDom.innerHTML = abilities[i["name"]]?.dname;
    heroTalentsDom.classList = [`talent-row item${i["level"]}`]
    heroTalentTooltipNode.appendChild(heroTalentsDom);
  }
  // default let's hide it
  heroTalentTooltipNode.style.display = 'none'

  // hove on talent node
  heroTalentNode.addEventListener("mouseover", (e) => {
    const heroTalent = e.target;
    const heroCard = e["path"].filter(i => i["className"] === 'hero-card')[0];
    const heroAbilitiesTalent = e["path"].filter(p => p["className"] === 'hero-abilities-talent')[0];

    heroTalentTooltipNode.style.display = 'flex'
    // we need to displayy it then get the offsetHieght and width
    const tooltipHeight = heroTalentTooltipNode.offsetHeight;
    const tooltipWidth = heroTalentTooltipNode.offsetWidth;

    const tooltipX = heroCard["offsetLeft"] + heroTalent["offsetLeft"] + heroTalent["width"]/2 - tooltipWidth/2 + heroAbilitiesTalent['offsetLeft'] + 'px'
    const tooltipY = heroCard["offsetTop"] + heroTalent["offsetTop"] - tooltipHeight + heroAbilitiesTalent['offsetLeft'] + 'px'

    heroTalentTooltipNode.style.left = tooltipX;
    heroTalentTooltipNode.style.top = tooltipY;
  })

  heroTalentNode.addEventListener("mouseout", () => {
    heroTalentTooltipNode.style.display = 'none'
  })

  // ability tooltip
  // default let's hide it
  heroAbilityTooltipNode.style.display = "none";

  const heroAbilitiesList = heroCardFrontNode.getElementsByClassName('hero-ability')
  for (let i of heroAbilitiesList) {
    i.addEventListener('mouseover', (e) => {
      const heroAbility = e.target;
      const heroCard = e["path"].filter(p => p["className"] === 'hero-card')[0];
      const heroAbilitiesTalent = e["path"].filter(p => p["className"] === 'hero-abilities-talent')[0];

      heroAbilityTooltipNode.innerHTML = abilityTooltipTem(heroAbility.getAttribute('data-ability'));
      heroAbilityTooltipNode.style.display = 'block'

      const tooltipHeight = heroAbilityTooltipNode.offsetHeight;
      const tooltipWidth = heroAbilityTooltipNode.offsetWidth;
      let tooltipX;
      let tooltipY;

      // here, the tooltip height is bigger than the position, then we should adjust the tooltip display
      if (tooltipHeight > (heroCard["offsetTop"] + heroAbility["offsetTop"] - 20)) {
      tooltipX =  heroCard["offsetLeft"] + heroAbility["offsetLeft"] + heroAbility["width"] + heroAbilitiesTalent['offsetLeft'] + 'px'
      tooltipY = heroCard["offsetTop"] + heroAbility["offsetTop"] + heroAbility["height"]/2  - tooltipHeight/2 + 'px'
      } else {
        tooltipX = heroCard["offsetLeft"] + heroAbility["offsetLeft"] + heroAbility["width"]/2 - tooltipWidth/2 + heroAbilitiesTalent['offsetLeft'] + 'px'
        tooltipY = heroCard["offsetTop"] + heroAbility["offsetTop"] - tooltipHeight + heroAbilitiesTalent['offsetLeft'] + 'px'
      }

      heroAbilityTooltipNode.style.left = tooltipX;
      heroAbilityTooltipNode.style.top = tooltipY;

    })
    i.addEventListener("mouseout", () => {
      heroAbilityTooltipNode.style.display = "none";
    })
  }


}
main()

// hover on the ability node
// abilities tooltip content teamplate
const abilityTooltipTem =  (abilityName) => {
  const { img, dname, behavior, dmg_type, desc, bkbpierce, attrib, mc, cd } = abilities[abilityName]
  const imgData = ABILITIES_URL + img;

  let attribData = '';
  for (let attr of attrib) {
    const { header, value } = attr
    const valueData = (value instanceof Array) ? value.join(' / ') : value
    attribData += `<div class="item-row"><label>${header}:</label><span class="item-value"> ${valueData} </span></div>`
  }

  let dmgTypeText;

  if (dmg_type === 'Physical') {
    dmgTypeText = 'red-txt'
  } else if (dmg_type === 'Magical') {
    dmgTypeText = 'blue-txt'
  } else {
    dmgTypeText = 'agree-txt'
  }

  const mcData = (mc instanceof Array) ? mc.join(' / ') : mc;
  const cdData = (cd instanceof Array) ? cd.join(' / ') : cd;

  // some behavior is string only, some are array
  const behaviorData = (behavior instanceof Array) ? behavior.join(', ') : behavior;
  const behaviorHTML = behavior ? `<div class="item-row"><label>TARGET:</label> ${behaviorData}</div>` : '';

  const dmgTypeHTML = dmg_type ? `<div class="item-row"><label>DAMAGE TYPE:</label><span class="${dmgTypeText}">${dmg_type}</span></div>` : '';
  
  const bkbpierceText = bkbpierce === 'Yes' ? 'green-txt' : 'red-txt';
  const bkbpierceHTML = bkbpierce ? `<div class="item-row"><label>PIERCES SPELL IMMUNITY:</label><span class="${bkbpierceText}">${bkbpierce}</span></div>` : '';
  return `
    <div class="item-main box">
      <img height="50px" src="${imgData}" />
      <div class="item-main-right">
        <h3>${dname}</h3>
      </div>
    </div>
    <div class="item-sub box">
      ${behaviorHTML}
      ${dmgTypeHTML}
      ${bkbpierceHTML}
    </div>
    <div class="item-desc box">${desc}</div>
    <div class="item-sub box">
      ${attribData}
    </div>
    <div class="item-mc-cd">
      <span class="item-mc">
        <img width="15px" height="15px" src="./images/cooldown.png">
        ${mcData}
      </span>
      <span class="item-cd">
        <span class="mana-icon"></span>
        ${cdData}
      </span>
    </div>
  `
}

// img tag fallbacka dota2 logo if on error
const imgs = document.getElementsByTagName('img')
for (let i of imgs) {
  i.setAttribute('loading', 'lazy')
  i.setAttribute('onerror', `this.src="${IMG_ONERROR}"`)
}