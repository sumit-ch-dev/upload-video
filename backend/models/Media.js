const mongoose = require('mongoose')

const MediaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this media.'],
    },
    videos: [{type: String}],
}, {timestamps: true})

const Media = mongoose.model('Media', MediaSchema)

module.exports = Media;