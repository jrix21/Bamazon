DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INTEGER(10) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES
("1", "Wrench", "Tools", "4.99", "20"),
("2", "Hammer", "Tools", "10.99", "7"),
("3", "Screwdriver Set", "Tools", "8.99", "10"),
("4", "Sledgehammer", "Tools", "24.99", "5"),
("5", "Ratchet Set", "Tools", "17.99", "8"),
("6", "Crowbar", "Tools", "6.99", "3"),
("7", "Pliers", "Tools", "3.99", "15"),
("8", "Breaker Bar", "Tools", "11.99", "5"),
("9", "Jack", "Tools", "28.99", "4"),
("10", "Jack Stands", "Tools", "2.99", "37");