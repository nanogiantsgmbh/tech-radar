var architectureEntries = [
    {
        ring: ASSESS,
        label: "MS Power Apps",
        active: false,
        moved: 1
    }, {
        ring: ASSESS,
        label: "Wappler",
        active: false,
        moved: 1
    }, {
        ring: ASSESS,
        label: "App Smith",
        active: false,
        moved: 1
    }, {
        ring: ASSESS,
        label: "Lobe.ai",
        active: false,
        moved: 1
    }, {
        ring: ASSESS,
        label: "Ragic",
        active: false,
        moved: 1
    }, {
        ring: ASSESS,
        label: "Budibase",
        active: false,
        moved: 1
    }, {
        ring: HOLD,
        label: "Boundless",
        active: false,
        moved: 1
    }, {
        ring: ASSESS,
        label: "Xano",
        active: false,
        moved: 1
    }, {
        ring: TRIAL,
        label: "Peltarion",
        active: false,
        moved: 1
    }, {
        ring: TRIAL,
        label: "Bubble.io",
        active: false,
        moved: 1
    },
]
    .map(entry => {
        entry.quadrant = ARCHITECTURE;
        return entry;
    });