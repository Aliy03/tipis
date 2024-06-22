const { kategorieModel } = require("./todos.model");



class TodosService {

  kategorieModel;

  constructor() {
    this.kategorieModel = kategorieModel;
    
  }

  getList() {
    return this.kategorieModel.find({}).sort({'createdAt': -1}).exec();
  }

  addTask(name) {
    return this.kategorieModel.create({ name });
  }

  delete(id) {
    return this.kategorieModel.findByIdAndDelete(id);
  }

  async toggleComplete(id) {

    const previous = await this.kategorieModel.findById(id);
    
    return this.todosModel.findByIdAndUpdate(id, {
      completed: !previous.completed,
    }).exec();

  }

  
}


module.exports = {
  TodosService,
}