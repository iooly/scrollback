/* jshint browser: true */
/* global $, libsb */

// Room general settings
var formField = require("../lib/formField.js");

libsb.on('config-show', function(tabs, next) {
    var $div = $('<div>').append(
        formField("Name", "text", "displayname", tabs.room.id),
        formField("Description", "area", "description", tabs.room.description)
    );

    tabs.general = {
        text: "General settings",
        html: $div,
        prio: 900
    };

    next();
});

libsb.on('config-save', function(room, next){
    var name = $('#displayname').val(),
        desc = $('#description').val();

    room.name = name;
    room.description = desc;

    next();
});
