
// export a function that our home page inside the div
export function createHome() {
    const content = document.getElementById('content');
    const homeDiv = document.createElement('div');
    homeDiv.id = 'home-page';
    

    // main text 
        const mainText = document.createElement('h1');
        mainText.textContent = 'NOODLES';

            // inline styles
            mainText.style.fontFamily = "'Dela Gothic One', sans-serif";
            mainText.style.fontSize = '128px';
            mainText.style.position = 'absolute';
            mainText.style.textAlign = 'center';
            mainText.style.width = '100%';
            mainText.style.top = '3px';

    // h2 text 
        const subText = document.createElement('h2');
        subText.textContent = 'Precision in Every Strand';

            // Inline styles
            subText.style.fontFamily = "'Dela Gothic One', sans-serif";
            subText.style.fontSize = '37px';
            subText.style.position = 'absolute';
            subText.style.top = '218px';
            subText.style.left = '50%';                
            subText.style.transform = 'translateX(-50%)'; 

    // desc text
        const descText = document.createElement('p');
        descText.innerHTML = 'From classic broths to modern twists, every bowl of noodles at ë is crafted with intention<br>Simple flavors, refined technique, unforgettable taste.';
            
            // Inline styles
            descText.style.position = 'absolute';
            descText.style.top = '303px';  
            descText.style.width = '100%';
            descText.style.textAlign = 'center';
            descText.style.fontSize = '19px';


    //container
        const imgContainer = document.createElement('div');
            
            // Inline styles
            imgContainer.style.position = 'absolute';
            imgContainer.style.left = '50%';        
            imgContainer.style.top = '387px';       
            imgContainer.style.width = '1340px';
            imgContainer.style.height = '374px';
            imgContainer.style.overflow = 'hidden';
            imgContainer.style.transform = 'translateX(-50%)'; 
            


    // image
        const img = document.createElement('img');
        img.src = '/images/page1num1.png'; 
        img.alt = 'Noodles bowl';


            // Inline styles
            img.style.width = '100%';    
            img.style.height = 'auto';   
            img.style.objectFit = 'cover';
                img.style.position = 'relative';
                img.style.top = '-320px';  
                


    homeDiv.appendChild(mainText);
    homeDiv.appendChild(subText);
    homeDiv.appendChild(descText);
    imgContainer.appendChild(img);
    homeDiv.appendChild(imgContainer);

    content.appendChild(homeDiv);
    
}

