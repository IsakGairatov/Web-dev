def centered_average(nums):
    nums.sort()  # sort the array in ascending order
    return sum(nums[1:-1]) // (len(nums) - 2)
