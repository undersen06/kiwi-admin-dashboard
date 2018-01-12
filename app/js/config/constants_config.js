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
    GET_REGIONS : "regions",
    SIGN_IN : "login",
    LOG_OUT : "logout",

    // USER_MODEL
    UPDATE_USER_API : "api/users/",


    //CALCULATIONS_MODEL
    CREATE_CALCULATION: "api/calculations",
    SHOW_CALCULATION: "api/calculations/",
    INDEX_CALCULATION: "api/calculations/",
    // INDEX_MOTORS_BY_CALCULATION: "api/calculations/",
    DESTROY_CALCULATION: "api/calculations",

    CREATE_PF_QUOATATION : "api/pf_quotation"






  })
}).call(this);
