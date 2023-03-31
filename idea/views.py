import json
import random
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db import IntegrityError
from django.http import JsonResponse
from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt
from django.db.models.functions import Lower

from .models import User, Idea, Tag

# Create your views here.
def index(request):

    # Authenticated users can compse and view ideas
    if request.user.is_authenticated:
        tags = Tag.objects.filter(user = request.user)
        return render(request, "idea/index.html", {"tags": tags})

    # Otherwise redirect to sign-in
    else:
        return HttpResponseRedirect(reverse("login"))

def about(request):
    return render(request, "idea/about.html")

@csrf_exempt
@login_required
def submit_idea(request):

    # Composing a new email must be via POST
    if request.method != "POST":
        return JsonResponse({"error": "POST request required."}, status=400)

    idea = Idea()

    data = json.loads(request.body)
    valid = False
    if data.get("subject") is not None and len(data.get("subject")) > 0:
        idea.subject = data["subject"]
        if data.get("body") is not None and len(data.get("body")) > 0:
            idea.body = data["body"]
            if data.get("tag") is not None and len(data.get("tag")) > 0:
                tag = data["tag"]
                tag.strip()
                try:
                    new_tag = Tag.objects.get(tag = tag.capitalize(), user = request.user)
                except:
                    new_tag = Tag(
                        user = request.user,
                        tag = tag.capitalize())
                    new_tag.save()
                idea.tag = new_tag
                if data.get("bonus") is not None and len(data.get("bonus")) > 0:
                    idea.bonus = data.get("bonus")
                    idea.user = request.user
                    idea.save()
                    valid = True
                    return JsonResponse({"message": "Idea submitted Successfully."}, status=201)

    if valid == False:
        return JsonResponse({"message": "error please fill all fields"}, status=400)

@login_required
def tags_get(request):

    #pull all of the users tags then orderthem alphabetcially
    tags = Tag.objects.filter(
        user=request.user
    )
    tags = tags.order_by("tag").all()

    print(tags)

    #return via Json
    return JsonResponse([tag.serializer() for tag in tags], safe=False)

@login_required
def vault_view(request, tag = None, order = 0):

    if tag is not None:
        #filter ideas with particular tag
        if tag == "all":
            ideas = Idea.objects.filter(
                user=request.user, archived = False
            )
        else:
            tag = Tag.objects.get  (
                tag = tag,
                user = request.user
            )
            ideas = Idea.objects.filter(
                user=request.user, tag=tag, archived=False
            )
    else:
        #reject request as a tag is needed
        return JsonResponse({"error": "Missing or tag in request."}, status=400)

    print(order)

    #check order request of the pull
    if order == 0:
        #order ideas randomly (defult)
        ideas = ideas.order_by("?").all()
    elif order == 1:
        #order alphabetically by subject name
        ideas = ideas.order_by(Lower("subject")).all()
    elif order == 2:
        #order in reverse alphabetical by subject name
        ideas = ideas.order_by(Lower("subject")).all()
        ideas = list(reversed(ideas))
    elif order == 3:
        #order ideas in chonological order
        ideas = ideas.order_by("timestamp").all()
    elif order == 4:
        #order ideas in reverse chronological order
        ideas = ideas.order_by("-timestamp").all()
    else:
        return JsonResponse({"error": "Missing or unworkable parameters."}, status=400)

    return JsonResponse([idea.serialize() for idea in ideas], safe=False)

@login_required
def idea_view(request, idea_id):
    # Query for requested idea
    try:
        idea = Idea.objects.get(user=request.user, pk=idea_id)
    except idea.DoesNotExist:
        return JsonResponse({"error": "Idea not found."}, status=404)

    # Return idea contents
    if request.method == "GET":
        return JsonResponse(idea.serialize())

    # Update idea via PUT request
    elif request.method == "PUT":
        data = json.loads(request.body)
        if data.get("subject") is not None:
            idea.subject = data["subject"]
        if data.get("body") is not None:
            idea.body = data["body"]
        if data.get("tag") is not None:
            idea.tag = data["tag"]
        if data.get("archived") is not None:
            idea.archived = data["archived"]
        idea.save()
        return HttpResponse(status=204)

    # Must be via GET or PUT
    else:
        return JsonResponse({ "error": "GET or PUT request required."}, status=400)

@login_required
def ram_view(request):

    ideas = Idea.objects.filter(user=request.user, archived = False)
    random_idea = random.choice(ideas)

    return JsonResponse([random_idea.serialize()], safe=False)

