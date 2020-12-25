'use strict';

const BaseController = require('../base'); 
const os = require('os');

class ExampleController extends BaseController {

  async openLocalDir() {
    const self = this;
    const { ctx, service } = this;
    const body = ctx.request.body;
    const id = body.id;
    const data = {};
    let dir = '';
    switch (id) {
      case 'download' :
        dir = os.userInfo().homedir + '/Downloads';
        break;
      case 'picture' :
        dir = os.userInfo().homedir + '/Pictures';
        break;    
      case 'doc' :
        dir = os.userInfo().homedir + '/Documents';
        break;      
      case 'music' :
        dir = os.userInfo().homedir + '/Music';
        break;    
    }

    await service.example.openLocalDir(dir);

    self.sendSuccess(data);
  }
}

module.exports = ExampleController;