# Program: Idea Machine
# Version: 1.2

#### video Demo: https://youtu.be/gqQksW3_m4o

## Description:

The idea machine is a simple web based idea storage app that functions, mostly, in a similar maner to that of a note taking or reminders app. The Idea Machine's intended use is to input, through the 'input console' view. They can also revisit old ideas or find inspiration by having one of their ideas pulled for them at random. read further for specific descriptions. 

The primary intent of The Idea Machine is to be a way for the user to store a quick bit of inspiration that they may have about an idea they have been tossing around. Using the idea machine, the user can quickly submit an idea they may have just had, and store it away for later review. They can then revisit ideas they have had in the past if they are in need of a boost in creativity or are feeling lost in a project they have been working on for a while. Think of it like a private social media for your brain.

#### The input console tab
 Here the user will submit an idea sporting a title and description/body. Within the submition form the user will also be asked to add a tag for sorting (or select a previously created one) and a randomly generated 'how are you feeling question' where the user can, if they choose, to also log how they are feeling at that particular moment with the ten predetermined responses. 

#### The Random Access Memory tab
The user will have the ability to cycle, at random, through thier previously submited ideas. Using the spacebar, the user can refresh and pull another randomly selected idea.

#### The Deliberate Access Memory tab
The user can revisit previously submited ideas here. They can choose to sort by random order, A-z, Z-A or chronilogical or reverse chronilogical order. They can sort further by utilizing the tag sort drop down and sort by specific tags the user has submitted themselves.

## File breakdown
 This app was created on the django framework using Python for backend/ Django development. The front end was writinen with HTML, CSS, and JAVASCRIPT. Some SQL language was utilized to initialize the database but most of the heavylifting is done through the django manage.py files.

 The majority of the files are typical django framework files the important, self writen files are as follows.
 -- ideamachine
 ----idea
 -----auth.py
        This file holds the authentication functions for login, logout, and register
------models.py
        This is the SQL database initialization file that handles properly generating and pulling user data for the site. The file contains the initialization for users, Idea and tag and also has a serialize utility for use with javascript API calls.
------urls.py 
        This file hadles the routing for the site
------views.py
        This is where I have most of the backend code writen. Here, I have a number of functions that control the html generation and routing as well as any API calls made from the javascript functions.
 ------templates
 --------idea
 ----------about.html
             This file is a simple layout extension that provides a simple about page for the site to disabiguate for new users.
 ----------idex.html
            This file hosts the javascript controled views for accessing the submition form, the deliberate access memory tab for browsing previous submitions and the random access memory tab for randomly pulling an idea/submition.
 ----------layout.html
            This is the primary instancing file for django. This is the base file that django then fills with login/register, index and about dynamically. This pages hosts only the site header and login/logout/register and about navigation buttons.
 ----------login.html
            user login form
 ----------register.html
            user register form
 ------static
 -------idea
 ---------idea.css
            The styling for the entire site.
 ---------idea.js 
            This hosts a number of custom writen functions that operates the user side of the side.
            Its primary functions are 
                to handle changing the views for each of the three tabs, 
                handling spacebar input and enter input for the random access memory view
                API calls to the backend server for submiting for ideas and tags 
                API calls for dynamic generation of tags and ideas without needing to reload the page
                generating the dynamic greetings, thank you and 'how are you feeling' messages. 
---------img
        The files in this folder are cusom made for the site and are used in the icon of the site

## Usage:
```python
manage.py runserver

#access at 127.0.0.1:8000 in the browser
```

## resaurces used 
[bootstrap](https://getbootstrap.com)