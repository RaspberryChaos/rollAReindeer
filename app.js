const container = document.querySelector('.container');
const snowflake = document.querySelector('.snowflake');

function appendSnowflake() {
    const newSnowflake = snowflake.cloneNode(true);

    //Each snowflake looks and behaves a little different
    newSnowflake.style.paddingLeft = Math.random() * 10 + "px";
    newSnowflake.style.animationDuration = Math.random() * 5 + 3 + "s";
    newSnowflake.style.opacity = Math.random() * 1;

    container.append(newSnowflake);
    console.log(newSnowflake);
}

const interval = setInterval(appendSnowflake, 50);
setTimeout(() => {
    clearInterval(interval);
}, 2000);