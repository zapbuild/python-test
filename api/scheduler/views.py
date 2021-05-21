from scheduler.models import Inspection, Maintenance
from rest_framework import viewsets
from rest_framework import permissions
from scheduler.serializers import InspectionSerializer, MaintenanceSerializer


class InspectionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows inspections to be viewed or edited.
    """

    queryset = Inspection.objects.all().order_by("-end_date")
    serializer_class = InspectionSerializer
    # permission_classes = [permissions.IsAuthenticated]

class MaintenanceViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows maintenance to be viewed.
    """

    queryset = Maintenance.objects.all().order_by("-end_date")
    serializer_class = MaintenanceSerializer
    # permission_classes = [permissions.IsAuthenticated]
