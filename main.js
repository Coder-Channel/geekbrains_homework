class CreatorClass {
    constructor(name, secondname, patronymic) {
        this.Name = name;
        this.SecondName = secondname;
        this.Patronymic = patronymic;
    }
};

const moment = require('moment');
const AuthorsFIO = require("./FIO");
let dateNow = new Date();
let cos = new CreatorClass("Александр", "Егоров", "Сергеевич");

AuthorsFIO(cos, function () {
    alert(moment().format("DD.MM.YYYY"));
});