

export  function createAbout() {
  const content = document.getElementById('content');


//main heading

    const mainHeading = document.createElement('h1');

    //inline styles
        mainHeading.textContent = 'about ë';
        mainHeading.style.fontFamily = "'Dela Gothic One', sans-serif";
        mainHeading.style.fontSize = '70px';
        mainHeading.style.fontWeight = '400';
        mainHeading.style.position = 'absolute';
        mainHeading.style.left = '50px';
        mainHeading.style.top = '95px';

  
//mini text

    const miniText = document.createElement('p');

    //inline styles
        miniText.innerHTML = 'founded on a focus for precision and restraint, ë is a modern noodle kitchen.<br>we refine familiar dishes through careful technique, balanced flavors, and intentional simplicity.';
        miniText.style.fontSize = '20px';
        miniText.style.position = 'absolute';
        miniText.style.left = '91px';
        miniText.style.top = '270px';
        miniText.style.margin = '0';


//line

    const line = document.createElement('div');

    //inline styles
        line.style.position = 'absolute';
        line.style.left = '60px';    
        line.style.top = '275px';    
        line.style.width = '3px';      
        line.style.height = '40px';     
        line.style.backgroundColor = '#2B2A2A'; 


//image container

    const imgRow = document.createElement('div');

    //inline styles
      imgRow.style.display = 'flex'
      imgRow.style.justifyContent = 'space-between';
      imgRow.style.width = '1340px';
      imgRow.style.margin = '290px auto 38px auto'; 
      


//images

    const images = [
        'images/page3num1.jpg',
        'images/page3num2.jpg',
        'images/page3num3.jpg'
    ];

    images.forEach(src => {
        const imgContainer = document.createElement('div');
        imgContainer.style.width = '440px';
        imgContainer.style.height = '230px';
        imgContainer.style.overflow = 'hidden';

        const img = document.createElement('img');
        img.src = src;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        img.style.top = '50px';
        
        

        imgContainer.appendChild(img);
        imgRow.appendChild(imgContainer);
    });



    //footer

    
      const locationText = document.createElement('p');

          //inline styles
          locationText.textContent = 'Tiong Bahru, Singapore';
          locationText.style.fontFamily = "'Dela Gothic One', sans-serif";
          locationText.style.fontWeight = '400';
          locationText.style.fontSize = '22px';
          locationText.style.position = 'absolute';
          locationText.style.right = '50px';
          locationText.style.top = '610px'; 
          content.appendChild(locationText);

      const contactText = document.createElement('p');
          //inline styles
          contactText.innerHTML = '<span style="display:block; margin-bottom:8px;">✉️ Info@twistande.com</span><span>📞 +65 9123 4567</span>';
          contactText.style.fontSize = '16px';
          contactText.style.position = 'absolute';
          contactText.style.right = '50px';
          contactText.style.top = '667px';
          contactText.style.paddingBottom = '30px';
          contactText.style.textAlign = 'right';
          content.appendChild(contactText);



      
  

  

  

  
  content.appendChild(miniText);
  content.appendChild(mainHeading);
  content.appendChild(imgRow);
  content.appendChild(line);
}