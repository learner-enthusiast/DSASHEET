class Solution(object):
    nums1 = [1, 2, 3, 0, 0, 0]
    nums2 = [2, 5, 6]
    m = 3

    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        arr = nums1[:n] + nums2
        arr.sort()
        print(arr)

        for i in range(len(nums1)):
            nums1[i] = arr[i]


# Create an instance and call the merge method
solution = Solution()
n = len(solution.nums2)  # n = 3
print("Before merge:", solution.nums1)
solution.merge(solution.nums1, solution.m, solution.nums2, n)
print("After merge:", solution.nums1)
