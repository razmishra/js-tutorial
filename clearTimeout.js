

// -----clearTimeout function----------

// var variable = setTimeout(() => {
//   console.log("hi there");
// }, 1000);


// clearTimeout(variable)


var autoSaveTimeout;

function saveUserWork(content) {
    console.log("Auto-saving:", content);
}

function onEditorContentChanged(event) {
    var editorContent = event.target.value;

    // Clear the previous auto-save timeout
    clearTimeout(autoSaveTimeout);

    // Set a new timeout for auto-saving
    autoSaveTimeout = setTimeout(function() {
        saveUserWork(editorContent);
    }, 500);
}

var textEditor = document.getElementById('textEditorId');
textEditor.addEventListener('input', onEditorContentChanged);
