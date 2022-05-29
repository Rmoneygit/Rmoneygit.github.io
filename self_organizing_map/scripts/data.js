var training_data=[
    [[5, 5, -53.5], 1], [[5, 4, -18.8], 2], [[5, 3, -6.9], 2], [[5, 2, -15.6], 1],
    [[5, 1, 19.3], 3], [[5, 0, 0.0], 2], [[5, -1, -11.3], 1], [[5, -2, -0.4], 3],
    [[5, -3, -14.1], 1], [[5, -4, 0.8], 3], [[5, -5, -12.5], 2], [[4, 5, -22.0], 3],
    [[4, 4, -14.2], 3], [[4, 3, -7.8], 2], [[4, 2, -4.6], 1], [[4, 1, 0.6], 2],
    [[4, 0, 0.0], 2], [[4, -1, 6.8], 3], [[4, -2, 11.2], 3], [[4, -3, -6.6], 2],
    [[4, -4, -6.4], 2], [[4, -5, -3.0], 2], [[3, 5, -17.5], 3], [[3, 4, -29.8], 1],
    [[3, 3, -8.1], 2], [[3, 2, -2.2], 2], [[3, 1, 0.1], 2], [[3, 0, 0.0], 2],
    [[3, -1, -1.3], 2], [[3, -2, 5.3], 3], [[3, -3, -2.7], 2], [[3, -4, 10.5], 3],
    [[3, -5, -10.5], 1], [[2, 5, -28.0], 3], [[2, 4, -17.6], 2], [[2, 3, -7.8], 2],
    [[2, 2, -2.4], 2], [[2, 1, 7.8], 3], [[2, 0, -11.0], 1], [[2, -1, -15.6], 1],
    [[2, -2, -0.8], 2], [[2, -3, -1.4], 1], [[2, -4, 15.8], 3], [[2, -5, 13.0], 2],
    [[1, 5, -29.5], 2], [[1, 4, -10.6], 3], [[1, 3, -8.9], 1], [[1, 2, -2.2], 2],
    [[1, 1, -0.3], 2], [[1, 0, 10.0], 3], [[1, -1, -0.1], 2], [[1, -2, 0.6], 2],
    [[1, -3, 3.3], 2], [[1, -4, -3.7], 1], [[1, -5, 34.5], 3], [[0, 5, -30.0], 1],
    [[0, 4, -6.8], 3], [[0, 3, 13.6], 3], [[0, 2, 12.4], 3], [[0, 1, -0.2], 2],
    [[0, 0, 0.0], 2], [[0, -1, 0.2], 2], [[0, -2, -5.4], 1], [[0, -3, 5.4], 2],
    [[0, -4, 12.8], 2], [[0, -5, 25.0], 2], [[-1, 5, -19.5], 2], [[-1, 4, -23.2], 1],
    [[-1, 3, -3.3], 2], [[-1, 2, -0.6], 2], [[-1, 1, 0.1], 2], [[-1, 0, 9.0], 3],
    [[-1, -1, -1.7], 1], [[-1, -2, 19.2], 3], [[-1, -3, 6.9], 2], [[-1, -4, 15.6], 2],
    [[-1, -5, 29.5], 2], [[-2, 5, -9.0], 3], [[-2, 4, -4.8], 2], [[-2, 3, -16.6], 1],
    [[-2, 2, 0.8], 2], [[-2, 1, -13.4], 1], [[-2, 0, 0.0], 2], [[-2, -1, 0.2], 2],
    [[-2, -2, -2.5], 1], [[-2, -3, 18.8], 3], [[-2, -4, 17.6], 2], [[-2, -5, 25.0], 1],
    [[-3, 5, -5.4], 2], [[-3, 4, 0.4], 2], [[-3, 3, 2.7], 2], [[-3, 2, 6.6], 3], 
    [[-3, 1, 13.3], 3], [[-3, 0, -4.0], 1], [[-3, -1, -0.1], 2], [[-3, -2, -13.8], 1],
    [[-3, -3, 25.1], 3], [[-3, -4, 18.8], 2], [[-3, -5, 35.5], 2], [[-4, 5, -2.0], 1],
    [[-4, 4, 1.4], 1], [[-4, 3, 6.6], 2], [[-4, 2, -9.2], 1], [[-4, 1, 2.2], 2],
    [[-4, 0, -8.0], 1], [[-4, -1, 14.4], 3], [[-4, -2, 7.6], 3], [[-4, -3, -4.1], 1],
    [[-4, -4, 19.2], 2], [[-4, -5, 24.0], 1], [[-5, 5, 23.5], 3], [[-5, 4, 13.2], 2],
    [[-5, 3, 1.0], 1], [[-5, 2, 7.4], 2], [[-5, 1, 19.3], 3], [[-5, 0, -18.0], 1],
    [[-5, -1, 10.7], 3], [[-5, -2, 0.6], 2], [[-5, -3, 6.9], 2], [[-5, -4, 18.8], 2],
    [[-5, -5, 35.5], 1]];

var testing_data = [
 [[4.5, 4.5, -27.3], 2], [[4.5, 3.5, -12.5], 2], [[4.5, 2.5, 6.3], 3], [[4.5, 1.5, 17.3], 3],
 [[4.5, 0.5, -5.2], 1], [[4.5, -0.5, -1.2], 2], [[4.5, -1.5, 11.6], 3], [[4.5, -2.5, -24.6], 1],
 [[4.5 -3.5 -17.5], 1], [[4.5 -4.5 -1.1], 3], [[3.5, 4.5 -33.9], 1], [[3.5, 3.5, -5.9], 3],
 [[3.5, 2.5, -6.4], 1], [[3.5, 1.5, 14.6], 3], [[3.5, 0.5, 16.4], 3], [[3.5, -0.5, 2.2], 3],
 [[3.5, -1.5, -2.7], 2], [[3.5, -2.5, 2.7], 3], [[3.5 -3.5 -4.3], 2], [[3.5, -4.5, 10.5], 3],
 [[2.5, 4.5, -32.5], 1], [[2.5, 3.5, -20.5], 1], [[2.5, 2.5, 4.3], 3], [[2.5, 1.5, -0.9], 2],
 [[2.5, 0.5, 0.2], 2], [[2.5, -0.5, 11.6], 3], [[2.5, -1.5, 15.6], 3], [[2.5, -2.5, -14.6], 1],
 [[2.5, -3.5, 14.3], 3], [[2.5, -4.5, -8.7], 1], [[1.5, 4.5, -18.3], 3], [[1.5, 3.5, -11.5], 2],
 [[1.5, 2.5, -4.4], 2], [[1.5, 1.5, -1.0], 2], [[1.5, 0.5, 9.0], 3], [[1.5, -0.5, -11.2], 1],
 [[1.5, -1.5, 17.7], 3], [[1.5 -2.5 -7.3], 1], [[1.5, -3.5, 6.1], 3], [[1.5, -4.5, 20.1], 3],
 [[0.5, 4.5, -27.1], 1], [[0.5, 3.5, -17.7], 1], [[0.5, 2.5, -19.7], 1], [[0.5, 1.5, -9.9], 1],
 [[0.5, 0.5, -15.0], 1], [[0.5, -0.5, 13.0], 3], [[0.5, -1.5, -5.6], 1], [[0.5, -2.5, 5.4], 3],
 [[0.5, -3.5, 7.3], 2], [[0.5, -4.5, 20.1], 3], [[-0.5, 4.5, -16.1], 2], [[-0.5, 3.5, -21.3], 1],
 [[-0.5, 2.5, 14.6], 3], [[-0.5, 1.5, -0.4], 2], [[-0.5, 0.5, 0.0], 2], [[-0.5, -0.5, 11.0], 3],
 [[-0.5, -1.5, 0.9], 2], [[-0.5, -2.5, -3.3], 1], [[-0.5, -3.5, 7.7], 1], [[-0.5, -4.5, 20.1], 2],
 [[-1.5, 4.5, -11.1], 2], [[-1.5, 3.5, -23.1], 1], [[-1.5, 2.5, 8.3], 3], [[-1.5, 1.5, 14.3], 3],
 [[-1.5, 0.5, 0.2], 2], [[-1.5, -0.5, 0.0], 2], [[-1.5, -1.5, -3.0], 1], [[-1.5, -2.5, -5.6], 1],
 [[-1.5, -3.5, 23.5], 3], [[-1.5, -4.5, 6.3], 1], [[-2.5, 4.5, -8.3], 1], [[-2.5, 3.5, -6.3], 1],
 [[-2.5, 2.5, 1.6], 2], [[-2.5, 1.5, 20.4], 3], [[-2.5, 0.5, 0.4], 2], [[-2.5, -0.5, 7.8], 3],
 [[-2.5, -1.5, 0.9], 2], [[-2.5, -2.5, -8.3], 1], [[-2.5, -3.5, 22.5], 3], [[-2.5, -4.5, 17.5], 1],
 [[-3.5, 4.5, -5.5], 1], [[-3.5, 3.5, -0.7], 1], [[-3.5, 2.5, 19.3], 3], [[-3.5, 1.5, -16.3], 1],
 [[-3.5, 0.5, 10.8], 3], [[-3.5, -0.5, 6.6], 3], [[-3.5, -1.5, 11.4], 3], [[-3.5,-2.5, 4.4], 2],
 [[-3.5, -3.5, 19.9], 3], [[-3.5, -4.5, 10.9], 1], [[-4.5, 4.5, 4.1], 1], [[-4.5, 3.5, -4.5], 1],
 [[-4.5, 2.5, -9.4], 1], [[-4.5, 1.5, 4.4], 2], [[-4.5, 0.5, -8.8], 1], [[-4.5, -0.5, 6.2], 3],
 [[-4.5, -1.5, 3.7], 3], [[-4.5, -2.5, 3.7], 2], [[-4.5, -3.5, 12.5], 2], [[-4.5, -4.5, 41.3], 3],
 [[4.3, 4.3, -9.9], 3], [[4.3, 3.3, -10.5], 2], [[4.3, 2.3, -2.7], 2], [[4.3, 1.3, -15.5], 1], 
 [[4.3, 0.3, 0.5], 2], [[4.3, -0.7, 12.4], 3], [[4.3, -1.7, -4.6], 2], [[4.3, -2.7, -7.3], 2], 
 [[4.3, -3.7, -8.5], 2], [[4.3, -4.7, 10.1], 3], [[3.3, 4.3, -23.4], 2], [[3.3, 3.3, -7.8], 3],
 [[3.3, 2.3, -3.4], 2], [[3.3, 1.3, -13.1], 1], [[3.3, 0.3, 0.3], 2], [[3.3, -0.7, 14.0], 3],
 [[3.3, -1.7, 2.2], 3], [[3.3, -2.7, -21.8], 1], [[3.3, -3.7, 10.1], 3], [[3.3, -4.7, 1.1], 2],
 [[2.3, 4.3, -22.1], 2], [[2.3, 3.3, -10.5], 2], [[2.3, 2.3, -6.7], 1], [[2.3, 1.3, -17.5], 1],
 [[2.3, 0.3, 0.1], 2], [[2.3, -0.7, -0.5], 2], [[2.3, -1.7, -8.2], 1], [[2.3, -2.7, 7.2], 3],
 [[2.3, -3.7, 18.9], 3], [[2.3, -4.7, 12.1], 3], [[1.3, 4.3, -20.0], 2], [[1.3, 3.3, -9.5], 2],
 [[1.3, 2.3, -3.4], 2], [[1.3, 1.3, 5.3], 3], [[1.3, 0.3, 0.0], 2], [[1.3, -0.7, 13.8], 3],
 [[1.3, -1.7, -0.1], 2], [[1.3, -2.7, 1.6], 2], [[1.3, -3.7, 5.9], 2], [[1.3, -4.7, 14.2], 2],
 [[0.3, 4.3, -21.0], 1], [[0.3, 3.3, 8.2], 3], [[0.3, 2.3, 10.3], 3], [[0.3, 1.3, 4.5], 3],
 [[0.3, 0.3, 0.0], 2], [[0.3, -0.7, -17.0], 1], [[0.3, -1.7, 0.8], 2], [[0.3, -2.7, 3.5], 2],
 [[0.3, -3.7, 9.3], 2], [[0.3, -4.7, 3.4], 1], [[-0.7, 4.3, -13.1], 2], [[-0.7, 3.3, -5.5], 2],
 [[-0.7, 2.3, -1.6], 2], [[-0.7, 1.3, -10.1], 1], [[-0.7, 0.3, 18.0], 3], [[-0.7, -0.7, -2.9], 1], 
 [[-0.7, -1.7, 1.3], 2], [[-0.7, -2.7, 20.8], 3], [[-0.7, -3.7, 11.9], 2], [[-0.7, -4.7, 18.6], 1],
 [[-1.7, 4.3, -22.4], 1], [[-1.7, 3.3, -2.5], 2], [[-1.7, 2.3, 0.0], 2], [[-1.7, 1.3, -4.5], 1],
 [[-1.7, 0.3, 0.1], 2], [[-1.7, -0.7, -9.0], 1], [[-1.7, -1.7, 17.5], 3], [[-1.7, -2.7, 24.6], 3], 
 [[-1.7, -3.7, 11.7], 1], [[-1.7, -4.7, 7.9], 1], [[-2.7, 4.3, 15.2], 3], [[-2.7, 3.3, 8.1], 3],
 [[-2.7, 2.3, 2.1], 2], [[-2.7, 1.3, -7.6], 1], [[-2.7, 0.3, 5.3], 3], [[-2.7, -0.7, -18.2], 1],
 [[-2.7, -1.7, 1.3], 2], [[-2.7, -2.7, 11.9], 3], [[-2.7, -3.7, 14.8], 2], [[-2.7, -4.7, 23.3], 1],
 [[-3.7, 4.3, 3.7], 2], [[ -3.7, 3.3, 5.4], 2], [[-3.7, 2.3, 4.6], 2], [[-3.7, 1.3, 21.6], 3],
 [[-3.7, 0.3, 12.5], 3], [[-3.7, -0.7, 1.5], 3], [[-3.7, -1.7, 0.8], 2], [[-3.7, -2.7, 16.6], 3],
 [[-3.7, -3.7, 15.2], 2], [[-3.7, -4.7, 30.7], 2], [[-4.7, 4.3, 17.0], 3], [[-4.7, 3.3, 10.3], 2],
 [[-4.7, 2.3, 7.6], 2], [[-4.7, 1.3, -8.0], 1], [[-4.7, 0.3, -17.3], 1], [[-4.7, -0.7, -1.0], 2], 
 [[-4.7, -1.7, -0.1], 2], [[-4.7, -2.7, -4.2], 1], [[-4.7, -3.7, 12.8], 1], [[-4.7, -4.7, 36.1], 3]
];