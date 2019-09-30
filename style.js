    /*
        function getGenda(){           
        var genda = document.querySelector('input[name="genda"]:checked').value;
        if(!genda){
          alert('Select At least One');
          return false;
        }
        else{
          alert(genda);
        }
      }
      
      function myDob(){
          var dob8 = "05 05 1995";
          var dob8 = document.getElementById("dob").value;
          //alert(dob8);
          //split the dob8 components using white spaces
          dobs = dob8.split(" ");
          //Assigned each index to a variable as a value to them
          var fmonth = dobs[0];
          var fdate = dobs[1];
          var fyear = dobs[2];
          //console.log(fmonth, fdate, fyear);(displays the values of the variables)
          //Convert the strings to numbers or integers
          var m = parseInt(fmonth);
          var d = parseInt(fdate);
          //Split the year variable to two pairs
          //step 1 split them into 4 strings
          var b = fyear.split("");
          //step 2 Concat to two pairs
          var x = b[0].concat(b[1]);//19
          var g = b[2].concat(b[3]);//95
          //This gives out x as 19 and g as 95 
          //Step 3
          //Convert x and g to integers for mathematical operations
          var c = parseInt(x);
          var y = parseInt(g);
          window.alert(( ( (c/4) -2*c-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d ) % 7);
      }*/
      //Function to generate the name
      //Variable declarion

      function gen_Name(){
        var genda = document.querySelector('input[name="genda"]:checked').value;
        var dob1 = document.getElementById("dob").value;
        //Split dob into individual indices
        var dobs = dob1.split(" ");
        //Asigned variables to the indices as value
        var fmonth = dobs[0];
        var fdate = dobs[1];
        var fyear = dobs[2];
        var m = parseInt(fmonth);
        var d = parseInt(fdate);
        //Split fyear to 2 strings by concating
        var c = fyear[0].concat(fyear[1]);
        var y = fyear[2].concat(fyear[3]);
        //convert c and y to integer
        var c = parseInt(c);
        var y = parseInt(y);
        if ( d < 0 || d > 31 ) {
            alert("Invalid Day Or Date")
        }else if(m < 0 || m > 12){
            alert ("Invalid Day Or Date")


        }else{
        fd = Math.round( ( (c/4) -2*c-1) + ((5*y/4) ) + ((26*(m+1)/10)) + d ) % 7;

        if(!genda){
          alert('No genda was selected. Try again.');
          return false;
        }
        else if(genda === 'Female' && fd === 0){
          alert("Akosua");
        }
        else if(genda === 'Male' && fd === 0){
            alert("Kwasi");
        }
        else if(genda === 'Female' && fd === 1){
          alert("Adwoa");
        }
        else if(genda === 'Male' && fd === 1){
            alert("Kwadwo");
        }
        else if(genda === 'Female' && fd === 2){
          alert("Abenaa");
        }
        else if(genda === 'Male' && fd === 2){
            alert("Kwabena");
        }
        else if(genda === 'Female' && fd === 3){
          alert("Akua");
        }
        else if(genda === 'Male' && fd === 3){
            alert("Kwaku");
        }
        else if(genda === 'Female' && fd === 4){
          alert("Yaa");
        }
        else if(genda === 'Male' && fd === 4){
            alert("Yaw");
        }
        else if(genda === 'Female' && fd === 5){
          alert("Afua");
        }
        else if(genda === 'Male' && fd === 5){
            alert("Kofi");
        }
        else if(genda === 'Female' && fd === 6){
          alert("Ama");
        }
        else if(genda === 'Male' && fd === 6){
            alert("Kwame");
        }else{
            alert("Try Again");
        }


      }
    }


