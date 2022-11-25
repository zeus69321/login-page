var username,password;
document.getElementById("b1").onclick=function()
{
    username=document.getElementById("i1").value;
    password=document.getElementById("i2").value;
    if(username!="ayush")
    {
        window.alert("enter valid username and password")
    }
    else 
        {
            if(username=="ayush")
            {
                if(password=="verma")
            {
            window.alert("login sucessful")
        }
    }
        }
}
