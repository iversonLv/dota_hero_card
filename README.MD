# Welcome to Dota2 hero card

This project is simple showcase dota2 hereo on the card and we could hover mouse on its talent and abilities icon to popup tooltip that show details  

When page load, the card will show back side, after 3 API endpoint complete and Variables data finished get data, then the card will flip to hero detail front side.  

## Preview
![showcase](./images/showcase.gif)

## API
https://api.opendota.com/api

| Variables | API URL | Info |
|---|---|---|
|heroes| https://api.opendota.com/api/constants/heroes | list all heroes
|heroesAbilities| https://api.opendota.com/api/constants/hero_abilities | list all hero's abilities
|abilities| https://api.opendota.com/api/constants/abilities | list all abilities

For this project, we need heroes list, abilities list, and hero abilities mapping list';

## Assets
I download most static image from https://www.dota2.com/hero/magnus?l=schinese that could load fast at local
Please check images from `./images/` folder

## Project check list
[] Setup project: Create index.html, style.css, script.js and link them together  
  [] prepare assets: icons/background/font  
  [] create card,   
  [] create front card, structure the layout  
  [] create hero video, left abilities, left talent  
  [] create hero below mp/hp  
  [] create hero name  
  [] create hero roles  
  [] create hero top left primary attr, right corner dmg type  
  [] create hero base str, int, agi and related gain for top left corner  
  [] create hero bottom info  
  [] create card back for loading  
  [] deplay  