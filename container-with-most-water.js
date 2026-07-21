var maxArea = function(height){
    let maiorArea = 0;
    let right = height.length - 1;
    let left = 0;

    while(left < right){
        const largura = right - left;
        const altura = Math.min(height[left], height[right]);
        const area = largura * altura;

        if(area>maiorArea){
            maiorArea = area;
        }

        if(height[left] < height[right]){
            left++;
        } else{
            right--;
        }
    }
    return maiorArea;
}

console.log(maxArea([2,3,4,7,7,8,3,2,1,9]))