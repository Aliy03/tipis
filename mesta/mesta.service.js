const { mestModel } = require("./mesta.model");



class mestService {

  mestModel;

  constructor() {
    this.mestModel = mestModel;
    
  }

  getList() {
    return this.mestModel.find({}).sort({'createdAt': -1}).exec();
  }

  

  

  async toggleComplete(id) {

    const previous = await this.mestModel.findById(id);
    
    return this.mestModel.findByIdAndUpdate(id, {
      completed: !previous.completed,
    }).exec();

  }

  
}


module.exports = {
  mestService,
}