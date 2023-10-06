[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12128925&assignment_repo_type=AssignmentRepo)
# Brute-Force Sorting

We talked about the complexity of the sorting problem, and used an argument over
all permutations of a list to be sorted to determine its complexity. Implement
a function to sort a list by systematically trying all permutations of the input
list, using the template in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

The return value should be the number of permutations that were tried until the
sorted list was "discovered".

## Runtime Analysis

What is the runtime complexity of the algorithm that you implemented? What does
a best case input for your implementation look like, what does a worst case
input look like? How would this complexity change if you generated permutations
randomly without memory instead of systematically trying them?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Runtime Analysis Answer
1. The runtime complexity of permutationSort would be n! since the recurrence relative is n(n-1)(n-2)(n-3) in the permute function to get all permutations of an input list. The sub-functions of getSortedList and allEqual take small comparisons which could be ignored as constants.

2. The best case input would be to find the first list as the sorted one in all permutations. So, the best case can be $O(1)$

3. The worst-case input could be the sort one finds at the end of all permutations. So, the worst case can be $O(n!)$

4. Without memory generating permutation might be incomplete since there were duplicate generations. To be more specific, without memory might generate a permutation that is identical to a previously generated one. Because it does not guarantee uniqueness, and it is impossible to track the previously generated permutation. The complexity of without memory generation of permutation is much more than n!.

Systematically generation will output a special order and be more reliable and efficient. People can keep track of the previous generation.
