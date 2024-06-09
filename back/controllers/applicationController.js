const { Application, Direction } = require('../models/models');
const ApiError = require('../error/ApiError');


class ApplicationController {
    async create(req, res, next) {
        try {
            const { name, email, phone, age, processed, approved, DirectionId } = req.body;
            const data = await Application.create({ name, email, phone, age, processed, approved, DirectionId });
            return res.json(data);
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        const data = await Application.findAndCountAll({
            order: [
                ['processed', 'ASC'],
                ['createdAt', 'DESC']
            ],
            include: [
                {
                    model: Direction,
                    as: 'Direction',
                    attributes: [  'title', 'description', 'form_of_studies', 'price', 'img' ],
                }
            ]
        });
        return res.json(data);
    }

    async deleteOne(req, res, next) {
        try {
            const { id } = req.params;
            const deleted = await Application.destroy({ where: { id } });
            if (deleted) {
                return res.json({ message: 'Deleted successfully' });
            }
            throw new Error('Direction not found');
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async updateProcessed(req, res, next) {
        try {
            const { id } = req.params;
            const { processed, approved } = req.body;

            const updatedApplication = await Application.update(
                { processed, approved },
                { where: { id } }
            );

            if (updatedApplication[ 0 ] === 1) {
                return res.json({ message: 'updated successfully' });
            } else {
                throw new Error('Application not found');
            }
        } catch(e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new ApplicationController();
