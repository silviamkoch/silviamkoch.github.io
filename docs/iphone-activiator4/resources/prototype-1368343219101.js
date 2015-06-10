function initData() {
  jimData.variables["connectViewed"] = "false";
  jimData.variables["taskIntroViewed"] = "false";
  jimData.variables["measurementsViewed"] = "false";
  jimData.variables["seenSettings"] = "false";
  jimData.variables["connectedViewed"] = "false";
  jimData.variables["destinationsmaplandviewed"] = "";
  jimData.variables["offersviewed"] = "";
  jimData.variables["aboutViewed"] = "false";
  jimData.variables["springboardviewed"] = "";
  jimData.variables["settingsViewed"] = "false";
  jimData.variables["Spot imported"] = "";
  jimData.variables["destinationslandscapeviewed"] = "";
  jimData.variables["fitnesstargetsViewed"] = "false";
  jimData.variables["destinationsdetailviewed"] = "";
  jimData.variables["destinationsmapviewed"] = "";
  jimData.variables["appointmentNowViewed"] = "false";
  jimData.variables["user"] = "new";
  jimData.variables["destinationsspotsviewed"] = "";
  jimData.variables["Spot"] = "";
  jimData.variables["appointmentViewed"] = "false";
  jimData.datamasters["Tasks"] = [
    {
      "id": 1,
      "datamaster": "Tasks",
      "userdata": {
        "Name": "Learn about app",
        "Picture": "./images/4c124488-7c8e-4295-82ec-ff270453db70.JPG",
        "Description": "Learn about ACTiviator",
        "Target": "about",
        "Show": "true",
        "Position": "1"
      }
    },
    {
      "id": 2,
      "datamaster": "Tasks",
      "userdata": {
        "Name": "Connect with friends",
        "Picture": "./images/95474107-94d6-4b63-96dc-a0ce2f5b1f80.JPG",
        "Description": "Connect with your friends' schedule",
        "Target": "connect",
        "Show": "true",
        "Position": "2"
      }
    },
    {
      "id": 3,
      "datamaster": "Tasks",
      "userdata": {
        "Name": "Adapt insistence factor",
        "Picture": "./images/2e7dfa04-19ed-4e15-933c-b0644f63a544.JPG",
        "Description": "Adapt the insistence factor",
        "Target": "settings",
        "Show": "true",
        "Position": "6"
      }
    },
    {
      "id": 4,
      "datamaster": "Tasks",
      "userdata": {
        "Name": "Connected with a friend",
        "Picture": "./images/2a6d0993-0bc3-4342-b242-1548874be7f2.JPG",
        "Description": "Connected with a friend",
        "Target": "connected",
        "Show": "false",
        "Position": "3"
      }
    },
    {
      "id": 5,
      "datamaster": "Tasks",
      "userdata": {
        "Name": "Got new training appointment",
        "Picture": "./images/f758a4c3-ea20-433a-9000-5e5988f23aa2.JPG",
        "Description": "Have a training appointment",
        "Target": "appointment",
        "Show": "false",
        "Position": "4"
      }
    },
    {
      "id": 6,
      "datamaster": "Tasks",
      "userdata": {
        "Name": "Running",
        "Picture": "./images/c433a539-1ee6-41f9-a75a-ae54e2153559.JPG",
        "Description": "Running with Mark at 7:30 p.m.",
        "Target": "appointmentnow",
        "Show": "false",
        "Position": "5"
      }
    },
    {
      "id": 7,
      "datamaster": "Tasks",
      "userdata": {
        "Name": "Define your targets",
        "Picture": "./images/e559ea98-dfa9-42e0-b825-c72267dd5eb6.JPG",
        "Description": "Define your fitness targets",
        "Target": "fitnesstargets",
        "Show": "false",
        "Position": "7"
      }
    },
    {
      "id": 8,
      "datamaster": "Tasks",
      "userdata": {
        "Name": "Measurements",
        "Picture": "./images/7c42bbe8-e2c2-4500-bf06-f2109085c98d.JPG",
        "Description": "Take your measurements",
        "Target": "measurements",
        "Show": "false",
        "Position": "8"
      }
    }
  ];

  jimData.isInitialized = true;
}jQuery("#simulation")
  .on("click", ".s-ca177b0c-f516-40d6-9ec5-78d49b70a29b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Tasks",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "Target"
                        },"measurements" ]
                      }
                    },
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "true",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Tasks",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "Target"
                        },"fitnesstargets" ]
                      }
                    },
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "true",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f74e04ec-112f-4e47-9f4c-11814dab8944",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-91486393-d86e-4161-9e0c-9898be395c22 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Tasks",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "Target"
                        },"appointmentnow" ]
                      }
                    },
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "true",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2b75f24e-58e2-4891-8dd7-ebf81ec8dbcd",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-2b75f24e-58e2-4891-8dd7-ebf81ec8dbcd .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_115")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b3ceee1f-f8ec-433d-be6f-29de05750215",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/b3ceee1f-f8ec-433d-be6f-29de05750215",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f74e04ec-112f-4e47-9f4c-11814dab8944",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Alert_dialog",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Background_stripes",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2b75f24e-58e2-4891-8dd7-ebf81ec8dbcd"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-2b75f24e-58e2-4891-8dd7-ebf81ec8dbcd .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-2b75f24e-58e2-4891-8dd7-ebf81ec8dbcd")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "appointmentViewed"
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Image_1"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rich_text_2"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rich_text_1"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rich_text_3"
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 5000
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Background_stripes",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Alert_dialog",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-66a752f8-9a15-4493-be81-be6ed455879a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f74e04ec-112f-4e47-9f4c-11814dab8944",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc05e17a-e4fb-4058-8fff-5b51af763354",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/66a752f8-9a15-4493-be81-be6ed455879a",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-66a752f8-9a15-4493-be81-be6ed455879a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-66a752f8-9a15-4493-be81-be6ed455879a #s-Button_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] 254f841d-7880-4775-84e3-bca2077de5f6.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(70 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-66a752f8-9a15-4493-be81-be6ed455879a #s-Button_1": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 254f841d-7880-4775-84e3-bca2077de5f6.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(70 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-66a752f8-9a15-4493-be81-be6ed455879a #s-Button_3": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] ea5858ad-1cc4-402f-b339-672432681408.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-66a752f8-9a15-4493-be81-be6ed455879a #s-Button_3": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] ea5858ad-1cc4-402f-b339-672432681408.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-66a752f8-9a15-4493-be81-be6ed455879a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_3")) {
      jEvent.undoCases(jFirer);
    }
  });(function(window, undefined) {
  var dictionary = {
    "ca177b0c-f516-40d6-9ec5-78d49b70a29b": "AppointmentNow",
    "91486393-d86e-4161-9e0c-9898be395c22": "Appointment",
    "2b75f24e-58e2-4891-8dd7-ebf81ec8dbcd": "A-Springboard",
    "66a752f8-9a15-4493-be81-be6ed455879a": "A-Settings-1",
    "77de5b6b-b61c-43ac-a9f2-9608de888d68": "Connected",
    "b3ceee1f-f8ec-433d-be6f-29de05750215": "A-LoadingScreen",
    "cc05e17a-e4fb-4058-8fff-5b51af763354": "A-About-1",
    "f74e04ec-112f-4e47-9f4c-11814dab8944": "A-Tasks-1",
    "267071e9-6191-4d31-aa56-97862df37a11": "Connect",
    "39400a87-e607-4a7a-af29-e4c102343b2b": "Empty imported",
    "d0c32080-e7c4-4fe2-8606-27d924d1c552": "A-Detail-v2",
    "439dbf34-b27b-411e-90dd-493cdc5887b7": "A-Main-Buttons",
    "8d26c8a8-be91-4b64-a7ea-ffff97049506": "Empty",
    "58d7c385-1e0e-4e02-a0fc-89cf7dc06af4": "A-Detail",
    "3c7bb0cf-763e-46aa-82b1-5a8029d6383e": "A-Main"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);jQuery("#simulation")
  .on("click", ".s-77de5b6b-b61c-43ac-a9f2-9608de888d68 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Cancel")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "connectedViewed",
                    "value": "false"
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Tasks",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "Target"
                        },"connected" ]
                      }
                    },
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "true",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f74e04ec-112f-4e47-9f4c-11814dab8944",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-AdaptSearch")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-AdaptSearch_Panel"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Next")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Activity"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-ActivityDot"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cancel_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_1"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Time"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Next_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_1"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Time"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cancel_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Activity"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-ActivityDot"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Next_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Transparent_Overlay",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rich_text_12"
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 3000
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rich_text_12"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Transparent_Overlay",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Tasks",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "Target"
                        },"appointment" ]
                      }
                    },
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "true",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f74e04ec-112f-4e47-9f4c-11814dab8944",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Arrow_icon_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Input_1",
                    "value": "Stanford University, Serra Mall, Stanford, CA"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Cancel_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Time"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-TimeDot"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Next_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Location"
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-LocationDot"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-77de5b6b-b61c-43ac-a9f2-9608de888d68 #s-Label_10": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-77de5b6b-b61c-43ac-a9f2-9608de888d68 #s-Label_4": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#33A4DF",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#33A4DF",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#33A4DF",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#33A4DF"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-77de5b6b-b61c-43ac-a9f2-9608de888d68 #s-Label_10": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#33A4DF",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#33A4DF",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#33A4DF",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#33A4DF"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-77de5b6b-b61c-43ac-a9f2-9608de888d68 #s-Label_4": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Delete_application")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_10",
                    "value": ""
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Delete_application"
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-77de5b6b-b61c-43ac-a9f2-9608de888d68 #s-Label_10": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rich_text_12",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("keyup.jim", ".s-77de5b6b-b61c-43ac-a9f2-9608de888d68 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-77de5b6b-b61c-43ac-a9f2-9608de888d68 #s-Label_4": {
                      "attributes": {
                        "border-top-width": "0px",
                        "border-top-style": "none",
                        "border-top-color": "#000000",
                        "border-right-width": "0px",
                        "border-right-style": "none",
                        "border-right-color": "#000000",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "0px",
                        "border-left-style": "none",
                        "border-left-color": "#000000"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-Label_10",
                    "value": {
                      "target": "#s-Input_7"
                    }
                  }
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-77de5b6b-b61c-43ac-a9f2-9608de888d68 #s-Label_10": {
                      "attributes": {
                        "border-top-width": "3px",
                        "border-top-style": "solid",
                        "border-top-color": "#33A4DF",
                        "border-right-width": "3px",
                        "border-right-style": "solid",
                        "border-right-color": "#33A4DF",
                        "border-bottom-width": "3px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#33A4DF",
                        "border-left-width": "3px",
                        "border-left-style": "solid",
                        "border-left-color": "#33A4DF"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Delete_application"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  });jQuery("#simulation")
  .on("pageload", ".s-b3ceee1f-f8ec-433d-be6f-29de05750215 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-b3ceee1f-f8ec-433d-be6f-29de05750215")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1000
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f74e04ec-112f-4e47-9f4c-11814dab8944",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("click", ".s-cc05e17a-e4fb-4058-8fff-5b51af763354 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc05e17a-e4fb-4058-8fff-5b51af763354",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f74e04ec-112f-4e47-9f4c-11814dab8944",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/66a752f8-9a15-4493-be81-be6ed455879a",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "taskIntroViewed",
                    "value": "false"
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f74e04ec-112f-4e47-9f4c-11814dab8944"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-cc05e17a-e4fb-4058-8fff-5b51af763354 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc05e17a-e4fb-4058-8fff-5b51af763354 #s-Button_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] bf7f4d2a-07bc-41a7-9c24-65ba5e250a50.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(70 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-cc05e17a-e4fb-4058-8fff-5b51af763354 #s-Button_1": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] bf7f4d2a-07bc-41a7-9c24-65ba5e250a50.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(70 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-cc05e17a-e4fb-4058-8fff-5b51af763354 #s-Button_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] d49918a9-c919-477b-a557-6a61c5656ddd.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-cc05e17a-e4fb-4058-8fff-5b51af763354 #s-Button_2": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] d49918a9-c919-477b-a557-6a61c5656ddd.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-cc05e17a-e4fb-4058-8fff-5b51af763354 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-f74e04ec-112f-4e47-9f4c-11814dab8944 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f74e04ec-112f-4e47-9f4c-11814dab8944",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc05e17a-e4fb-4058-8fff-5b51af763354",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/66a752f8-9a15-4493-be81-be6ed455879a",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_map_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_3"
                },"about" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "aboutViewed",
                    "value": "true"
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "Tasks",
                    "element": "#s-VisibleTasks",
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "false",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/cc05e17a-e4fb-4058-8fff-5b51af763354",
                    "transition": "fade"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_3"
                },"settings" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "settingsViewed",
                    "value": "true"
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "Tasks",
                    "element": "#s-VisibleTasks",
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "false",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/66a752f8-9a15-4493-be81-be6ed455879a",
                    "transition": "fade"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_3"
                },"connect" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "connectViewed",
                    "value": "true"
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "Tasks",
                    "element": "#s-VisibleTasks",
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "false",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/267071e9-6191-4d31-aa56-97862df37a11",
                    "transition": "fade"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_3"
                },"connected" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "connectedViewed",
                    "value": "true"
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "Tasks",
                    "element": "#s-VisibleTasks",
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "false",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/77de5b6b-b61c-43ac-a9f2-9608de888d68",
                    "transition": "fade"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_3"
                },"appointment" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "appointmentViewed",
                    "value": "true"
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "Tasks",
                    "element": "#s-VisibleTasks",
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "false",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/91486393-d86e-4161-9e0c-9898be395c22"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_3"
                },"appointmentnow" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "appointmentNowViewed",
                    "value": "true"
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "Tasks",
                    "element": "#s-VisibleTasks",
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "false",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/ca177b0c-f516-40d6-9ec5-78d49b70a29b",
                    "transition": "fade"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_3"
                },"fitnesstargets" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "fitnesstargetsViewed",
                    "value": "true"
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "Tasks",
                    "element": "#s-VisibleTasks",
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "false",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/66a752f8-9a15-4493-be81-be6ed455879a",
                    "transition": "fade"
                  }
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "target": "#s-Input_3"
                },"measurements" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "measurementsViewed",
                    "value": "true"
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "datatype": "datarow",
                    "datamaster": "Tasks",
                    "element": "#s-VisibleTasks",
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "false",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/66a752f8-9a15-4493-be81-be6ed455879a",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_1"
                  }
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "taskIntroViewed",
                    "value": "true"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "taskIntroViewed",
                    "value": "true"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_2",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_1",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_3",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_4",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Panel_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Panel_11",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
    jFirer.parents("tr.datarow").trigger("click");
  })
  .on("pageload", ".s-f74e04ec-112f-4e47-9f4c-11814dab8944 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-f74e04ec-112f-4e47-9f4c-11814dab8944")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "taskIntroViewed"
                },"true" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rectangle_1"
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Dynamic_Panel_2"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Row_cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": "#s-VisibleTasks",
                    "value": {
                      "action": "jimFilterData",
                      "parameter": {
                        "action": "jimSortDataAscendant",
                        "parameter": {
                          "datatype": "datamaster",
                          "datamaster": "Tasks",
                          "value": {
                            "field": "Position"
                          }
                        },
                        "value": {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "Show"
                          },"true" ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-f74e04ec-112f-4e47-9f4c-11814dab8944 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f74e04ec-112f-4e47-9f4c-11814dab8944 #s-Button_3": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] 3f327e6d-15d2-45c1-8552-72c664303722.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-f74e04ec-112f-4e47-9f4c-11814dab8944 #s-Button_3": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 3f327e6d-15d2-45c1-8552-72c664303722.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-f74e04ec-112f-4e47-9f4c-11814dab8944 #s-Button_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] 09a932c8-fbc5-4281-8db9-9553d52a6035.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-f74e04ec-112f-4e47-9f4c-11814dab8944 #s-Button_2": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 09a932c8-fbc5-4281-8db9-9553d52a6035.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-f74e04ec-112f-4e47-9f4c-11814dab8944 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#s-Button_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      jEvent.undoCases(jFirer);
    }
  });jQuery("#simulation")
  .on("click", ".s-267071e9-6191-4d31-aa56-97862df37a11 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "connectViewed",
                    "value": "false"
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Tasks",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "Target"
                        },"connect" ]
                      }
                    },
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "true",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f74e04ec-112f-4e47-9f4c-11814dab8944",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Transparent_Overlay",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rich_text_12",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 3000
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rich_text_12",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Transparent_Overlay",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimUpdateData",
                  "parameter": {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Tasks",
                      "value": {
                        "action": "jimEquals",
                        "parameter": [ {
                          "field": "Target"
                        },"connected" ]
                      }
                    },
                    "fields": {
                      "Name": null,
                      "Picture": null,
                      "Description": null,
                      "Target": null,
                      "Show": "true",
                      "Position": null
                    }
                  }
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f74e04ec-112f-4e47-9f4c-11814dab8944",
                    "transition": "fade"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-ImportInfo")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Transparent_Overlay",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Rich_text_3"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-unchecked_1"
                  }
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-Category_1",
                    "value": ""
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-checked_1"
                  }
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": "#s-Category_1",
                    "value": "Mary S.,Jakob N.,Ken F.,Mark K.,Paul F.,Sally W.,Walter M."
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rich_text_3",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Transparent_Overlay",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rich_text_12",
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });jQuery("#simulation")
  .on("mouseenter dragenter", ".t-439dbf34-b27b-411e-90dd-493cdc5887b7 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#t-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] b8ccd8ad-e71a-4cb4-951d-19161f863f0d.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(70 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_1": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] b8ccd8ad-e71a-4cb4-951d-19161f863f0d.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(70 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Image_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] fe7f1a08-c7d4-4a00-823b-6451e5a7ac0f.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(70 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_1": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] fe7f1a08-c7d4-4a00-823b-6451e5a7ac0f.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(70 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_1": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] 1b62b279-e260-4c61-85b0-273235e5bf3b.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(70 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_1": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 1b62b279-e260-4c61-85b0-273235e5bf3b.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(70 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] aaa1832d-2d9a-45f5-a4ac-0ede36432ad6.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_2": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] aaa1832d-2d9a-45f5-a4ac-0ede36432ad6.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Image_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] bcbf57e7-5837-49b6-bf0b-8057fc4e4729.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_2": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] bcbf57e7-5837-49b6-bf0b-8057fc4e4729.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_2": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] 9380e9bf-3ad8-416e-a52a-d5cd83600646.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_2": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 9380e9bf-3ad8-416e-a52a-d5cd83600646.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_3": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] 36a6e572-570d-4f43-9125-fab199002f34.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_3": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 36a6e572-570d-4f43-9125-fab199002f34.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Image_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_3": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] f41d828d-1f54-4b7a-a0b0-86b12e93b39d.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_3": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] f41d828d-1f54-4b7a-a0b0-86b12e93b39d.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Label_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_3": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "none",
                        "border-top-color": "#FFFFFF",
                        "border-right-width": "1px",
                        "border-right-style": "none",
                        "border-right-color": "#FFFFFF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#FFFFFF",
                        "border-left-width": "1px",
                        "border-left-style": "none",
                        "border-left-color": "#FFFFFF",
                        "background-image": "url('./images/[Generated] 919d8f1a-b0ef-40ab-be2a-283f27252fde.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "opacity": "0.5"
                      },
                      "expressions": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#t-439dbf34-b27b-411e-90dd-493cdc5887b7 #t-Button_3": {
                      "attributes-ie": {
                        "background-image": "url('./images/[Generated] 919d8f1a-b0ef-40ab-be2a-283f27252fde.png')",
                        "background-repeat": "no-repeat",
                        "background-position": "top left",
                        "background-attachment": "scroll",
                        "border-top-style": "none",
                        "border-right-style": "none",
                        "border-bottom-style": "none",
                        "border-left-style": "none",
                        "background-color": "transparent",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
                        "filter": "alpha(opacity=50)"
                      },
                      "expressions-ie": {
                        "width": "Math.max(50 + 0 + 0 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(40 + 0 + 0 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".t-439dbf34-b27b-411e-90dd-493cdc5887b7 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jQuery(this);
    if(jFirer.is("#t-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Image_8")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Button_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Image_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Button_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Image_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Label_7")) {
      jEvent.undoCases(jFirer);
    }
  });