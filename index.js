// Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

// Example

// For

// a = [[1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]]

// the output should be

// rotateImage(a) =
//     [[7, 4, 1],
//      [8, 5, 2],
//      [9, 6, 3]]


function rotateImage(a) {
  console.log(a.length-1)
  console.log(a[2][0],a[1][0], a[0][0])

  for (let i = 0; i < a.length; i++) {
    
  }

  return a;
}


const a =[[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]

rotateImage(a);