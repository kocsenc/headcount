
function define(db, models) {
  models.headcount = db.define('headcount', {
    id       : {type: 'serial', key: true},
    how_many : {type: 'integer', size:4},
    initials : {type: 'text', size: 10},
    ts       : {type: 'date', time: true}
  });

  models.db = db;
}

module.exports.define = define;
