from django.db import models

class Tour(models.Model):
    origin_country = models.CharField(max_length=64)
    destination_country = models.CharField(max_length=64)
    number_of_nights = models.IntegerField(default=None)
    price = models.IntegerField(default=None)

    # String para representar Tours
    def __str__(self):
        return (f"\nID: {self.id}\nFROM-> {self.origin_country}\nTO-> {self.destination_country}\n{self.number_of_nights} Nights Costs\nPrice: ${self.price}")
