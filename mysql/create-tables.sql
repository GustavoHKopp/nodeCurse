create table PASS_EMAIL(
  ID INT,
  EMAIL VARCHAR(100),
  PASS VARCHAR(50)
  );


select usr.nome,
usr.email,
pass.pass password,
usr.idade
from users usr
inner join pass_email pass on (pass.id  = usr.id)