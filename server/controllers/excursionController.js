const { Excursion, Excursion_Info } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class excursionController {
  // Получить все экскурсии
  async getExcursions(req, res) {
    try {
      const excursions = await Excursion.findAll({
        include: [Excursion_Info],
      });
      return res.json(excursions);
    } catch (error) {
      console.error(error);
      return res.status(error.status || 500).json({ message: error.message });
    }
  }

  // Создать новую экскурсию
  async createExcursion(req, res) {
    try {

      const { adress, country, average_rating, date, count, price, manager, name, overview } = req.body;
      const {img} = req.files;

      if (!img) {
        return ApiError.badRequest('Необходимо загрузить изображение экскурсии');
      }      
      if (!adress || !country || !date || !count || !price || !manager || !name || !img || !overview) {
        return ApiError.badRequest('Недостаточно данных для создания экскурсии');
      }
      
      let filename= uuid.v4()+".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', filename));

      const newExcursion = await Excursion.create({
        adress,
        country,
        average_rating,
        date,
        count,
        price,
        manager,
        name,
        img: filename,
      });

      await Excursion_Info.create({
        overview,
        excursionId: newExcursion.id,
      });

      return res.json(newExcursion);
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message,
        code: error.code || 'INTERNAL_SERVER_ERROR',
      });
      
    }
  }
  
  async getOneExcursion(req, res) {
    try {
      const { id } = req.params;
      const excursion = await Excursion.findByPk(id, {
        include: [Excursion_Info],
      });
  
      if (!excursion) {
        return ApiError.badRequest('Экскурсия не найдена');
      }
  
      res.json(excursion);
    } catch (error) {
      console.error(error);
      return res.status(error.status || 500).json({ message: error.message });
    }
  }
  

  // Обновить экскурсию
  async updateExcursion(req, res) {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const excursion = await Excursion.findByPk(id);

      if (!excursion) {
        return ApiError.badRequest('Экскурсия не найдена');
      }

      await excursion.update(updatedData);

      if (updatedData.overview) {
        const excursionInfo = await Excursion_Info.findOne({ where: { excursionId: excursion.id } });
        await excursionInfo.update({ overview: updatedData.overview });
      }

      return res.json(excursion);
    } catch (error) {
      console.error(error);
      return res.status(error.status || 500).json({ message: error.message });
    }
  }

  // Удалить экскурсию
  async deleteExcursion(req, res) {
    try {
      const id = req.params.id;
      const excursion = await Excursion.findByPk(id);

      if (!excursion) {
        return ApiError.badRequest('Экскурсия не найдена');
      }

      await excursion.destroy();
      await Excursion_Info.destroy({ where: { excursionId: excursion.id } });

      return res.json({ message: 'Экскурсия удалена' });
    } catch (error) {
      console.error(error);
      return res.status(error.status || 500).json({ message: error.message });
    }
  }
}


module.exports = new excursionController();

