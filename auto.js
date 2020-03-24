define([
    // Load the properties.js file using requireJS
    // Note: If you load .js files, omit the file extension, otherwhise
    // requireJS will not load it correctly 
    'jquery',
    'qlik',
    './properties', //,
    //		'./properties/initialProperties',
    /***********************
    This is used to reference specific CSS V2.0 upwards.
    QlikSense set the CSS class qv-object-[extension name] on your visualizations 
    and your CSS rules should be prefixed with that.
    ************************/
    'css!./style.css'


],

    function ($, qlik, props/*, initProps, styleSheet*/) {
        'use strict';
        var interval;
        var app = qlik.currApp();
        app.variable.createSessionVariable({ qName: 'myvar1', qDefinition: 'false' });
        app.variable.createSessionVariable({ qName: 'myvar2', qDefinition: 'false' });
        app.variable.createSessionVariable({ qName: 'myvar3', qDefinition: 'false' });
        app.variable.createSessionVariable({ qName: 'myvar4', qDefinition: 'false' });
        app.variable.createSessionVariable({ qName: 'myvar5', qDefinition: 'false' });

        var el = document.createElement('div');
        var domString = '<div id="countdown"></div>';
        el.innerHTML = domString;
        document.body.appendChild(el);


        //Inject Stylesheet into header of current document
        //		$( '<style>' ).html(styleSheet).appendTo( 'head' );

        return {

            //Define the properties tab - these are defined in the properties.js file
            definition: props,

            //Define the data properties - how many rows and columns to load.
            //			 initialProperties: initProps,

            //Not sure if there are any other options available here.
            snapshot: {
                cantTakeSnapshot: true
            },




            //************************ ACTION ***********************************************
            //paint function creates the visualisation. - this one makes a very basic table with no selections etc.
            paint: function ($element, layout) {

                $element.empty();
                $element.append(el);

                //console.log(layout.switcher1);

                //app.variable.create({qName : 'myvar', qDefinition: 'Month'});

                /*var myVar = qlik.app.variable.getByName('myvar');
                console.log(myVar);*/


                /*const selectedSheet1 = layout.selectedSheet1;
                const selectedSheet2 = layout.selectedSheet2;
                const selectedSheet3 = layout.selectedSheet3;
                const selectedSheet4 = layout.selectedSheet4;
                const selectedSheet5 = layout.selectedSheet5;*/


                /*const sheets = {
                            selectedSheet1: layout.selectedSheet1,
                            selectedSheet2: layout.selectedSheet2,
                            selectedSheet3: layout.selectedSheet3,
                            selectedSheet4: layout.selectedSheet4,
                            selectedSheet5: layout.selectedSheet5
                            };*/

                console.log("sheet1 " + layout.selectedSheet1);
                console.log("sheet2 " + layout.selectedSheet2);
                console.log("sheet3 " + layout.selectedSheet3);
                console.log("sheet4 " + layout.selectedSheet4);
                console.log("sheet5 " + layout.selectedSheet5);
                console.log("go to 1 " + layout.sheetGo1);
                console.log("go to 2 " + layout.sheetGo2);
                console.log("go to 3 " + layout.sheetGo3);
                console.log("go to 4 " + layout.sheetGo4);
                console.log("go to 5 " + layout.sheetGo5);
                /*console.log("time 1 " + layout.timeDelay1);
                console.log("time 2 " + layout.timeDelay2);
                console.log("time 3 " + layout.timeDelay3);
                console.log("time 4 " + layout.timeDelay4);
                console.log("time 5 " + layout.timeDelay5);*/






                //console.log(typeof(layout.timeDelay1));

                function triggerCalculator(stringTime) {


                    // here we define the counter data
                    let today = new Date();
                    let year = today.getFullYear();
                    let month = today.getMonth();
                    let day = today.getDate();
                    // hour and minute we set from the trigger input
                    let second = today.getSeconds();
                    let millisecond = today.getMilliseconds();

                    let todayCalc = new Date(year, month, day, stringTime.split(":")[0], stringTime.split(":")[1], second, millisecond);

                    //minutes till trigger will be active
                    let myTrigger = ((todayCalc.getTime() - Date.now()));

                    //console.log(myTrigger);
                    return myTrigger;

                }


                /*console.log(triggerCalculator(layout.timeDelay1));
                console.log(triggerCalculator(layout.timeDelay2));
                console.log(triggerCalculator(layout.timeDelay3));
                console.log(triggerCalculator(layout.timeDelay4));
                console.log(triggerCalculator(layout.timeDelay5));*/

                console.log(triggerCalculator(layout.timeDelay1));
                console.log(layout.timeDelay1b);
                console.log(layout.timeDelay1c);





                String.prototype.toHHMMSS = function () {
                    var sec_num = parseInt(this, 10); // don't forget the second param
                    var hours = Math.floor(sec_num / 3600);
                    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
                    var seconds = sec_num - (hours * 3600) - (minutes * 60);

                    if (hours < 10) { hours = "0" + hours; }
                    if (minutes < 10) { minutes = "0" + minutes; }
                    if (seconds < 10) { seconds = "0" + seconds; }
                    return hours + ':' + minutes + ':' + seconds;
                }
                //let myseconds = String(layout.timeDelay1b/1000);
                //console.log(typeof(myseconds));

                //console.log(myseconds.toHHMMSS());




                function timer1A(getSekonds) {

                    if (interval !== undefined) { clearInterval(interval); interval = undefined; }
                    let seconds = (getSekonds / 1000);
                    interval = setInterval(drawTime, 1000);

                    function drawTime() {
                        if (seconds > 0) {
                            seconds--;
                        } else if (seconds === 0) {
                            clearInterval(interval);
                            qlik.navigation.gotoSheet(layout.sheetGo1);
                            //myArr.push("1");
                        }

                        var countdown = document.getElementById("countdown"); // get tag element
                        countdown.innerHTML = String(seconds).toHHMMSS();
                    }
                }


                function timer1B(getSekonds) {

                    if (interval !== undefined) { clearInterval(interval); interval = undefined; }
                    let seconds = (getSekonds / 1000);
                    interval = setInterval(drawTime, 1000);

                    function drawTime() {
                        if (seconds > 0) {
                            seconds--;
                        } else if (seconds === 0) {
                            clearInterval(interval);
                            qlik.navigation.gotoSheet(layout.sheetGo1b);
                            //myArr.push("1");
                        }

                        var countdown = document.getElementById("countdown"); // get tag element
                        countdown.innerHTML = String(seconds).toHHMMSS();
                    }
                }


                function timer2A(getSekonds) {

                    if (interval !== undefined) { clearInterval(interval); interval = undefined; }
                    let seconds = (getSekonds / 1000);
                    interval = setInterval(drawTime, 1000);

                    function drawTime() {
                        if (seconds > 0) {
                            seconds--;
                        } else if (seconds === 0) {
                            clearInterval(interval);
                            qlik.navigation.gotoSheet(layout.sheetGo2);
                            //myArr.push("1");
                        }

                        var countdown = document.getElementById("countdown"); // get tag element
                        countdown.innerHTML = String(seconds).toHHMMSS();
                    }
                }

                function timer2B(getSekonds) {

                    if (interval !== undefined) { clearInterval(interval); interval = undefined; }
                    let seconds = (getSekonds / 1000);
                    interval = setInterval(drawTime, 1000);

                    function drawTime() {
                        if (seconds > 0) {
                            seconds--;
                        } else if (seconds === 0) {
                            clearInterval(interval);
                            qlik.navigation.gotoSheet(layout.sheetGo2b);
                            //myArr.push("1");
                        }

                        var countdown = document.getElementById("countdown"); // get tag element
                        countdown.innerHTML = String(seconds).toHHMMSS();
                    }
                }

                function timer3A(getSekonds) {

                    if (interval !== undefined) { clearInterval(interval); interval = undefined; }
                    let seconds = (getSekonds / 1000);
                    interval = setInterval(drawTime, 1000);

                    function drawTime() {
                        if (seconds > 0) {
                            seconds--;
                        } else if (seconds === 0) {
                            clearInterval(interval);
                            qlik.navigation.gotoSheet(layout.sheetGo3);
                            //myArr.push("1");
                        }

                        var countdown = document.getElementById("countdown"); // get tag element
                        countdown.innerHTML = String(seconds).toHHMMSS();
                    }
                }

                function timer3B(getSekonds) {

                    if (interval !== undefined) { clearInterval(interval); interval = undefined; }
                    let seconds = (getSekonds / 1000);
                    interval = setInterval(drawTime, 1000);

                    function drawTime() {
                        if (seconds > 0) {
                            seconds--;
                        } else if (seconds === 0) {
                            clearInterval(interval);
                            qlik.navigation.gotoSheet(layout.sheetGo3b);
                            //myArr.push("1");
                        }

                        var countdown = document.getElementById("countdown"); // get tag element
                        countdown.innerHTML = String(seconds).toHHMMSS();
                    }
                }

                function timer4A(getSekonds) {

                    if (interval !== undefined) { clearInterval(interval); interval = undefined; }
                    let seconds = (getSekonds / 1000);
                    interval = setInterval(drawTime, 1000);

                    function drawTime() {
                        if (seconds > 0) {
                            seconds--;
                        } else if (seconds === 0) {
                            clearInterval(interval);
                            qlik.navigation.gotoSheet(layout.sheetGo4);
                            //myArr.push("1");
                        }

                        var countdown = document.getElementById("countdown"); // get tag element
                        countdown.innerHTML = String(seconds).toHHMMSS();
                    }
                }

                function timer4B(getSekonds) {

                    if (interval !== undefined) { clearInterval(interval); interval = undefined; }
                    let seconds = (getSekonds / 1000);
                    interval = setInterval(drawTime, 1000);

                    function drawTime() {
                        if (seconds > 0) {
                            seconds--;
                        } else if (seconds === 0) {
                            clearInterval(interval);
                            qlik.navigation.gotoSheet(layout.sheetGo4b);
                            //myArr.push("1");
                        }

                        var countdown = document.getElementById("countdown"); // get tag element
                        countdown.innerHTML = String(seconds).toHHMMSS();
                    }
                }

                function timer5A(getSekonds) {

                    if (interval !== undefined) { clearInterval(interval); interval = undefined; }
                    let seconds = (getSekonds / 1000);
                    interval = setInterval(drawTime, 1000);

                    function drawTime() {
                        if (seconds > 0) {
                            seconds--;
                        } else if (seconds === 0) {
                            clearInterval(interval);
                            qlik.navigation.gotoSheet(layout.sheetGo5);
                            //myArr.push("1");
                        }

                        var countdown = document.getElementById("countdown"); // get tag element
                        countdown.innerHTML = String(seconds).toHHMMSS();
                    }
                }

                function timer5B(getSekonds) {

                    if (interval !== undefined) { clearInterval(interval); interval = undefined; }
                    let seconds = (getSekonds / 1000);
                    interval = setInterval(drawTime, 1000);

                    function drawTime() {
                        if (seconds > 0) {
                            seconds--;
                        } else if (seconds === 0) {
                            clearInterval(interval);
                            qlik.navigation.gotoSheet(layout.sheetGo5);
                            //myArr.push("1");
                        }

                        var countdown = document.getElementById("countdown"); // get tag element
                        countdown.innerHTML = String(seconds).toHHMMSS();
                    }
                }


                const currentSheet = qlik.navigation.getCurrentSheetId();
                console.log('Current selected', currentSheet.sheetId);


                /*console.log(layout.timeDelay1);
                if (layout.timeDelay1 === "false") {
                    console.log("zero");
                }*/


                if (qlik.navigation.getMode() != 'edit') {

                    if (currentSheet.sheetId === layout.selectedSheet1 || layout.timeDelay1 === "false") {



                        app.variable.getContent('myvar1', function (reply) {

                            if (reply.qContent.qString === 'false') {
                                console.log("1 false");
                                var lasTime1 = setTimeout(function () {

                                    timer1A(layout.timeDelay1b);
                                    //timer1B(layout.timeDelay1b);
                                    app.variable.setStringValue('myvar1', 'true');


                                }, triggerCalculator(layout.timeDelay1));




                            } else if (reply.qContent.qString === 'true') {
                                console.log("1 true");
                                var lasTime1 = setTimeout(function () {

                                    //timer1A(layout.timeDelay1c);
                                    timer1B(layout.timeDelay1c);

                                }, triggerCalculator(layout.timeDelay1));

                            }
                        });




                    } else if (currentSheet.sheetId === layout.selectedSheet2 || layout.timeDelay2 === "false") {




                        app.variable.getContent('myvar2', function (reply) {


                            if (reply.qContent.qString === 'false') {
                                console.log("2 false");
                                var lasTime2 = setTimeout(function () {

                                    timer2A(layout.timeDelay2b);
                                    //timer2B(layout.timeDelay2b);
                                    app.variable.setStringValue('myvar2', 'true');

                                }, triggerCalculator(layout.timeDelay2));




                            } else if (reply.qContent.qString === 'true') {
                                console.log("2 true");
                                var lasTime2 = setTimeout(function () {

                                    //timer2A(layout.timeDelay2c);
                                    timer2B(layout.timeDelay2c);

                                }, triggerCalculator(layout.timeDelay2));

                            }
                        });
                    } else if (currentSheet.sheetId === layout.selectedSheet3 || layout.timeDelay3 === "false") {



                        app.variable.getContent('myvar3', function (reply) {


                            if (reply.qContent.qString === 'false') {
                                console.log("3 false");
                                var lasTime3 = setTimeout(function () {

                                    timer3A(layout.timeDelay3b);
                                    //timer3B(layout.timeDelay3b);
                                    app.variable.setStringValue('myvar3', 'true');

                                }, triggerCalculator(layout.timeDelay3));




                            } else if (reply.qContent.qString === 'true') {
                                console.log("3 true");
                                var lasTime3 = setTimeout(function () {

                                    //timer3A(layout.timeDelay3c);
                                    timer3B(layout.timeDelay3c);

                                }, triggerCalculator(layout.timeDelay3));

                            }
                        });

                    } else if (currentSheet.sheetId === layout.selectedSheet4 || layout.timeDelay4 === "false") {



                        app.variable.getContent('myvar4', function (reply) {


                            if (reply.qContent.qString === 'false') {
                                console.log("4 false");
                                var lasTime4 = setTimeout(function () {

                                    timer4A(layout.timeDelay4b);
                                    //timer4B(layout.timeDelay4b);
                                    app.variable.setStringValue('myvar4', 'true');

                                }, triggerCalculator(layout.timeDelay4));




                            } else if (reply.qContent.qString === 'true') {
                                console.log("4 true");
                                var lasTime4 = setTimeout(function () {

                                    //timer4A(layout.timeDelay4c);
                                    timer4B(layout.timeDelay4c);

                                }, triggerCalculator(layout.timeDelay4));

                            }
                        });

                    } else if (currentSheet.sheetId === layout.selectedSheet5 || layout.timeDelay5 === "false") {



                        app.variable.getContent('myvar5', function (reply) {


                            if (reply.qContent.qString === 'false') {
                                console.log("5 false");
                                var lastTime5 = setTimeout(function () {

                                    timer5A(layout.timeDelay5b);
                                    //timer5B(layout.timeDelay5b);
                                    app.variable.setStringValue('myvar5', 'true');

                                }, triggerCalculator(layout.timeDelay5));




                            } else if (reply.qContent.qString === 'true') {
                                console.log("5 true");
                                var lastTime5 = setTimeout(function () {

                                    //timer5A(layout.timeDelay5c);
                                    timer5B(layout.timeDelay5c);

                                }, triggerCalculator(layout.timeDelay5));
                                /*if (layout.switcherEnd5 === true) {
                                    clearTimeout(lastTime5);
                                }*/


                            }
                        });



                        /*var lastTime = setTimeout(function() {
                        
                        qlik.navigation.gotoSheet(layout.sheetGo5);}, layout.timeDelay5);
                        clearTimeout(lastTime);*/







                    }







                };


            }

        }
    }
);













