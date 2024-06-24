const { Router } = require("express");
const { kategorisService } = require("../kateroris/kategoris.service");
const { mestService } = require("../mesta/mesta.service");
const { torgovcentrService } = require("../torgovcentr/torgovcentr.service");

const router = Router();
const KategorisService = new kategorisService();
const MestService = new mestService();
const TorgovcentrService = new torgovcentrService();



router.get('/', async (req, res, next) => {

  const listSrc = await KategorisService.getList();

  const list = listSrc.map((el) => {
    return {
      name: el.name,
      id: el.id.toString(),
      completed: el.completed,
      createdAt: new Date(el.createdAt).toLocaleString('ru-RU'),
      completedClass: el.completed ? 'kategorie__item_complited' : '',
    };
  });

  res.render('index', {
    title: 'Путешествия',
    description: 'Приложение - путишествие',
    h1: 'Путешествие',
    text: 'Привет!Наше приложение позволит быстро и удобно <br>найти подходящие место для отдыха!',
    list,
  });
});




router.get('/new', async (req, res, next) => {
  const listSrc = await MestService.getList();

  const list = listSrc.map((el) => {
    return {
      name: el.name,
      id: el.id.toString(),
      completed: el.completed,
      createdAt: new Date(el.createdAt).toLocaleString('ru-RU'),
      completedClass: el.completed ? 'kategorie__item_complited' : '',
    };
  });

  

  res.render('new', {
    title: 'Места',
    description: 'Места',
    h1: 'Места',
    text: 'Выберите тип места, <br>которое вы хотите посетить',
    list,
  });

});

router.get('/torgovcentr', async (req, res, next) => {
  const listSrc = await TorgovcentrService.getList();

  const list = listSrc.map((el) => {
    return {
      name: el.name,
      id: el.id.toString(),
      completed: el.completed,
      createdAt: new Date(el.createdAt).toLocaleString('ru-RU'),
      completedClass: el.completed ? 'kategorie__item_complited' : '',
    };
  });

  

  res.render('torgovcentr', {
    title: 'торгоцентр',
    description: 'торгоцентр',
    h1: 'Торогвые центры',
    text: 'Представляем вам самые популярные <br> торговые центры в нашем городе',
    list,
  });

});















module.exports = router;