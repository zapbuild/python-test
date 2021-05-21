from django.contrib import admin
from .models import Inspection, Maintenance


@admin.register(Inspection)
class InspectionAdmin(admin.ModelAdmin):
    pass
class MaintenanceAdmin(admin.ModelAdmin):
    pass
