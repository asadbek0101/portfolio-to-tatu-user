export enum RouteLinks{
    HomeRoute = "/",
    ArticleRoute = "/article",
    ExposureRoute = "/exposure",
    QualificationRoute = "/qualification",
    DGURoute = "/dgu",
    IndependentWorkRoute = "/independent-work",
    MyInformationRoute = "/my-information",
    PracticalWorkRoute = "/practical-work",
    ImageRoute = "/image"
}

export enum RouteLinksWithPath{
    HomeRoute = "/",
    ArticleRoute = "/article/:tab?",
    ExposureRoute = "/exposure/:tab?",
    QualificationRoute = "/qualification/:tab?",
    DGURoute = "/dgu/:tab?",
    IndependentWorkRoute = "/independent-work/:tab?",
    MyInformationRoute = "/my-information/:tab?",
    PracticalWorkRoute = "/practical-work/:tab?",
    ImageRoute = "/image/:tab?"
}

export enum ContainerTabs {
    Menu = "menu",
    View = "show"
}