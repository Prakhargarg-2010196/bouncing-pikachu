# Bouncing Pikachu

 This is a simple animation project made using requestAnimationFrame which is a function used to improve the functionality provided by setInterval() <br>
 or setTimeout() both of which takes two inputs ie.  function to be repeated and an interval in case of setInterval() or a function 
 to be repeated and a time after which the timeout functions stop. 

 ## Learning
 ### Difference between requestAnimationFrame() and setInterval() or setTimeout()
 - The requestAnimationFrame() takes a callback function which takes a time as a parameter by default making it repaint the frame as soon as the 
 resources of browser is free while in case of the other two functions the browser resources are put to work for those two functions making the page slow 
 wasting the resources.
 
 - The requestAnimationFrame() is although not also optimized as it depends on the refresh rate of the current screen so the animation may get slow in 
 case of slow refresh rate screen so in that case optimization technique is to be used which is described in the following blog but not using in this 
 project as that is too wide scoped for the project.
 [Go to the blog website for learning more](http://www.javascriptkit.com/javatutors/requestanimationframe.shtml)
 
 Moreover I have used the fade animation in the heading using concepts like for loop ,adding classes and setInterval function to create the effect of
 animation fade.

 ![Demo](https://github.com/Prakhargarg-2010196/bouncing-pikachu/assets/77922738/4f5eda2a-6d57-4553-a695-ab97edbc46b2)


