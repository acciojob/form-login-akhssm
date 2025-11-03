function getFormvalue() {
    //Write your code here
	event.preventDefault(); 

  const firstName = document.forms["form1"]["fname"].value.trim();
  const lastName = document.forms["form1"]["lname"].value.trim();

  if (!firstName && !lastName) {
    alert("Please enter your first and last name.");
    return;
  }

  alert(`${firstName} ${lastName}`);
}
