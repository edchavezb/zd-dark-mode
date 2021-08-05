let goDarkBtn = document.getElementById("go-dark");
let goLightBtn = document.getElementById("go-light");

goDarkBtn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: goDark,
  });
});

goLightBtn.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: goLight,
  });
});

function goDark() {
  if (window.location.toString().includes("zendesk.com")) {
    setInterval(function(){
      for (const e of window.document.querySelectorAll("footer")) {e.style.backgroundColor = "#424242";};
      for (const e of window.document.querySelectorAll(".sidebar_box_container")) {e.style.backgroundColor = "#181818";e.style.color = "#ffffff";}; 
      for (const e of window.document.querySelectorAll(".nav_tab")) {if(e.querySelectorAll("button").length > 0){e.querySelectorAll("button")[0].style.backgroundColor = "#424242";e.querySelectorAll("button")[1].style.backgroundColor = "#424242";}};
      for (const e of window.document.querySelectorAll(".header")) {e.style.backgroundColor = "#181818";};
      for (const e of window.document.querySelectorAll(".rich_text")) {e.style.backgroundColor = "#181818";e.style.color = "#ffffff";};
      for (const e of window.document.querySelectorAll(".ticket")) {e.style.backgroundColor = "#181818";};
      for (const e of window.document.querySelectorAll(".is-new")) {e.style.backgroundColor = "#424242";e.style.color = "#ffffff";};
      for (const e of window.document.querySelectorAll(".zendesk-editor--toolbar")) {e.style.backgroundColor = "#2e2e2e";};
      for (const e of window.document.querySelectorAll(".zendesk-editor--rich-text-comment")) {e.style.color = "#bfbfbf";};
      for (const e of window.document.querySelectorAll(".zd-tag-menu-root")) {e.style.backgroundColor = "#2e2e2e"};
      for (const a of window.document.querySelectorAll("a")) {a.setAttribute('style','color:#fe8c00');};
      for (const input of window.document.querySelectorAll("input")) {input.setAttribute('style','background-color:#2e2e2e; color:white');};
      for (const div of window.document.querySelectorAll(".sc-gPEVay")) {div.setAttribute('style','background-color:#2e2e2e; color:white');};
      for (const label of window.document.querySelectorAll("label")) {label.setAttribute('style','color:white');};
    }, 3000);
  }
}

function goLight() {
  if (window.location.toString().includes("zendesk.com")) {
    window.location.reload();
  }
}
