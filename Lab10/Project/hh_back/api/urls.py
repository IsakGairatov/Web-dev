from django.contrib import admin
from django.urls import path, include
from api import views

urlpatterns = [
    path('companies/', views.comp),
    path('vacancies/', views.vac.as_view()),
    path('companies/<int:c_id>/', views.comp_details),
    path('vacancies/<int:v_id>/', views.vac_details.as_view()),
    path('companies/<int:c_id>/vacancies/', views.comp_vacs),
    path('vacancies/top_ten/', views.top10)
]
