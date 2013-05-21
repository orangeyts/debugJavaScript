debugJavaScript
===============

javascript debug lib

Problem
==========
today most of application build on B/S architect, javascript is the most popular scripting language , 
If the your the the dynamic page of is has a very complex business logic by the javascript processing , 
there will be a lot of debugging information ,

past to do
==========
usually the case of , we use the ALERT pop - up debugging information , 
but it will terminal browser to perform , but in the the under the the deployment of the products and can not be displayed debugging information , 
I usually use the if ( debug ) ( alert ( ' something ' ) ) , However, this you want to maintain a a lot of of debug variable ,
If you use the overall situation of a debug variable , you will see too much information . 

solution
==========
in the firefox under the , we can through the to use a the the console object of of the firebug plugins 
to to achieve the the function of of the similar log4j , but it is not available in IE to be identified.

Note
==========
- rely on firebug plug-ins 
- is only used to verify the business logic

