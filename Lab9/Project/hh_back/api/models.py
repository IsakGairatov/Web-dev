from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    city = models.CharField(max_length=200)
    address = models.TextField()

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'


    def to_Json(self):
        return {
            'id': self.id,
            'name': self.name,
            'desc': self.description,
            'city': self.city,
            'address': self.address
            }

    def __str__(self):
        return self.name

class Vacancy(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def to_Json(self):
        return {
            'id': self.id,
            'name': self.name,
            'desc': self.description,
            'salary': self.salary,
            'company_id': self.company
            }

    def __str__(self):
        return self.name
