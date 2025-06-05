////
// remove recipes
//// renik

// //
// ServerEvents.projecteEMC(event => {
//   Platform.get().getItemIds().forEach(id => {
//     // Remove pamhc2crops seed items
//     if (id.namespace === 'pamhc2crops' && id.path.endsWith('seeditem')) {
//       event.remove(id)
//     }

//     // Remove all Patchouli books (e.g., patchouli:guide_book, etc.)
//     if (id.namespace === 'patchouli' && id.path.includes('book')) {
//       event.remove(id)
//     }
//   })

//   // Optional explicit removals
//   event.remove('minecraft:wheat')
//   event.remove('minecraft:iron_sword')
// })

// Log all available server events at startup
console.log("Available server event types:")
console.log(Object.keys(ServerEvents))