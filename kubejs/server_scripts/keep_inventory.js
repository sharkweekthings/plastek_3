////
// default gameRules for P3
//// renik
// Author: Arug (KubeJS Discord) https://discord.com/channels/303440391124942858/1152500982475915294/1152500982475915294

ServerEvents.loaded(event => {
  if (event.server.persistentData.gameRules) return
  event.server.gameRules.set("keepInventory", true)

  event.server.persistentData.gameRules = false
})