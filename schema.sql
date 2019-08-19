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

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES
("Mera Mera", "Logia", "300000", "1"),
("Moku Moku", "Logia", "100000", "1"),
("Suna Suna", "Logia", "200000", "1"),
("Goro Goro", "Logia", "500000", "1"),
("Pika Pika", "Logia", "300000", "1"),
("Numa Numa", "Logia", "100000", "1"),
("Gomu Gomu", "Logia", "100000", "1"),
("Op Op", "Paramecia", "1000000", "1"),
("Bara Bara", "Paramecia", "50000", "1"),
("Hana Hana", "Paramecia", "75000", "1"),
("Ushi Ushi", "Zoan", "100000", "1"),
("Tori Tori: Model Eagle", "Zoan", "100000", "1"),
("Tori Tori: Model Pheonix", "Zoan", "500000", "1"),
("Hito Hito", "Zoan", "1", "1"),
("Ryu Ryu: Model Allosaurus", "Zoan", "100000", "10")