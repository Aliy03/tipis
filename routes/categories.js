const express = require('express');
const app = express();

const categoriesRoute = async (req, res, next) => {
    const listSrc =  MestService.getList();

  const list = await listSrc.map((el) => {
    return {
      name: el.name,
      id: el.id.toString(),
      completed: el.completed,
      createdAt: new Date(el.createdAt).toLocaleString('ru-RU'),
      completedClass: el.completed ? 'kategorie__item_complited' : '',
    };
  });
    
  };

  res.render('categoriesRoute', {
    title: 'Места',
    description: 'Места',
    h1: 'Места',
    text: 'Выберите тип места, <br>которое вы хотите посетить',
    list,
  });


module.exports = categoriesRoute;