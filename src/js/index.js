(function() {
  console.log("title should be initialized here or whateverrrr")
  var $ = document.querySelector.bind(document),
      $$ = document.querySelectorAll.bind(document),
      $id = document.getElementById.bind(document),
      activeTagName = null,
      $tags = $$('#tags > .tag'),
      $projectsParent = $id('projects'),
      $projects = $$('#projects > .project'),
      $projectInfo = $('.project-info'),
      $projectTags = $$('.project-tags > .tag'),
      $details = $id('project_details'),
      $title = $id('project_details_title'),
      $description = $id('project_details_description');
      console.log("title: ", $title)
      console.log("projectInfo: ", $projectInfo)

  // TAG SELECTION
  function getTagName($tag) {
    return $tag.classList[1];
  }

  function deactivateTag(tagName) {
    var tagSelector = '#tags > .tag.' + tagName;
    $(tagSelector).classList.remove('active');
    var projectTagSelector = '.project-tags > .tag.' + tagName;
    $$(projectTagSelector).forEach(function($tag) {
      $tag.classList.remove('active');
      var $wrapper = $tag.parentNode.parentNode;
      $wrapper.classList.remove(tagName);
    });
  }

  function activateTag(tagName) {
    console.log("activate Tag!", tagName)
    var tagSelector = '#tags > .tag.' + tagName;
    $(tagSelector).classList.add('active');
    var projectTagSelector = '.project-tags > .tag.' + tagName;
    $$(projectTagSelector).forEach(function($tag) {
      $tag.classList.add('active');
      var $wrapper = $tag.parentNode.parentNode;
      console.log("wrapper: ", $wrapper)
      $wrapper.classList.add(tagName);
    });
  }

  function clearActiveTagName() {
    deactivateTag(activeTagName);
    activeTagName = null;
  }

  function setActiveTagName(tagName) {
    if (activeTagName !== null) {
      deactivateTag(activeTagName);
    }
    activeTagName = tagName;
    activateTag(activeTagName);
  }

  function attachTagListener($tag) {
    var tagName = getTagName($tag);
    $tag.addEventListener('click', function() {
      if (tagName === activeTagName) {
        clearActiveTagName();
      } else {
        setActiveTagName(tagName);
      }
    }, false);
  }

  $tags.forEach(attachTagListener);
  $projectTags.forEach(attachTagListener);

  // DETAILS BOX

  var perRow = 3,
      total = $projects.length;
  function getInsertBeforeIndex(i) {
    var j = (Math.floor(i / 3) + 1) * 3;
    return Math.min(j, total);
  }
  function getOffsetClass(offset) {
    return 'c' + offset + perRow;
  }
  var offsetClasses = [];
  for (var offset = 0; offset < perRow; offset++) {
    offsetClasses.push(getOffsetClass(offset));
  }
  $projects.forEach(function($project, i) {
    var j = getInsertBeforeIndex(i);
    console.log("adding listener to each project: ", j, i)
    var offsetClass = getOffsetClass(i % 3);
    $project.addEventListener('click', function() {
      console.log("$project: ", $project)
      var title = $project.querySelector('.project-info').textContent;
      var description = $project.querySelector('.project-description').innerHTML;
      console.log("title: ", title)
      console.log("description: ", description)
      $title.textContent = title;
      $description.innerHTML = description;
      if (j === total) {
        $projectsParent.appendChild($details);
      } else {
        $projectsParent.insertBefore($details, $projects[j]);
      }
      console.log("details", $details)
      $details.classList.remove('hide');
      $details.classList.remove.apply($details.classList, offsetClasses);
      $details.classList.add(offsetClass);
      $projects.forEach(function($project) {
        $project.classList.remove('selected');
      });
      $project.classList.add('selected');
    }, false);
  });
//addProjectListener($projects);
})();

// also uses panel and #flip in main.css
// based on this: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle
/*
$(document).ready(function(){
    $(".project-wrapper").click(function(){
        $("#panel").slideToggle("slow");
    });
});
*/

/*
function addProjectListener($projects) {
  console.log("addProjectListener...")
  $projects.forEach(function($project, i) {
    $project.addEventListener('click', function() {
      $projects.forEach(function($project) {
        $project.classList.remove('selected');
      });
      $project.classList.add('selected');
    }, false);
  });
}

$(document).ready(function(){
    $(".project-info").click(function(){
      console.log("this", this)
      console.log("parent", $(this).parent())
      console.log("selected", $(this).parent().nextElementSibling)
        $("#project_details").slideToggle("slow");
    });
});
*/


