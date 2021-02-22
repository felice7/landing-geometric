
document.getElementById('btn').addEventListener('click', function(){

    TweenMax.staggerFrom(".social-media_item li, .social-media_text", 8, {
        delay: 2,
        opacity: 0,
        x: 20, 
        ease: Expo.easeInOut
    }, 0.2)
    
    gsap.from(".risorsa_22", 1, {
        x: 200,
        opacity: 0,
        delay: 1,
        ease: "bounce.out"
    });
    
    gsap.from(".risorsa_4c", 1, {
        y: -50,
        opacity: 0,
        delay: 1.5,
        ease: "power2.out"
    });
    
    gsap.from(".risorsa_21", 1.2, {
        x: 80,
        opacity: 0,
        delay: 1.8,
        ease: "power2.out"
    });
    
    gsap.from(".risorsa_21b", 1.2, {
        x: 80,
        opacity: 0,
        delay: 1.8,
        ease: "power2.out"
    });
    
    gsap.from(".risorsa_20", 2, {
        y: 10,
        opacity: 0,
        delay: 2,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_16", 1.5, {
        y: -50,
        opacity: 0,
        delay: 1.5,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_15b", 4, {
        y: -50,
        opacity: 0,
        delay: 1.8,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_13", 4, {
        x: 80,
        rotation: 100,
        opacity: 0,
        delay: 2,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_12", 1, {
        x: -50,
        opacity: 0,
        delay: 2,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_5", 1.5, {
        x: -80,
        rotation: -100,
        opacity: 0,
        delay: 2.2,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_14", 2, {
        x: 180,
        opacity: 0,
        delay: 2.6,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_4", 4, {
        x: 180,
        rotation: 100,
        opacity: 0,
        delay: 2.8,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_19", 4, {
        y: -180,
        opacity: 0,
        delay: 2.8,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_11", 3, {
        x: -180,
        opacity: 0,
        delay: 3,
        ease: "bounce.out"
    });
    
    gsap.from(".risorsa_11c", 3, {
        x: -180,
        opacity: 0,
        delay: 3.5,
        ease: "bounce.out"
    });
    
    gsap.from(".risorsa_2", 1, {
        y: -180,
        opacity: 0,
        delay: 3,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_3", 2, {
        y: -180,
        opacity: 0,
        delay: 3,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_16b", 2, {
        x: 280,
        rotate: 50,
        opacity: 0,
        delay: 3.3,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_15c", 3, {
        x: 180,
        rotate: 50,
        opacity: 0,
        delay: 3.3,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_26b", 3, {
        x: 180,
        rotate: 50,
        opacity: 0,
        delay: 3.3,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_11b", 2.5, {
        x: 280,
        opacity: 0,
        delay: 4,
        ease: "bounce.out"
    });
    
    gsap.from(".risorsa_13b", 3, {
        y: -50,
        opacity: 0,
        delay: 3.3,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_14b", 5, {
        y: -80,
        opacity: 0,
        delay: 4,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_30b", 2, {
        y: 480,
        opacity: 0,
        delay: 6,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_5b", 2, {
        y: 480,
        opacity: 0,
        delay: 6.5,
        ease: "power.out"
    });
    
    gsap.from(".risorsa_22b", 2, {
        y: 480,
        opacity: 0,
        delay: 6.3,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_4b", 3, {
        y: 480,
        rotate: 50,
        opacity: 0,
        delay: 6.3,
        ease: "power3.out"
    });
    
    gsap.from(".risorsa_28b", 3, {
        y: 480,
        rotate: 50,
        opacity: 0,
        delay: 6.5,
        ease: "power3.out"
    });

})






document.addEventListener('mousemove', move)

function move(e) {
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
