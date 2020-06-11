-- Creating database

CREATE DATABASE prueba_gym

-- Creating tables

CREATE TABLE `gyms` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` int(11) NOT NULL,
  `address` text(300) NOT NULL,	
  `admin` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `number` varchar(9) NOT NULL,	
  `gym_id` int(5),
  PRIMARY KEY (`id`),
  FOREIGN KEY (gym_id) REFERENCES gyms(id) ON DELETE CASCADE
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1

-- Inserting data 

INSERT INTO gyms(name,price,address,admin) VALUES
('Gym 1','20', 'Calle Menusur 11, Madrid', 'Carolina Herrea'),
('Silver Gym','12','CC. Atocha piso 2, Madrid', 'Arturo Mundan'),
('Alfa Extremo','8','Calle Delicias, Sevilla', 'Juan Carlos Perez'),
('SuperSmash','29','Kyoto, Japon', 'Shige Miyamot')

INSERT INTO users(first_name, last_name, number, gym_id) VALUES
('Marcos','Castillo', '611425644', '3'),
('Daniel','Meireles', '411423719', '3'),
('David','Iniesta', '612435647', '4'),
('Jose Rafael','Costa', '314725994', '5')
