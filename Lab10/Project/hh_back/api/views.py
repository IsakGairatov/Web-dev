from .models import Vacancy, Company
from django.http.response import JsonResponse, HttpResponse
from django.shortcuts import render
from .Serializer import CompanySerializer, VacancySerializer



error = '''<!DOCTYPE html>
<html lang="en">

<body>
    <h1>No Page Found</h1>
</body>
</html>'''


def comp(request):
    companies = Company.objects.all()
    serializer = CompanySerializer(companies, many=True)
    return JsonResponse(serializer.data, safe=False)


def vac(request):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)


def comp_details(request, c_id):
    try:
        comp = Company.objects.get(id=c_id)
        serializer = CompanySerializer(comp)
        return JsonResponse(serializer.data)
    except:
        return HttpResponse(error)


def vac_details(request, v_id):
    try:
        vacans = Vacancy.objects.get(id=v_id)
        serializer = VacancySerializer(vacans)
        return JsonResponse(serializer.data)
    except:
        return HttpResponse(error)


def comp_vacs(request, c_id):
    try:
        VofC = Vacancy.objects.filter(company_id=c_id)
        ser = VacancySerializer(VofC, many=True)
        return JsonResponse(ser.data, safe=False)
    except:
        return HttpResponse(error)


def top10(request):
    v10 = Vacancy.objects.all().order_by('-salary')[:10]
    ser = VacancySerializer(v10, many=True)
    return JsonResponse(ser.data, safe=False)





