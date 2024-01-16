export default class UserStore {
    constructor() {
      this._isAuth = false;
      this._user = {
        id: null,
        email: null,  
        phone: null,
        address: null,  
        date: null,
        name: null,
        img: null
      };
  
     
    }

    logout() {
        this.setIsAuth(false);
        this._user = {
            id: null,
            email: null,  
            phone: null,
            address: null,  
            date: null,
            name: null,
            img: null
          };
      }

    setIsAuth(bool) {
      this._isAuth = bool;
    }

    setUser(user){
        this._user = user;
    }
  
    setUserId(id) {
      this._user.id = id;
    }

    setImg(img){
        this._user.img = img;
    }
  
    setEmail(email) {
      this._user.email = email;
    }
  
    setPassword(password) {
      this._user.password = password;
    }
  
    setPhone(phone) {
      this._user.phone = phone;
    }
  
    setAddress(address) {
      this._user.address = address; 
    }
  
    setDate(date) {
      this._user.date = date;
    }
  
    setName(name) {
      this._user.name = name;
    }
    
    get isAuth() {
      return this._isAuth;
    }
  
    get userId() {
        return this._user.id;
    }
    
    get img(){
        return  this._user.img;
    }
  
    get email() {
      return this._user.email;
    }
  
    get password() {
      return this._user.password;
    }
  
    get phone() {
      return this._user.phone;
    }
  
    get address() {
      return this._user.address;
    }
  
    get date() {
      return this._user.date; 
    }
  
    get name() {
      return this._user.name;
    }
  
    get role() {
      return this._user.role;
    }
  
  }