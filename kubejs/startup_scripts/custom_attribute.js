////
// Creates Custom Attributes for Mine and Slash
//// renik
// Author: Mahj? (all credits to someone over at CTE2: https://www.curseforge.com/minecraft/modpacks/craft-to-exile-2)

const $RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")

StartupEvents.registry("attribute", e => {
    e.createCustom("kubejs:ele_resist", () => new $RangedAttribute("Elemental Resistance", 1, 0, 100).setSyncable(true));
    // e.createCustom("kubejs:all_resist", () => new $RangedAttribute("Elemental Resistance", 1, 0, 10).setSyncable(true));
    e.createCustom("kubejs:chaos_resist", () => new $RangedAttribute("Chaos Resistance", 1, 0, 10).setSyncable(true));
    e.createCustom("kubejs:gear_defense", () => new $RangedAttribute("Gear Defense", 1, 0, 10).setSyncable(true));
    e.createCustom("kubejs:all_stats", () => new $RangedAttribute("All Stats", 1, 0, 10).setSyncable(true));
    e.createCustom("kubejs:bonus_exp", () => new $RangedAttribute("Bonus Experience", 1, 0, 10).setSyncable(true));

    e.createCustom("kubejs:move_speed", () => new $RangedAttribute("Move Speed", 1, 0, 10).setSyncable(true));
    e.createCustom("kubejs:critical_hit", () => new $RangedAttribute("Critical Hit", 1, 0, 10).setSyncable(true));
    e.createCustom("kubejs:magic_find", () => new $RangedAttribute("Magic Find", 1, 0, 10).setSyncable(true));
    e.createCustom("kubejs:plus_lvl_all_spells", () => new $RangedAttribute("Plus Level All Skills", 1, 0, 10).setSyncable(true));
});

EntityJSEvents.attributes(event => {
    event.modify('minecraft:player', attribute => {
        attribute.add("kubejs:ele_resist", 0.0);
        attribute.add("kubejs:chaos_resist", 0.0);
        attribute.add("kubejs:gear_defense", 0.0);
        attribute.add("kubejs:all_stats", 0.0);
        attribute.add("kubejs:bonus_exp", 0.0);

        attribute.add("kubejs:move_speed", 0.0);
        attribute.add("kubejs:critical_hit", 0.0);
        attribute.add("kubejs:magic_find", 0.0);
        attribute.add("kubejs:plus_lvl_all_spells", 0.0);
    })
}) 