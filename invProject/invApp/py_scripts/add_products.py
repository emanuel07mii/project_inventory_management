import random
from invApp.models import Product
from django.contrib.auth.models import User

def gerar_produtos(owner_id, quantidade=20):
    nomes = ["Shirt", "Pants", "Shoes", "Cap", "Hoodie", "T-Shirt", "Socks", "Jacket", "Shorts", "Watch"]
    fornecedores = ["NIKE", "ADIDAS", "PUMA"]

    try:
        owner = User.objects.get(pk=owner_id)
    except User.DoesNotExist:
        print(f"Usuário com id {owner_id} não encontrado.")
        return

    for _ in range(quantidade):
        nome = f"{random.choice(nomes)} {random.randint(100, 999)}"
        sku = f"SKU{random.randint(1000, 9999)}"
        price = round(random.uniform(19.99, 299.99), 2)
        quantity = random.randint(1, 100)
        supplier = random.choice(fornecedores)

        produto = Product.objects.create(
            name=nome,
            sku=sku,
            price=price,
            quantity=quantity,
            supplier=supplier,
            owner=owner
        )
        print(f"Produto criado: {produto.name} (product_id: {produto.product_id})")
