const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn)=> {
    conn.query('SELECT users.id , users.first_name, users.last_name , users.number , gyms.name from users inner join gyms on users.gym_id =gyms.id',
     (err, users) => {
      if (err) {
        throw err
      }
      console.log(users);
      res.render('users', {
        data: users
      });
    });
  });
};



controller.save = (req, res) => {
  const data = req.body
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO users set ?', [data], (err, user) => {
      console.log(user);
      res.redirect('/users');
    })
  })

};

controller.edit = (req, res) => {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM users WHERE id = ?', [id], (err, user) =>{
      res.render('user-edit',{
        data: user[0]
      })
    })
  })
}

controller.update = (req, res) => {
  const id = req.params.id;
  const newUser = req.body;

  req.getConnection((err, conn)=> {
    conn.query('UPDATE users set ? WHERE id = ?', [newUser, id], (err, rows) => {
      res.redirect('/users');
    })
  })
}

controller.delete = (req, res) => {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    conn.query('DELETE FROM users WHERE id = ?', [id], (err, rows) => {
      res.redirect('/users');
    })
  })
};

module.exports = controller;