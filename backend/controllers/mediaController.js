const Media = require('../models/Media')

const getAllMedia = async (req, res) => {
    try {
        const media = await Media.find()
        res.status(200).json(media)
    } catch(error) {
        console.log(error)
        res.status(400).json(error)
    }
}

const postNewMedia = async(req, res) => {
    const {name} = req.body
    let videosPaths = []

    if(Array.isArray(req.files.videos) && req.files.videos.length > 0) {
        for(let video of req.files.videos) {
            videosPaths.push('/' + video.path)
        }
    }

    try {
        const createdMedia = await Media.create({
            name,
            videos: videosPaths
        })

        res.json({message:"media created successfully", createdMedia})
    }catch(error) {
        console.log(error)
        res.status(400).json(error)
    }
}

module.exports = {getAllMedia, postNewMedia}