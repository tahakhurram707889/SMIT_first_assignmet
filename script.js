const toggle = document.getElementById('menu-toggle');

if (toggle) {
    toggle.addEventListener('change',()=>{
        document.body.classList.toggle("no-scroll" , toggle.checked);

    });  
}

const words = [
    "Modern Web Development",
    "Grafic Designing",
    "AI & Data Science",
    "Digital Marketing",
    "Video Animation",

];

const typingtext = document.getElementById("typing-span");
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () =>{
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingtext.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true; setTimeout(type, nextWordDelay);
        }else{
            setTimeout(type, typingDelay);
        }
    } else {
        typingtext.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;setTimeout(type, 500);
        }else{
            setTimeout(type, erasingDelay);
        }
    }
};

document.addEventListener(
    'DOMContentLoaded', ()=>{
        if(words?.length) type();
        
        // Tab switching functionality
        const navLinks = document.querySelectorAll('.navlink');
        const contents = document.querySelectorAll('.content');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const tab = link.dataset.tab;
                
                // Remove active class from all navlinks and contents
                navLinks.forEach(l => l.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                
                // Add active to clicked
                link.classList.add('active');
                document.getElementById(tab).classList.add('active');
            });
        });
        
    }
);
