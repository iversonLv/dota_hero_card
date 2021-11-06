export const heroQuery = (id) => {
 return JSON.stringify({
  query: `{
    constants {
      hero(id: ${id}) {
        id
        name
        displayName
        shortName
        aliases
        gameVersionId
        language {
          displayName
          lore
          hype
        }
        abilities {
          slot
          gameVersionId
          abilityId
          ability {
            id
            name
            uri
            language {
              displayName
              description
              attributes
              lore
              aghanimDescription
              shardDescription
              notes
            }
            stat {
              abilityId
              type
              behavior
              unitTargetType
              unitTargetTeam
              unitTargetFlags
              unitDamageType
              spellImmunity
              modifierSupportValue
              modifierSupportBonus
              isOnCastbar
              isOnLearnbar
              fightRecapLevel
              isGrantedByScepter
              hasScepterUpgrade
              maxLevel
              levelsBetweenUpgrades
              requiredLevel
              hotKeyOverride
              displayAdditionalHeroes
              castRange
              castRangeBuffer
              castPoint
              channelTime
              cooldown
              damage
              manaCost
              isUltimate
              duration
              charges
              chargeRestoreTime
              isGrantedByShard
              dispellable
            }
            attributes {
              name
              value
              linkedSpecialBonusAbilityId
              requiresScepter
            }
            isTalent
          }
        }
        roles {
          roleId
          level
        }
        talents {
          abilityId
          slot
        }
        stats {
          enabled
          heroUnlockOrder
          team
          cMEnabled
          newPlayerEnabled
          attackType
          startingArmor
          startingMagicArmor
          startingDamageMin
          startingDamageMax
          attackRate
          attackAnimationPoint
          attackAcquisitionRange
          attackRange
          primaryAttribute
          strengthBase
          strengthGain
          intelligenceBase
          intelligenceGain
          agilityBase
          agilityGain
          mpRegen
          moveSpeed
          moveTurnRate
          hpBarOffset
          visionDaytimeRange
          visionNighttimeRange
          complexity
        }
      }
    }
  }
  `,
})

};