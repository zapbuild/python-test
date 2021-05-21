from .models import Inspection, Maintenance
from rest_framework import serializers


class InspectionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Inspection
        fields = ["title", "start_date", "end_date"]

class MaintenanceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Maintenance
        fields = ["title", "description", "start_date", "end_date"]
