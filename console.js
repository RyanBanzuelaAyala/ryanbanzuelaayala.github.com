document.console = {};

document.console.line = 0;

document.console.debug = false;

function editline(str, l = document.console.line) {
	$("#" + l).html(str);
}

function print(str) {
	document.console.line++;
	$("body").append("<div class=\"line\" id=\"" + document.console.line + "\">" + str + "</div><br>");
}

function run(input) {
	var args = input.split(" ");
	switch(args[0]) {
		case "cls":
			$('body').empty();
			break;
		case "dev":
			print("<br><br> Yay! Hello there! i'm Ryan Banzuela Ayala. i love coding <3. Thanks for this awesome script by Alexander Hill and Nicholas McDaniel and i modified it. thank you anyway! <br><br>");
			break;
		case "skl":
			print("<br> >> PROGRAMMING  ---------------------- >> <br>");
			print(">> C#.NET <br>" +
			">> JAVA <br>" +
			">> VB.NET <br>" +		
			">> PHP  <br>" +		
			">> JAVASCRIPT  <br>" +		
			">> HTML5  <br>" +		
			">> CSS <br>");

			print(">> PRACTICES   ---------------------- >> <br>");
			print(">> OOP <br>" +
			">> OOD <br>" +
			">> GENERICS <br>" +		
			">> FUNCTIONAL PROGRAMMING  <br>" +		
			">> EVENTS & DELEGATES <br>" +		
			">> MULTI-THREADING <br>" +		
			">> PROVABLE CODING <br>" +		
			">> IDISPOSABLE BEST PRACTICES <br>" +		
			">> INTERFACES PRACTICES  <br>" +		
			">> CODE STANDARD <br>" +		
			">> UNIT TESTING  <br>");
			
			print(">> PATTERNS   ---------------------- >> <br>");
			print(">> SOLID DESIGN PATTERN <br>" +
			">> N-TIER DESIGN CONCEPT <br>");

			print(">> SOFTWARE LIFE CYCLE   ---------------------- >> <br>");
			print(">> AGILE - ITERATIVE <br>" +
			">> WATERFALL <br>" +
			">> INCREMENTAL <br>");

			print(">> FRAMEWORKS    ---------------------- >> <br>");
			print("++ DATABASE  <br>" +
			">> -- LINQ / ENTITY FRAMEWORK  / ADO.NET / HIBERNATE / JPA o WEB  <br>" +
			"++ WEB <br> " +
			">> -- ASP - ASP.NET / MVC 4 – 5 - 6 / SOA / WEBAPI / WCF / LARAVEL / MAVEN / SPRING   <br>" +
			"++ WINDOWS FORM <br> " +
			">> -- TELERIK / DEV   <br>" +
			"++ MOBILE  <br> " +
			">> -- XAMARIN / IONIC FRAMEWORK  <br>" +
			"++ UI  <br> " +
			">> -- TELERIK / SEMANTIC / ADMINLTE / EXPRESS / KENDO UI / JQUERY UI <br>" +
			"++ TESTING   <br> " +
			">> -- MSTest / NUnit / XUnit  <br>" +
			"++ JAVASCRIPT    <br> " +
			">> -- ANGULARJS – ANGULAR2 – 4 / JQUERY / MODULARIZE   <br>" +
			"++ CMS  <br> " +
			">> -- NuSOAP / SLIMPHP / WORDPRESS / JOOMLA   <br>");

			print(">> DATABASE   ---------------------- >> <br>");
			print(">> MS SQL Server <br>" +
			">> MySQL  <br>" +
			">> Oracle 10g   <br>" +
			">> Postgress SQL   <br>" +
			">> SQLite (Standalone) <br>");

			print(">> SERVER    ---------------------- >> <br>");
			print(">> WINDOWS SERVER 2008  <br>" +
			">> WINDOWS SERVER 2012  <br>" +
			">> WAMP  <br>" +
			">> XAMPP   <br>" +
			">> GoDaddy hosting Panel <br>");

			print(">> CLOUD     ---------------------- >> <br>");
			print(">> ORACLE CLOUD (HCM)   <br>");
			
			print(">> GRAPHICS SOFTWARES     ---------------------- >> <br>");
			print(">> PHOTOSHOP / ILLUSTRATOR / FIREWORKS / FLASH / AFTER EFFECTS   <br>");

			break;
		case "cv":
			window.location = "https://pardsqq.github.com/ryan.pdf";
			break;
		case "git":
			window.location = "https://github.com/pardsqq";
			break;
		case "help":
			print("<br> Commands: <br><br> dev >> Who am i with <3. <br> skl >> dev skills with <3. <br> cv >> i would really love to show you my CV <br> cls >> clear all with <3 <br> git >> browse all my projects. <3 <br><br>");
			break;
		default:
			print("<br> Invalid command. Use help for a list of commands. :) ");
	}
}

document.console.input = "";
document.console.processing = false;

$(document).ready(function() {
	$(document).keydown(function(event) {
		if(!document.console.processing) {
			if(document.console.debug) {
				console.log(event.keyCode + " pressed");
			}
			switch(event.keyCode) {
				case 8:
					document.console.input = document.console.input.substring(0, document.console.input.length - 1);
					break;
				case 13:
					document.console.processing = true;
					run(document.console.input);
					print("dev@pardsqq.github.io: >> ");
					document.console.processing = false;
					document.console.input = "";
					break;
				case 9:
				case 20:
				case 16:
				case 17:
				case 91:
				case 18:
				case 93:
				case 92:
				case 45:
				case 36:
				case 33:
				case 46:
				case 35:
				case 34:
				case 37:
				case 38:
				case 39:
				case 40:
				case 19:
				case 145:
				case 144:
				case 112:
				case 113:
				case 114:
				case 115:
				case 116:
				case 117:
				case 118:
				case 119:
				case 120:
				case 121:
				case 122:
				case 123:
				case 224:
				case 12:
				case 27:
					break;
				default:
					document.console.input += event.key;
			}
			editline("dev@pardsqq.github.io: >> " + document.console.input);
		} else {
			if(document.console.debug) {
				console.log(event.keyCode + " ignored");
			}
		}
	});
	print("Logged in as dev@pardsqq.github.io <br>");
	print("Use help for a list of commands. :) <br>");	
	print("dev@pardsqq.github.io: >>  ");
});
