ItemEvents.tooltip(e => {
    e.addAdvanced(['ocean_recovery:plastic_bottle'], (item, advanced, text) => {
            text.add(1, [
                Text.of('Use Mystical Agriculture or Create to break these down into precious bags.').green()
            ])
    })
})