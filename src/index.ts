  /**
   * Splits an array into n chunks
   * 
   * @param Array array 
   * @param Integer numberOfChunks 
   */
  export function splitIntoChunks (array: any[] = [], numberOfChunks = 2): any[] {
    if (numberOfChunks === 0 || ( array.length > 0 && numberOfChunks > array.length)) {
      throw new Error("numberOfChunks must be greater than zero and cannot be larger than the size of the array");
    }

    const chunks: any[] = [];
    const size: number = Math.ceil(array.length / numberOfChunks);

    for (let index = 0; index < array.length; index++) {
      const chunk: any[] = chunks[chunks.length - 1];

      if (!chunk || chunk.length === size) {
        chunks.push([ array[index] ]);
      } else {
        chunk.push(array[index]);
      }
    }

    return chunks;
  }
  
  /**
   * Splits an array into batches of n elements
   * 
   * @param Array array 
   * @param Integer numberOfElements 
   */
  export function splitIntoBatches (array: any[] = [], numberOfElements = 2): any[] {
    if (numberOfElements === 0) {
      throw new Error("numberOfElements must be greater than zero and cannot be larger than the size of the array");
    }

    const batches: any[] = [];

    for (let index: number = 0; index < array.length; index += numberOfElements) {
      batches.push(array.slice(index, index + numberOfElements));
    }
      
    return batches;
  }
