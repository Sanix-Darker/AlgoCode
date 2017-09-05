// Editor Settings (Provided by C9)
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.setShowPrintMargin(false);
editor.session.setMode("ace/mode/c_cpp");
editor.setValue("#include <stdio.h>\n\n\nint main() {\n    // Complete the code.\n    return 0;\n}\n");
editor.clearSelection();

// Function to change the mode of the editor as a different language is selected dynamically
function changeMode() {
   	var x = document.getElementById("mode");
    var modeValue = x.options[x.selectedIndex].value;
    if (modeValue == "c") {
    	editor.session.setMode("ace/mode/c_cpp");
    	editor.setValue("#include <stdio.h>\n\n\nint main() {\n    // Complete the code.\n    return 0;\n}\n");
        editor.clearSelection();
        document.getElementById('langExt').innerHTML = "c";
    }
    if (modeValue == "c++") {
    	editor.session.setMode("ace/mode/c_cpp");
    	editor.setValue("#include <iostream>\nusing namespace std;\n\nint main() {\n    // Complete the code.\n    return 0;\n}\n");
        editor.clearSelection();
        document.getElementById('langExt').innerHTML = "cpp";
    }
    if (modeValue == "python2") {
    	editor.session.setMode("ace/mode/python");
    	editor.setValue("# Enter your code here. Read input from STDIN. Print output to STDOUT");
        editor.clearSelection();
        document.getElementById('langExt').innerHTML = "py";
    }
    if(modeValue == "python3") {
        editor.session.setMode("ace/mode/python");
        editor.setValue("# Enter your code here. Read input from STDIN. Print output to STDOUT");
        editor.clearSelection();
        document.getElementById('langExt').innerHTML = "py";
    }
    if (modeValue == "java") {
    	editor.session.setMode("ace/mode/java");
    	editor.setValue("import java.io.*;\n\nclass Main {\n\n    public static void main(String[] args) {\n        // Your code goes here\n   }\n}\n");
        editor.clearSelection();
        document.getElementById('langExt').innerHTML = "java";
    }
}

$(document).ready(function() {
    $('.selectpicker').selectpicker();
    $('[data-toggle="tooltip"]').tooltip(); 
});