def sum67(nums):
    ignore = False
    total = 0
    for num in nums:
        if num == 6:
            ignore = True
        elif ignore and num == 7:
            ignore = False
        elif not ignore:
            total += num
    return total
