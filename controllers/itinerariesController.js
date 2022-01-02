const Itinerary = require('../models/Itinerary')

const itinerariesControllers = {
    getItineraries: (req, res) => {
        Itinerary.find().populate('cities')
            .then(itineraries => res.json({ response: { itineraries } }))
            .catch(error => console.log(error))
    },
    getItinerariesOfCity: (req, res) => {
        const id = req.params.id
        Itinerary.find({ cities: id }).populate('cities') // cities contains id
            .then(itinerary => res.json({ response: itinerary }))
            .catch(error => console.log(error))
    },
    addItinerary: (req, res) => {
        const itineraryBody = req.body
        new Itinerary(itineraryBody).save()
            .then(respuesta => res.json({ respuesta }))
            .catch(error => console.log(error))
    },
    getItinerary: (req, res) => {
        const id = req.params.id
        Itinerary.findOne({ _id: id }).populate('cities')
            .then(itinerary => res.json({ response: itinerary }))
            .catch(error => console.log(error))
    }
    ,
    updateItinerary: async (req, res) => {
        const id = req.params.id
        const itinerary = req.body
        let updatedItinerary
        try {
            updatedItinerary = await Itinerary.findOneAndUpdate({ _id: id }, itinerary, { new: true })
        } catch (err) {
            console.log(err);
        }
        res.json({ success: updatedItinerary ? updatedItinerary : false })
    },
    deleteItinerary: async (req, res) => {
        const id = req.params.id
        try {
            await Itinerary.findOneAndDelete({ _id: id })
        } catch (error) {
            console.log(error);
        }
        res.json({ success: true })
    },
    likeItinerary: async (req, res) => {
        try {
            const itinerary = await Itinerary.findOne({ _id: req.params.id })

            if (itinerary.likes.includes(req.user._id)) {
                const removedLike = itinerary.likes.indexOf(req.user._id)
                itinerary.likes.splice(removedLike, 1)
                await itinerary.save()
                res.json({ liked: false, likes: itinerary.likes, userID: req.user._id })
            } else {
                itinerary.likes.unshift(req.user._id)
                await itinerary.save()
                res.json({ liked: true, likes: itinerary.likes, userID: req.user._id })
            }
        } catch (error) {
            console.log(error);
            res.json({ success: false, response: null, error: error })
        }
    },
    addComment: async (req, res) => {
        try {
            const itinerary = await Itinerary.findOne({ _id: req.params.id })
            const newComment = {
                text: req.body.text,
                name: req.user.userName,
                img: req.user.img,
                user: req.user._id
            }

            itinerary.comments.unshift(newComment)
            await itinerary.save()

            res.json(itinerary.comments)

        } catch (error) {
            console.log(error);
            res.json({ success: false, response: null, error: error })
        }
    },
    deleteComment: async (req, res) => {
        try {
            const itinerary = await Itinerary.findOne({ _id: req.params.id })
            const comment = itinerary.comments.find(comment => comment._id.toString() === req.params.commentID)
            if (!comment) return res.json({ success: false, error: "Comment does not exist" })

            if (comment.user.toString() !== req.user._id.toString()) return res.json({ success: false, error: "User not authorized" })

            const removedCommentIndex = itinerary.comments.findIndex(comment => comment._id.toString() === req.params.commentID.toString())

            itinerary.comments.splice(removedCommentIndex, 1)
            await itinerary.save()

            res.json({ succes: true, comments: itinerary.comments })

        } catch (error) {
            console.log(error);
            res.json({ success: false, response: null, error: error })
        }
    },
    getCommentsByItinerary: async (req, res) => {
        try {
            const id = req.params.id
            const itinerary = await Itinerary.findOne({ _id: id })

            res.json({ comments: itinerary.comments })
        } catch (error) {
            res.json({ success: false, response: null, error: error })
        }
    },
    updateComment: async (req, res) => {
        const itineraryId = req.params.id
        const commentId = req.params.commentID
        const obj = req.body
        try {
            const itinerary = await Itinerary.findOne({ _id: itineraryId })
            const comment = itinerary.comments.find(comment => comment._id.toString() === commentId.toString())
            comment.text = obj.text

            await itinerary.save()
            res.json({ comments: itinerary.comments })
        } catch (err) {
            console.log(err);
        }

    }

}


module.exports = itinerariesControllers