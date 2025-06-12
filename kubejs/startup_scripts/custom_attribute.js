////
// Creates Custom Attributes for Mine and Slash
//// renik
// Original Author: Mahj? (all credits to someone over at CTE2: https://www.curseforge.com/minecraft/modpacks/craft-to-exile-2)

const $RangedAttribute = Java.loadClass("net.minecraft.world.entity.ai.attributes.RangedAttribute")

StartupEvents.registry("attribute", e => {
    e.createCustom("kubejs:ele_resist", () => new $RangedAttribute("Elemental Resistance", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:attack_damage", () => new $RangedAttribute("Attack Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_physical_damage", () => new $RangedAttribute("All Physical Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:dodge", () => new $RangedAttribute("Dodge", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:armor", () => new $RangedAttribute("Armor", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:magic_shield", () => new $RangedAttribute("Magic Shield", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:spell_damage", () => new $RangedAttribute("Spell Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_elemental_damage", () => new $RangedAttribute("Spell Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_dot_damage", () => new $RangedAttribute("Spell Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:total_damage", () => new $RangedAttribute("Spell Damage", 1, 0, 100).setSyncable(true));

    e.createCustom("kubejs:water_resist", () => new $RangedAttribute("Water Resistance", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_water_damage", () => new $RangedAttribute("All Water Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:lightning_resist", () => new $RangedAttribute("Lightning Resistance", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_lightning_damage", () => new $RangedAttribute("All Lightning Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:fire_resist", () => new $RangedAttribute("Fire Resistance", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_fire_damage", () => new $RangedAttribute("All Fire Damage", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:chaos_resist", () => new $RangedAttribute("Chaos Resistance", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_chaos_damage", () => new $RangedAttribute("Chaos Resistance", 1, 0, 100).setSyncable(true));


    e.createCustom("kubejs:gear_defense", () => new $RangedAttribute("Gear Defense", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:all_stats", () => new $RangedAttribute("All Stats", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:bonus_exp", () => new $RangedAttribute("Bonus Experience", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:move_speed", () => new $RangedAttribute("Move Speed", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:critical_hit", () => new $RangedAttribute("Critical Hit", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:magic_find", () => new $RangedAttribute("Magic Find", 1, 0, 100).setSyncable(true));
    e.createCustom("kubejs:plus_lvl_all_spells", () => new $RangedAttribute("+ to All Skills", 1, 0, 100).setSyncable(true));
});

EntityJSEvents.attributes(event => {
    event.modify('minecraft:player', attribute => {
        attribute.add("kubejs:ele_resist", 0.0);
        attribute.add("kubejs:attack_damage", 0.0);
        attribute.add("kubejs:all_physical_damage", 0.0);
        attribute.add("kubejs:dodge", 0.0);
        attribute.add("kubejs:armor", 0.0);
        attribute.add("kubejs:magic_shield", 0.0);
        attribute.add("kubejs:spell_damage", 0.0);
        attribute.add("kubejs:all_chaos_damage", 0.0);
        attribute.add("kubejs:all_elemental_damage", 0.0);
        attribute.add("kubejs:all_dot_damage", 0.0);
        attribute.add("kubejs:total_damage", 0.0);

        attribute.add("kubejs:water_resist", 0.0);
        attribute.add("kubejs:all_water_damage", 0.0);
        attribute.add("kubejs:lightning_resist", 0.0);
        attribute.add("kubejs:all_lightning_damage", 0.0);
        attribute.add("kubejs:fire_resist", 0.0);
        attribute.add("kubejs:all_fire_damage", 0.0);
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