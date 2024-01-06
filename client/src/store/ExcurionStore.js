export default class ExcurionStore {
    constructor() {
        this._adresses = [
            "Istanbul, Turkey", 
            "Paris, France",
            "Rome, Italy"
          ];
          
          this._countryes = [
            "Turkey",
            "France", 
            "Italy"      
          ];
          
          this._dates = [
            "January 1-5, 2023",
            "February 15-20, 2023",  
            "March 10-15, 2023"
          ];
          
          this._counts = [3, 5, 4];
          
          this._prices = [240, 300, 200];
          
          this._managers = [
            "John Doe",
            "Jane Smith",
            "Mark Jackson"      
          ];
          
          this._names = [
            "Istanbul Old City Tour",
            "Paris City Lights Tour",
            "Rome Classics Tour"
          ];
          
          this._imgs = [
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/54/be/42/hagia-sophia-museum-by.jpg?w=400&h=300&s=1",  
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/a6/b8/e3/nice-palace.jpg?w=300&h=-1&s=1",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/7f/2e/84/pantheon.jpg?w=400&h=-1&s=1"
          ];
          
          this._overvews = [
            "A tour of the old city including top sites...", 
            "Enjoy the lights and sights of Paris...",
            "See the Colosseum, Forum and must-see areas..."      
          ];
          
          this._raytings = [5, 4, 3, 2, 1];
          
          
          this._excursions = [
            {
              id: 1,
              name: this._names[0],
              adress: this._adresses[0], 
              country: this._countryes[0],
              date: this._dates[0],
              count: this._counts[0],
              price: this._prices[0],
              manager: this._managers[0], 
              img: this._imgs[0],
              overview: this._overvews[0],
              rating: this._raytings[0]  
            },
            {
              id: 2, 
              name: this._names[1],
              adress: this._adresses[1],
              country: this._countryes[1],
              date: this._dates[1],
              count: this._counts[1], 
              price: this._prices[1],
              manager: this._managers[1],
              img: this._imgs[1],
              overview: this._overvews[1],
              rating: this._raytings[1]        
            },
            {
              id: 3,
              name: this._names[2],
              adress: this._adresses[2],
              country: this._countryes[2],
              date: this._dates[2],
              count: this._counts[2],
              price: this._prices[2],
              manager: this._managers[2],
              img: this._imgs[2], 
              overview: this._overvews[2],
              rating: this._raytings[2]        
            }
          ];
    }
    
    setAdress(adresses) {
    this._adress = adresses
    }
    
    setCountry(countrys) {
    this._country = countrys
    }
    
    setDate(dates) {
    this._date = dates
    }
    
    setCount(counts) {
    this._count = counts
    }
    
    setPrice(prices) {
    this._price = prices
    }
    
    setManager(managers) {
    this._manager = managers
    }
    
    setName(names) {
    this._name = names
    }
    
    setImg(imgs) {
    this._img = imgs
    }
    
    setOverview(overviews) {
    this._overview = overviews
    }
    
    setRating(ratings) {
    this._rating = ratings
    }

    setExcursion(excursions) {
    this._excursion = excursions
    }
        
       
    
    get adresses() {
    return this._adresses
    }
    
    get countrys() {
    return this._countrys
    }
    
    get dates() {
    return this._dates
    }
    
    get counts() {
    return this._counts
    }
    
    get prices() {
    return this._prices
    }
    
    get managers() {
    return this._managers
    }
    
    get names() {
    return this._names
    }
    
    get imgs() {
    return this._imgs
    }
    
    get overviews() {
    return this._overviews
    }
    
    get ratings() {
    return this._ratings
    }

    get excursions() {
    return this._excursions
    }
        
}
