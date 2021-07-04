name_of_guest_array=[];
function  submit(){
    var display_guest_array=[];
    for(var j=1;j<=4;j++){
      var name_of_guest=document.getElementById("name_of_guest_"+j).value;
      console.log(name_of_guest);
      name_of_guest_array.push(name_of_guest);
    }
    console.log(name_of_guest_array);
    var length_of_name_of_guest_array=name_of_guest_array.length;
    console.log(length_of_name_of_guest_array);
    for(var k=0;k<length_of_name_of_guest_array; k++){
      display_guest_array.push("<h4>Name-"+name_of_guest_array[k]+"</h4>");
      console.log(display_guest_array);
    }
    }


function show(){
    
  name_of_guest_array.sort();
  console.log(name_of_guest_array);
  var display_student_array=[];
  var length_of_name_of_guest_array=name_of_guest_array.length;
  console.log(length_of_name_of_guest_array);
  for(var i=0; i<length_of_name_of_guest_array;i++){
    display_guest_array.push("<h4>Name-"+name_of_guest_array[i]+"</h4>");
    console.log(display_guest_array);
  }
  document.getElementById("name_of_guest_array").value;
  
}
function searching(){
  var s=document.getElementById("submit_button").value;
  console.log(s)
  var found=0;
  for(var j=0; j<name_of_guest.length; j++)
  {
    if(s==names_of_people[j]){
      found=found+1;
    }
  }
  document.getElementById("search_button").innerHTML="name found " +found+" time/s";
  console.log("found name " +found+ " time/s");
}