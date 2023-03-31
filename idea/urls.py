from django.urls import path

from . import views, auth

urlpatterns = [
    path("", views.index, name="index"),
    path("about", views.about, name="about"),

    #API Routes
    path("ideas", views.submit_idea, name="submit"),
    path("ideas/tags", views.tags_get, name="tags_get"),
    path("ideas/vault/tags/<str:tag>/<int:order>", views.vault_view, name="vault_view"),
    path("ideas/vault/<int:idea_id>", views.idea_view, name="idea_view"),
    path("ideas/ram", views.ram_view, name="ram_view"),


    #authentiction Routes
    path("login", auth.login_user, name="login"),
    path("logout", auth.logout_user, name="logout"),
    path("register", auth.register, name="register"),
]