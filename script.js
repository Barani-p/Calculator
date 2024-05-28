
let a= document.getElementById("output")
        function dis(num)
        {
            a.value+=num
        }
        function calculate(){
            try{
            a.value=eval(a.value);
                        
        }
        catch(err)
        {
            alert("invalid")
        }
    }
        function cl()
        {
            a.value="";
        }
        function del(){
            a.value=a.value.slice(0,-1)
        }