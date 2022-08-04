export const itemsQuery = () => {
  return JSON.stringify({
    query: `{
      constants {
        items {
          id
          name
          displayName
          shortName
          isSupportFullItem
          language {
            displayName
            description
            lore
            notes
            attributes
          }
          stat {
            behavior
            unitTargetType
            unitTargetTeam
            unitTargetFlags
            fightRecapLevel
            castRange
            castPoint
            cooldown
            manaCost
            channelTime
            sharedCooldown
            cost
            shopTags
            aliases
            quality
            isSellable
            isDroppable
            isPurchasable
            isSideShop
            isStackable
            isPermanent
            isHideCharges
            isRequiresCharges
            isDisplayCharges
            isSupport
            isAlertable
            isTempestDoubleClonable
            stockMax
            initialCharges
            initialStock
            stockTime
            initialStockTime
            isRecipe
            needsComponents
            upgradeItem
            upgradeRecipe
            itemResult
          }
          attributes {
            name
            value
          }
          components {
            index
            componentId
          }
          image
        }
      }
    }
    `
  })
}