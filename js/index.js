// Editor Settings (Provided by C9)
var editor = ace.edit("editor"), editorval=$('#editor').val();

editor.setTheme("ace/theme/monokai");
editor.setShowPrintMargin(false);
editor.session.setMode("ace/mode/c_cpp");
editor.setValue(v+"#include <stdio.h>\n\n\nint main() {\n    // Complete the code.\n    return 0;\n}\n");
editor.clearSelection();

// Function to change the mode of the editor as a different language is selected dynamically
function changeMode() {
   	var x = document.getElementById("mode");
    var modeValue = x.options[x.selectedIndex].value;

    // looks better with the switch
	switch(modeValue) {
	    case "c":
	        type_comments="//";
	    	editor.session.setMode("ace/mode/c_cpp");
	    	editor.setValue(v+"#include <stdio.h>\n\n\nint main() {\n    // Complete the code.\n    return 0;\n}\n");
	        editor.clearSelection();
	        document.getElementById('langExt').innerHTML = "c";
	        break;
	    case "c++":
	        type_comments="//";
	    	editor.session.setMode("ace/mode/c_cpp");
    		editor.setValue(v+"#include <iostream>\nusing namespace std;\n\nint main() {\n    // Complete the code.\n    return 0;\n}\n");
	        editor.clearSelection();
	        document.getElementById('langExt').innerHTML = "cpp";
	        break;
	    case "php":
	        type_comments="//";
	    	editor.session.setMode("ace/mode/c_cpp");
	    	editor.setValue(v+"<?php \n // Complete the code Ex: echo 'hello world';.\n ?>\n");
	        editor.clearSelection();
	        document.getElementById('langExt').innerHTML = "php";
	        break;
	    case "python2":
	    case "python3":
	        type_comments="#";
	        editor.session.setMode("ace/mode/python");
	        editor.setValue(v+" Enter your code here. Read input from STDIN. Print output to STDOUT");
	        editor.clearSelection();
	        document.getElementById('langExt').innerHTML = "py";
	        break;
	    case "java":
	        type_comments="//";
	    	editor.session.setMode("ace/mode/java");
	    	editor.setValue(v+"import java.io.*;\n\nclass Main {\n\n    public static void main(String[] args) {\n        // Your code goes here\n   }\n}\n");
	        editor.clearSelection();
	        document.getElementById('langExt').innerHTML = "java";
	        break;
	    default:
	        alert("Choose a right thing!");
	}

}

$(document).ready(function() {
    $('.selectpicker').selectpicker();
    $('[data-toggle="tooltip"]').tooltip(); 
});

$('#compile').click(function(){
	editor.compileIt();
});