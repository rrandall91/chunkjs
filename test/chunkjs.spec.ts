import * as chunkjs from "../src";

describe("chunkjs", () => {
  it("should exist", () => {
    expect(typeof chunkjs).not.toBe("undefined");
  });

  it("should be an object", () => {
    expect(typeof chunkjs).toBe("object");
  });

  describe("createChunks function", () => {
    it("should exist", () => {
      expect(typeof chunkjs.createChunks).not.toBe("undefined");
    });

    it("should be a function", () => {
      expect(typeof chunkjs.createChunks).toBe("function");
    });

    it("should require an array for the first argument", () => {
      expect(() => chunkjs.createChunks([])).not.toThrow();
    });

    it("should require an integer for the second argument if provided", () => {
      expect(() => chunkjs.createChunks([ 1, 2 ])).not.toThrow();
      expect(() => chunkjs.createChunks([ 1, 2 ], 1)).not.toThrow();
    });

    it("should split an array into 2 chunks by default", () => {
      const array = [ 1, 2, 3, 4, 5, 6 ];
      const chunks = chunkjs.createChunks(array);

      expect(chunks).toHaveLength(2);
    });

    it("should split an array into n chunks when provided", () => {
      const array = [ 1, 2, 3, 4, 5, 6 ];
      const chunks = chunkjs.createChunks(array, 3);

      expect(chunks).toHaveLength(3);
    });

    it("should split an array with an odd number of elements", () => {
      const array = [ 1, 2, 3, 4, 5 ];
      const chunks = chunkjs.createChunks(array, 3);

      expect(chunks).toHaveLength(3);
    });

    it("should throw an error if the number of chunks is larger than the size of the array", () => {
      const array = [ 1, 2, 3 ];

      expect(() => chunkjs.createChunks(array, (array.length + 1))).toThrow();
    });

    it("should throw an error if the number of chunks is zero", () => {
      const array = [ 1, 2, 3 ];

      expect(() => chunkjs.createChunks(array, 0)).toThrow();
    });
  });

  describe("createBatches function", () => {
    it("should exist", () => {
      expect(typeof chunkjs.createBatches).not.toBe("undefined");
    });

    it("should be a function", () => {
      expect(typeof chunkjs.createBatches).toBe("function");
    });

    it("should require an array for the first argument", () => {
      expect(() => chunkjs.createBatches([])).not.toThrow();
    });
  
    it("should require an integer for the second argument if provided", () => {
      expect(() => chunkjs.createBatches([ 1, 2 ])).not.toThrow();
      expect(() => chunkjs.createBatches([ 1, 2 ], 1)).not.toThrow();
    });

    it("should split an array into batches of two by default", () => {
      const array = [ 1, 2, 3, 4, 5, 6 ];
      const batches = chunkjs.createBatches(array);
  
      expect(batches).toHaveLength(3);
    });
  
    it("should split an array into batches of n when provided", () => {
      const array = [ 1, 2, 3, 4, 5, 6 ];
      const batches = chunkjs.createBatches(array, 3);
  
      expect(batches).toHaveLength(2);
    });
  
    it("should split an array with an odd number of elements", () => {
      const array = [ 1, 2, 3, 4, 5 ];
      const batches = chunkjs.createBatches(array, 2);
  
      expect(batches).toHaveLength(3);
    });

    it("should throw not an error if the number of elements is larger than the size of the array", () => {
      const array = [ 1, 2, 3 ];
  
      expect(() => chunkjs.createBatches(array, (array.length + 1))).not.toThrow();

      const batches = chunkjs.createBatches(array, (array.length + 1));
      
      expect(batches).toHaveLength(1);
    });
  
    it("should throw an error if the number of elements is zero", () => {
      const array = [ 1, 2, 3 ];
  
      expect(() => chunkjs.createBatches(array, 0)).toThrow();
    });
  });
});

describe("Deprecated functions that should still work properly", () => {
  describe("splitIntoChunks function", () => {
    it("should exist", () => {
      expect(typeof chunkjs.splitIntoChunks).not.toBe("undefined");
    });
  
    it("should be a function", () => {
      expect(typeof chunkjs.splitIntoChunks).toBe("function");
    });
  
    it("should split an array into n chunks when provided", () => {
      const array = [ 1, 2, 3, 4, 5, 6 ];
      const chunks = chunkjs.splitIntoChunks(array, 3);
  
      expect(chunks).toHaveLength(3);
    });
  });

  describe("splitIntoBatches function", () => {
    it("should exist", () => {
      expect(typeof chunkjs.splitIntoBatches).not.toBe("undefined");
    });

    it("should be a function", () => {
      expect(typeof chunkjs.splitIntoBatches).toBe("function");
    });
  
    it("should split an array into batches of n when provided", () => {
      const array = [ 1, 2, 3, 4, 5, 6 ];
      const batches = chunkjs.splitIntoBatches(array, 3);
  
      expect(batches).toHaveLength(2);
    });
  });
});
