<!-- CREATE DATABASE demo; -->

```sql
CREATE TABLE products
(
    product_id     INT PRIMARY KEY,
    product_name   VARCHAR(50),
    price          FLOAT,
    release_date   DATE
);
```

```sql
CREATE TABLE products
(
    product_id     INT,
    product_name   VARCHAR(50),
    price          FLOAT,
    release_date   DATE,
		CONSTRAINT pk_prod PRIMARY KEY (product_id)
);
```

```sql
CREATE TABLE products
(
    product_id     INT,
    product_name   VARCHAR(50),
    price          FLOAT,
    release_date   DATE,
		CONSTRAINT pk_prod PRIMARY KEY (product_id, product_name)
);
```

> This is a composite primary key



```sql
INSERT INTO products (product_id, product_name, price, release_date) 
VALUES (1, 'Samsung Galaxy S24', 899.0, to_date('18-01-2024', 'dd-mm-yyyy'));

INSERT INTO products (product_id, product_name, price, release_date) 
VALUES (2, 'Google Pixel 8 Pro', 999.0, to_date('12-10-2023', 'dd-mm-yyyy'));

INSERT INTO products (product_id, product_name, price, release_date) 
VALUES (3, 'OnePlus 12', 749.99, to_date('05-02-2024', 'dd-mm-yyyy'));
```


```sql
CREATE TABLE products
(
    product_id     INT GENERATED ALWAYS AS IDENTITY,
    product_name   VARCHAR(50),
    price          FLOAT,
    release_date   DATE,
);
```

> This will always create an unique product id (primary constraint)

```sql
INSERT INTO products (product_id, product_name, price, release_date) 
VALUES (DEFAULT, 'Samsung Galaxy S24', 899.0, to_date('18-01-2024', 'dd-mm-yyyy'));

INSERT INTO products (product_id, product_name, price, release_date) 
VALUES (DEFAULT, 'Google Pixel 8 Pro', 999.0, to_date('12-10-2023', 'dd-mm-yyyy'));

INSERT INTO products (product_id, product_name, price, release_date) 
VALUES (DEFAULT, 'OnePlus 12', 749.99, to_date('05-02-2024', 'dd-mm-yyyy'));
```

```sql
create table sales_order
(
    order_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
   order_date DATE, 
   quantity INT, 
   prod_id INT REFERENCES products(product_id), 
   status VARCHAR(30)
)
```

> This is secondary constraint

```sql
CREATE TABLE products_backup
AS
SELECT * FROM products;
```

```sql
CREATE TABLE products_backup
AS
SELECT * FROM products;
```

```sql
CREATE TABLE products_backup2
AS
SELECT * FROM products
WHERE 1 = 2; 
```

```sql
CREATE TABLE products
(
     product_name,
     price,
     rel
);
```

<!-- SELECT product_name FROM products -->

```sql
SELECT * FROM products WHERE price > 1000;
```

```sql
SELECT product_code FROM products WHERE price > 1000;
```

```sql
SELECT * FROM products WHERE released_date;
```

<!-- UPDATE products -->

```sql
UPDATE products
SET price = 24000
WHERE product_name = 'Macbook Pro';
```

```sql
UPDATE products
SET price = 2500, released_date = TO_DATE('28-06-2025', 'dd-mm-yyyy')
WHERE product_name = 'Macbook Pro';
```

```sql
UPDATE products
SET price = 2400
WHERE product_name LIKE 'Mac%';
```

<!-- REMOVE columns from a table -->

```sql
DELETE FROM products
WHERE product_name LIKE '%Mate%';
```

```sql
DELETE FROM products
WHERE product_name NOT LIKE '%Mate%';
```

```sql
TRUNCATE TABLE products;
```

```sql
DROP TABLE products_backup2;
```

```sql
DROP TABLE IF EXISTS products_backup2;
```

> DELETE removes certain rows from a table, TRUNCATE makes the whole table empty, and DROP removes the table from the database.

```sql
ALTER TABLE products RENAME TO products2;
```

```sql
ALTER TABLE products RENAME COLUMN product_name TO product_id;
```

```sql
ALTER TABLE products ALTER COLUMN product_id TYPE FLOAT;
```
