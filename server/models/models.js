const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    phone:{type:DataTypes.INTEGER},
    adress:{type:DataTypes.STRING},
    date:{type:DataTypes.DATE},
    name:{type:DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Excursion = sequelize.define('excursion', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    adress:{type:DataTypes.STRING},
    country:{type:DataTypes.STRING},
    average_rating: {type: DataTypes.INTEGER, defaultValue: 0},
    date:{type:DataTypes.DATE},
    count: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    manager:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Excursion_Info = sequelize.define('excursion_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    overview:{type:DataTypes.STRING}
})

const Excursion_History = sequelize.define('excursion_history', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    meet:{type:DataTypes.STRING},
    code:{type: DataTypes.INTEGER, defaultValue: 210},
    manager:{type:DataTypes.STRING},
    name:{type:DataTypes.STRING},
    timestamp: {type: DataTypes.DATE, defaultValue: Date.now}
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
    timestamp: {type: DataTypes.DATE, defaultValue: Date.now}
})


const UserHistory = sequelize.define('user_history', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasMany(Rating) // один пользователь может оставить несколько отзывов

Rating.belongsTo(User)

Rating.belongsTo(Excursion) // отзыв привязан к конкретной экскурсии

Excursion.hasMany(Rating) // одна экскурсия может иметь несколько отзывов

User.belongsToMany(Excursion, {through: UserHistory}) // связь многие-ко-многим через таблицу

Excursion.belongsToMany(User, {through: UserHistory})

Excursion.hasMany(Excursion_Info) // одна экскурсия может иметь несколько описаний

Excursion_Info.belongsTo(Excursion)

Excursion_History.belongsTo(User)

Excursion_History.belongsTo(Excursion)

User.hasMany(Excursion_History)

Excursion.hasMany(Excursion_History)

module.exports = {
    User,
    Excursion,
    Excursion_History,
    UserHistory,
    Rating,
    Excursion_Info
}