const { Router } = require("express");
const { TodosService } = require("../todos/todos.service");
const { mestService } = require("../mesta/mesta.service");

const router = Router();
const todosService = new TodosService();
const MestService = new mestService();

router.get('/', async (req, res, next) => {

  const listSrc = await todosService.getList();

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


router.post('/add', async (req, res, next) => {

  const { text } = req.body;
  const newTask = await todosService.addTask(text);  
  res.redirect('/');

});

router.post('/complete', async (req, res, next) => {

  const { id } = req.body;

  await todosService.toggleComplete(id);

  res.redirect('/');

});

router.post('/delete', async (req, res, next) => {
  const { id } = req.body;

  const newTask = await todosService.delete(id);
  res.redirect('/');

});

router.get('/kat', async (req, res, next) => {

  const listSrc = await todosService.getList();

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





module.exports = router;