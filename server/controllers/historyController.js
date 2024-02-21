const {Excursion_History, Excursion } = require('../models/models');
const ApiError = require('../error/ApiError');

class historyController {

  async getHistory(req, res, next) {
    try {
      const { id } = req.params;
  
      const history = await Excursion_History.findAll({
        where: { userId: id },
        include: Excursion,
      });
  
      if (!history) {
        return next(ApiError.notFound("History not found"));
      }
  
      return res.json(history);
    } catch (error) {
      next(error);
    }
  }
  
  async createHistory(req, res, next) {
    try {
      const { id } = req.params;
      const { excursionId, meet, code, name } = req.body;

      const excursion = await Excursion.findByPk(excursionId);
      excursion.count = excursion.count - 1;

      const history = await Excursion_History.create({
        userId: id,
        excursionId,
        meet,
        code,
        name,
      });

      await excursion.save();

      return res.json({ message: "History created successfully", history });
    } catch (error) {
      next(error);
    }
  }

  
  async updateHistory(req, res, next) {
    try {
      const { id, excursionId } = req.params;
      const { meet, code, manager, name } = req.body;
  
      const history = await Excursion_History.update(
        { meet, code, manager, name },
        { where: { userId: id, excursionId } }
      );
  
      if (!history[0]) {
        return next(ApiError.notFound("History not found"));
      }
  
      return res.json({ message: "History updated successfully" });
    } catch (error) {
      next(error);
    }
  }

  
  async deleteHistory(req, res, next) {
    try {
      const { id, excursionId } = req.params;
  
      const history = await Excursion_History.destroy({ where: { userId: id, excursionId } });
  
      if (!history) {
        return next(ApiError.notFound("History not found"));
      }
  
      return res.json({ message: "History deleted successfully" });
    } catch (error) {
      next(error);
    }
  }

  

}

module.exports = new historyController();
