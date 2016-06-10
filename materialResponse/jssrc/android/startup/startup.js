//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "materialResponse",
    appName: "materialResponse",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.40",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "materialResponse",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://acme-inc.konycloud.com/materialResponse/MWServlet",
    secureurl: "https://acme-inc.konycloud.com/materialResponse/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frm1Globals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        appservice: AS_AppEvents_ef431ad6d4bb49dc8cff5a416087d71e,
        showstartupform: function() {
            frm1.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;