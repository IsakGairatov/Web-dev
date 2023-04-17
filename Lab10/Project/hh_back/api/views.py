import json
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Vacancy, Company
from django.http.response import JsonResponse, HttpResponse
from django.shortcuts import render
from .Serializer import CompanySerializer, VacancySerializer
from rest_framework import mixins
from rest_framework import generics



error = '''<!DOCTYPE html>
<html lang="en">

<body>
    <h1>No Page Found</h1>
</body>
</html>'''


@api_view(['GET', 'POST'])
def comp(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        ser = CompanySerializer(data=data)
        if ser.is_valid():
            ser.save()
            return JsonResponse(ser.data)
        else:
            return HttpResponse(error)


class vac(mixins.ListModelMixin,
          mixins.CreateModelMixin,
          generics.GenericAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


@api_view(['GET', 'PUT', 'DELETE'])
def comp_details(request, c_id):
    try:
        comp = Company.objects.get(id=c_id)
    except:
        return HttpResponse(error)

    if request.method == 'GET':
        try:
            serializer = CompanySerializer(comp)
            return JsonResponse(serializer.data)
        except:
            return HttpResponse(error)
    elif request.method == 'PUT':
        ser = CompanySerializer(instance=comp, data=request.data)
        if ser.is_valid():
            ser.save()
            return JsonResponse(ser.data)
        return HttpResponse(error)
    elif request.method == 'DELETE':
        comp.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class vac_details(mixins.RetrieveModelMixin,
                    mixins.UpdateModelMixin,
                    mixins.DestroyModelMixin,
                    generics.GenericAPIView):

    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    lookup_url_kwarg = 'v_id'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


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






