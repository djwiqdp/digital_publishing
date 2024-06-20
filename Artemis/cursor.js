document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("mousemove", function(e) {
        const density = 5;
        for (let i = 0; i < density; i++) {
            setTimeout(() => {
                const cursor = document.createElement("div");
                cursor.classList.add("custom-cursor");
                const x = e.pageX + Math.random() * 20 - 10; 
                const y = e.pageY + Math.random() * 20 - 10; 
                cursor.style.left = x + "px";
                cursor.style.top = y + "px";
                document.body.appendChild(cursor);
                
                setTimeout(() => {
                    let opacity = 1;
                    const fadeOutInterval = setInterval(() => {
                        opacity -= 0.05; 
                        cursor.style.opacity = opacity;
                        if (opacity <= 0) {
                            clearInterval(fadeOutInterval); 
                            cursor.remove();
                        }
                    }, 50); 
                }, 500); 
            }, i * 100); 
        }
    });
});
