from django.shortcuts import render

# Create your views here.
def openpage(request):
    return render(request, "asset_maintainence/index.html")

def openqrpage(request):
    return render(request, "asset_maintainence/search_qr_code.html")

def bulk_import_logs(request):
    return render(request, "asset_maintainence/bulk_import_logs.html")

def add_asset(request):
    return render(request, "asset_maintainence/add_asset.html")

def customer(request):
    return render(request, "asset_maintainence/customer.html")

def manufacturer(request):
    return render(request, "asset_maintainence/manufacturer.html")

def schedule_configured(request):
    return render(request, "asset_maintainence/schedule_configured.html")

def edit(request):
    return render(request, "asset_maintainence/edit.html")

def view(request):
    return render(request, "asset_maintainence/view.html")

def edit_schedule(request):
    return render(request, "asset_maintainence/edit_schedule.html")

def addschedule(request):
    return render(request, "asset_maintainence/addschedule.html")

def preserving_time(request):
    return render(request, "asset_maintainence/preserving_time.html")

def schedule_configured_addschedule(request):
    return render(request, "asset_maintainence/schedule_configured_addschedule.html")

def view_schedule(request):
    return render(request, "asset_maintainence/view_schedule.html")

def view_asset_id(request):
    return render(request, "asset_maintainence/view_asset_id.html")

def edit_editasset(request):
    return render(request, "asset_maintainence/edit_editasset.html")

def edit_asset_id(request):
    return render(request, "asset_maintainence/edit_asset_id.html")