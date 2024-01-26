export default class ExcurionStore {

    constructor() {
      this._excursions = [];
      this._history = [];
      this.listCount=null;
    }

    setExcursion(excursions) {
      this._excursion = excursions
      }

      setExcursions(data) {
        this._excursions = data.rows.map((row) => ({
          id: row.id,
          address: row.adress,
          country: row.country,
          averageRating: row.average_rating,
          count: row.count,
          price: row.price,
          manager: row.manager,
          name: row.name,
          img: row.img,
          createdAt: row.createdAt,
          date: row.date,
          excursionInfos: row.excursion_infos.map((info) => ({
            id: info.id,
            overview: info.overview,
            createdAt: info.createdAt,
          })),
        }));
      }
    
    setHistory(History) {
    this._history = History
    }

    setListCount(listCount){
      this.listCount=listCount;
    }

    get excursions() {
      return this._excursions
      }
    
    get history() {
    return this._history
    }

    get ListCount() {
      return this.listCount
      }
        
}
