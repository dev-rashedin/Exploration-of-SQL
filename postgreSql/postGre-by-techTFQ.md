<!-- CREATE DATABASE demo; -->

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
