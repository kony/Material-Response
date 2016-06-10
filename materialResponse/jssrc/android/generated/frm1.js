function addWidgetsfrm1() {
    frm1.setDefaultUnit(kony.flex.DP);
    var image1 = new kony.ui.Image2({
        "centerX": "25%",
        "centerY": "12.50%",
        "height": "25%",
        "id": "image1",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_Image_55408b4ac8124dd8b2a08d024ebcd690,
        "skin": "slImage",
        "src": "b.png",
        "top": 0,
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var image2 = new kony.ui.Image2({
        "centerX": "75%",
        "centerY": "12.50%",
        "height": "25%",
        "id": "image2",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_Image_48e668ca4acb4124a43f9902f1862e62,
        "skin": "slImage",
        "src": "a.png",
        "top": 0,
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var image3 = new kony.ui.Image2({
        "centerX": "25%",
        "centerY": "37.50%",
        "height": "25%",
        "id": "image3",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_Image_56763c4c4d09463aa16aef77826fb176,
        "skin": "slImage",
        "src": "c.png",
        "top": 0,
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var image4 = new kony.ui.Image2({
        "centerX": "75%",
        "centerY": "37.50%",
        "height": "25%",
        "id": "image4",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_Image_cd118ce359f24bcb8d42df4a851e4360,
        "skin": "slImage",
        "src": "e.png",
        "top": 0,
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var image5 = new kony.ui.Image2({
        "centerX": "25%",
        "centerY": "62.50%",
        "height": "25%",
        "id": "image5",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_Image_6586be84e37240ea91c66d543662ee97,
        "skin": "slImage",
        "src": "f.png",
        "top": 0,
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var image6 = new kony.ui.Image2({
        "centerX": "75%",
        "centerY": "62.50%",
        "height": "25%",
        "id": "image6",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_Image_1cd81525bdee442f86e0c40a15fc1394,
        "skin": "slImage",
        "src": "g.png",
        "top": 0,
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var image7 = new kony.ui.Image2({
        "centerX": "25%",
        "centerY": "87.50%",
        "height": "25%",
        "id": "image7",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_Image_05506e9f147d4578b026d4000a5dae9c,
        "skin": "slImage",
        "src": "d.png",
        "top": 0,
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var image8 = new kony.ui.Image2({
        "centerX": "75%",
        "centerY": "87.50%",
        "height": "25%",
        "id": "image8",
        "isVisible": true,
        "left": 0,
        "onTouchStart": AS_Image_1315aedc922641d29f111e3e039d6975,
        "skin": "slImage",
        "src": "c.png",
        "top": 0,
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var boarderCont = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "220dp",
        "id": "boarderCont",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "27dp",
        "skin": "CopyslFbox0c32e5736499d43",
        "top": "22dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    boarderCont.setDefaultUnit(kony.flex.DP);
    var ripple = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100dp",
        "id": "ripple",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "10dp",
        "skin": "CopyslFbox07dc46f92af714b",
        "top": "10dp",
        "width": "100dp"
    }, {}, {});
    ripple.setDefaultUnit(kony.flex.DP);
    var dumy = new kony.ui.Label({
        "id": "dumy",
        "isVisible": false,
        "left": "84dp",
        "skin": "slLabel",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "117dp",
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    ripple.add(
    dumy);
    boarderCont.add(
    ripple);
    var vline2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "vline2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "hlineskin",
        "width": "1%",
        "zIndex": 2
    }, {}, {});
    vline2.setDefaultUnit(kony.flex.DP);
    vline2.add();
    var vline1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "0%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "vline1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "hlineskin",
        "width": "1%",
        "zIndex": 2
    }, {}, {});
    vline1.setDefaultUnit(kony.flex.DP);
    vline1.add();
    var vline3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "100%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "vline3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "hlineskin",
        "width": "1%",
        "zIndex": 2
    }, {}, {});
    vline3.setDefaultUnit(kony.flex.DP);
    vline3.add();
    var hline1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "0%",
        "clipBounds": true,
        "height": "1%",
        "id": "hline1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "hlineskin",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    hline1.setDefaultUnit(kony.flex.DP);
    hline1.add();
    var hline2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "25%",
        "clipBounds": true,
        "height": "1%",
        "id": "hline2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "hlineskin",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    hline2.setDefaultUnit(kony.flex.DP);
    hline2.add();
    var hline3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "1%",
        "id": "hline3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "hlineskin",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    hline3.setDefaultUnit(kony.flex.DP);
    hline3.add();
    var hline4 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "75%",
        "clipBounds": true,
        "height": "1%",
        "id": "hline4",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "hlineskin",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    hline4.setDefaultUnit(kony.flex.DP);
    hline4.add();
    var hline5 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "100%",
        "clipBounds": true,
        "height": "1%",
        "id": "hline5",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "hlineskin",
        "width": "100%",
        "zIndex": 2
    }, {}, {});
    hline5.setDefaultUnit(kony.flex.DP);
    hline5.add();
    frm1.add(
    image1, image2, image3, image4, image5, image6, image7, image8, boarderCont, vline2, vline1, vline3, hline1, hline2, hline3, hline4, hline5);
};

function frm1Globals() {
    frm1 = new kony.ui.Form2({
        "addWidgets": addWidgetsfrm1,
        "enabledForIdleTimeout": false,
        "id": "frm1",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm0a7fb9381300544"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};