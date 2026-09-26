// Load saved notes, or return an empty list when none exist.
function loadNotes() {
  var savedNotes = localStorage.getItem("notes");
  return savedNotes ? JSON.parse(savedNotes) : [];
}

// Save the current notes in the browser.
function saveNotes(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
}