let tabs = document.querySelectorAll(".tab-nav li a");
let tabContent = document.querySelectorAll(".tab-item");

tabs.forEach(tab => {
  tab.addEventListener("click", function(e) {
    e.preventDefault();

    tabs.forEach(item => {
      item.classList.remove("active"); 
    });

    this.classList.add("active");

    let tabName = this.getAttribute("href");
    selectTabContent(tabName);
  }); 

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName.replace(/#/, ''))
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  }
});

document.querySelector('.sidebar-mob-btn').addEventListener('click', function (e) {
  e.preventDefault();
    document.querySelector('.sidebar').classList.toggle('active');
})


