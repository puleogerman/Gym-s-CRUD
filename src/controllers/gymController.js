const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn)=> {
    conn.query('SELECT * FROM gyms', (err, gyms) => {
      if (err) {
        throw err
      }
      console.log(gyms);
      res.render('gyms', {
        data: gyms
      });
    });
  });
 
};

controller.save = (req, res) => {
  const data = req.body
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO gyms set ?', [data], (err, gym) => {
      console.log(gym);
      res.redirect('/');
    })
  })

};

controller.edit = (req, res) => {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM gyms WHERE id = ?', [id], (err, gyms) =>{
      res.render('gym-edit',{
        data: gyms[0]
      })
    })
  })
}

controller.update = (req, res) => {
  const id = req.params.id;
  const newGym = req.body;

  req.getConnection((err, conn)=> {
    conn.query('UPDATE gyms set ? where id = ?', [newGym, id], (err, rows) => {
      res.redirect('/');
    })
  })
}

controller.delete = (req, res) => {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    conn.query('DELETE FROM gyms WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    })
  })
};

module.exports = controller;