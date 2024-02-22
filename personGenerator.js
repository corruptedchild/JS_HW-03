const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "София",
            "id_2": "Ангелина",
            "id_3": "Дарья",
            "id_4": "Зинаида",
            "id_5": "Маргарита",
            "id_6": "Любовь",
            "id_7": "Алиса",
            "id_8": "Виктория",
            "id_9": "Елизавета",
            "id_10": "Прасковья"
        }
    }`,

    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Всеволодов",
            "id_2": "Петров",
            "id_3": "Трофимов",
            "id_4": "Лаврентьев",
            "id_5": "Степанов",
            "id_6": "Николаев",
            "id_7": "Павлов",
            "id_8": "Тимофеев",
            "id_9": "Васильев",
            "id_10": "Егоров"
        }
    }`,

    jobMaleJson: `{
        "count": 15,
        "list": {
            "id_1": "Актёр",
            "id_2": "Певец",
            "id_3": "Медбрат",
            "id_4": "Программист",
            "id_5": "Дизайнер",
            "id_6": "Повар",
            "id_7": "Психолог",
            "id_8": "Учитель",
            "id_9": "Инженер",
            "id_10": "Архитектор",
            "id_11": "Кузнец",
            "id_12": "Слесарь",
            "id_13": "Шахтёр",
            "id_14": "Каменщик",
            "id_15": "Священнослужитель"
        }

    }`,
    jobFemaleJson: `{
        "count": 10,
        "list": {
            "id_1": "Актриса",
            "id_2": "Певица",
            "id_3": "Медсестра",
            "id_4": "Программист",
            "id_5": "Дизайнер",
            "id_6": "Повар",
            "id_7": "Психолог",
            "id_8": "Учитель",
            "id_9": "Инженер",
            "id_10": "Архитектор"
        }

    }`,

    monthsJson: `{
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }

    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {

        return this.person.gender === 'Мужчина' ? this.randomValue(this.firstNameMaleJson) : this.randomValue(this.firstNameFemaleJson);

    },

     randomSurname: function() {

        return this.person.gender === 'Мужчина' ? this.randomValue(this.surnameJson) :  this.randomValue(this.surnameJson) + "а";

    },

    randomGender: function() {
        return this.randomIntNumber(1,0) === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomBirthYear: function() {
        return this.randomIntNumber(2005,1980);
    },

    randomBirthYear: function() {
        return this.randomIntNumber(2005,1980);
    },
    
    randomJob: function() {

        return this.person.gender === 'Мужчина' ? this.randomValue(this.jobMaleJson) : this.randomValue(this.jobFemaleJson);

    },

    randomPatronymic: function() {

        return this.person.gender === 'Мужчина' ? this.randomValue(this.patronymicJson) + "ич" : this.randomValue(this.patronymicJson) + "на";

    },

    randomBirthMonth: function() {

        return this.randomValue(this.monthsJson);

    },

    randomBirthDay: function() {
        return this.person.month === "Января" || this.person.month === "Марта" || this.person.month === "Мая" || this.person.month === "Июля" || this.person.month === "Августа" || this.person.month === "Октября" || this.person.month === "Декабря" ? this.randomIntNumber(31, 1) :
        this.person.month === "Апреля" || this.person.month === "Июня" || this.person.month === "Сентября" || this.person.month === "Ноября" ? this.randomIntNumber(30, 1) : this.randomIntNumber(28, 1) ;
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.birthYear = this.randomBirthYear();
        this.person.job = this.randomJob();
        this.person.patronymic = this.randomPatronymic();
        this.person.birthMonth = this.randomBirthMonth();
        this.person.birthDay = this.randomBirthDay();
        return this.person;
    }
};
