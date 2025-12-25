//Cards class 

  class Card{
      constructor(imgsrc, name, text) {
         // card container
            this.card = document.createElement('div');
            this.card.style.width = '295px';
            this.card.style.height = '480px';
            this.card.style.display = 'flex';
            this.card.style.flexDirection = 'column';
            this.card.style.marginLeft = '25px';
            
          
          // image
            const img = document.createElement('img');
            img.src = imgsrc;
            img.alt = name;
            img.style.width = '100%';
            img.style.height = '342px';
            img.style.objectFit = 'cover';
            this.card.appendChild(img);
          
          // name
            const h3 = document.createElement('h3');
            h3.textContent = name;
            h3.style.marginTop = '10px';
            h3.style.marginBottom = '0px';
            h3.style.fontFamily = "'Dela Gothic One', sans-serif";
            h3.style.fontWeight = '400';
            h3.style.fontSize = '25px';
            this.card.appendChild(h3);
          
          // description
            const p = document.createElement('p');
            p.textContent = text;
            p.style.marginTop = '15px';
            p.style.fontFamily = "'Instrument Sans', sans-serif";
            p.style.fontSize = '16px';
            this.card.appendChild(p);
          
          // hover effect
            this.card.addEventListener('mouseenter', () => {
                this.card.style.transform = 'scale(1.05)';
                this.card.style.transition = '0.3s';
                });

            this.card.addEventListener('mouseleave', () => {
                this.card.style.transform = 'scale(1)';
                });

      }


      render() {
          return this.card;
      }

  }



//Menu function

export  function createMenu() {

  const content = document.getElementById('content');


  
  //main text

          const mainText = document.createElement('h1');
          mainText.textContent = 'our bowls +';

          // inline styles
                mainText.style.fontFamily = "'Dela Gothic One', sans-serif";
                mainText.style.fontSize = '64px';
                mainText.style.fontWeight ='400';
                mainText.style.marginTop = '75px';
                mainText.style.marginBottom = '0px';
                mainText.style.marginLeft = '50px';
                mainText.style.display = 'inline-block';






  //second text

      const secText = document.createElement('h1');
      secText.innerHTML = 'tag us @twistande <br> show your noodles!';

      // inline styles
            secText.style.fontFamily = "'Instrument Sans', sans-serif";
            secText.style.fontSize = '19px';
            secText.style.marginTop = '110px';
            secText.style.marginBottom = '17px';
            secText.style.marginRight = '50px';
            secText.style.display = 'inline-block';
            secText.style.float = 'right';






  //line

      const line = document.createElement('hr');

      // inline styles
          line.style.left = '50px';
          line.style.width = 'calc(100% - 100px)'; 
          line.style.border = 'none';
          line.style.height = '2px';      
          line.style.backgroundColor = '#2B2A2A'; 
          line.style.marginTop = '20px ';




  //card container 

     
      const cardsContainer = document.createElement('div');
      // inline styles
          cardsContainer.style.display = 'flex';
          cardsContainer.style.gap = '30px'; 
          cardsContainer.style.marginTop = '35px'; 
          cardsContainer.style.flexWrap = 'wrap';
          cardsContainer.style.marginLeft = '50px';
      


  //cards

          //card1
          const card1 = new Card("images/page2num1.jpg" , "Biangbiang noodles" , "Wide hand-pulled noodles with savory soy sauce and chili oil");
          cardsContainer.appendChild(card1.render());

          //card2
          const card2 = new Card("images/page2num2.jpg" , "Ramen Carbonara" , "Creamy sauce, tender noodles, and a hint of smoky bacon");
          cardsContainer.appendChild(card2.render());

          //card3
          const card3 = new Card("images/page2num3.jpg" , "Curry noodles" , "Quick, flavorful noodles in a rich, spicy curry broth");
          cardsContainer.appendChild(card3.render());




    //block
    
        const moreBlock = document.createElement('div');
        const moreText = document.createElement('p');
        
            //inline styles
            moreBlock.style.width = '136px';
            moreBlock.style.height = '489px';
            moreBlock.style.backgroundColor = '#2B2A2A'; // off black
            moreBlock.style.position = 'absolute';
            moreBlock.style.right = '50px';
            moreBlock.style.top = '290px'; // tweak to align with cards
            moreBlock.style.display = 'flex';
            moreBlock.style.alignItems = 'center';
            moreBlock.style.justifyContent = 'center';
            //text
            moreText.textContent = 'more incoming';
            moreText.style.color = '#F5F2F2';
            moreText.style.fontFamily = "'Instrument Sans', sans-serif";
            moreText.style.fontSize = '40px';
            moreText.style.writingMode = 'vertical-rl';
            moreText.style.transform = 'rotate(180deg)';
            moreText.style.textOrientation = 'mixed';
              
      

      content.appendChild(mainText);
      content.appendChild(secText);
      content.appendChild(line); 
      content.appendChild(cardsContainer);
      moreBlock.appendChild(moreText);
      content.appendChild(moreBlock);



}