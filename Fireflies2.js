function biasedRandom() {
    let R = Math.random();
    return 0.5 * (1 + Math.cbrt(2 * R - 1));
}

function createSpark() {
    
    let spark = document.createElement("div");
    
    spark.classList.add("spark");
    
    document.getElementById("spark-container").appendChild(spark);
    
    let x = biasedRandom() * window.innerWidth;
    let y = (1-Math.sqrt(Math.random())) * window.innerHeight;
    let z = Math.random();

    let scale = z + 0.5

    spark.style.transform = "scale(" + scale + ")";
    //spark.style.opacity =  0.5 - scale;

    let moveName = "move" + Math.random()
    function xShift(x) { 
        return 150 * (x - 0.5) 
        };
    function yShift(x) {
        return 10 * (x - 0.5)
        };

    let style = document.createElement("style");

    style.innerHTML = 
        "@keyframes " + moveName + " {" + 
        "   0% {transform: translate(" + xShift(Math.random()) + "px," + yShift(Math.random()) + "px);}" + 
        "   25% {transform: translate(" + xShift(Math.random()) + "px," + yShift(Math.random()) + "px);}" +
        "   50% {transform: translate(" + xShift(Math.random()) + "px," + yShift(Math.random()) + "px);}" +
        "   75% {transform: translate(" + xShift(Math.random()) + "px," + yShift(Math.random()) + "px);}" +
        "   100% {transform: translate(" + xShift(Math.random()) + "px," + yShift(Math.random()) + "px);}" +
        "}";

    document.head.appendChild(style);
    
    spark.style.left = x + "px";
    spark.style.top = y + "px";

    console.log("spark-anim 7s ease-in-out infinite, " + moveName + " 7s ease-in-out infinite")
    spark.style.setProperty("animation", moveName + " 7s ease-in-out infinite", "important");
    console.log(spark.style.animation)
    console.log(spark.style.transform)
    
    setTimeout(() => {
        spark.remove();
        style.remove();
        },
        7000);  
}

// "spark-anim 7s ease-in-out infinite, " +

/*function intervalRandom() {
    return  200 + 200*(Math.random()-0.5);
}

setInterval(intervalRandom, 200);*/
setInterval(createSpark, 150);
