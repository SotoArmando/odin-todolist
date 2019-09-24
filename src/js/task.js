
function Task(title = "no title", shortdescription = "no description", completed = false, author = "anonymous") {
    this.title = title;
    this.shortdescription = shortdescription;
    this.pages = pages;
    this.author = author;
    this.status = "no-completed";
    this.read = function() {
      if (this.status === "no-completed") {
        this.status = "completed";
      } else {
        this.status = "no-completed";
      }
      setStorage(myLibrary);
      render();
    };
  }
  
  export { Task }