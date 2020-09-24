var str="i";
document.getElementById('r').addEventListener('click',next);
document.getElementById('l').addEventListener('click',back);


function next(){
    for(let i=1;i<=3;i++){
        let ma=str+i;
        console.log(ma);
        if(document.getElementById(ma).style.display != "none" ){
                if(i==3){
                    document.getElementById(ma).style.display="none";
                    document.getElementById('i1').style.display="block";
                    console.log('hey');
                    break;
                }
                else{
                    let j=i+1;
                    let ma1=str+j;
                    console.log(ma1);
                    document.getElementById(ma).style.display="none";
                    document.getElementById(ma1).style.display="block";
                    console.log('hey2');
                    break;
                }
        }
    }
}



function back(){
    for(let i=1;i<=3;i++){
        let ma=str+i;
        console.log(ma);
        if(document.getElementById(ma).style.display != "none" ){
                if(i==1){
                    document.getElementById(ma).style.display="none";
                    document.getElementById('i3').style.display="block";
                    console.log('hey');
                    break;
                }
                else{
                    let j=i-1;
                    let ma1=str+j;
                    console.log(ma1);
                    document.getElementById(ma).style.display="none";
                    document.getElementById(ma1).style.display="block";
                    console.log('hey2');
                    break;
                }
        }
    }
}