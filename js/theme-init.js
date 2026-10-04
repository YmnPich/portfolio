/* Sets light/dark theme before first paint (avoids a flash). */
(function(){var d=matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light",t=d;try{t=localStorage.getItem("th")||d}catch(e){}document.documentElement.dataset.theme=t})()
