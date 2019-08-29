 window.onload = function() {

    let menuItens = document.querySelectorAll('#menuTabs>li');
    for (let i = 0; i < menuItens.length; i++) {
        menuItens[i].addEventListener("click", function(){
            let tabs = document.querySelectorAll('.tab-content>.tab-pane');
            for (let k = 0; k < tabs.length; k++) {
                tabs[k].className = "tab-pane";
            }
            for (let j = 0; j < menuItens.length; j++) {
                menuItens[j].className = "";
            }
            this.className = "active";
            let linkTab = this.getElementsByTagName("a")[0].id;
            let tab = document.querySelectorAll('.tab-content>#'+linkTab)[0];
            tab.className = "tab-pane active";
        });
    };

};