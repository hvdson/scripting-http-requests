Make a new directory inside your working directory and call it callbacks
(or whatever you wish, the name doesn't matter).

Inside that directory,
- create the files print_uppercase.js, print_lowercase.js, print_reverse.js
and - if you feel stretchy - print_1337.js.

Each of these files will need to require your http-functions module
(or whatever you named it) so they have access to getHTML.

You may want to copy your http-functions.js module file into the same directory.

If you leave it where it is you will need to change your require statement to use
'../http-functions' instead of './http-functions'.

While . represents the current working directory, .. represents
the directory one level up (in other words, the parent).
