array_student=[];

function submit(){
    var display_student_array=[];
    for(var i=1; i<=4; i++){
       var name_of_the_student=document.getElementById("name_of_the_student_"+ i).value;
      console.log(name_of_the_student); 
      array_student.push(name_of_the_student);
    }
    console.log(array_student);
    var length=array_student.length;
    console.log(length);
    for(var j=0; j<length; j++)
    {
      display_student_array.push("<h4>Name-"+ array_student[j]+ "</h4>");
      console.log(display_student_array);  
    }
    console.log(display_student_array);  
    document.getElementById("display_name_with_commas").innerHTML=display_student_array;
    var remove=display_student_array.join(" ")
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    array_student.sort();
    console.log(array_student);   
    var display_student_array_sort=[]; 
    var length=array_student.length;
    console.log(length);
    for(var j=0; j<length; j++)
    {
      display_student_array_sort.push("<h4>Name-"+ array_student[j]+ "</h4>");
      console.log(display_student_array_sort);  
    }
    console.log(display_student_array_sort);
    var remove=display_student_array_sort.join(" ")
    console.log(remove);
    document.getElementById("display_name_without_commas").innerHTML=remove;
}