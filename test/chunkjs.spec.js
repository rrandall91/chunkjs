const chunkjs = require("../src");

describe("chunkjs", () => {
  it("should exist", () => {
    expect(typeof chunkjs).not.toBe("undefined");
  });

  it("should be an object", () => {
    expect(typeof chunkjs).toBe("object");
  });

  describe("splitIntoChunks function", () => {
    it("should exist", () => {
      expect(typeof chunkjs.splitIntoChunks).not.toBe("undefined");
    });

    it("should be a function", () => {
      expect(typeof chunkjs.splitIntoChunks).toBe("function");
    });

    it("should require an array for the first argument", () => {
      expect(() => chunkjs.splitIntoChunks([])).not.toThrow(TypeError);
      expect(() => chunkjs.splitIntoChunks(3)).toThrow(TypeError);
    });

    it("should require an integer for the second argument if provided", () => {
      expect(() => chunkjs.splitIntoChunks([ 1, 2 ])).not.toThrow();
      expect(() => chunkjs.splitIntoChunks([ 1, 2 ], 1)).not.toThrow();
      expect(() => chunkjs.splitIntoChunks([], [])).toThrow(TypeError);
    });

    it("should split an array into 2 chunks by default", () => {
      const array = [ 1, 2, 3, 4, 5, 6 ];
      const chunks = chunkjs.splitIntoChunks(array);

      expect(chunks).toHaveLength(2);
    });

    it("should split an array into n chunks when provided", () => {
      const array = [ 1, 2, 3, 4, 5, 6 ];
      const chunks = chunkjs.splitIntoChunks(array, 3);

      expect(chunks).toHaveLength(3);
    });

    it("should split an array with an odd number of elements", () => {
      const array = [ 1, 2, 3, 4, 5 ];
      const chunks = chunkjs.splitIntoChunks(array, 3);

      expect(chunks).toHaveLength(3);
    });

    it("should throw an error if the number of chunks is larger than the size of the array", () => {
      const array = [ 1, 2, 3 ];

      expect(() => chunkjs.splitIntoChunks(array, (array.length + 1))).toThrow();
    });

    it("should throw an error if the number of chunks is zero", () => {
      const array = [ 1, 2, 3 ];

      expect(() => chunkjs.splitIntoChunks(array, 0)).toThrow();
    });
  });

  describe("splitIntoBatches function", () => {
    it("should exist", () => {
      expect(typeof chunkjs.splitIntoBatches).not.toBe("undefined");
    });

    it("should be a function", () => {
      expect(typeof chunkjs.splitIntoBatches).toBe("function");
    });

    it("should require an array for the first argument", () => {
      expect(() => chunkjs.splitIntoBatches([])).not.toThrow(TypeError);
      expect(() => chunkjs.splitIntoBatches(3)).toThrow(TypeError);
    });
  
    it("should require an integer for the second argument if provided", () => {
      expect(() => chunkjs.splitIntoBatches([ 1, 2 ])).not.toThrow();
      expect(() => chunkjs.splitIntoBatches([ 1, 2 ], 1)).not.toThrow();
      expect(() => chunkjs.splitIntoBatches([], [])).toThrow(TypeError);
    });

    it("should split an array into batches of two by default", () => {
      const array = [ 1, 2, 3, 4, 5, 6 ];
      const batches = chunkjs.splitIntoBatches(array);
  
      expect(batches).toHaveLength(3);
    });
  
    it("should split an array into batches of n when provided", () => {
      const array = [ 1, 2, 3, 4, 5, 6 ];
      const batches = chunkjs.splitIntoBatches(array, 3);
  
      expect(batches).toHaveLength(2);
    });
  
    it("should split an array with an odd number of elements", () => {
      const array = [ 1, 2, 3, 4, 5 ];
      const batches = chunkjs.splitIntoBatches(array, 2);
  
      expect(batches).toHaveLength(3);
    });

    it("should throw an error if the number of elements is larger than the size of the array", () => {
      const array = [ 1, 2, 3 ];
  
      expect(() => chunkjs.splitIntoBatches(array, (array.length + 1))).toThrow();
    });
  
    it("should throw an error if the number of elements is zero", () => {
      const array = [ 1, 2, 3 ];
  
      expect(() => chunkjs.splitIntoBatches(array, 0)).toThrow();
    });
  });
});
