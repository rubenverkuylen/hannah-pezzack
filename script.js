"use strict";

// EMAIL ENCODER
var encEmail = "aGFubmFocGV6emFja0Bob3RtYWlsLmNvLnVr";
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
