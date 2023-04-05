from api import views
from django.urls import path

urlpatterns = [

    path('products/', views.product_list),
    path('products/<int:p_id>/', views.product_details),
    path('categories/', views.cat_list),
    path('categories/<int:c_id>', views.cat_details),
    path('categories/<int:c_id>/products', views.cat_products)

]
