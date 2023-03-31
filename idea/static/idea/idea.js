document.addEventListener('DOMContentLoaded', function() {
    
    // then allow submition once all fields are completed
    document.getElementById('idea-form').addEventListener('submit', submit_idea);
    
    //load background

    // By default, load the inbox
    load_form();
});

// load main page for idea submition
function load_form() {

    // Show the idea form and hide other views and for efficiencey clear view.
    document.getElementById('vault-view').style.display = 'none';
    document.getElementById('ram-view').style.display = 'none';
    document.getElementById('idea-view').style.display = 'block';

    //hide all form content on load
    document.getElementById('question_view').style.display = 'block';
    document.getElementById('title_view').style.display = 'none';
    document.getElementById('body_view').style.display = 'none';
    document.getElementById('tag_view').style.display = 'none';
    document.getElementById('bonus-block').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
    document.getElementById('next').style.display = 'block';
    document.getElementById('previous').style.display = 'none';
    document.getElementById('review').style.display ='none';
    document.getElementById('see_all').style.display = 'block';


    document.onkeydown = function(evt) {
    };

    idea_question();
    bonus_question();

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.code === 'Enter') {
            console.log('Enter next')
            next();
        }
    };
    

    document.getElementById('idea-form').reset();
    console.log('form loaded')
};

function next() {
    if (document.getElementById('question_view').style.display === 'block') {
        document.getElementById('question_view').style.display = 'none';
        document.getElementById('title_view').style.display = 'block';
        document.getElementById('previous').style.display = 'block';
        console.log('titleload');
    } else if (document.getElementById('title_view').style.display === 'block') {
        document.getElementById('title_view').style.display = 'none';
        document.getElementById('body_view').style.display = 'block';
        console.log('bodyload');
    } else if (document.getElementById('body_view').style.display === 'block') {
        document.getElementById('body_view').style.display = 'none';
        document.getElementById('tag_view').style.display = 'block';
        console.log('tagload');    
    } else if (document.getElementById('tag_view').style.display === 'block') {
        document.getElementById('tag_view').style.display = 'none';
        document.getElementById('bonus-block').style.display = 'block';
        document.getElementById('submit').style.display ='block';
        document.getElementById('review').style.display ='block';
        document.getElementById('next').style.display = 'none';
    };
    console.log('nexted');
};

function previous() {
    if (document.getElementById('bonus-block').style.display === 'block') {
        document.getElementById('bonus-block').style.display = 'none';
        document.getElementById('tag_view').style.display = 'block';
        document.getElementById('next').style.display = 'block';
        document.getElementById('submit').style.display ='none';
        document.getElementById('review').style.display ='none';
        console.log('tagload');
    } else if (document.getElementById('tag_view').style.display === 'block') {
        document.getElementById('tag_view').style.display = 'none';
        document.getElementById('body_view').style.display = 'block';
        console.log('bodyload');
    } else if (document.getElementById('body_view').style.display === 'block') {
        document.getElementById('body_view').style.display = 'none';
        document.getElementById('title_view').style.display = 'block';
        console.log('titleload');    
    } else if (document.getElementById('title_view').style.display === 'block') {
        document.getElementById('title_view').style.display = 'none';
        document.getElementById('question_view').style.display = 'block';
        document.getElementById('previous').style.display = 'none';
    };
    console.log('nexted');
};

function see_all() {
    document.getElementById('question_view').style.display = 'block';
    document.getElementById('title_view').style.display = 'block';
    document.getElementById('body_view').style.display = 'block';
    document.getElementById('tag_view').style.display = 'block';
    document.getElementById('bonus-block').style.display = 'block';
    document.getElementById('submit').style.display = 'block';
    document.getElementById('next').style.display = 'none';
    document.getElementById('previous').style.display = 'none';
    document.getElementById('review').style.display = 'none';
    
};

function idea_question() {
    var question_block = document.getElementById('question_view');
    var random = Math.floor(Math.random() * 15);
    var question = '';
        if (random === 0) {
            question = `<h5>Got an Idea?</h5>`;
        } else if (random === 1) {
                question = `<h5>New Idea?</h5>`;
        } else if (random === 2) {
                question = `<h5>Back again?</h5>`;
        } else if (random === 3) {
                question = `<h5>What's the big idea?!</h5>`;
        } else if (random === 4) {
                question = `<h5>What's the plan, Stan?</h5>`;
        } else if (random === 5) {
                question = `<h5>I always love your ideas. <3</h5>`;
        } else if (random === 6) {
                question = `<h5>I see those gears turning. What ya got this time?</h5>`;
        } else if (random === 7) {
                question = `<h5>What idea are you trying to forget?</h5>`;
        } else if (random === 8) {
                question = `<h5>Forgetful, aren't we?</h5>`;
        } else if (random === 8) {
                question = `<h5>Drop the idea in and forget about it. I know you will.</h5>`;
        } else if (random === 9) {
                question = `<h5>This idea better be good.</h5>`;
        } else if (random === 10) {
                question = `<h5>I swear if this idea is another get rich scheme, I'll delete it immediately.</h5>`;
        } else if (random === 11) {
                question = `<h5>Give me the idea or the kid gets it!</h5>`;
        } else if (random === 12) {
                question = `<h5>I'm not responsible for the outcome of this idea.</h5>`;
        } else if (random === 13) {
                question = `<h5>Take it slow. Think this idea through.</h5>`;
        } else if (random === 14) {
                question = `<h5>You got the right idea.</h5>`;
        }

        question_block.innerHTML = `${question}`;
        console.log('question loaded');
};

function bonus_question() {
    // generate bonus question
    var bonus_block = document.getElementById('bonus-block');
    var random = Math.floor(Math.random() * 15);
    var question_block = '';
        if (random === 0) {
            question_block = `<h5>How are you feeling today?</h5>`
        } else if (random === 1) {
            question_block = `<h5>How's the world treating you?</h5>`
        } else if (random === 2) {
            question_block = `<h5>How's life?</h5>`
        } else if (random === 3) {
            question_block = `<h5>Ya doin good, mate?</h5>`
        } else if (random === 4) {
            question_block = `<h5>你感覺怎麼樣 ?</h5>`
        } else if (random === 5) {
            question_block = `<h5>Sit down. Tell me how you're doing.</h5>`
        } else if (random === 6) {
            question_block = `<h5>Tell the wizard your current state of emotion.</h5>`
        } else if (random === 7) {
            question_block = `<h5>PLEASE   INPUT   EMOTIONAL   STATE - BEEP BOOP <small style="font-size; xx-small;">-(robot voice)<small></h5>`
        } else if (random === 8) {
            question_block = `<h5>Log feelings here:</h5>`
        } else if (random === 9) {
            question_block = `<h5>Ruff, Ruff Ruff, Ruff. (How ya doin?)</h5>`
        } else if (random === 10) {
            question_block = `<h5 style="font-family: cursive;"><em>My Feelings Today</em></h5>`
        } else if (random === 11) {
            question_block = `<h5>Welcome to Jimbo's feelings emporium! What'll ya have?</h5>`
        } else if (random === 12) {
            question_block = `<h5>Internal Processing State:</h5>`
        } else if (random === 13) {
            question_block = `<h5>How are things?</h5>`
        } else if (random === 14) {
            question_block = `<h5>Preserve emotional history</h5>`
        };

        var answer_block = `<select required placeholder='Be honest' id="idea-bonus" form="idea-form" class="input">
                                <option disabled selected value> -- I'm feeling... -- </option>
                                <option value="This is the best day of my life.">10 - This is the best day of my life.</option>
                                <option value="Wow! Amazing!">9 - Wow! Amazing!</option>
                                <option value="Fellin' Great">8 - Fellin' Great</option>
                                <option value="Pretty Good, yeah">7 - Pretty Good, yeah</option>
                                <option value="A-OK">6 - A-OK</option>
                                <option value="Fine, just fine...">5 - Fine, just fine...</option>
                                <option value="Kinda down">4 - Kinda down</option>
                                <option value="Not so good">3 - Not so good</option>
                                <option value="In the dumps">2 - In The dumps</option>
                                <option value="It's bad man">1 - It's bad man</option>
                                <option value="N/A">0 - N/A</option>
                            </select>`

        bonus_block.innerHTML = `${question_block}${answer_block}`;
        console.log('bonus loaded');
};

//open close new tag button
function newtag_toggle() {
    var tag_input = document.getElementById('newtag-form')
    if (tag_input.style.display == 'none') {
        tag_input.style.display = 'inline-grid';
    } else {
        tag_input.style.display = 'none';
        document.getElementById('newtag-input').innerHTML = '';
}};

//add a new tag if the user requests it
function new_tag() {
    var select = document.getElementById('idea-tag');
    var tag = document.getElementById('newtag-input').value
    if (tag.length > 0) {
        tag = tag.charAt(0).toUpperCase() + tag.slice(1);
        if (document.getElementById('idea-tag'))
        select.options.add( new Option(tag, tag));
        select.value = `${tag}`;
    }
   newtag_toggle();
};   

function submit_idea(event) {

    event.preventDefault();
    // Post idea to API route
    fetch('/ideas' , {
      method: 'POST',
      body: JSON.stringify({
        subject: document.getElementById('idea-subject').value,
        body: document.getElementById('idea-body').value,
        tag: document.getElementById('idea-tag').value,
        bonus: document.getElementById('idea-bonus').value,
      })
    })
    .then(response => response.json())
    .then(result => {
      console.log(result);
    });
    thank_you();
};

//to do
function thank_you() {
    document.getElementById('question_view').style.display = 'block';
    document.getElementById('title_view').style.display = 'none';
    document.getElementById('body_view').style.display = 'none';
    document.getElementById('tag_view').style.display = 'none';
    document.getElementById('bonus-block').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    document.getElementById('previous').style.display = 'none';
    document.getElementById('see_all').style.display = 'none';
    document.getElementById('review').style.display = 'none';
    // generate thank you message
    var  question_view= document.getElementById('question_view');
    var random = Math.floor(Math.random() * 15);
    var question_block = '';
        if (random === 0) {
            question_block = `<h3 id="question-block">Thank you for the snack.</h3><h4>Submition Successful</h4>`;
        } else if (random === 1) {
            question_block = `<h3 id="question-block">I'll protect this idea with my life. (I'm not alive)</h3><h4>Submition Successful</h4>`;
        } else if (random === 2) {
            question_block = `<h3 id="question-block">Don't forget to never revisit this.</h3><h4>Submition Successful</h4>`;
        } else if (random === 3) {
            question_block = `<h3 id="question-block">It's done.</h3><h4>Submition Successful</h4>`;
        } else if (random === 4) {
            question_block = `<h3 id="question-block">You have been freed of the wight of your genus... for now.</h3><h4>Submition Successful</h4>`;
        } else if (random === 5) {
            question_block = `<h3 id="question-block">See ya again soon.</h3><h4>Submition Successful</h4>`;
        } else if (random === 6) {
            question_block = `<h3 id="question-block">Very good. Very good.</h3<h4>Submition Successful</h4>`;
        } else if (random === 7) {
            question_block = `<h3 id="question-block">IDEA SUBMITION HAS BEEN SUBMITED<small style="font-size; xx-small;">-(robot voice)<small></h3<h4>Submition Successful</h4>`;
        } else if (random === 8) {
            question_block = `<h3 id="question-block">It's been added to the pile.</h3<h4>Submition Successful</h4>`;
        } else if (random === 9) {
            question_block = `<h3 id="question-block">On the shelf it goes.</h3<h4>Submition Successful</h4>`;
        } else if (random === 10) {
            question_block = `<h3 id="question-block">Alright. This better be the one.</h3<h4>Submition Successful</h4>`;
        } else if (random === 11) {
            question_block = `<h3 id="question-block">In it goes with the rest.</h3<h4>Submition Successful</h4>`;
        } else if (random === 12) {
            question_block = `<h3 id="question-block">This one feels familiar..</h3<h4>Submition Successful</h4>`;
        } else if (random === 13) {
            question_block = `<h3 id="question-block">Oh, wow. This one feels good.</h3<h4>Submition Successful</h4>`;
        } else if (random === 14) {
            question_block = `<h3 id="question-block">I could do this all day!</h3<h4>Submition Successful</h4>`;
        };
    question_view.innerHTML = `${question_block}`;
    question_view.style.display = 'block';
};

function load_vault(order = 0) {

    // Show the idea form and hide other views
    document.getElementById('vault-view').style.display = 'block';
    document.getElementById('ram-view').style.display = 'none';
    document.getElementById('idea-view').style.display = 'none';

    document.onkeydown = function(evt) {
    };

    document.getElementById('vault-container').innerHTML = '';
    document.getElementById('vault-tag').innerHTML = '<option selected value = "all">All Tags</option>';

    // load tags
    tag_load()
    
    // load all view
    vault_idea_sort()
};

function tag_load() {
    //load tags
    var tag_selector = document.getElementById('vault-tag');

    fetch('/ideas/tags')
    .then(response => response.json())
    .then(tags => {
        tags.forEach(tag => {
            //create option tag then populate
            var option_block = document.createElement('option');
            option_block.innerHTML = `${tag.tag}`;
            option_block.value = `${tag.tag}`;
            
            tag_selector.appendChild(option_block);
        })
    });
};

function vault_idea_sort() {
    // pull tag filter value
    var value = document.getElementById('vault-tag').value;
    if (value.length == 0) {
        value = 'all';
    }
    console.log(value);
    var order = document.getElementById('sort-order').value;

    console.log(order);

    //clear the container
    document.getElementById('vault-container').innerHTML = "";

    fetch(`/ideas/vault/tags/${value}/${order}`)
    .then(response => response.json())
    .then(ideas => {

        ideas.forEach(idea => {
            // create main block
            var main_block = document.createElement('div');
            main_block.className = 'main-block';
            main_block.style.animationPlayState = 'paused';

            //create idea box
            var idea_block = document.createElement('div');
            idea_block.className = "sub-block";
            idea_block.innerHTML = `
                <p><h3>${idea.subject}</h3><small style="color:grey;">${idea.timestamp.split(',')[0]}</small></p>
                <hr>
                <p style="padding: 1%;">${idea.body}</p>
                <hr>
                <p style="color:grey;">Your feelings at time of submition <span style="color: rgb(102,255,102);">'${idea.bonus}'</span> </p>
                <p>Tags:<small class="button" style="float:none;">#${idea.tag}</small>`
            
            main_block.appendChild(idea_block);

            document.getElementById('vault-container').appendChild(main_block);
        })
    })
    .then(console.log('tag-sort loaded'))
};

function load_idea() {

};

function load_ram() {

    // Show the idea form and hide other views
    document.getElementById('vault-view').style.display = 'none';
    document.getElementById('ram-view').style.display = 'block';
    document.getElementById('idea-view').style.display = 'none';

    //clear the container
    document.getElementById('ram-container').innerHTML = "";

    pull_ram()

    document.onkeydown = function(evt) {
        evt = evt || window.event;
        console.log(evt)
        if (evt.code === 'Space') {
            console.log('spacebar hit')
            pull_ram();
        }
    };

    console.log('ram loaded')

};

function pull_ram() {

    //clear the container
    document.getElementById('ram-container').innerHTML = "";

    fetch('/ideas/ram')
    .then(response => response.json())
    .then(ideas => {

        ideas.forEach(idea => {
            // create main block
            var main_block = document.createElement('div');
            main_block.className = 'main-block';
            main_block.style.animationPlayState = 'paused';

            //create idea box
            var idea_block = document.createElement('div');
            idea_block.className = "sub-block";
            idea_block.innerHTML = `
            <p><h3>${idea.subject}</h3><small style="color:grey;">${idea.timestamp.split(',')[0]}</small></p>
            <hr>
            <p style="padding: 1%;">${idea.body}</p>
            <hr>
            <p style="color:grey;">Your feelings at time of submition <span style="color: rgb(102,255,102);">'${idea.bonus}'</span> </p>
            <p>Tags:<small class="button" style="float:none;">#${idea.tag}</small>`
            
            main_block.appendChild(idea_block);

            document.getElementById('ram-container').appendChild(main_block);
        })
    })

    console.log('ram loaded')
}