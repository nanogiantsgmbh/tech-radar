var devOpsEntries = [
    {
        ring: ADOPT,
        label: "Bitrise",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "AppCenter",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "Github",
        active: false,        
        moved: 0
    },
    
    {
        ring: ADOPT,
        label: "TestFlight",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "AWS",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "Travis",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "Docker",
        active: false,        
        moved: 0
    },
    {
        ring: TRIAL,
        label: "Github Actions",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "Swift Package Manager",
        active: false,        
        moved: 0
    },
    {
        ring: TRIAL,
        label: "Danger",
        active: false,        
        moved: 0
    },
    {
        ring: HOLD,
        label: "Sonarqube",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "Sonarcloud",
        active: false,        
        moved: 0
    },
    {
        ring: HOLD,
        label: "Carthage",
        active: false,        
        moved: 0
    },
    {
        ring: HOLD,
        label: "Bitbucket",
        active: false,        
        moved: 0
    },
    {
        ring: TRIAL,
        label: "Azure",
        active: false,        
        moved: 1
    }]
    .map(entry => {
        entry.quadrant = DEV_OPS;
        return entry;
    });