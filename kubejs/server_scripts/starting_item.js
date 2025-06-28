////
// starting items for P3
//// renik
// Author: Rad (KubeJS Discord) https://discord.com/channels/303440391124942858/1230535464201486477/1230762583716401202

const starter_items = ["artifacts:umbrella"];

PlayerEvents.loggedIn(e => {
    if(e.player.stages.has('start')) return;
    e.player.stages.add('start');

    e.player.inventory.clear();
    starter_items.forEach(item => e.player.give(item));

    //If you'd like to add starter armor like leather boots
    //e.server.runCommandSilent(`item replace entity ${e.player.username} armor.feet with minecraft:leather_boots`);
});