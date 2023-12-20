const { Excursion, Rating } = require('../models/models');
const ApiError = require('../error/ApiError');

class ratingController {
  async addRating(req, res, next) {
    const { id } = req.params;
    const { rate } = req.body;
  
    try {
      const excursion = await Excursion.findByPk(id);
      if (!excursion) {
        return next(ApiError.notFound('Excursion not found'));
      }
  
      if (rate < 1 || rate > 5) {
        return next(ApiError.badRequest('Invalid rating value'));
      }
  
      const existingRating = await Rating.findOne({
        where: { userId: req.user.id, excursionId: id },
      });
  
      if (existingRating) {
        return next(ApiError.badRequest('Rating already exists'));
      }
  
      const newRating = await Rating.create({
        userId: req.user.id,
        excursionId: id,
        rate,
      });
  
      const avgRating = await Rating.average('rate', {
        where: { excursionId: id },
      });
  
      await excursion.update({ averageRating: avgRating });
  
      res.json({ message: 'Rating added successfully' });
    } catch (error) {
      next(error);
    }
  }
  

  async getRating(req, res, next) {
    const { id } = req.params;
  
    try {
      const ratings = await Rating.findAll({
        where: { excursionId: id },
      });
  
      const avgRating = await Rating.average('rate', {
        where: { excursionId: id },
      });
  
      res.json({ ratings, avgRating });
    } catch (error) {
      next(error);
    }
  }
  

  // Добавьте дополнительные функции, например:
  // - getAverageRating(excursionId)
  // - updateRating(ratingId, data)
  // - deleteRating(ratingId)

}

module.exports = new ratingController();
