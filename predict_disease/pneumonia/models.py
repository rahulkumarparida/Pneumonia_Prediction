from django.db import models

# Create your models here.

class PneumoniaScan(models.Model):
    Name = models.CharField(max_length=150)
    Xray = models.ImageField(upload_to='xrays/' , null= True , blank=True)
    created_at = models.DateTimeField(auto_now_add=True , null=True , blank=True)
    result = models.CharField(null=True , blank=True)
    confidance = models.CharField(null=True , blank=True )

    def __str__(self):

        return f"{self.pk}-{self.Name}'s Data" 
