from .models import Vacancy, Company
from django.http.response import JsonResponse, HttpResponse
from django.shortcuts import render



companies = Company.objects.all()
c_json = [c.to_Json() for c in companies]
c_ids = [c.get_id() for c in companies]

vacans = Vacancy.objects.all()
v_json = [v.to_Json() for v in vacans]


error = '''<!DOCTYPE html>
<html lang="en">

<body>
    <h1>No Page Found</h1>
</body>
</html>'''


def comp(request):
    return JsonResponse(c_json, safe=False)


def vac(request):
    return JsonResponse(v_json, safe=False)



def comp_details(request, c_id):
    for i in c_json:
        if i['id'] == c_id:
            return JsonResponse(i)
    return HttpResponse(error)


def vac_details(request, v_id):
    for i in v_json:
        if i['id'] == v_id:
            return JsonResponse(i)
    return HttpResponse(error)


def comp_vacs(request, c_id):
    if c_id in c_ids:
        output = [i for i in v_json if i['company'] == c_id]
        return JsonResponse(output, safe=False)
    else: return HttpResponse(error)



