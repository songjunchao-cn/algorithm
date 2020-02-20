#Algorithms

Two algorithms of ByteArk

## Background

Question 1 Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help. Task You need to return a string that looks like a diamond shape when printed on the screen, using asterisk ( * ) characters. Trailing spaces should not be removed, but every line must be terminated with a newline character ( \n ). Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size. 
Examples 
A size 3 diamond:

```sh
 *
***
 *
```

A size 5 diamond:

```sh
  *
 ***
*****
 ***
  *
```

John has invited some friends. His list is:

```sh
s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjo n:Tornbull;Raphael:Corwill;Alfred:Corwill";
```

Could you make a program that makes this string uppercase gives it sorted in alphabetical order by last name. When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma. So the result of function meeting(s) will be:

```sh
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED) (TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
```

It can happen that in two distinct families with the same family name two people have the same first name too

## Usage

This project uses [node](http://nodejs.org). Go check it out if you don't have it locally installed.

sh for diamond:

```sh
$ cd algorithm
```

```sh
$ node diamond.js
```

sh for meeting:

```sh
$ cd algorithm
```

```sh
$ node meeting.js
```
