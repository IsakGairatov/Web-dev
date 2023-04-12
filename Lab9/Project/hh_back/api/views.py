from .models import Company, Vacancy
from django.http.response import JsonResponse
from django.shortcuts import render




companies = Company.objects.all()
c_json = [c.to_Json() for c in companies]
vacancies = Vacancy.objects.all()
v_json = [v.to_Json() for v in vacancies]


def handling_404(request):
    return render(request, '404.html',{})


def companies(request):
    return JsonResponse(c_json, safe=False)

def vacancies(request):
    return JsonResponse(v_json, safe=False)



def comp_details(request, c_id):
    for i in companies:
        if i['id'] == c_id:
            return JsonResponse(i)
    return



