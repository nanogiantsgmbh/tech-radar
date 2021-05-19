var languageEntries = [
    {
        ring: ADOPT,
        label: "Swift",
        active: true,
        moved: 0
    },
    {
        ring: ADOPT,
        label: "TypeScript",
        active: true,
        moved: 0
    },
    {
        ring: 3,
        label: "JavaScript",
        active: true,
        moved: 0
    },
    {
        ring: ADOPT,
        label: "HTML5",
        active: true,
        moved: 0
    },
    {
        ring: ADOPT,
        label: "Kotlin",
        active: true,
        moved: 0
    },
    {
        ring: ADOPT,
        label: "Groovy",
        active: true,
        moved: 0
    },
    {
        ring: ADOPT,
        label: "CSS3",
        active: true,
        moved: 0
    },
    {
        ring: ASSESS,
        label: "WASM",
        active: true,
        moved: 0
    },
    {
        ring: TRIAL,
        label: "PHP",
        active: true,
        moved: 0
    },
    {
        ring: HOLD,
        label: "Objective-C",
        active: true,
        moved: 0
    },
    {
        ring: ASSESS,
        label: "Java (Backend)",
        active: true,
        moved: 0
    }]
    .map(entry => {
        entry.quadrant = LANGUAGES;
        return entry;
    });