/**
   * Splits an array into n chunks
   * 
   * @param Array array 
   * @param Integer numberOfChunks 
   */
  export function createChunks<T>(array: T[] = [], numberOfChunks = 2): T[][] {
    if (numberOfChunks === 0 || ( array.length > 0 && numberOfChunks > array.length)) {
      throw new Error("numberOfChunks must be greater than zero and cannot be larger than the size of the array");
    }

    const chunks: T[][] = [];
    const size: number = Math.ceil(array.length / numberOfChunks);

    for (let index = 0; index < array.length; index++) {
      const chunk: T[] | undefined = chunks[chunks.length - 1];

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
  export function createBatches<T>(array: T[] = [], numberOfElements = 2): T[][] {
    if (numberOfElements === 0) {
      throw new Error("numberOfElements must be greater than zero and cannot be larger than the size of the array");
    }

    const batches: T[][] = [];

    for (let index: number = 0; index < array.length; index += numberOfElements) {
      batches.push(array.slice(index, index + numberOfElements));
    }
      
    return batches;
  }

  /**
   * Splits an array into n chunks
   * @deprecated
   * 
   * @param Array array 
   * @param Integer numberOfChunks 
   */
  export function splitIntoChunks<T>(array: T[] = [], numberOfChunks = 2): T[][] {
    console.warn("splitIntoChunks is deprecated and should be replaced by createChunks");

    return createChunks(array, numberOfChunks);
  }

  /**
   * Splits an array into batches of n elements
   * @deprecated
   * 
   * @param Array array 
   * @param Integer numberOfElements 
   */
  export function splitIntoBatches<T>(array: T[] = [], numberOfElements = 2): T[][] {
    console.warn("splitIntoBatches is deprecated and should be replaced by createBatches");

    return createBatches(array, numberOfElements);
  }