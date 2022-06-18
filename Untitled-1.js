const fourSum = (nums, target) => {
    nums.sort( (a,b) => {return a-b} )
    console.log('nums',nums)
    const len = nums.length
    const resultArr = [ ]
    const quad = [ ]
    let left = null
    let right = null
    
    const kSum = (k, start, target) => {
      //non-base case, so continue creating loops
      if (k != 2) {
        for (let i=start ; i<len-k ; i++) {
          //continue if a is same number
          if ( i > start && nums[i] === nums[i-1] ) { 
            continue
          }
          console.log('nums[i]',nums[i])
          quad.push(nums[i]) //putting my current nums[i] value inside the quad arr while i find the other numbers
          //recursion here - k, start, target getting updated
          //for one instance of i, i
          console.log('quad1 push',quad)
          kSum(k-1, i+1, target - nums[i])
          quad.pop() //removing the nums[i] value as we go to next i  
          console.log('quad1 pop', quad)
         }
        return
       }
      //Base case, two sum II
      left = start
      right = len - 1
      while (left < right) {
        if (nums[left] + nums[right] < target) { left++ }
        if (nums[left] + nums[right] > target) { right-- }
        if (nums[left] + nums[right] === target) {
          console.log('quad2 before result',quad)
          console.log(left,'left',nums[left])
          console.log(right,'right',nums[right])
          resultArr.push( [ ...quad, nums[left], nums[right] ] )
          console.log('resultArr',resultArr)
          left++
          while (left < right && nums[left] == nums[left - 1]) { left++ }
        }
      }
    }
    kSum(4, 0, target)
    return resultArr
  }
  
  nums = [1,0,-1,0,-2,2]
  target = 0
  console.log(fourSum(nums,target))