var Oplog = require('mongo-oplog');

var oplog = new Oplog('mongodb://localhost:3001/local').tail();

oplog.on('op', go);

function go(data) {
  if (data.ns === 'test.users' && data.op === 'i') {
    console.log('UserCreated: ', data.o.name);
  }
}
