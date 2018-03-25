var tablica_hasel = new Array("Kobranocka","Night Mistress","Kazik na żywo","Bracia Figo Fagot","Grupa Operacyjna","Qqqqqqqqqq qq qqqqq","Perfect","Def Leppard","Men At Work","Depeche Mode","Disturbed","Zacier","Elektryczne Gitary","Budka Suflera","Lady Pank","Strachy na lachy","Franek Kimono" )
var haslo = tablica_hasel [Math.round(Math.random()*17)]; 
haslo = haslo.toUpperCase();
var dlugosc = haslo.length;
var haslo_zasloniete  = "";
var pudlo = 0;
var tablica_liter = new Array("A","Ą","B","C","Ć","D","E","Ę","F","G","H","I","J","K","L","Ł","M","N","Ń","O","Ó","P","Q","R","S","Ś","T","U","V","W","X","Y","Z","Ż","Ź");


for(i=0;i<dlugosc;i++)
{
	if(haslo.charAt(i)==" ") haslo_zasloniete = haslo_zasloniete + " ";
	else haslo_zasloniete = haslo_zasloniete + "-";
	
}

function WypiszHaslo()
{
	document.getElementById("plansza").innerHTML = haslo_zasloniete;	
}
window.onload = start;

function start()
{
	var tresc = "";
	var element = "litera" + i;
	
	for(i=0;i<35;i++)
	{
		element = "litera" + i;
		tresc = tresc + "<div class=\"litera\" id="+element+" onclick=\"Sprawdz("+i+")\">"+ tablica_liter[i] +"</div>";	
		if((i+1)%7==0) tresc = tresc + "<div style=\"clear:both\"></div>";	
	}
	
	
	document.getElementById("alfabet").innerHTML = tresc;
	WypiszHaslo();
}

function Sprawdz(nr)
{
	var trafiona = false;
	for(i=0;i<dlugosc;i++)
	{
		if(haslo.charAt(i)==tablica_liter[nr])
		{	
			haslo_zasloniete=haslo_zasloniete.substr(0,i) + tablica_liter[nr] + haslo_zasloniete.substr(i+1);
			trafiona = true;
		}	
	}
	if(trafiona==true)
	{
		var element = "litera" + nr;
		document.getElementById(element).style.border = "3px solid green";
		document.getElementById(element).style.color = "green";
		document.getElementById(element).style.cursor = "default";
		WypiszHaslo();
	}
	else
	{
		var element = "litera" + nr;
		var handle = document.getElementById(element);
		document.getElementById(element).setAttribute("onclick",";");
		document.getElementById(element).style.border = "3px solid red";
		document.getElementById(element).style.color = "red";
		document.getElementById(element).style.cursor = "default";
		pudlo ++;
		document.getElementById("szubienica").innerHTML = "<img src=\"img/s"+pudlo+".jpg\" alt=\"obrazek"+pudlo+" \"/>";
	}	
	if(haslo==haslo_zasloniete)
			document.getElementById("alfabet").innerHTML = "Wygrana! Podano prawidłowe hasło: <br/>"+haslo+"<br/><br/><span id=\"reset1\" onclick = \"location.reload()\">JESZCZE RAZ?</span>";
	if(pudlo==9)
		document.getElementById("alfabet").innerHTML = "Przegrana!  Prawidłowe hasło: <br/>"+haslo+"<br/><br/><span id=\"reset2\" onclick = \"location.reload()\">JESZCZE RAZ?</span>";
}