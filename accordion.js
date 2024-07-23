
const accordions = document.getElementsByClassName('accordian');

for (i = 0; i < accordions.length; i++) {

    accordions[i].onclick = function () {

        let currentAns = this.getElementsByClassName('ansbox');

        if (currentAns[0].style.display == 'block') {
            currentAns[0].style.display = 'none';
        } else {
           for(j=0;j<accordions.length;j++)
           {
               let otherAns=document.getElementsByClassName('ansbox');
               if(j!=i)
               {
                   otherAns[j].style.display='none';
               }
           }
           currentAns[0].style.display='block';
        }
    }

}

