const { torgovcentrModel } = require("./torgovcentr.model");



class torgovcentrService {

    torgovcentrModel;

  constructor() {
    this.torgovcentrModel = torgovcentrModel;
    
  }

  getList() {
    return this.torgovcentrModel.find({}).sort({'createdAt': -1}).exec();
  }

  

  

  async toggleComplete(id) {

    const previous = await this.torgovcentrModel.findById(id);
    
    return this.torgovcentrModel.findByIdAndUpdate(id, {
      completed: !previous.completed,
    }).exec();

  }

  
}


module.exports = {
    torgovcentrService,
}