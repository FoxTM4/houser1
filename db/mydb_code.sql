CREATE TABLE USERS(
customer_id SERIAL PRIMARY KEY,
customer_name VARCHAR,
customer_email VARCHAR
)



SELECT * FROM users;

INSERT INTO USERS ( customer_name, customer_email)
values( 'Ashely Meyer', 'ashley', 'password')

CREATE TABLE Houses(
property_id SERIAL NOT NULL,
customer_id int,
FOREIGN KEY (customer_id) REFERENCES users (customer_id) on delete cascade,
property_name VARCHAR(100),
property_description VARCHAR(200),
address VARCHAR(100),
city VARCHAR(100),
zip VARCHAR(100),
image VARCHAR(1000),
loan_amount int,
monthly_mortgage int,
desired_rent int,
recommended_rent int

)

INSERT INTO houses ( property_id,

property_name,
property_description,
address,
city ,
zip ,
image ,
loan_amount ,
monthly_mortgage,
desired_rent,
recommended_rent)
values( 2,'Cabin','Awesome Mountian View', '1122 N Mtn view dr', 'Alpine', 84844, 'http://img.com', 120000, 1000, 1500, 1250)

INSERT INTO houses ( property_id,

property_name,
property_description,
address,
state,
city ,
zip ,
image ,
loan_amount ,
monthly_mortgage,
desired_rent,
recommended_rent)
values( 3,'Huge House','Huge becuase we are in the city and 2000sq feet is huge',
'1215 west city rd', 'Florida', 'Orlando', 33929, 'https://i.ytimg.com/vi/6n1N7trXA1Y/hqdefault.jpg',
1000000, 5000, 10000, 6250)