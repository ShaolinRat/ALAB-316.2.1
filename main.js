// Menu data structure
var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];
  
  const mainEl = document.getElementsByTagName("main")[0];
  mainEl.style.backgroundColor = "grey";
  
  const mainElHeader = document.createElement("h1");
  mainElHeader.innerHTML = "DOM Manipulation";
  
  mainEl.appendChild(mainElHeader);
  mainEl.classList.add("flex-ctr");
  
  const topMenuEl = document.getElementById("top-menu");
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  for (let i = 0; i < menuLinks.length; i++) {
    const aEl = document.createElement("a");
    aEl.setAttribute("href", menuLinks[i].href);
    aEl.textContent = menuLinks[i].text;
    topMenuEl.appendChild(aEl);
  }
  
  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";
  
  topMenuLinks = document.querySelectorAll("a");
  
  topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
  
    // console.log(event);
    if (event.target.tagName !== "A") {
      console.log(`here is the target clicked ${event.target}`);
      console.log(`here is it's innerHTML content: ${event.target.innerHTML}`);
      return;
    }
    if (!event.target.classList.contains("active")) {
      if (event.target.innerHTML != "about") {
        subMenuEl.style.top = "100%";
      } else {
        subMenuEl.style.top = "0";
        h1 = document.createElement("h1");
        h1.textContent = event.target.innerHTML;
        mainEl.textContent = "";
  
        mainEl.appendChild(h1);
      }
    } else {
      subMenuEl.style.top = "0";
    }
  
    function buildSubMenu(sub) {
      while (subMenuEl.firstChild) {
        subMenuEl.removeChild(subMenuEl.firstChild);
      }
      for (let i = 0; i < sub.length; i++) {
        anchorEl = document.createElement("a");
        anchorEl.setAttribute("href", sub[i].href);
        anchorEl.textContent = sub[i].text;
        subMenuEl.appendChild(anchorEl);
      }
    }
  
    for (let i = 0; i < menuLinks.length; i++) {
      if (topMenuLinks[i] == event.target) {
        if (i > 0) {
          subArr = menuLinks[i].subLinks;
          buildSubMenu(subArr);
        }
        event.target.classList.toggle("active");
      } else {
        topMenuLinks[i].classList.remove("active");
      }
    }
  });
  
  subMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName != "A") {
      return;
    }
  
    console.log(event);
    console.log(event.target);
  
    subMenuEl.style.top = "0";
  
    for (let i = 0; i < subMenuEl.length; i++) {
      subMenuEl[i].classList.remove("active");
    }
    h1 = document.createElement("h1");
    h1.textContent = event.target.innerHTML;
    mainEl.textContent = "";
  
    mainEl.appendChild(h1);
  });