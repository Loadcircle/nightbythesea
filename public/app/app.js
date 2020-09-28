const setImgGalleryHeight = ()=>{
    const imgs = document.querySelectorAll('.imgGallery');

    imgs.forEach((img, i)=>{
        
        if(i != 0){
            let nextTop = imgs[i-1].height;
            console.log(nextTop)
            img.style.marginTop = `-${nextTop*.15}px`

        }
    });
}

const playAudio = ()=>{
    const audio = new Audio('../src/hawaii.mp3');
    audio.play()
}

const fixGlitch = ()=>{

    const glitch = document.getElementById('glitch');
    const fullHolder = document.querySelector('#fullHolder');
    const introBox = document.getElementById('introBox');

    glitch.style.opacity = 0;

    setTimeout(()=>{
        glitch.remove();
        introBox.remove();
        fullHolder.style.display = 'block';
        setTimeout(()=>{
            fullHolder.style.opacity = 1;
            playAudio();
            
            AOS.init({
                startEvent: 'DOMContentLoaded',
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1000, // values from 0 to 3000, with step 50ms
            });
        }, 700);
    },700)

};

const showGlitch = ()=>{

    const glitch = document.getElementById('glitch');

    const elements = document.querySelectorAll('#glitch > *');
    let delay = 1500;
    let timer = 0;

    elements.forEach((e, i)=>{
        setTimeout(()=>{
            e.style.display = 'block';
            if(i == 1){
                callback();
            }
        }, timer);
        timer = timer + delay;
    });

    function callback(){
        let delay = 300;
        let timer = 0;

        const error = document.createElement('p');
        error.classList.add('error');
        error.innerText = 'Error!!!!!!!!';

        const img = document.createElement('img');
        img.src = '//via.placeholder.com/200x200';

        let randomElem = [error, img];
        let randomFunct = [setting1, setting2, setting3, setting4];

        for (let i = 0; i < 15; i++) {
            let elem = randomElem[Math.floor(Math.random() * randomElem.length)];

            elem.style.display = 'block';
            
            setTimeout(()=>{
                let newElem = elem.cloneNode(true);
                let funct = randomFunct[Math.floor(Math.random() * randomFunct.length)];
                funct(newElem);
                glitch.appendChild(newElem);

                console.log(i)
                if(i == 14){
                    console.log('last')
                    lastCallback();
                }
            }, timer);    
            timer = timer + delay;       
        }

    };

    function setting1(elem){        
        elem.style.top = `${Math.floor(Math.random()*50)}vw`;
        elem.style.left = `${Math.floor(Math.random()*50)}vw`;
    }
    function setting2(elem){
        elem.style.bottom = `${Math.floor(Math.random()*50)}vw`;
        elem.style.left = `${Math.floor(Math.random()*50)}vw`;
    }
    function setting3(elem){
        elem.style.top = `${Math.floor(Math.random()*50)}vw`;
        elem.style.right = `${Math.floor(Math.random()*50)}vw`;
    }
    function setting4(elem){
        elem.style.bottom = `${Math.floor(Math.random()*50)}vw`;
        elem.style.right = `${Math.floor(Math.random()*50)}vw`;
    }

    function lastCallback(){
        let button = document.createElement('button');
        button.classList = 'fix_button';
        button.innerText = 'Recargar';
        button.addEventListener('click', ()=>{
            fixGlitch();
        });
        glitch.appendChild(button);
    }

};

//inicializadores ----------------------------------------------------

document.getElementById('fullTrigger').addEventListener('click', ()=>{
    showGlitch();
});

// setImgGalleryHeight()