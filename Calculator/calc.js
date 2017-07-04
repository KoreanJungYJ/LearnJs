            
            var numbers=document.getElementsByClassName("numbers");
            var calculate=document.getElementsByClassName("inputcalc");
            var output=document.getElementById("resultbox");
            var sentence1="";
            var sentence2="";
            
            Array.from(numbers).forEach((element) => {
                element.addEventListener("click",() => {
//                    var leng=(output.value).length;
                    output.value+=element.value;
                    this.sentence1=output.value;
                    console.log(sentence1);
                })
            });
            
            Array.from(calculate).forEach((element)=>{
                element.addEventListener("click",()=>{
                    output.value+=element.value;
                    if((output.value)[0]==output.value){
                        alert("연산기호 입력 불가!");
                        output.value="";
                    }
                    this.sentence2=output.value;
                    console.log(sentence2);
                })
            });
            
            function calc(){
                var result;
                var outputBox=document.getElementById("resultbox");
                result=eval(this.sentence1);
                if(result===Infinity){
                    alert("Error!(0 불가)");
                }
                outputBox.value=result;
                console.log(result);
                
            }
            function deleteValue(){
                var deleteBox=document.getElementById('resultbox');
                var allLeng=(this.sentence1).length;
                var result="";
                for(var cnt=0;cnt<allLeng-1;cnt++){
                    result=(this.sentence1)[cnt];
                }
                deleteBox.value=result;
                //추후 수정
            }
            function reset(){
                var deleteAll=document.getElementById("resultbox");
                deleteAll.value=deleteAll.defaultValue;
            }