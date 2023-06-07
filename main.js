function showPrice()
{
    
    if(document.getElementById("krotkie").checked)
    {
        printPrice(25);
    }
    else if(document.getElementById("srednie").checked)
    {
        printPrice(30);
    }
    else if(document.getElementById("poldlugie").checked)
    {
        printPrice(40);
    }
    else if(document.getElementById("dlugie").checked)
    {
        printPrice(50);
    }
}

function printPrice(price)
{
    document.getElementById("price").innerHTML = "Cena strzyżenia: " + price;
}