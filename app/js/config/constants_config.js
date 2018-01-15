'use strict';

(function() {
  this.app.constant("ENV", {


    //////////////////////////////////////////
    //****************+SERVERS**************//
    //////////////////////////////////////////

    LOCAL : "http://localhost:3000/api/",
    //  LOCAL : "http://localhost:3000/",


    //////////////////////////////////////////s
    //**************+EndPoinst**************//
    //////////////////////////////////////////

    // SESSION_MODEL

    SIGN_IN: "auth/admin/sign_in",


    GET_REGIONS : "regions",



    // .get(TipsController.getTips)
    // .post(TipsController.createTip);
    //
    // router.route('/tips/:tip_id/enable')
    // .get(TipsController.enableTip)
    //
    // router.route('/tips/:tip_id/disable')
    // .get(TipsController.disableTip)
    GET_TIPS : "tips",
    CREATE_TIP : "tips",
    ENABLE_TIP: "tips/`${tip.id}`/enable",
    DISABLE_TIP: "tips/`${tip.id}`/disables",

    UPDATE_ONESIGNAL:"settings/onesignal",
    GET_ONESIGNAL:"settings/onesignal",
    CREATE_ONESIGNAL:"settings/onesignal"







  })
}).call(this);
