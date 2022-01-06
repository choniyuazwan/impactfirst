1
select count(*) total from students where firstName = 'Michael';

2
select b.name itemName, a.name sellerName
from sellers a
inner join items b on b.sellerId = a.id
where a.rating > 4;

3
select name from employees
where id not in(select distinct managerId from employees where managerId != '');

4
SELECT count(*) from students 
WHERE score > (SELECT AVG(score) FROM students);

5
SELECT userId, AVG(duration) duration FROM sessions
GROUP BY userId HAVING COUNT(*) > 1;