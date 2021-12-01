# Tech
14. Model-View-Controller (MVC) Challenge: Tech Blog

# Table of Contents
1. [Links](#links)
1. [Usage](#usage)
1. [Tech used](#tech-used)
1. [Assignment Details](#assignment-details)
    1. [User Story](#user-story)
    1. [Acceptance Criteria](#acceptance-criteria)
1. [Credits](#credits)

## Links


The link to the heroku: [Tech on Heroku](https://polar-sierra-45467.herokuapp.com/)

-----
## Usage
This application is for the digital characters of Wreck-it Ralph. Mainly due to the word play with "Tech-it Ralph. 

Here we have a tech blog about the goings on with our favourite characters on a post/comment type forum.

Existing users can login in with their credentials and add posts, edit and delete their old posts. Users can also comment on their own or other posts.

New users can sign up with a user name and password. 

This application demonstrates an understanding of a MVC approach. 

First image shows an example of the most recent posts. The current signed in user and where they can log out or comment on other posts.

The 2nd image shows the code particularly the handlebars and server code.


![VS code Handlebars & Servers](https://user-images.githubusercontent.com/85147307/143083629-9a5efad7-22aa-4594-8f12-00895c27c876.png)
 
-----
## Tech Used 
- Node js
- sequelize
- mysql2
- dotenv
- Insomnia
- express handlebars
- express session
- connect session sequelize
- heroku & JawsDB
- Bulma
- [Google font](https://fonts.google.com/specimen/Press+Start+2P?thickness=8&width=10#standard-styles)

## User Story

```md
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions

```

## Acceptance Criteria
```md
GIVEN a CMS-style blog site
[✔️]WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
[✔️]WHEN I click on the homepage option
THEN I am taken to the homepage
[✔️]WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
[✔️]WHEN I choose to sign up
THEN I am prompted to create a username and password
[✔️ ]WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
[✔️]WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
[✔️]WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
[✔️]WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
[✔️]WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
[✔️]WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
[✔️]WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
[✔️]WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
[✔️]WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
[✔️]WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
[✔️]WHEN I click on the logout option in the navigation
THEN I am signed out of the site
[✔️]WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

----

-----
