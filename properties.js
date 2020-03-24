define([

    'jquery',
    'qlik',
    'ng!$q',
    'ng!$http'


], function ($, qlik, $q, $http) {
    'use strict';
    //Define the current application
    var app = qlik.currApp();



    // *****************************************************************************
    // Dimensions & Measures
    // *****************************************************************************
    // var dimensions = {
    // uses: "dimensions",
    // min: 0,
    // max: 1
    // };

    // var measures = {
    // uses: "measures",
    // min: 0,
    // max: 1
    // };

    // *****************************************************************************
    // Appearance Section
    // *****************************************************************************
    // var appearanceSection = {
    // uses: "settings"
    // };

    // *****************************************************************************
    // Misc Section
    // *****************************************************************************



    //Create a function that returns a list of the sheets in the application
    var getSheetList = function () {
        var defer = $q.defer();

        app.getAppObjectList(function (data) {
            var sheets = [];
            var sortedData = _.sortBy(data.qAppObjectList.qItems, function (item) {
                return item.qData.rank;
            });
            _.each(sortedData, function (item) {
                sheets.push({
                    value: item.qInfo.qId,
                    label: item.qMeta.title
                });
            });
            return defer.resolve(sheets);
        });

        return defer.promise;
    };


    var switcher1 = {
        type: "boolean",
        component: "switch",
        label: "Wiederholung",
        ref: "switcher1",
        options: [{
            value: true,
            label: "An"
        }, {
            value: false,
            label: "Aus"
        }], defaultValue: false
    };

    var switcherEnd1 = {
        type: "boolean",
        component: "switch",
        label: "Switch me On",
        ref: "switcherEnd1",
        options: [{
            value: true,
            label: "On"
        }, {
            value: false,
            label: "Not On"
        }], defaultValue: false
    };


    //console.log(switcher1);


    // create sheet list
    var sheetList1 = {
        type: "string",
        component: "dropdown",
        label: "Start",
        ref: "selectedSheet1",


        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };


    // create sheet list
    var sheetGo1 = {
        type: "string",
        component: "dropdown",
        label: "Ziel",
        ref: "sheetGo1",

        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };


    var sheetGo1b = {
        type: "string",
        component: "dropdown",
        label: "Nächstes Ziel",
        ref: "sheetGo1b",
        show: function (data) {
            if (data.switcher1) {
                return true;
            }
            else {
                return false;
            }
        },
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };

    var switcher2 = {
        type: "boolean",
        component: "switch",
        label: "Wiederholung",
        ref: "switcher2",
        options: [{
            value: true,
            label: "An"
        }, {
            value: false,
            label: "Aus"
        }], defaultValue: false
    };

    var switcherEnd2 = {
        type: "boolean",
        component: "switch",
        label: "Switch me On",
        ref: "switcherEnd2",
        options: [{
            value: true,
            label: "On"
        }, {
            value: false,
            label: "Not On"
        }], defaultValue: false
    };

    // create sheet list
    var sheetList2 = {
        type: "string",
        component: "dropdown",
        label: "Start",
        ref: "selectedSheet2",
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };

    // create sheet list
    var sheetGo2 = {
        type: "string",
        component: "dropdown",
        label: "Ziel",
        ref: "sheetGo2",
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };

    var sheetGo2b = {
        type: "string",
        component: "dropdown",
        label: "Nächstes Ziel",
        ref: "sheetGo2b",
        show: function (data) {
            if (data.switcher2) {
                return true;
            }
            else {
                return false;
            }
        },
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };

    var switcher3 = {
        type: "boolean",
        component: "switch",
        label: "Wiederholung",
        ref: "switcher3",
        options: [{
            value: true,
            label: "An"
        }, {
            value: false,
            label: "Aus"
        }], defaultValue: false
    };

    var switcherEnd3 = {
        type: "boolean",
        component: "switch",
        label: "Switch me On",
        ref: "switcherEnd3",
        options: [{
            value: true,
            label: "On"
        }, {
            value: false,
            label: "Not On"
        }], defaultValue: false
    };

    // create sheet list
    var sheetList3 = {
        type: "string",
        component: "dropdown",
        label: "Start",
        ref: "selectedSheet3",
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };

    // create sheet list
    var sheetGo3 = {
        type: "string",
        component: "dropdown",
        label: "Ziel",
        ref: "sheetGo3",
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };

    var sheetGo3b = {
        type: "string",
        component: "dropdown",
        label: "Nächstes Ziel",
        ref: "sheetGo3b",
        show: function (data) {
            if (data.switcher3) {
                return true;
            }
            else {
                return false;
            }
        },
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };


    var switcher4 = {
        type: "boolean",
        component: "switch",
        label: "Wiederholung",
        ref: "switcher4",
        options: [{
            value: true,
            label: "An"
        }, {
            value: false,
            label: "Aus"
        }], defaultValue: false
    };

    var switcherEnd4 = {
        type: "boolean",
        component: "switch",
        label: "Switch me On",
        ref: "switcherEnd4",
        options: [{
            value: true,
            label: "On"
        }, {
            value: false,
            label: "Not On"
        }], defaultValue: false
    };

    // create sheet list
    var sheetList4 = {
        type: "string",
        component: "dropdown",
        label: "Start",
        ref: "selectedSheet4",
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };

    // create sheet list
    var sheetGo4 = {
        type: "string",
        component: "dropdown",
        label: "Ziel",
        ref: "sheetGo4",
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };

    var sheetGo4b = {
        type: "string",
        component: "dropdown",
        label: "Nächstes Ziel",
        ref: "sheetGo4b",
        show: function (data) {
            if (data.switcher4) {
                return true;
            }
            else {
                return false;
            }
        },
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };

    var switcher5 = {
        type: "boolean",
        component: "switch",
        label: "Wiederholung",
        ref: "switcher5",
        options: [{
            value: true,
            label: "An"
        }, {
            value: false,
            label: "Aus"
        }], defaultValue: false
    };

    var switcherEnd5 = {
        type: "boolean",
        component: "switch",
        label: "Switch me On",
        ref: "switcherEnd5",
        options: [{
            value: true,
            label: "On"
        }, {
            value: false,
            label: "Not On"
        }], defaultValue: false
    };

    // create sheet list
    var sheetList5 = {
        type: "string",
        component: "dropdown",
        label: "Start",
        ref: "selectedSheet5",
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };

    // create sheet list
    var sheetGo5 = {
        type: "string",
        component: "dropdown",
        label: "Select the destination sheet",
        ref: "sheetGo5",
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };

    var sheetGo5b = {
        type: "string",
        component: "dropdown",
        label: "Select the start sheet",
        ref: "sheetGo5b",
        show: function (data) {
            if (data.switcher5) {
                return true;
            }
            else {
                return false;
            }
        },
        options: function () {
            return getSheetList().then(function (items) {
                return items;
            });
        }
    };



    // create timer list
    var timeDelay1 = {
        type: "string",
        component: "dropdown",
        label: "Trigger für Folie 1",
        ref: "timeDelay1",
        options: [{
            value: "false",
            label: "Kein Trigger"
        }, {
            value: "8:00",
            label: "8:00"
        }, {
            value: "8:30",
            label: "8:30"
        }, {
            value: "9:00",
            label: "9:00"
        }, {
            value: "9:30",
            label: "9:30"
        }, {
            value: "10:00",
            label: "10:00"
        }, {
            value: "10:30",
            label: "10:30"
        }, {
            value: "11:00",
            label: "11:00"
        }, {
            value: "11:30",
            label: "11:30"
        }, {
            value: "12:00",
            label: "12:00"
        }, {
            value: "12:30",
            label: "12:30"
        }, {
            value: "13:00",
            label: "13:00"
        }, {
            value: "13:30",
            label: "13:30"
        }, {
            value: "14:00",
            label: "14:00"
        }, {
            value: "14:30",
            label: "14:30"
        }, {
            value: "15:00",
            label: "15:00"
        }, {
            value: "15:30",
            label: "15:30"
        }, {
            value: "16:00",
            label: "16:00"
        }, {
            value: "16:30",
            label: "16:30"
        }, {
            value: "17:00",
            label: "17:00"
        }, {
            value: "17:30",
            label: "17:30"
        }, {
            value: "18:00",
            label: "18:00"
        }
        ]
    };




    var timeDelay2 = {
        type: "string",
        component: "dropdown",
        label: "Trigger für Folie 2",
        ref: "timeDelay2",
        options: [{
            value: "false",
            label: "Kein Trigger"
        }, {
            value: "8:00",
            label: "8:00"
        }, {
            value: "8:30",
            label: "8:30"
        }, {
            value: "9:00",
            label: "9:00"
        }, {
            value: "9:30",
            label: "9:30"
        }, {
            value: "10:00",
            label: "10:00"
        }, {
            value: "10:30",
            label: "10:30"
        }, {
            value: "11:00",
            label: "11:00"
        }, {
            value: "11:30",
            label: "11:30"
        }, {
            value: "12:00",
            label: "12:00"
        }, {
            value: "12:30",
            label: "12:30"
        }, {
            value: "13:00",
            label: "13:00"
        }, {
            value: "13:30",
            label: "13:30"
        }, {
            value: "14:00",
            label: "14:00"
        }, {
            value: "14:30",
            label: "14:30"
        }, {
            value: "15:00",
            label: "15:00"
        }, {
            value: "15:30",
            label: "15:30"
        }, {
            value: "16:00",
            label: "16:00"
        }, {
            value: "16:30",
            label: "16:30"
        }, {
            value: "17:00",
            label: "17:00"
        }, {
            value: "17:30",
            label: "17:30"
        }, {
            value: "18:00",
            label: "18:00"
        }
        ]
    };

    var timeDelay3 = {
        type: "string",
        component: "dropdown",
        label: "Trigger für Folie 3",
        ref: "timeDelay3",
        options: [{
            value: "false",
            label: "Kein Trigger"
        }, {
            value: "8:00",
            label: "8:00"
        }, {
            value: "8:30",
            label: "8:30"
        }, {
            value: "9:00",
            label: "9:00"
        }, {
            value: "9:30",
            label: "9:30"
        }, {
            value: "10:00",
            label: "10:00"
        }, {
            value: "10:30",
            label: "10:30"
        }, {
            value: "11:00",
            label: "11:00"
        }, {
            value: "11:30",
            label: "11:30"
        }, {
            value: "12:00",
            label: "12:00"
        }, {
            value: "12:30",
            label: "12:30"
        }, {
            value: "13:00",
            label: "13:00"
        }, {
            value: "13:30",
            label: "13:30"
        }, {
            value: "14:00",
            label: "14:00"
        }, {
            value: "14:30",
            label: "14:30"
        }, {
            value: "15:00",
            label: "15:00"
        }, {
            value: "15:30",
            label: "15:30"
        }, {
            value: "16:00",
            label: "16:00"
        }, {
            value: "16:30",
            label: "16:30"
        }, {
            value: "17:00",
            label: "17:00"
        }, {
            value: "17:30",
            label: "17:30"
        }, {
            value: "18:00",
            label: "18:00"
        }
        ]
    };

    var timeDelay4 = {
        type: "string",
        component: "dropdown",
        label: "Trigger für Folie 4",
        ref: "timeDelay4",
        options: [{
            value: "false",
            label: "Kein Trigger"
        }, {
            value: "8:00",
            label: "8:00"
        }, {
            value: "8:30",
            label: "8:30"
        }, {
            value: "9:00",
            label: "9:00"
        }, {
            value: "9:30",
            label: "9:30"
        }, {
            value: "10:00",
            label: "10:00"
        }, {
            value: "10:30",
            label: "10:30"
        }, {
            value: "11:00",
            label: "11:00"
        }, {
            value: "11:30",
            label: "11:30"
        }, {
            value: "12:00",
            label: "12:00"
        }, {
            value: "12:30",
            label: "12:30"
        }, {
            value: "13:00",
            label: "13:00"
        }, {
            value: "13:30",
            label: "13:30"
        }, {
            value: "14:00",
            label: "14:00"
        }, {
            value: "14:30",
            label: "14:30"
        }, {
            value: "15:00",
            label: "15:00"
        }, {
            value: "15:30",
            label: "15:30"
        }, {
            value: "16:00",
            label: "16:00"
        }, {
            value: "16:30",
            label: "16:30"
        }, {
            value: "17:00",
            label: "17:00"
        }, {
            value: "17:30",
            label: "17:30"
        }, {
            value: "18:00",
            label: "18:00"
        }
        ]
    };

    var timeDelay5 = {
        type: "string",
        component: "dropdown",
        label: "Trigger für Folie 5",
        ref: "timeDelay5",
        options: [{
            value: "false",
            label: "Kein Trigger"
        }, {
            value: "8:00",
            label: "8:00"
        }, {
            value: "8:30",
            label: "8:30"
        }, {
            value: "9:00",
            label: "9:00"
        }, {
            value: "9:30",
            label: "9:30"
        }, {
            value: "10:00",
            label: "10:00"
        }, {
            value: "10:30",
            label: "10:30"
        }, {
            value: "11:00",
            label: "11:00"
        }, {
            value: "11:30",
            label: "11:30"
        }, {
            value: "12:00",
            label: "12:00"
        }, {
            value: "12:30",
            label: "12:30"
        }, {
            value: "13:00",
            label: "13:00"
        }, {
            value: "13:30",
            label: "13:30"
        }, {
            value: "14:00",
            label: "14:00"
        }, {
            value: "14:30",
            label: "14:30"
        }, {
            value: "15:00",
            label: "15:00"
        }, {
            value: "15:30",
            label: "15:30"
        }, {
            value: "16:00",
            label: "16:00"
        }, {
            value: "16:30",
            label: "16:30"
        }, {
            value: "17:00",
            label: "17:00"
        }, {
            value: "17:30",
            label: "17:30"
        }, {
            value: "18:00",
            label: "18:00"
        }
        ]
    };


    // create timer list
    var timeDelay1b = {
        type: "number",
        component: "dropdown",
        label: "Countdown in Minuten",
        ref: "timeDelay1b",
        options: [{
            value: 0,
            label: "Kein Countdown"
        }, {
            value: (5 * 60000),
            label: "5 Minuten"
        }, {
            value: (10 * 60000),
            label: "10 Minuten"
        }, {
            value: (15 * 60000),
            label: "15 Minuten"
        }, {
            value: (45 * 60000),
            label: "45 Minuten"
        }, {
            value: (60 * 60000),
            label: "60 Minuten"
        }, {
            value: (120 * 60000),
            label: "120 Minuten"
        }, {
            value: (160 * 60000),
            label: "160 Minuten"
        }, {
            value: (180 * 60000),
            label: "180 Minuten"
        }
        ]
    };



    var timeDelay2b = {
        type: "number",
        component: "dropdown",
        label: "Countdown in Minuten",
        ref: "timeDelay2b",
        options: [{
            value: 0,
            label: "Kein Countdown"
        }, {
            value: (5 * 60000),
            label: "5 Minuten"
        }, {
            value: (10 * 60000),
            label: "10 Minuten"
        }, {
            value: (15 * 60000),
            label: "15 Minuten"
        }, {
            value: (45 * 60000),
            label: "45 Minuten"
        }, {
            value: (60 * 60000),
            label: "60 Minuten"
        }, {
            value: (120 * 60000),
            label: "120 Minuten"
        }, {
            value: (160 * 60000),
            label: "160 Minuten"
        }, {
            value: (180 * 60000),
            label: "180 Minuten"
        }
        ]
    };

    var timeDelay3b = {
        type: "number",
        component: "dropdown",
        label: "Countdown in Minuten",
        ref: "timeDelay3b",
        options: [{
            value: 0,
            label: "Kein Countdown"
        }, {
            value: (5 * 60000),
            label: "5 Minuten"
        }, {
            value: (10 * 60000),
            label: "10 Minuten"
        }, {
            value: (15 * 60000),
            label: "15 Minuten"
        }, {
            value: (45 * 60000),
            label: "45 Minuten"
        }, {
            value: (60 * 60000),
            label: "60 Minuten"
        }, {
            value: (120 * 60000),
            label: "120 Minuten"
        }, {
            value: (160 * 60000),
            label: "160 Minuten"
        }, {
            value: (180 * 60000),
            label: "180 Minuten"
        }
        ]
    };

    var timeDelay4b = {
        type: "number",
        component: "dropdown",
        label: "Countdown in Minuten",
        ref: "timeDelay4b",
        options: [{
            value: 0,
            label: "Kein Countdown"
        }, {
            value: (5 * 60000),
            label: "5 Minuten"
        }, {
            value: (10 * 60000),
            label: "10 Minuten"
        }, {
            value: (15 * 60000),
            label: "15 Minuten"
        }, {
            value: (45 * 60000),
            label: "45 Minuten"
        }, {
            value: (60 * 60000),
            label: "60 Minuten"
        }, {
            value: (120 * 60000),
            label: "120 Minuten"
        }, {
            value: (160 * 60000),
            label: "160 Minuten"
        }, {
            value: (180 * 60000),
            label: "180 Minuten"
        }
        ]
    };

    var timeDelay5b = {
        type: "number",
        component: "dropdown",
        label: "Countdown in Minuten",
        ref: "timeDelay5b",
        options: [{
            value: 0,
            label: "Kein Countdown"
        }, {
            value: (5 * 60000),
            label: "5 Minuten"
        }, {
            value: (10 * 60000),
            label: "10 Minuten"
        }, {
            value: (15 * 60000),
            label: "15 Minuten"
        }, {
            value: (45 * 60000),
            label: "45 Minuten"
        }, {
            value: (60 * 60000),
            label: "60 Minuten"
        }, {
            value: (160 * 60000),
            label: "120 Minuten"
        }, {
            value: 9600000,
            label: "160 Minuten"
        }, {
            value: (180 * 60000),
            label: "180 Minuten"
        }
        ]
    };

    // create timer list
    var timeDelay1c = {
        type: "number",
        component: "dropdown",
        label: "Countdown in Minuten",
        ref: "timeDelay1c",
        show: function (data) {
            if (data.switcher1) {
                return true;
            }
            else {
                return false;
            }
        },
        options: [{
            value: 0,
            label: "Kein Countdown"
        }, {
            value: (5 * 60000),
            label: "5 Minuten"
        }, {
            value: (10 * 60000),
            label: "10 Minuten"
        }, {
            value: (15 * 60000),
            label: "15 Minuten"
        }, {
            value: (45 * 60000),
            label: "45 Minuten"
        }, {
            value: (60 * 60000),
            label: "60 Minuten"
        }, {
            value: (120 * 60000),
            label: "120 Minuten"
        }, {
            value: (160 * 60000),
            label: "160 Minuten"
        }, {
            value: (180 * 60000),
            label: "180 Minuten"
        }
        ]
    };

    // create timer list
    var timeDelay2c = {
        type: "number",
        component: "dropdown",
        label: "Countdown in Minuten",
        ref: "timeDelay2c",
        show: function (data) {
            if (data.switcher2) {
                return true;
            }
            else {
                return false;
            }
        },
        options: [{
            value: 0,
            label: "Kein Countdown"
        }, {
            value: (5 * 60000),
            label: "5 Minuten"
        }, {
            value: (10 * 60000),
            label: "10 Minuten"
        }, {
            value: (15 * 60000),
            label: "15 Minuten"
        }, {
            value: (45 * 60000),
            label: "45 Minuten"
        }, {
            value: (60 * 60000),
            label: "60 Minuten"
        }, {
            value: (120 * 60000),
            label: "120 Minuten"
        }, {
            value: (160 * 60000),
            label: "160 Minuten"
        }, {
            value: (180 * 60000),
            label: "180 Minuten"
        }
        ]
    };

    // create timer list
    var timeDelay3c = {
        type: "number",
        component: "dropdown",
        label: "Countdown in Minuten",
        ref: "timeDelay3c",
        show: function (data) {
            if (data.switcher3) {
                return true;
            }
            else {
                return false;
            }
        },
        options: [{
            value: 0,
            label: "Kein Countdown"
        }, {
            value: (5 * 60000),
            label: "5 Minuten"
        }, {
            value: (10 * 60000),
            label: "10 Minuten"
        }, {
            value: (15 * 60000),
            label: "15 Minuten"
        }, {
            value: (45 * 60000),
            label: "45 Minuten"
        }, {
            value: (60 * 60000),
            label: "60 Minuten"
        }, {
            value: (120 * 60000),
            label: "120 Minuten"
        }, {
            value: (160 * 60000),
            label: "160 Minuten"
        }, {
            value: (180 * 60000),
            label: "180 Minuten"
        }
        ]
    };

    // create timer list
    var timeDelay4c = {
        type: "number",
        component: "dropdown",
        label: "Countdown in Minuten",
        ref: "timeDelay4c",
        show: function (data) {
            if (data.switcher4) {
                return true;
            }
            else {
                return false;
            }
        },
        options: [{
            value: 0,
            label: "Kein Countdown"
        }, {
            value: (5 * 60000),
            label: "5 Minuten"
        }, {
            value: (10 * 60000),
            label: "10 Minuten"
        }, {
            value: (15 * 60000),
            label: "15 Minuten"
        }, {
            value: (45 * 60000),
            label: "45 Minuten"
        }, {
            value: (60 * 60000),
            label: "60 Minuten"
        }, {
            value: (120 * 60000),
            label: "120 Minuten"
        }, {
            value: (160 * 60000),
            label: "160 Minuten"
        }, {
            value: (180 * 60000),
            label: "180 Minuten"
        }
        ]
    };

    // create timer list
    var timeDelay5c = {
        type: "number",
        component: "dropdown",
        label: "Countdown in Minuten",
        ref: "timeDelay5c",
        show: function (data) {
            if (data.switcher5) {
                return true;
            }
            else {
                return false;
            }
        },
        options: [{
            value: 0,
            label: "Kein Countdown"
        }, {
            value: (5 * 60000),
            label: "5 Minuten"
        }, {
            value: (10 * 60000),
            label: "10 Minuten"
        }, {
            value: (15 * 60000),
            label: "15 Minuten"
        }, {
            value: (45 * 60000),
            label: "45 Minuten"
        }, {
            value: (60 * 60000),
            label: "60 Minuten"
        }, {
            value: (120 * 60000),
            label: "120 Minuten"
        }, {
            value: (160 * 60000),
            label: "160 Minuten"
        }, {
            value: (180 * 60000),
            label: "180 Minuten"
        }
        ]
    };



    // identify which variables from above will be shown in right hand options window. 
    var Options1 = {
        type: "items",
        label: "Folie 1",
        items: {

            timeDelay: timeDelay1,
            timeDelay1b: timeDelay1b,
            sheetList: sheetList1,
            sheetGo1: sheetGo1,
            switcher1: switcher1,
            sheetGo1b: sheetGo1b,
            timeDelay1c: timeDelay1c
            //switcherEnd1:switcherEnd1

        }

    };



    var Options2 = {
        type: "items",
        label: "Folie 2",
        items: {

            timeDelay: timeDelay2,
            timeDelay2b: timeDelay2b,
            sheetList: sheetList2,
            sheetGo2: sheetGo2,
            switcher2: switcher2,
            sheetGo2b: sheetGo2b,
            timeDelay2c: timeDelay2c
            //switcherEnd2:switcherEnd2
        }

    };

    var Options3 = {
        type: "items",
        label: "Folie 3",
        items: {

            timeDelay: timeDelay3,
            timeDelay3b: timeDelay3b,
            sheetList: sheetList3,
            sheetGo3: sheetGo3,
            switcher3: switcher3,
            sheetGo3b: sheetGo3b,
            timeDelay3c: timeDelay3c
            //switcherEnd3:switcherEnd3
        }

    };

    var Options4 = {
        type: "items",
        label: "Folie 4",
        items: {

            timeDelay: timeDelay4,
            timeDelay4b: timeDelay4b,
            sheetList: sheetList4,
            sheetGo4: sheetGo4,
            switcher4: switcher4,
            sheetGo4b: sheetGo4b,
            timeDelay4c: timeDelay4c
            //switcherEnd4:switcherEnd4
        }

    };

    var Options5 = {
        type: "items",
        label: "Folie 5",
        items: {

            timeDelay: timeDelay5,
            timeDelay5b: timeDelay5b,
            sheetList: sheetList5,
            sheetGo5: sheetGo5,
            switcher5: switcher5,
            sheetGo5b: sheetGo5b,
            timeDelay5c: timeDelay5c
            //switcherEnd5:switcherEnd5
        }

    };


    // *****************************************************************************
    // Main property panel definition
    // ~~
    // Only what's defined here will be returned from properties.js
    // *****************************************************************************

    //******************************************************************************

    return {
        type: "items",
        component: "accordion",
        items: {
            //Default Sections
            //dimensions: dimensions,
            //measures: measures,
            //appearance: appearanceSection,

            //Custom Sections
            Options1: Options1,
            Options2: Options2,
            Options3: Options3,
            Options4: Options4,
            Options5: Options5
            //MyColorPicker: MyColorPicker
            //miscSettings: miscSettings

        }
    };

}

);
