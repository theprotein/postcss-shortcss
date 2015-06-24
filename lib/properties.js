/// !!! DEPRECATED

module.exports = {

    // true is current value of property

    'background' : {
        'fill' : true,
        'fill-type' : 0, // Sketch only
    },
    'background-color' : {
        'fill' : true,
        'fill-type' : 0, // Sketch only
    },
    'color' : {
        'fill' : true
    },
    'border' : {
        'border-color' : {
            'stroke' : true
        },
        'border-width' : {
            'stroke-width' : true
        },
    },
    'border-color' : {
        'stroke' : true
    },
    'border-width' : {
        'stroke-width' : true
    },
    'border-radius' : {
        'border-top-left-radius' : {
            'rx' : true
        },
        'border-top-right-radius' : {
            'rx' : true
        },
        'border-bottom-left-radius' : {
            'rx' : true
        },
        'border-bottom-right-radius' : {
            'rx' : true
        }
    }, // parse lenght https://github.com/theprotein/CSS-Buddy/blob/master/assets/css-apply.js#L250
    'line-height' : {
        'height' : true
    }, // convert unit to px https://github.com/theprotein/CSS-Buddy/blob/master/assets/css-apply.js#L166
    'height' : {
        'height' : true
    }, // convert unit to px
    'width' : {
        'width' : true
    }, // convert unit to px
};
