module.exports = {

  /**
   * Splits an array into n chunks
   * 
   * @param Array array 
   * @param Integer numberOfChunks 
   */
  splitIntoChunks: (array = [], numberOfChunks = 2) => {
    if (!(array instanceof Array)) {
      throw new TypeError("An array is required for the first argument");
    }

    if (typeof numberOfChunks !== "number") {
      throw new TypeError("A number is required for the second argument");
    }

    if (numberOfChunks === 0 || numberOfChunks > array.length) {
      throw new Error("numberOfChunks must be greater than zero and cannot be larger than the size of the array");
    }

    const chunks = [];
    const size = Math.ceil(array.length / numberOfChunks);

    for (let index = 0; index < array.length; index++) {
      const chunk = chunks[chunks.length - 1];

      if (!chunk || chunk.length === size) {
        chunks.push([ array[index] ]);
      } else {
        chunk.push(array[index]);
      }
    }

    return chunks;
  },
  
  /**
   * Splits an array into batches of n elements
   * 
   * @param Array array 
   * @param Integer numberOfElements 
   */
  splitIntoBatches: (array = [], numberOfElements = 2) => {
    if (!(array instanceof Array)) {
      throw new TypeError("An array is required for the first argument");
    }
  
    if (typeof numberOfElements !== "number") {
      throw new TypeError("A number is required for the second argument");
    }
  
    if (numberOfElements === 0) {
      throw new Error("numberOfElemenbts must be greater than zero");
    }

    const batches = [];

    for (let index = 0; index < array.length; index += numberOfElements) {
      batches.push(array.slice(index, index + numberOfElements));
    }
      
    return batches;
  },
};
