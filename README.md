# podcastr

This web app is a podcast plataform created at NLW#5(Next Level Week 5) from Rocketseat.

There are two pages: Home and Episode Page:

HOME:
 - This is the page with the list of episodes, ordered by episode release date decreasing.
![home](https://user-images.githubusercontent.com/32073399/116146633-149c2180-a6b5-11eb-90b1-8c45a07756f1.png)

EPISODE:
 - This page contains the summary of the episode selected.
![episode](https://user-images.githubusercontent.com/32073399/116146722-30072c80-a6b5-11eb-9d96-920f8145c94d.png)

When an episode is being played, then we have the Player component activated at the right side of any page:
 - The player has the following options: 
   - Play/Pause: Available only when an episode is selected.
   - Shuffle: Available only when an episode is selected and there are more than one episode on the episodes list.
   - Repeat: Available only when an episode is selected.
   - Previous/Next: Available only when an episode is selected and there are more than one episode on the episodes list.
![player](https://user-images.githubusercontent.com/32073399/116147011-8d02e280-a6b5-11eb-8489-47e5b5901d5c.png)


To run this app, after download this repository, your must install all dependencies with the command _yarn install_. Then run de server with _yarn server_, and run the app with developer mode _yarn dev_ or production mode _yarn build_ then _yarn start_.
