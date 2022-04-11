function example0 (nums) {
    const target = 9;

    for (let i = 0; i < nums.length; i++)
     {
         if (nums[i] + nums[i+1] == target){
                    console.log(i,i+1)
         }
        
 
     }
 
    
 
     
 };
       
 
         
example0 ([2,7,11,15]);