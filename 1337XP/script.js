var projectSummaries = document.getElementsByClassName('project-summary-item');

var str = projectSummaries[0].innerText;

var matches = str.match(/(\d+)\sXP/);

var oldXp = parseInt(matches[1]);

var newXp = oldXp / 42;

projectSummaries[0].innerText = str.substr(0, str.length - matches[0].length) + newXp + " XP"

