CAPP-30370-Final
================

##Purpose

The purpose of this site is to offer the user a way to learn about me. The site is 
divided into four pages: Homepage, Hometown, Interests, and Resume. The homepage 
has an introduction, links to some of my favorite sites, and a site navigation that 
is present on all of the sites. The hometown page displays information about my 
hometown, Ironton, OH. The main purpose of the interests page is to show some of 
what I have learned in this web design course and apply it to a page. The resume 
page contains my work history and other relevant information. All pages are built 
with the idea responsive web design in mind. Below are explanations of how my page 
fulfills the requirements of the project.

###Breakpoints

Each page has break points at 700px and 1000px. The wireframes associated with the 
project show exactly how each page changes as the browser resizes but a couple things 
are constant for every page. First, at 700px the site nav is floated left and the 
main content of the page is shown to the right. Second, at 1000px the footer displays
a background.

###Three Column Layout
When viewed at desktop size, the "History" and "Demographics" sections of the hometown 
page are displayed using a three column layout. The images on the interests page are 
shown three-across when viewed at desktop size as well.

###CSS Animation on User Interaction

The size of the images on the interests page increase by 25% when the mouse hovers 
over them using this line of code: .sites:hover {-webkit-transform:scale(1.25);}

##CSS Animation on Continuous

On the interests page, the background of the paragraph with the title "Web Design" 
changes colors in the following order: red, orange, yellow, green, blue, purple. 
The text of the paragraph changes from red to purple and back again.

###Background Image

As mention previously, the footer of each page has a background image when the page 
is viewed at desktop size.


###jQuery Visual Interaction

The sections of the hometown page are displayed one at a time when viewed at tablet 
size or larger. Each section has a corresponding tab above where the sections are 
displayed. When a tab is clicked, it becomes a different color from the other two 
and the appropriate content is displayed below while the content of the other 
sections is not. jQuery was used to accomplish this and the code can be viewed 
in the hometown2.js file in the project's directory.
