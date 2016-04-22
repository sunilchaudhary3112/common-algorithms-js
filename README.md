# Common Algorithms in JavaScript [![Build Status](https://travis-ci.org/JHM90/common-algorithms-js.svg?branch=master)](https://travis-ci.org/JHM90/common-algorithms-js)

Commonly used algorithms implemented in JavaScript with [Mocha](https://mochajs.org/)/[Chai](http://chaijs.com/) testing.

###Array
* [Selection Sort](https://github.com/JHM90/common-algorithms/blob/master/algorithms/selectionSort.js)
* [Bubble Sort](https://github.com/JHM90/common-algorithms/blob/master/algorithms/bubbleSort.js)
* [Linear Search](https://github.com/JHM90/common-algorithms/blob/master/algorithms/linearSearch.js)
* [Merge Sort](https://github.com/JHM90/common-algorithms/blob/master/algorithms/mergeSort.js)
* [Quick Sort](https://github.com/JHM90/common-algorithms/blob/master/algorithms/quickSort.js)
* [Binary Search](https://github.com/JHM90/common-algorithms/blob/master/algorithms/binarySearch.js)
* [Insertion Sort](https://github.com/JHM90/common-algorithms/blob/master/algorithms/insertionSort.js)
* [Bucket Sort](https://github.com/JHM90/common-algorithms/blob/master/algorithms/bucketSort.js)
* [Shell Sort](https://github.com/JHM90/common-algorithms/blob/master/algorithms/shellSort.js)
* [Durstenfeld Shuffle (a.k.a. Knuth Shuffle)](https://github.com/JHM90/common-algorithms/blob/master/algorithms/durstenfeldShuffle.js)

###String
* [Brute Force String Match](https://github.com/JHM90/common-algorithms/blob/master/algorithms/bruteForceStringMatch.js)
* [Longest Common Substring](https://github.com/JHM90/common-algorithms/blob/master/algorithms/longestCommonSubstring.js)
* [Longest Common Subsequence](https://github.com/JHM90/common-algorithms/blob/master/algorithms/longestCommonSubsequence.js)
* [Levenshtein Distance](https://github.com/JHM90/common-algorithms/blob/master/algorithms/levenshteinDistance.js)
* [Damerau-Levenshtein Distance](https://github.com/JHM90/common-algorithms/blob/master/algorithms/damerauLevenshteinDistance.js)
* [Sørensen-Dice Coefficient](https://github.com/JHM90/common-algorithms/blob/master/algorithms/sorensonDiceCoefficient.js)
* [Knuth-Morris-Pratt String Match](https://github.com/JHM90/common-algorithms/blob/master/algorithms/knuthMorrisPrattStringMatch.js)
* [Rabin-Karp String Match](https://github.com/JHM90/common-algorithms/blob/master/algorithms/rabinKarpStringMatch.js)
* [Boyer-Moore String Match](https://github.com/JHM90/common-algorithms/blob/master/algorithms/boyerMooreStringMatch.js)
* [Boyer-Moore-Horspool String Match](https://github.com/JHM90/common-algorithms/blob/master/algorithms/boyerMooreHorspoolStringMatch.js)

###Graph
* [Depth First Search](https://github.com/JHM90/common-algorithms/blob/master/algorithms/depthFirstSearch.js)
* [Breadth First Search](https://github.com/JHM90/common-algorithms/blob/master/algorithms/breadthFirstSearch.js)

##Testing

To run the tests yourself you'll need to download the project and install its node module dependencies via [npm](https://www.npmjs.com/).  So, if you haven't already installed [Node.js](https://nodejs.org/) and npm for use on your command line hop over to the Node.js website and follow their download and installation instructions.  Once you have Node.js and npm installed, clone the project onto your computer using the following command in your terminal/command prompt/console:

`git clone https://github.com/JHM90/common-algorithms-js.git`

(Just in case you haven't already installed [Git](https://git-scm.com/), do so by following the installation instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), then enter the previous command again once it's installed.)  Once you've downloaded the project use the following command to navigate to the project's root directory:

`cd common-algorithms-js`

Next, install the project's node module dependencies from npm.  Do so by entering this command:

`npm install`

Once all the dependencies are installed you'll be ready to run the tests.  Enter the following command to run them:

`npm test`

This repository uses [Travis-CI](https://travis-ci.org/JHM90/common-algorithms-js) for deployment testing on Node.js versions 5.1x and 4.2x.
