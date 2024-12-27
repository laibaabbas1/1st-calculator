

function getperc() {
    alert("hi");
    let name = prompt("Enter your name");
    
    // to get total marks and obtained marks
    let tm = document.getElementById("tm1").value;
    let obt = document.getElementById("obt1").value;

    // to check weather the input is empty or not
    if (tm === "" || obt === "" || Number(tm) <= 0) {
        alert("Please enter valid marks.");
        return;
    }

          

         // Calculate percentage
         let res = (obt / tm) * 100;
     
    // grade on base of percentage 
    let grade;
    if (res >= 90)  
        {
        grade = 'A+';
    } 
    else if (res >= 80)
         {
        grade = 'A';
    } 
    else if (res >= 70)
         {
        grade = 'B';
    } 
    else if (res >= 60)
         {
        grade = 'C';
    } 
    else if (res >= 50) 
        {
        grade = 'D';
    } 
    else {
        grade = 'F';
    }

          // Display results
          alert(`Dear ${name}, you have got ${res.toFixed(2)}% and your grade is ${grade}.`);
          document.getElementById("aa").innerHTML = `Dear ${name}, you have got ${res.toFixed(2)}% and your grade is ${grade}.`;
          document.getElementById("ab").innerHTML = `Dear ${name}, you have got ${res.toFixed(2)}% and your grade is ${grade}.`;
          console.log(`Dear ${name}, you have got ${res.toFixed(2)}% and your grade is ${grade}.`);
}

//function change() {
   // document.getElementById("im1").src = "abc.jpg"; // Ensure 'abc.jpg' is in the correct path
//}



