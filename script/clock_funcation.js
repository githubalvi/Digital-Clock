function updateClock() {

    const hourHand = document.querySelector('.hourHand');
    const minuteHand = document.querySelector('.minuteHand');
    const secondHand = document.querySelector('.secondHand');
    const time = document.querySelector('.time');
    const clock = document.querySelector('.clock');
    const audio = document.querySelector('.audio');

    function setDate() {
      const today = new Date();
      
      let hour = today.getHours();
      const isPM = hour >= 12;
      hour = hour % 12 || 12; // convert to 12-hour format
      const hourDeg = ((hour / 12) * 360); 
      hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
      const minute = today.getMinutes();
      const minuteDeg = ((minute / 60) * 360); 
      minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    
      const second = today.getSeconds();
      const secondDeg = ((second / 60) * 360) + 360; 
      secondHand.style.transform = `rotate(${secondDeg}deg)`;
    
      time.innerHTML = `
        <span> <strong>${hour}</strong> : ${minute} : <small>${second}</small> ${isPM ? 'PM' : 'AM'}
        </span>
      `;

        }

        setDate();
  
   
 
}

updateClock();

setInterval(updateClock, 1000);