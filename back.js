const viewp = document.querySelectorAll('.slid');

// this should be an object or function used to loop through each selected element and get its children. 

// console.log(viewp);

class childLine{
    constructor(){
        this.loopEachElement= function () {
            for (let i = 0; i < viewp.length; i++) {
                const con = Array.from(viewp[i].children);
                return con;
            }            
        }

        this.returnWidth= function () {
            const x = con[0].getBoundingClientRect().width;
            return x;
        }
    }
} 
