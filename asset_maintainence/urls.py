"""makeUItask URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.openpage, name="open_page"),
    path('search_qr_code/', views.openqrpage, name="openqrpage"),
    path('bulk_import_logs/', views.bulk_import_logs, name="bulk_import_logs"),
    path('add_asset/', views.add_asset, name="add_asset"),
    path('customer/', views.customer, name="customer"),
    path('manufacturer/', views.manufacturer, name="manufacturer"),
    path('schedule_configured/', views.schedule_configured, name="schedule_configured"),
    path('edit/', views.edit, name="edit"),
    path('view/', views.view, name="view"),
    path('view_schedule/', views.view_schedule, name="view_schedule"),
    path('view_asset_id/', views.view_asset_id, name="view_asset_id"),
    path('edit_schedule/', views.edit_schedule, name="edit_schedule"),
    path('edit_editasset/', views.edit_editasset, name="edit_editasset"),
    path('edit_asset_id/', views.edit_asset_id, name="edit_asset_id"),
    path('addschedule/', views.addschedule, name="addschedule"),
    path('preserving_time/', views.preserving_time, name="preserving_time"),
    path('schedule_configured_addschedule/', views.schedule_configured_addschedule, name="schedule_configured_addschedule"),

]
