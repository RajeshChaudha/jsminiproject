function Verify() {
    var userRef = "RajeshChaudhary";
    var passRef = "296Rajesh";
    
    var user =  document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef || pass == passRef) {
    document.write("Connecting")
    } else {
    document.write("It's seem you make a mistake...")
    }
  };
  
  //Rules button
  function Show(id)
  {
    if (document.getElementById(id).style.display == 'none') {
         document.getElementById(id).style.display = 'block';
    }
    else {
         document.getElementById(id).style.display = 'none';
    }
  };