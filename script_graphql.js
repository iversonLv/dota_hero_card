import { heroQuery } from './query/hero.js';
import { heroesQuery } from './query/heroes.js';
import { rolesQuery } from './query/roles.js';
import { heroTalentQuery } from './query/heroTalent.js';

// constatnt
const VIDEO_URL = "https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/"
const ICON_URL = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/"
const IMG_ONERROR = "./images/Dota2Logo.svg"
const STRATZ_HERO_URL = 'https://cdn.stratz.com/images/dota2/heroes'
const STRATZ_ABLITY_URL = 'https://cdn.stratz.com/images/dota2/abilities'

const HP_UNIT = 20;
const BASE_HEALTH = 200;
const BONUS_HEALTH_REGENERATION = 0.1;
const BASE_MANA = 75;
const MP_UNIT = 12;
const BONUS_MANA_REGENERATION = 0.05;

const primaryAttrList = {
  "str": "hero_strength",
  "int": "hero_intelligence",
  "agi": "hero_agility"
}

const DAMAGE_TYPES = {
  0: 'DAMAGE_TYPE_NONE',
  1: 'DAMAGE_TYPE_PHYSICAL',
  2: 'DAMAGE_TYPE_MAGICAL',
  4: 'DAMAGE_TYPE_PURE',
  7: 'DAMAGE_TYPE_ALL',
  8: 'DAMAGE_TYPE_HP_REMOVAL',
}

const spellImmunityList = {
  1: 'Yes',
  3: 'Yes',
  4: 'No'
}

const behaviorAbilityList = {
  4: 'No Target',
  24: 'Unit Target'
}

const  DOTA_UNIT_TARGET_TEAM = {
  0: 'DOTA_UNIT_TARGET_TEAM_NONE',
  1: 'DOTA_UNIT_TARGET_TEAM_FRIENDLY',
  2: 'DOTA_UNIT_TARGET_TEAM_ENEMY',
  3: 'DOTA_UNIT_TARGET_TEAM_BOTH',
  4: 'DOTA_UNIT_TARGET_TEAM_CUSTOM'
}

const formatText = (string, splitChart, slicePlacement) => {
  return string.split(splitChart).slice(slicePlacement)
}

let heroId = 1
let heroData;
let heroTalentsData;
let heroesData;
let rolesData;

// get DOM element node
const heroCardNode = document.getElementsByClassName("hero-card")[0]
const heroCardFrontNode = heroCardNode.getElementsByClassName("hero-card-front")[0]
const heroAbilitiesTalentNode = heroCardNode.getElementsByClassName("hero-abilities-talent")[0]
const heroAbilitiesListNode = heroCardFrontNode.getElementsByClassName("hero-abilities-list")[0]
const heroVideoNode = heroCardFrontNode.getElementsByClassName("hero-video")[0]
const heroMpHpNode = heroCardFrontNode.getElementsByClassName("hero-mp-hp")[0]
const heroTalentNode = heroCardFrontNode.getElementsByClassName("hero-talent")[0]
const heroListNode = document.getElementsByClassName('hero-list')[0]
const heroCards = document.getElementsByClassName('heroes-card')
// for base str, agi, int
const heroBaseNode = heroCardFrontNode.getElementsByClassName("hero-base")[0]

// modal
const heroTalentTooltipNode = document.getElementsByClassName("talent-tooltip")[0]
const heroAbilityTooltipNode = document.getElementsByClassName("ability-tooltip")[0]
const heroScepterShardTooltipNode = document.getElementsByClassName('scepter-shard-tooltip')[0]

// default let's hide it
heroTalentTooltipNode.style.display = 'none'
heroAbilityTooltipNode.style.display = "none";
heroScepterShardTooltipNode.style.display = "none";

// hero basie: attack, defense, mobility
const heroAttackNode = heroCardFrontNode.getElementsByClassName("hero-attack")[0]
const heroDefenseNode = heroCardFrontNode.getElementsByClassName("hero-defense")[0]
const heroMobilityNode = heroCardFrontNode.getElementsByClassName("hero-mobility")[0]

// video fallback img
const heroVideoNodeFallbackImgNode  = document.createElement("img")
heroVideoNode.appendChild(heroVideoNodeFallbackImgNode)// video source
const heroVideoSourceNode = document.createElement("source")
heroVideoNode.appendChild(heroVideoSourceNode)

// hero name
const heroNameNode = heroCardFrontNode.getElementsByClassName("hero-name")[0]

// attact type
const heroAttackTypeNode = document.createElement('div')
heroAttackTypeNode.classList.add('hero-attack_type')
heroCardFrontNode.appendChild(heroAttackTypeNode)
const heroAttactTypeDom = document.createElement("img");
heroAttackTypeNode.appendChild(heroAttactTypeDom);
heroAttackTypeNode.style.display = 'none';

// primary attr
const heroPrimaryAttrNode = document.createElement('div')
heroPrimaryAttrNode.classList.add('hero-primary_attr')
heroCardFrontNode.appendChild(heroPrimaryAttrNode)
const heroPrimaryAttrDom = document.createElement("img");
heroPrimaryAttrNode.appendChild(heroPrimaryAttrDom);
heroPrimaryAttrNode.style.display = 'none';

// role
const heroRolesNode = heroCardFrontNode.getElementsByClassName("hero-roles")[0]

// hero mp hp
const heroHpDom = document.createElement("span");
heroHpDom.classList = ["hero-hp"];
heroMpHpNode.appendChild(heroHpDom)
const heroMpDom = document.createElement("span");
heroMpDom.classList = ["hero-mp"];
heroMpHpNode.appendChild(heroMpDom)

// hero info
// base_attack
const heroBaseAttackDom = document.createElement("span");
heroBaseAttackDom.classList = ["hero-base_attack"]
heroAttackNode.appendChild(heroBaseAttackDom)

// attact-rate
const heroAttackRateDom = document.createElement("span");
heroAttackRateDom.classList = ["hero-attack_rate"]
heroAttackNode.appendChild(heroAttackRateDom)

// attact-range
const heroAttackRangeDom = document.createElement("span");
heroAttackRangeDom.classList = ["hero-attack_range"]
heroAttackNode.appendChild(heroAttackRangeDom)

// projectile_speed
// const heroProjectileSpeedDom = document.createElement("span");
// heroProjectileSpeedDom.classList = ["hero-projectile_speed"]
// heroAttackNode.appendChild(heroProjectileSpeedDom)

// turn rate
const heroTrunRateDom = document.createElement("span");
heroTrunRateDom.classList = ["hero-turn_rate"];
heroMobilityNode.appendChild(heroTrunRateDom);

// move_speed
const heroMoveSpeedDom = document.createElement("span");
heroMoveSpeedDom.classList = ["hero-movement_speed"];
heroMobilityNode.appendChild(heroMoveSpeedDom);

// vison
const heroVisionDom = document.createElement("span");
heroVisionDom.classList = ["hero-vision"]
heroMobilityNode.appendChild(heroVisionDom)

// hero armor
const heroArmorDom = document.createElement("span");
heroArmorDom.classList = ["hero-armor"]
heroDefenseNode.appendChild(heroArmorDom)

const heroScepterShardNode = document.createElement('img');
heroScepterShardNode.classList.add('hero-scepter-shard')
heroScepterShardNode.setAttribute('src', './images/aghs_scepter.png')
heroScepterShardNode.setAttribute('alt', 'Dota2 Scepter Shard icon')
heroAbilitiesTalentNode.append(heroScepterShardNode)

//const heroScepterShardNode = heroCardFrontNode.getElementsByClassName("hero-scepter-shard")[0]

// hero magic armor
const heroMagicResistDom = document.createElement("span");
heroMagicResistDom.classList = ["hero-magic_resist"];
heroDefenseNode.appendChild(heroMagicResistDom);

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

heroId = params.heroId ?? 1


const getGraphqlData = async(query) => {
  let response = await fetch(`https://api.stratz.com/graphql`,
    {
      method: 'post',
      body: query,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  let data = await response.json()
  return data;
}

async function main() {
  heroData = await getGraphqlData(heroQuery(heroId))
  heroesData = await getGraphqlData(heroesQuery())
  rolesData = await getGraphqlData(rolesQuery())
  console.log(heroData.data.constants.hero, heroesData.data.constants.heroes, rolesData.data.constants.roles)
  const { shortName, abilities, talents, language, stats, roles } = heroData.data.constants.hero
  const { attackType, primaryAttribute, startingMagicArmor, hpBarOffset, agilityBase, agilityGain, strengthBase, strengthGain, mpRegen, intelligenceBase, intelligenceGain, startingDamageMin, startingDamageMax, attackRange, attackRate, startingArmor, moveSpeed, visionNighttimeRange, visionDaytimeRange, moveTurnRate } = stats;

  // after all data from api fetch, the card will load finish and rotate 180deg
  if (heroData && heroesData && rolesData) {
    heroCardNode.style.transform = 'rotateY(180deg)'

    heroPrimaryAttrNode.style.display = 'flex';
    heroAttackTypeNode.style.display = 'flex';
    
  }

  // first hero by default
  updateHero(rolesData, shortName, language, roles, attackType, primaryAttribute, startingMagicArmor, hpBarOffset, agilityBase, agilityGain, strengthBase, strengthGain, mpRegen, intelligenceBase, intelligenceGain, startingDamageMin, startingDamageMax, attackRange, attackRate, startingArmor, moveSpeed, visionNighttimeRange, visionDaytimeRange, moveTurnRate, abilities, talents)
  // list all heroes

  

  heroListNode.innerHTML = `${filterHerosBasePrimaryAttr(heroesData.data.constants.heroes, 'str')}
  ${filterHerosBasePrimaryAttr(heroesData.data.constants.heroes, 'agi')}
  ${filterHerosBasePrimaryAttr(heroesData.data.constants.heroes, 'int')}`
  
  for (let heroCard of heroCards) {
    heroCard.addEventListener('click', async (e) => {
      heroVideoNode.setAttribute("poster", `./images/Dota2Logo.svg`);
      heroVideoSourceNode.setAttribute("src", `./images/Dota2Logo.svg`);
      heroVideoNodeFallbackImgNode.setAttribute("src", `./images/Dota2Logo.svg`);
      heroAttackTypeNode.style.display = 'none';
      heroPrimaryAttrNode.style.display = 'none';
      heroCardNode.style.transform = 'rotateY(0deg)'
      console.log(e.target.getAttribute('data-hero-id'))
      // after click the image, update the hero id and call getGraphqlData() to get speicifi hero data
      heroId = e.target.getAttribute('data-hero-id')
  
      heroData = await getGraphqlData(heroQuery(heroId))
      rolesData = await getGraphqlData(rolesQuery())
      if (heroData && heroesData && rolesData) {
        heroCardNode.style.transform = 'rotateY(180deg)'
    
        heroPrimaryAttrNode.style.display = 'flex';
        heroAttackTypeNode.style.display = 'flex';
      }
      // after click the image, we need to update the hero video base on its shortName
      const { shortName, abilities, talents, language, stats, roles } = heroData.data.constants.hero;
      const { attackType, primaryAttribute, startingMagicArmor, hpBarOffset, agilityBase, agilityGain, strengthBase, strengthGain, mpRegen, intelligenceBase, intelligenceGain, startingDamageMin, startingDamageMax, attackRange, attackRate, startingArmor, moveSpeed, visionNighttimeRange, visionDaytimeRange, moveTurnRate } = stats;
      updateHero(rolesData, shortName, language, roles, attackType, primaryAttribute, startingMagicArmor, hpBarOffset, agilityBase, agilityGain, strengthBase, strengthGain, mpRegen, intelligenceBase, intelligenceGain, startingDamageMin, startingDamageMax, attackRange, attackRate, startingArmor, moveSpeed, visionNighttimeRange, visionDaytimeRange, moveTurnRate, abilities, talents)
    })
  }

  
}

main()

/**
 * Filter Hero base primary attribute
 * @param {Array} heros - All heroes data
 * @param {String} primaryAttribute - Hero primary attribute
 * @returns 
 */
function filterHerosBasePrimaryAttr(heros, primaryAttribute) {
  heros = heros.filter(hero => hero['stats']['primaryAttribute'] === primaryAttribute)
  const list = document.createElement('div')
  list.classList.add('list')
  //heroListNode
  for (let hero of heros) {
    const heroNode = document.createElement('div')
    const heroImgNode = document.createElement('img')
    heroImgNode.setAttribute('src', `${STRATZ_HERO_URL}/${hero.shortName}_vert.png`)
    heroImgNode.setAttribute('loading', 'lazy')
    heroImgNode.setAttribute('data-hero-id', `${hero.id}`)
    heroNode.classList.add('heroes-card')
    heroNode.setAttribute('data-complexity-value', hero['stats']['complexity'])
    heroNode.setAttribute('data-attacktype-value', hero['stats']['attackType'])
    heroNode.append(heroImgNode)
    list.appendChild(heroNode)
  }
  return `
  <div class="hero-list-${primaryAttrList[primaryAttribute]}">
      <h2 class="hero-list-heading"><img src="./images/${primaryAttrList[primaryAttribute]}.png" alt="Strenth hereos">${formatText(primaryAttrList[primaryAttribute], "_", 1)}</h2>
      ${list.innerHTML}
  </div>`
}

/**
 * General update
 * @param {string} shortName - Hero shortName for video
 * @param {string} language - Hero display name base on language
 * @param {arrayy} roles - List hero roles
 * @param {string} attackType - Hero attack type
 * @param {string} primaryAttribute - Hero primary attribute
 * @param {number} startingMagicArmor - Hero starting magic armor
 * @param {number} hpBarOffset - Hero health regeneration
 * @param {number} strengthBase - Hero base strenth
 * @param {number} mpRegen - Hero mana regeneration
 * @param {number} intelligenceBase - Hero base intelligence
 * @param {number} agilityBase - Hero base agility
 * @param {number} agilityGain - Hero agility gain
 * @param {number} intelligenceGain - Hero intelligence gain
 * @param {number} strengthGain - Hero strength gain
 * @param {number} startingDamageMin - Hero starting min damage
 * @param {number} startingDamageMax - Hero starting max damage
 * @param {number} attackRange - Hero attack range
 * @param {number} attackRate - Hero attack rate
 * @param {number} startingArmor - Hero starting armor
 * @param {number} startingMagicArmor - Hero starting magic armor
 * @param {number} moveSpeed - Hero move speed
 * @param {number} visionNighttimeRange - Hero nighttime vision range
 * @param {number} visionDaytimeRange - Hero daytime vision range
 * @param {number} moveTurnRate - Hero move turn rate
 * @param {Obj} rolesData - List all roles
 * @param {array} abilities - Hero abilities
 * @param {array} talents - Hero talents
 */
function updateHero(rolesData, shortName, language, roles, attackType, primaryAttribute, startingMagicArmor, hpBarOffset, agilityBase, agilityGain, strengthBase, strengthGain, mpRegen, intelligenceBase, intelligenceGain, startingDamageMin, startingDamageMax, attackRange, attackRate, startingArmor, moveSpeed, visionNighttimeRange, visionDaytimeRange, moveTurnRate, abilities, talents) {
  setHeroVideo(shortName)
  setHeroName(language.displayName)
  setHeroAttackType(attackType)
  setHeroPrimaryAttribute(primaryAttribute)
  setHeroBase(primaryAttribute, agilityBase, agilityGain, intelligenceBase, intelligenceGain, strengthBase, strengthGain)
  setHeroRoles(rolesData.data.constants.roles, roles)
  setHeroHPMP(hpBarOffset, strengthBase, mpRegen, intelligenceBase)
  setHeroBasic(startingDamageMin, startingDamageMax, attackRange, attackRate, startingArmor, startingMagicArmor, moveSpeed, visionNighttimeRange, visionDaytimeRange, moveTurnRate)
  setHeroAbilities(abilities);
  setHeroTalents(talents);
  setHeroAbilityHover(abilities)
  setHeroScepterShard(abilities)
}

// img tag fallbacka dota2 logo if on error
const imgs = document.getElementsByTagName('img')
for (let i of imgs) {
  i.setAttribute('onerror', `this.src="${IMG_ONERROR}"`)
}

  /**
   * Set hero video
   * @param {string} shortName - Hero shortName for video
   */
 function setHeroVideo(shortName) {
  // video poster
  heroVideoNode.setAttribute("poster", VIDEO_URL + shortName + ".png");
  heroVideoNodeFallbackImgNode.setAttribute("src", VIDEO_URL + shortName + ".png");

  heroVideoSourceNode.setAttribute("src", VIDEO_URL + shortName + ".webm");
  heroVideoNode.autoplay = true  
}

/**
 * Set hero display name
 * @param {string} displayName - Hero display name base on language
 */
function setHeroName(displayName) {
  heroNameNode.innerHTML = displayName
}

/**
 * Set hero attack type image
 * @param {string} attackType - Hero attack type
 */
function setHeroAttackType(attackType) {
  heroAttactTypeDom.setAttribute("src", `./images/${attackType.toLowerCase()}.svg`)
}

/**
 * Set hero primary attribute image
 * @param {string} primaryAttribute - Hero primary attribute
 */
function setHeroPrimaryAttribute(primaryAttribute) {
  heroPrimaryAttrDom.setAttribute("src", `./images/${primaryAttrList[primaryAttribute]}.png`)
  //heroPrimaryAttrDom.setAttribute("src", ICON_URL + primaryAttrList[primaryAttribute] + ".png")
}

/**
 * Set hero roles
 * @param {array} rolesData - List all roles
 * @param {array} roles - List hero roles
 */
function setHeroRoles(rolesData, roles) {
  // After change hero id, heroRolesNode need to reset
  heroRolesNode.innerHTML = ''
  for (let role of roles) {
    const heroRolesDom = document.createElement('span');
    heroRolesDom.classList.add('hero-roles')
    heroRolesDom.innerHTML = rolesData[role["roleId"]]['name'] + ", "
    heroRolesNode.appendChild(heroRolesDom);
  }
}

/**
 * Set hero health and mana bar
 * @param {number} hpBarOffset - Hero health regeneration
 * @param {number} strengthBase - Hero base strenth
 * @param {number} mpRegen - Hero mana regeneration
 * @param {number} intelligenceBase - Hero base intelligence
 */
function setHeroHPMP(hpBarOffset, strengthBase, mpRegen, intelligenceBase) {
  const hp = BASE_HEALTH + strengthBase * HP_UNIT;
  const hpGen = (hpBarOffset + strengthBase * BONUS_HEALTH_REGENERATION).toFixed(2)

  const mp = BASE_MANA + intelligenceBase * MP_UNIT;
  const mpGen = (mpRegen + intelligenceBase * BONUS_MANA_REGENERATION).toFixed(2)

  // hero hp mp
  heroHpDom.innerHTML = hp + " / +" + hpGen;
  heroMpDom.innerHTML = mp + " / +" + mpGen;

}

/**
 * Set hero basic: attack, defense, mobility
 * @param {number} startingDamageMin - Hero starting min damage
 * @param {number} startingDamageMax - Hero starting max damage
 * @param {number} attackRange - Hero attack range
 * @param {number} attackRate - Hero attack rate
 * @param {number} startingArmor - Hero starting armor
 * @param {number} startingMagicArmor - Hero starting magic armor
 * @param {number} moveSpeed - Hero move speed
 * @param {number} visionNighttimeRange - Hero nighttime vision range
 * @param {number} visionDaytimeRange - Hero daytime vision range
 * @param {number} moveTurnRate - Hero move turn rate
 */
function setHeroBasic(startingDamageMin, startingDamageMax, attackRange, attackRate, startingArmor, startingMagicArmor, moveSpeed, visionNighttimeRange, visionDaytimeRange, moveTurnRate) {
  // base attack
  const baseAttack = `${startingDamageMin} - ${startingDamageMax}`
  // vision
  const vision = `${visionNighttimeRange} - ${visionDaytimeRange}`
  // attack
  heroBaseAttackDom.innerHTML = baseAttack
  heroAttackRateDom.innerHTML = attackRate.toFixed(2)
  heroAttackRangeDom.innerHTML = attackRange
  // defense
  heroArmorDom.innerHTML = startingArmor.toFixed(2)
  heroMagicResistDom.innerHTML = startingMagicArmor + "%"
  // mobility
  heroTrunRateDom.innerHTML = moveTurnRate.toFixed(2)
  heroMoveSpeedDom.innerHTML = moveSpeed
  heroVisionDom.innerHTML = vision
}

/**
 * Set hero base attribute
 * @param {string} primaryAttribute - Hero primary attribute
 * @param {number} agilityBase - Hero base agility
 * @param {number} agilityGain - Hero agility gain
 * @param {number} intelligenceBase - Hero base intelligence
 * @param {number} intelligenceGain - Hero intelligence gain
 * @param {number} strengthBase - Hero base strength
 * @param {number} strengthGain - Hero strength gain
 */
function setHeroBase(primaryAttribute, agilityBase, agilityGain, intelligenceBase, intelligenceGain, strengthBase, strengthGain) {
  heroBaseNode.innerHTML = ''
  // hero base
  const heroBaseStrGainDom = document.createElement("div");
  heroBaseStrGainDom.classList = ["hero-base-str-gain"]
  
  const heroBaseIntGainDom = document.createElement("div");
  heroBaseIntGainDom.classList = ["hero-base-int-gain"]
  
  const heroBaseAgiGainDom = document.createElement("div");
  heroBaseAgiGainDom.classList = ["hero-base-agi-gain"]

  heroBaseStrGainDom.innerHTML = `${strengthBase} <span>+${strengthGain.toFixed(2)}<span>`
  heroBaseIntGainDom.innerHTML = `${intelligenceBase} <span>+${intelligenceGain.toFixed(2)}<span>`
  heroBaseAgiGainDom.innerHTML = `${agilityBase} <span>+${agilityGain.toFixed(2)}<span>`

  if (primaryAttribute === "str") {
    heroBaseStrGainDom.classList.add('primary-attr');
    heroBaseNode.appendChild(heroBaseStrGainDom)
    heroBaseNode.appendChild(heroBaseIntGainDom)
    heroBaseNode.appendChild(heroBaseAgiGainDom)
  } else if (primaryAttribute === "int") {
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
}

/**
 * 
 * @param {array} abilities - Hero abilities
 */
function setHeroAbilities(abilities) {
  heroAbilitiesListNode.innerHTML = '';
  // get rid of generic hidden abilities
  abilities = abilities.filter(i => i['ability']['name'] !== "generic_hidden")
  // abilities = abilities.filter(i => i['ability']['attributes'])
  // only list normal abilities
  abilities = abilities.filter(i => !i['ability']['stat']['isGrantedByScepter'] && !i['ability']['stat']['isGrantedByShard'])

  const abilitiesIsGrantedByScepter = abilities.filter(i => i['ability']['stat']['isGrantedByScepter'] || (i['ability']['stat']['hasScepterUpgrade'] && i['ability']['language']['aghanimDescription']))[0]
  // if isGrantedByScepter then use the language/description directily
  // if isGrantedByScepter must hasScepterUpgrade
  // hasScepterUpgrade
  const abilitiesIsGrantedByShard = abilities.filter(i => i['ability']['stat']['isGrantedByShard'] || i['ability']['language']['shardDescription'])[0]

  // append hero abilities
  for (let i of abilities) {
    const heroAbilityDom = document.createElement('img');
    heroAbilityDom.setAttribute("onerror", `this.src="${IMG_ONERROR}"`)
    heroAbilityDom.setAttribute("src", `${STRATZ_ABLITY_URL}/${i['ability']['name']}.png`)
    heroAbilityDom.setAttribute("data-ability", i['ability']['name']);
    heroAbilityDom.classList.add('hero-ability');
    if (i['ability']['stat']['isUltimate']) {
      heroAbilityDom.classList.add('hero-ability-isUltimate');
    }
    heroAbilitiesListNode.appendChild(heroAbilityDom);
  }
  if (!abilitiesIsGrantedByScepter && !abilitiesIsGrantedByShard) {
    heroScepterShardNode.setAttribute('src', './images/aghs_scepter_0.png')
  } else {
    heroScepterShardNode.setAttribute('src', './images/aghs_scepter.png')
  }
}

async function setHeroTalents(talents) {
  heroTalentTooltipNode.innerHTML = '';
  console.log(`loading talents`)
  // heroTalentsData = await getGraphqlData(heroTalentQuery())
  // talents
  talents = talents.reverse();
  // append hero talent
  for (let talent of talents) {
    const heroTalentsDom = document.createElement('span');
    heroTalentTooltipNode.appendChild(heroTalentsDom);
    const heroTalentData = await getGraphqlData(heroTalentQuery(talent["abilityId"]))
    heroTalentsDom.innerHTML = heroTalentData.data.constants.ability.language.displayName ?? 'loading';
    heroTalentsDom.classList = [`talent-rows item${talent["slot"]}`]
  }

  if (heroTalentTooltipNode.getElementsByTagName('span').length === 8) {
    
    console.log(`loading finish`)
  }
  
}


// hover on scepter shard node
heroScepterShardNode.addEventListener("mouseover", (e) => {
  const heroScepterShard = e.target;
  const heroCard = e["path"].filter(i => i["className"] === 'hero-card')[0];
  const heroAbilitiesTalent = e["path"].filter(p => p["className"] === 'hero-abilities-talent')[0];

  heroScepterShardTooltipNode.style.display = 'flex'
  // we need to displayy it then get the offsetHieght and width
  const tooltipHeight = heroScepterShardTooltipNode.offsetHeight;
  const tooltipWidth = heroScepterShardTooltipNode.offsetWidth;

  const tooltipX = heroCard["offsetLeft"] + heroScepterShard["offsetLeft"] + heroScepterShard["width"]/2 - tooltipWidth/2 + heroAbilitiesTalent['offsetLeft'] + 'px'
  const tooltipY = heroCard["offsetTop"] + heroScepterShard["offsetTop"] - tooltipHeight + heroAbilitiesTalent['offsetLeft'] + 'px'

  heroScepterShardTooltipNode.style.left = tooltipX;
  heroScepterShardTooltipNode.style.top = tooltipY;
})

heroScepterShardNode.addEventListener("mouseout", () => {
  heroScepterShardTooltipNode.style.display = 'none'
})


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


function setHeroAbilityHover(abilities) {
  const heroAbilitiesList = heroCardFrontNode.getElementsByClassName('hero-ability')
  for (let i of heroAbilitiesList) {
    i.addEventListener('mouseover', (e) => {
      console.log(e)
      const heroAbility = e.target
      const heroCard = e["path"].filter(p => p["className"] === 'hero-card')[0];
      const heroAbilitiesTalent = e["path"].filter(p => p["className"] === 'hero-abilities-talent')[0];

      heroAbilityTooltipNode.innerHTML = abilityTooltipTem(heroAbility.getAttribute('data-ability'), abilities);
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
  // hover on the ability node
// abilities tooltip content teamplate

const abilityTooltipTem =  (abilityName, abilities) => {
  const ability = abilities.find(ability => ability.ability.name === abilityName)
  console.log(ability)
  const { name, language, attributes, stat } = ability.ability
  const { cooldown, manaCost, unitDamageType, dispellable, spellImmunity, unitTargetTeam} = stat
  const { displayName, description } = language
  const imgData = `${STRATZ_ABLITY_URL}/${name}.png`;

  let attribData = '';
  if (attributes) {
    for (let attr of attributes) {
      const { name, value } = attr
      const nameData = name.replaceAll('_', ' ').toUpperCase();
      const valueData = value.replaceAll(' ', ' / ')
      attribData += `<div class="item-row"><label>${nameData}:</label><span class="item-value"> ${valueData} </span></div>`
    }
  }

  let dmgTypeText;

  if (unitDamageType === 1) {
    dmgTypeText = 'red-txt'
  } else if (unitDamageType === 2) {
    dmgTypeText = 'blue-txt'
  } else {
    dmgTypeText = 'agree-txt'
  }

  const mcData = manaCost !== null ? manaCost.join(' / ') : 'NA';
  const cdData = cooldown !== null ? cooldown.join(' / ') : 'NA';

  // whether the ability isUpgrade isGranded scepter or shard
  //hasScepterUpgrade: true
  //isGrantedByScepter: true
  //isGrantedByShard: false

  // some behavior is string only, some are array
  // const behaviorHTML = behavior ? `<div class="item-row"><label>TARGET:</label> ${behaviorAbilityList(behavior)}</div>` : '';
  const dispellableHTML = dispellable === 'YES' ? `<div class="item-row"><label>DISPELLABLE:</label> ${dispellable}</div>` : '';
  
  const unitTargetTeamHTML = unitTargetTeam ? `<div class="item-row"><label>DAMAGE AFFECTS:</label> ${formatText(DOTA_UNIT_TARGET_TEAM[unitTargetTeam], '_', 4)}</div>` : '';

  const dmgTypeHTML = unitDamageType ? `<div class="item-row"><label>DAMAGE TYPE:</label><span class="${dmgTypeText}">${formatText(DAMAGE_TYPES[unitDamageType], '_', 2)}</span></div>` : '';
  
  const spellImmunityText = spellImmunity !== 4 ? 'green-txt' : 'red-txt';
  const spellImmunityHTML = spellImmunity ? `<div class="item-row"><label>PIERCES SPELL IMMUNITY:</label><span class="${spellImmunityText}">${spellImmunityList[spellImmunity]}</span></div>` : '';
  return `
    <div class="item-main box">
      <img height="50px" src="${imgData}" onerror="this.src='${IMG_ONERROR}'" />
      <div class="item-main-right">
        <h3>${displayName}</h3>
      </div>
    </div>
    <div class="item-sub box">
      ${unitTargetTeamHTML}
      ${dispellableHTML}
      ${dmgTypeHTML}
      ${spellImmunityHTML}
    </div>
    <div class="item-desc box">${description[0]}</div>
    ${attributes ?
    `<div class="item-sub box">
      ${attribData}
    </div>`
    : '' }
    
    ${manaCost !== null && cooldown !== null ?
    `<div class="item-mc-cd">
      ${manaCost !== null ? 
      `<span class="item-mc">
        <img width="15px" height="15px" src="./images/cooldown.png">
        ${mcData}
      </span>`
      : '' }
      ${cooldown !== null ? 
      `<span class="item-cd">
        <span class="mana-icon"></span>
        ${cdData}
      </span>`
      :'' }
    </div>`
    : ''}
  `
}


function setHeroScepterShard(abilities) {
  heroScepterShardTooltipNode.innerHTML = '';
  console.log(abilities)
  abilities = abilities.filter(i => i['ability']['name'] !== "generic_hidden")

  const abilitiesIsGrantedByScepter = abilities.filter(i => i['ability']['stat']['isGrantedByScepter'] || (i['ability']['stat']['hasScepterUpgrade'] && i['ability']['language']['aghanimDescription']))[0]
  // if isGrantedByScepter then use the language/description directily
  // if isGrantedByScepter must hasScepterUpgrade
  // hasScepterUpgrade
  const abilitiesIsGrantedByShard = abilities.filter(i => i['ability']['stat']['isGrantedByShard'] || i['ability']['language']['shardDescription'])[0]
  // shardDescription might not have isGrantedByShard

  return heroScepterShardTooltipNode.innerHTML = `
  ${scepterShardTooltipTem(abilitiesIsGrantedByScepter, "scepter")}
  <div class="divided"></div>
  ${scepterShardTooltipTem(abilitiesIsGrantedByShard, "shard")}`
}


const scepterShardTooltipTem = (ability, isScepterOrShard) => {
  
  console.log(ability)
  if (!ability) { 
    return `<div class="${isScepterOrShard} scepter-shard-row">
      <div class="item-main box">
        <img src="images/${isScepterOrShard}_0.png" alt="${isScepterOrShard} img" />
        <div class="item-main-right">
          <h3>Aghanim's ${isScepterOrShard}</h3>
        </div>
      </div>
      <div class="no-detail">Current the hero has no Aghanim</div>
    </div>`
  }
  const { stat, language, name, attributes } = ability['ability']
  const { hasScepterUpgrade, isGrantedByShard, cooldown, manaCost, unitDamageType, dispellable, spellImmunity, unitTargetTeam } = stat
  const { aghanimDescription, description, displayName, shardDescription } = language
  const imgData = `${STRATZ_ABLITY_URL}/${name}.png`;
  let isScepterUpgradeHTML;
  let upgradeOrNewText = 'UPGRADE';
  let newAbilityHTML = '';

  if (isScepterOrShard === 'scepter') {
    isScepterUpgradeHTML =  hasScepterUpgrade && aghanimDescription ? aghanimDescription : description;
    upgradeOrNewText =  hasScepterUpgrade && aghanimDescription ? 'UPGRADE' : 'NEW'
  }
  if (isScepterOrShard === 'shard') {
    upgradeOrNewText = isGrantedByShard ? 'NEW' : 'UPGRADE'
  }

  if (upgradeOrNewText === 'NEW') {
    let attribData = '';
    if (attributes) {
      for (let attr of attributes) {
        const { name, value } = attr
        const nameData = name.replaceAll('_', ' ').toUpperCase();
        const valueData = value.replaceAll(' ', ' / ')
        attribData += `<div class="item-row"><label>${nameData}:</label><span class="item-value"> ${valueData} </span></div>`
      }
    }

    let dmgTypeText;

    if (unitDamageType === 1) {
      dmgTypeText = 'red-txt'
    } else if (unitDamageType === 2) {
      dmgTypeText = 'blue-txt'
    } else {
      dmgTypeText = 'agree-txt'
    }

    const mcData = manaCost !== null ? manaCost.join(' / ') : 'NA';
    const cdData = cooldown !== null ? cooldown.join(' / ') : 'NA';

    // whether the ability isUpgrade isGranded scepter or shard
    //hasScepterUpgrade: true
    //isGrantedByScepter: true
    //isGrantedByShard: false

    // some behavior is string only, some are array
    // const behaviorHTML = behavior ? `<div class="item-row"><label>TARGET:</label> ${behaviorAbilityList(behavior)}</div>` : '';
    const dispellableHTML = dispellable === 'YES' ? `<div class="item-row"><label>DISPELLABLE:</label> ${dispellable}</div>` : '';
    
    const unitTargetTeamHTML = unitTargetTeam ? `<div class="item-row"><label>DAMAGE AFFECTS:</label> ${formatText(DOTA_UNIT_TARGET_TEAM[unitTargetTeam], '_', 4)}</div>` : '';

    const dmgTypeHTML = unitDamageType ? `<div class="item-row"><label>DAMAGE TYPE:</label><span class="${dmgTypeText}">${formatText(DAMAGE_TYPES[unitDamageType], '_', 2)}</span></div>` : '';
    
    const spellImmunityText = spellImmunity !== 4 ? 'green-txt' : 'red-txt';
    const spellImmunityHTML = spellImmunity ? `<div class="item-row"><label>PIERCES SPELL IMMUNITY:</label><span class="${spellImmunityText}">${spellImmunityList[spellImmunity]}</span></div>` : '';
  

    newAbilityHTML = `
      <div class="item-sub box">
        ${unitTargetTeamHTML}
        ${dispellableHTML}
        ${dmgTypeHTML}
        ${spellImmunityHTML}
      </div>
      ${attributes ?
      `<div class="item-sub box">
        ${attribData}
      </div>`
      : '' }
      
      ${manaCost !== null && cooldown !== null ?
      `<div class="item-mc-cd">
        ${manaCost !== null ? 
        `<span class="item-mc">
          <img width="15px" height="15px" src="./images/cooldown.png">
          ${mcData}
        </span>`
        : '' }
        ${cooldown !== null ? 
        `<span class="item-cd">
          <span class="mana-icon"></span>
          ${cdData}
        </span>`
        :'' }
      </div>`
      : ''}`
  }


  return  `<div class="${isScepterOrShard} scepter-shard-row">
  <div class="item-main box">
    <img src="images/${isScepterOrShard}_1.png" alt="${isScepterOrShard} img" />
    <div class="item-main-right">
      <h3>Aghanim's ${isScepterOrShard}</h3>
    </div>
  </div>
  <div class="item-detail">
    <img class="ability-img" src="${imgData}" />
    <div class="item-detail-right">
      <h3>${displayName} <span>${upgradeOrNewText}</span></h3>
      <p>${isScepterOrShard === 'scepter' ? isScepterUpgradeHTML : shardDescription}</p>

      
        ${newAbilityHTML}
    </div>
  </div>
</div>`
}

const complexityNode = document.getElementsByClassName('complexity')
// conver the HTMLColletion to arry
var complexities = Array.prototype.slice.call( complexityNode )
complexities.forEach((complexity, index, arr)  => {
  complexity.addEventListener('click', (e) => {
    const st = e.target.getAttribute('data-selected')
    console.log(complexity.getAttribute('data-selected'))
    // reset all data-select, and reset all actived
    arr.map(i => {
      i.setAttribute('data-selected', 'false')
      i.classList.remove('filter-actived')
    })
    // previous item will add actived class
    const activeds = arr.slice(0, index + 1)
    activeds.map(a => a.classList.add('filter-actived'))
    e.target.setAttribute('data-selected', st === 'false' ? 'true' : 'false')

    // after e.target is true, we wanna reset if click again
    if (st === "true") {
      arr.map(i => {
        i.setAttribute('data-selected', 'false')
        i.classList.remove('filter-actived')
      })
    }

    // logic for filter heros
    for(let heroCard of heroCards) {
      if (heroCard.getAttribute('data-complexity-value') !== e.target.getAttribute('data-complexity-value') && st === 'false') {
        heroCard.classList.add('grey-out')
      } else {
        heroCard.classList.remove('grey-out')
      }
    }
    
  });
})