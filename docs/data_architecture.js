var architectureEntries = [
    {
    ring: ADOPT,
    label: "MVVM",
    active: false,
    moved: 0
},
{
    ring: ADOPT,
    label: "Coordinator",
    active: false,
    moved: 0
},
{
    ring: ADOPT,
    label: "MVP",
    active: false,
    moved: 0
},
{
    ring: TRIAL,
    label: "MVI",
    active: false,
    moved: 0
},
{
    ring: ASSESS,
    label: "MMVM + Redux",
    active: false,
    moved: 0
},
{
    ring: HOLD,
    label: "MVC",
    active: false,
    moved: 0
}
]
    .map(entry => {
        entry.quadrant = ARCHITECTURE;
        return entry;
    });