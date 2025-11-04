<!-- create database demo; -->

```
create table products_backup
as
select * from products;
```

```
create table products_backup
as
select * from products;
```

```
create table products_backup2
as
select * from products
where 1 = 2; 
```

```
drop table products_backup2;
select * from products_backup2

drop table if exists products_backup2
```


```
create table products
(
     product_name
	 price
	 rel
)
```

<!-- select product_name from products -->

```
select * from products where price > 1000
```

```
select product_code from products where price > 1000
```

```
select * from products where released_date
```


<!-- update products -->

```
set price = 24000
where product_name = 'Macbook Pro'
```

```
update products
set price = 2500, released_date = to_date('28-06-2025', 'dd-mm-yyyy')
where product_name = 'Macbook Pro'
```

```
update products
set price = 2400
where product_name like 'Mac%'
```

<!-- remove columns from a table -->

```
delete from products
where product_name like '%Mate%'
```

```
delete from products
where product_name not like '%Mate%'
```

```
truncate table products
```

> delete remove certain column from table, truncate make the whole table empty, drop removes the table from database

