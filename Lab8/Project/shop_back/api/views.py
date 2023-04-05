from django.http.response import JsonResponse

from .models import Product, Category


# Create your views here.
products = Product.objects.all()
products_json = [p.to_Json() for p in products]
cats = Category.objects.all()
cats_json = [c.to_Json() for c in cats]


def product_list(request):
    return JsonResponse(products_json, safe=False)


def product_details(request, p_id):
    return JsonResponse(products_json[p_id - 1])


def cat_list(request):
    return JsonResponse(cats_json, safe=False)


def cat_details(request, c_id):
    return JsonResponse(cats_json[c_id - 1])


def cat_products(request, c_id):
    p_json = []
    for i in products:
        if i.category_id == c_id:
            p_json.append(i.to_Json())
    return JsonResponse(p_json, safe=False)
