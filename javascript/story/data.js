/**
 * A Data class describing the used data of a story.
 */
class Data {
  /**
   * Initialises properties of Data class.
   * Parameter rawData is a resulting JavaScript array returned by d3.csvParse().
   * Each array member is an object and represents a row (except header row) of a csv file.
   * The format of each row is as : {"column_1": value_1, "column_2", value_2, ...}.
   * @param {Array} rawData 
   */
  constructor(rawData) {
    /**
     * The raw data in csv format.
     * @private
     * @type {Array}
     */
    this.rawData = rawData;
    /**
     * The header of the raw csv file.
     * @private
     * @type {Array}
     */
    this.headers = Object.keys(rawData[0]);
  }

  getExampleValues(header, examples=4){

    var values = [];
    var maxExamples = (this.rawData.length >= examples) ? examples : this.rawData.length;
    var exampleIndexes = [];

    for(let i=0; i < maxExamples; i++){

      var index = Math.floor(Math.random() * this.rawData.length);

      //Don't show duplicate indexes (i.e. the same cell more than once)
      //TODO: Don't show *any* duplicate *values*
      while(index in exampleIndexes){
        index = Math.floor(Math.random() * this.rawData.length);
      }
      exampleIndexes.push(index);

      values.push(this.rawData[index][header]);
    }

    return values;

  }



  //TODO: These *could* be implemented at a later date, to highlight points of interest to the author

  // detectTrends(){
  //     throw new Error("Not Implemented")
  // }

  // detectSpikes(){
  //     throw new Error("Not Implemented")
  // }
}