const mongoose = require('mongoose')

const MenuItemschema = mongoose.Schema(
    {

        name: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },
        taste: {
            type: String,
            enum: ['Sweet', 'Spicy', 'Sour'],
        },
        is_drink: {
            type: Boolean,
            default: false,
        },
        ingredients: {
            type: [String],
            default: [],
        },
        num_sales: {
            type: Number,
            default: 0
        }




    }


);

const MenuItem = mongoose.model('MenuItem' , MenuItemschema);
module.exports = MenuItem;