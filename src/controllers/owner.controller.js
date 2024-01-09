const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const Owner = require('../models/Owner.model');


const OwnerController = {
    registerOwner: async (req, res) => {
        try {
            const { ownerName, email, password } = req.body;
            const { BCRYPT_ROUNDS } = process.env;
            const hash = await bcrypt.hash(password, Number(BCRYPT_ROUNDS));

            const owner = await Owner.create({
                ownerName,
                email,
                password: hash
            });
            res.json(owner);
        } catch (e) {
            return res.json({ error: e.message });
        }
    },

    loginOwner: async (req, res) => {
        try {
            const { ownerName, password } = req.body;
            const { SECRET_JWT_KEY } = process.env;
            const candidate = await Owner.findOne({ ownerName });

            if (!candidate) {
                return res.status(401).json({ error: 'Неверный логин или пароль' });
            }

            const valid = await bcrypt.compare(password, candidate.password);

            if (!valid) {
                return res.status(401).json({ error: 'Неверный логин или пароль' });
            }

            const payload = {
                id: candidate._id,
                ownerName: candidate.ownerName
            };

            const token = await jwt.sign(payload, SECRET_JWT_KEY, {
                expiresIn: '24'
            });
            res.json({ token: token, ownerId: candidate._id });

        } catch (e) {
            return res.json({ error: e.message });
        }
    }
};

module.exports = OwnerController;