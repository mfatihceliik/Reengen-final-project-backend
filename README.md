![image](/Database.png)

copy and paste all rows.

```
BEGIN;

CREATE TABLE public.users
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "firstName" character varying,
    "lastName" character varying,
    email character varying unique,
    password character varying,
    role integer,
    PRIMARY KEY (id)
);

CREATE TABLE public.roles
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    role character varying,
    PRIMARY KEY (id)
);

CREATE TABLE public.factories
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "factoryName" character varying,
    "numberOfEmployees" integer,
    "membeshipDate" date,
    "membershipExpiryDate" date,
    "factoryDetails" integer,
    PRIMARY KEY (id)
);

CREATE TABLE public."factoryDetails"
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "unitUsed" character varying,
    "dateRange" daterange,
    "kilowattUsage" integer,
    "usageFee" double precision,
    "discountedPrice" boolean,
    PRIMARY KEY (id)
);

ALTER TABLE public.users
    ADD FOREIGN KEY (role)
    REFERENCES public.roles (id)
    NOT VALID;


ALTER TABLE public.factories
    ADD FOREIGN KEY ("factoryDetails")
    REFERENCES public."factoryDetails" (id)
    NOT VALID;

END;
```
some queries

```
select * from users ORDER BY "id" asc
select * from roles ORDER BY "id" asc
select * from factories ORDER BY "id" asc
select * from factory_details ORDER BY "id" asc


/* FactoryDetails update */
UPDATE factory_details
        SET
        "unit_used" = 'kilowatt',
        "start_date" = '2021-12-03',
        "end_date" = '2022-01-03',
        "diff_date" = 31,
        "kilowatt_usage" = 748.65,
        "usage_fee" = 8000,
        "discounted_price" = false,
        "factory_id" = 1
        WHERE "id" = 2


/* FactoryDetails delete */
Delete from "factory_details" WHERE "id" = 5

/* Factories update */
update factories
set 
"factory_name" = 'MefyTech',
"number_of_employees" = 10,
"membership_date" = '2020-01-01',
"membership_expiry_date" = '2025-01-01'
where "id" = 2

/* factoryDetails getByFactoryId */
SELECT * FROM factory_details WHERE "factory_id" = 1

/* factories GetByMembershipExpiryDate */
select * from factories WHERE "membership_expiry_date" <= '2025-01-01'

/* factories GetByMembershipDateRange */
select * from factories where "membership_date" >=  '2013-01-01' 
and "membership_expiry_date" <= '2030-01-01'

/* factories GetByName */
select * from factories where factory_name = 'Reengen'

/* factoruDetails GetById */
select * from factory_details where "id" = 1

/* factoryDetails Insert */
insert into factory_details("unitUsed", "startDate", "endDate", "diffDate", "kilowattUsage", "usageFee", "discountedPrice")
values ('kilowatt','2021-12-04','2022-01-04',31,748.65,8000,FALSE)

/* factoryDetails Get by endDate */
select * from factory_details where "endDate" = '2022-06-18'

/* factoryDetails Get by startDate */
select * from factory_details where "startDate" = '2014-02-01'

/* factoryDetails Get by date range */
select * from factory_details
where start_date >= '2014-02-01' and end_date < '2022-06-18'

/* USER */
select users.id, users.first_name, users.last_name, users.email, users."password", roles.role
from users
inner join roles on users."role" = roles.id
where "email" = 'mfatihceliik@outlook.com'

select * from factories
select * from factory_details

/* factories and factory_details inner join */

select factories.factory_name, factories.number_of_employees, factories.membeship_date, factories.membership_expiry_date,
factory_details.unit_used, factory_details.start_date, factory_details.end_date, factory_details.diff_date,
factory_details.kilowatt_usage, factory_details.usage_fee, factory_details.discounted_price
from factories
inner join factory_details on factory_details.factory_id = factories.id
```
