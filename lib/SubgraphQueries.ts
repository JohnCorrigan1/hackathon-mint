//gets owned players of currently connected wallet tokenIds
const getPlayers = (address: string) =>  `
  query {
        players(where: {owner_contains_nocase: "${address}"}) {
          id
          intelligence
          charisma
          constitution
          dexterity
          luck
          pointsToSpend
          playerClass {
            name
          }
          tokenId
          strength
          wisdom
        }
  } 
  `

//gets player stats by token id
// const getPlayerStats = (tokenId: string) =>`
//     query {
//         players(where: {tokenId: "${tokenId}"}) {
//             charisma
//             constitution
//             dexterity
//             id
//             intelligence
//             level
//             luck
//             pointsToSpend
//             tokenId
//             strength
//             wisdom
//             xp
//             feet {
//               id
//               name
//               rarity
//               slot
//             }
//             head {
//               id
//               name
//               rarity
//               slot
//             }
//             legs {
//               id
//               name
//               rarity
//               slot
//             }
//             body {
//               id
//               name
//               rarity
//               slot
//             }
//           }
//         }
//         `

const getPlayerStats = (tokenId: string, address: string) =>`
    query {
      players(where: {id: "${address}"}) {
        charisma
        constitution
        dexterity
        id
        intelligence
        luck
        pointsToSpend
        tokenId
        strength
        wisdom
        playerClass {
          id
          name
        }
      }
    }`


//gets all classes approved
const getClasses = `
    query {
        playerClasses {
            id
            name
          }
        }
        `

//gets all items approved
const getItems = `
    query {
        `

      
//gets all owned items of currently connected wallet
const getOwnedGear = (address: string) => `
    query {

      `

export { getPlayers, getPlayerStats, getClasses, getItems, getOwnedGear }
