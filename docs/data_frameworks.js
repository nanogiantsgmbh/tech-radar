var frameworksEntries = [
    {
        ring: ADOPT,
        label: "UIKit",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "Alamofire",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "React",
        active: false,        
        moved: 0
    },
    {
        ring: ASSESS,
        label: "deno",
        active: true,
        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "Vue",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "React-Native",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "NestJS",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "Express",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "Gradle",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "Dagger",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "RxJava3",
        active: false,        
        moved: 0
    },
    {
        ring: ADOPT,
        label: "OKHttp",
        active: false,        
        moved: 0
    },
    {
        ring: TRIAL,
        label: "Angular > 2",
        active: false,        
        moved: 0
    },
    {
        ring: TRIAL,
        label: "Atributika",
        active: false,        
        moved: 0
    },
    {
        ring: TRIAL,
        label: "KMM",
        active: false,        
        moved: 0
    },
    {
        ring: TRIAL,
        label: "Jetpack Compose",
        active: false,        
        moved: 0
    },
    {
        ring: TRIAL,
        label: "SwiftUI",
        active: false,        
        moved: 1
    },
    {
        ring: TRIAL,
        label: "Resolver",
        active: false,        
        moved: 0
    },
    {
        ring: TRIAL,
        label: "Combine",
        active: false,        
        moved: 1
    },
    {
        ring: HOLD,
        label: "RxSwift",
        active: false,        
        moved: -1
    },
    {
        ring: TRIAL,
        label: "Coroutines",
        active: false,        
        moved: 0
    },
    {
        ring: HOLD,
        label: "Angular 1",
        active: false,        
        moved: 0
    },
    {
        ring: HOLD,
        label: "Backbone JS",
        active: false,        
        moved: 0
    },
    {
        ring: HOLD,
        label: "Cordova",
        active: false,        
        moved: 0
    },
    {
        ring: HOLD,
        label: "Spring Boot",
        active: false,        
        moved: 1
    },
    {
        ring: ASSESS,
        label: "GPT-3",
        active: false,        
        moved: 1
    }]
    .map(entry => {
        entry.quadrant = FRAMEWORKS;
        return entry;
    });