from django.contrib import messages
from django.shortcuts import render, redirect
from .forms import ProductForm
from .models import Product
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404

# CRUD = Create, Read, Update, delete

# Home View
def home_view(request):
    return render(request, 'invApp/home.html')

@login_required
# Create View
def product_create_view(request):
    form = ProductForm()
    if request.method == 'POST':
        form = ProductForm(request.POST)
        if form.is_valid():
            product = form.save(commit=False)
            product.owner = request.user
            product.save()
            messages.success(request, 'Product created successfully!')
            return redirect('product_list')
    return render(request, 'invApp/product_form.html', {'form':form})

@login_required
# Read View
def product_list_view(request):
    products = Product.objects.filter(owner=request.user)
    return render(request, 'invApp/product_list.html', {'products': products})

@login_required
# Update View
def product_update_view(request, product_id):
    product = get_object_or_404(Product, product_id=product_id, owner=request.user)
    
    if request.method == 'POST':
        form = ProductForm(request.POST, instance=product)
        if form.is_valid():
            updated_product = form.save(commit=False)
            updated_product.owner = product.owner
            updated_product.save()
            messages.success(request, 'Product updated successfully!')
            return redirect('product_list')
    else:
        form = ProductForm(instance=product)

    return render(request, 'invApp/product_form.html', {'form': form})

@login_required
# delete View
def product_delete_view(request, product_id):
    product = get_object_or_404(Product, product_id=product_id, owner=request.user)

    if request.method == 'POST':
        product.delete()
        messages.error(request, 'Produto excluído com sucesso!')
        return redirect('product_list')
    return render(request, 'invApp/product_confirm_delete.html', {'product': product})
