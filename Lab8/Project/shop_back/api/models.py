from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=200)

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def to_Json(self):
        return {'id': self.id, 'name': self.name}



class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    desc = models.TextField()
    count = models.IntegerField()
    isActive = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)


    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'

    def to_Json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'desc': self.desc,
            'count': self.count,
            'isActive': self.isActive
            }
