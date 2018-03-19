ref
https://scotch.io/tutorials/getting-started-with-browserify

browserify
----------

browserify main.js -o bundle.js
browserify --debug main.js -o bundle.js

watchify
--------

npm i watchify --global

watchify main.js -o bundle.js -v

$ pgrep node
26683

kill $(pgrep node)


Beefy
-----

npm i beefy -g

beefy main.js --live

if err
beefy main.js --browserify $(which browserify) --live
