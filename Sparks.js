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
    let z = Math.random()

    spark.style.left = x + "px";
    spark.style.top = y + "px";

    spark.style.scale = z + 0.5;
    spark.style.opacity =  1.5 - spark.style.scale;

//    console.log(spark.style.opacity);

    setTimeout(() => {
        spark.remove();
        },
        7000);
}

function intervalRandom() {
    return  200 + 200*(Math.random-0.5);
}

setInterval(intervalRandom, 200);
setInterval(createSpark, 150);
