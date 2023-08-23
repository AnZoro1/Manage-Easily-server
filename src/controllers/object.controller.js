const Object = require("../models/Object.model");

const ObjectController = {
    createObject: async (req, res) => {
        try {
            const { name,
                area,
                floor,
                adress,
                isRented,
                rentalPrice,
                owner } = req.body;
            const object = await Object.create({
                name,
                area,
                floor,
                adress,
                isRented,
                rentalPrice,
                owner
            });
            await object.save();
            res.status(201).json(object);
        } catch (e) {
            return res.json({ error: e.message });
        }
    },
    getAllObjects: async (req, res) => {
        try {
            const objects = await Object.find().populate('owner');
            res.status(201).json(objects);
        } catch (e) {
            return res.json({ error: e.message });
        }
    }
};

module.exports = ObjectController;