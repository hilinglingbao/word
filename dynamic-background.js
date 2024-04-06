// dynamic-background.js  
document.addEventListener('DOMContentLoaded', function() {  
    const container = document.querySelector('.snowflakes-container');  
    const numSnowflakes = 100; // 雪花的数量  
  
    // 创建雪花  
    for (let i = 0; i < numSnowflakes; i++) {  
        const snowflake = document.createElement('div');  
        snowflake.classList.add('snowflake');  
        snowflake.style.left = `${Math.random() * 100}vw`; /* 随机水平位置 */  
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; /* 随机下落速度 */  
        container.appendChild(snowflake);  
    }  
});