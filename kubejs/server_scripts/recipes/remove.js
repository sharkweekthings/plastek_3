////
// remove recipes
//// renik

//
// ServerEvents.recipes(event => {
// //

//   //REMOVE
//   event.remove({id: 'toybox:toybox_recipe_2'})

// //
// })
// //

// ProjectE.eventName(event => {
//   event.item("item", 32) // item with emc value of 32
//   event.item("#item/tag", 12)

//   event.item("a")
// })

ProjectEEvents.setEMC(event => {
    Ingredient.of("#forge:seeds").getStacks().forEach(element => {
        event.setEMC(element.id, 0)// sets the absolute emc value of an item
    });
})