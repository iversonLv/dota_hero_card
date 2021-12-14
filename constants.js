export const IMG_ONERROR = "./images/Dota2Logo.svg"

// https://dota2.fandom.com/wiki/Mana_regeneration
// https://dota2.fandom.com/wiki/Mana_regeneration
// https://dota2.fandom.com/wiki/Mana
// https://dota2.fandom.com/wiki/Health
export const HP_UNIT = 20;
export const BASE_HEALTH = 200;
export const BONUS_HEALTH_REGENERATION = 0.1;
export const BASE_MANA = 75;
export const MP_UNIT = 12;
export const BONUS_MANA_REGENERATION = 0.05;

export const PRIMARY_ATTR_LIST = {
  "str": "hero_strength",
  "int": "hero_intelligence",
  "agi": "hero_agility"
}

// https://moddota.com/api/#!/vscripts/DAMAGE_TYPES
export const DAMAGE_TYPES = {
  0: 'DAMAGE_TYPE_NONE',
  1: 'DAMAGE_TYPE_PHYSICAL',
  2: 'DAMAGE_TYPE_MAGICAL',
  4: 'DAMAGE_TYPE_PURE',
  7: 'DAMAGE_TYPE_ALL',
  8: 'DAMAGE_TYPE_HP_REMOVAL',
}

// TODO: not found the mapping on moddota.com
export const SPELL_IMMUNITY_LIST  = {
  1: 'Yes',
  3: 'Yes',
  4: 'No'
}

// https://moddota.com/api/#!/vscripts?search=DOTA_UNIT_TARGET_TEAM
export const  DOTA_UNIT_TARGET_TEAM = {
  0: 'DOTA_UNIT_TARGET_TEAM_NONE',
  1: 'DOTA_UNIT_TARGET_TEAM_FRIENDLY',
  2: 'DOTA_UNIT_TARGET_TEAM_ENEMY',
  3: 'DOTA_UNIT_TARGET_TEAM_BOTH',
  4: 'DOTA_UNIT_TARGET_TEAM_CUSTOM'
}