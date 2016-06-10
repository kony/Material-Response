var X, Y;
var srcWidth, srcHeight;
var widgetCenterX, widgetCenterY, widgetWidth, widgetHeight, diameter;
var orgiX, orgiY, orgiWidth, orgiHeight, curWidget;
/*****************************

Function: disappearImages

Description: This function gets invoked when the button is clicked on the screen it animates, the images on the screen disappear radially

******************************/
function materialResponse(currentWidget, x, y) {
    kony.print("\n$$$$$$$      in disc_blur function   $$$$$$$$$$\n");
    X = x;
    Y = y;
    kony.print("\n\n X : " + X + "\n\n Y : " + Y + "\n\n");
    getDeviceScreenInfo();
    getCurrentWidgetInfo(currentWidget);
    setTheBoarderContInfo();
    calculatingTheDiameter();
    //   srcWidth=kony.os.deviceInfo().screenWidth;
    //   srcHeight=kony.os.deviceInfo().screenHeight;
    //   kony.print("\n\n srcWidth : "+srcWidth+"\n\n srcHeight : "+srcHeight+"\n\n");
    //   kony.print("\n\n widgetCenterX : "+currentWidget+"\n\n widgetCenterY : "+frm1[currentWidget]+"\n\n");
    //   widgetCenterX=frm1[currentWidget].centerX;
    //   widgetCenterY=frm1[currentWidget].centerY;
    //   kony.print("\n\n widgetCenterX : "+widgetCenterX+"\n\n widgetCenterY : "+widgetCenterY+"\n\n");
    //   widgetWidth=frm1[currentWidget].width;
    //   widgetHeight=frm1[currentWidget].height;
    //   frm1.boarderCont.centerX=widgetCenterX;
    //   frm1.boarderCont.centerY=widgetCenterY;
    //   frm1.boarderCont.width=widgetWidth;
    //   frm1.boarderCont.height=widgetHeight;
    //   widgetWidth = widgetWidth.match(/\d/g);
    //   widgetWidth = widgetWidth.join("");
    //   widgetHeight = widgetHeight.match(/\d/g);
    //   widgetHeight = widgetHeight.join("");
    //   kony.print("\n\n widget Width : "+widgetWidth+"\n\n widget Height : "+widgetHeight+"\n\n");  
    //   diameter=Math.sqrt((Math.pow(widgetWidth,2)+Math.pow(widgetHeight,2)));
    //   diameter*=(srcWidth/100)*2;
    // //   if(widgetWidth>widgetHeight)
    // //     diameter=(widgetWidth*srcWidth)/50;
    // //   else
    // //     diameter=(widgetHeight*srcHeight)/50;
    //   Math.floor( diameter);
    //   kony.print("\n\n diameter : "+diameter+"\n\n ");
    kony.print("\n\n ripple : " + frm1.ripple + "\n\n ");
    frm1.ripple.animate(animBlur(), animConfig(), {
        animationStart: anistart,
        animationEnd: aniend
    });
    kony.print("\n\n ripple : " + frm1.ripple + "\n\n ");
}
/*****************************

Function: getDeviceScreenInfo

Description: This function gets the details of the device screen

******************************/
function getDeviceScreenInfo() {
    srcWidth = kony.os.deviceInfo().screenWidth;
    srcHeight = kony.os.deviceInfo().screenHeight;
    kony.print("\n\n srcWidth : " + srcWidth + "\n\n srcHeight : " + srcHeight + "\n\n");
}
/*****************************

Function: getCurrentWidgetInfo

Description: This function gets the details of the current widget where the user is clicking

******************************/
function getCurrentWidgetInfo(currentWidget) {
    widgetCenterX = frm1[currentWidget].centerX;
    widgetCenterY = frm1[currentWidget].centerY;
    kony.print("\n\n widgetCenterX : " + widgetCenterX + "\n\n widgetCenterY : " + widgetCenterY + "\n\n");
    widgetWidth = frm1[currentWidget].width;
    widgetHeight = frm1[currentWidget].height;
    kony.print("\n widgetWidth : " + widgetWidth + "\t\t widgetHeight : " + widgetHeight + "\n");
}
/*****************************

Function: setTheBoarderContInfo

Description: This function sets the details for the boarder container which is being animated

******************************/
function setTheBoarderContInfo() {
    frm1.boarderCont.centerX = widgetCenterX;
    frm1.boarderCont.centerY = widgetCenterY;
    frm1.boarderCont.width = widgetWidth;
    frm1.boarderCont.height = widgetHeight;
}
/*****************************

Function: calculatingTheDiameter

Description: This function calculates the diameter to which the container should be expanded

******************************/
function calculatingTheDiameter() {
    widgetWidth = widgetWidth.match(/\d/g);
    widgetWidth = widgetWidth.join("");
    widgetHeight = widgetHeight.match(/\d/g);
    widgetHeight = widgetHeight.join("");
    kony.print("\n\n widget Width : " + widgetWidth + "\n\n widget Height : " + widgetHeight + "\n\n");
    diameter = Math.sqrt((Math.pow(widgetWidth, 2) + Math.pow(widgetHeight, 2)));
    diameter *= (srcWidth / 100) * 2;
    Math.floor(diameter);
    kony.print("\n\n diameter : " + diameter + "\n\n ");
}
/*****************************

Function: anistart

Description: This function gets invoked before the animation starts

******************************/
function anistart() {
    kony.print("\n$$$$$$$      in anistart function   $$$$$$$$$$\n");
    frm1.boarderCont.isVisible = true;
    frm1.ripple.isVisible = true;
}
/*****************************

Function: aniend

Description: This function gets invoked after the animation

******************************/
function aniend() {
    kony.print("\n$$$$$$$      in aniend function   $$$$$$$$$$\n");
    frm1.boarderCont.isVisible = false;
    frm1.ripple.isVisible = false;
}
/*****************************

Function: animConfig

Description: This function has the details of the configuration of the animate function

******************************/
function animConfig() {
    kony.print("\n$$$$$$$      in animConfig function   $$$$$$$$$$\n");
    var config = {
        "duration": 0.5,
        "direction": kony.anim.DIRECTION_ALTERNATE,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.FILL_MODE_BOTH
    };
    return config;
}
/*****************************

Function: animBlur

Description: This function which has the steps of the animate function
******************************/
function animBlur() {
    var animDefinitionOne = {
        0: {
            "width": 1,
            "height": 1,
            "centerX": X,
            "centerY": Y,
            "opacity": 0,
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
        },
        30: {
            "width": diameter / 2,
            "height": diameter / 2,
            "opacity": 0.25,
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
        },
        60: {
            "width": diameter,
            "height": diameter,
            "opacity": 0.5,
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
        },
        100: {
            "opacity": 0
        }
    }
    animDef = kony.ui.createAnimation(animDefinitionOne);
    return animDef;
}