/**
 * A data story class containing different story blocks.
 */
class Story {


  /**
   * Constructs a Story object with initialising all the class properties.
   */
  constructor() {
    /** All the StoryBlocks. 
     * @private
     * @type {Array}
    */
    this.blocks = [];
    /**
     * Data used in the Story object.
     * @private
     * @type {Data}
     */
    this.data = null;
    /**
     * Metadata of the Story object.
     * @private
     * @type {Metadata}
     */
    this.metaData = null;
    //TODO: Adding a generic block, just for debugging purposes.
    //this.blocks = [new TextBlock(0, "This is some story content", "introduction")];
  }

  /**
   * Sets the data property of the object.
   * @param {Data} newData 
   */
  setData(newData){
    this.data = newData;
  }

  /**
   * Sets the metaData property of the object.
   * @param {Metadata} newMetadata 
   */
  setMetadata(newMetadata){
    this.metaData = newMetadata;
  }

  /**
   * Appends a new story block in the blocks property.
   * @param {StoryBlock} block 
   */
  appendBlock(newBlock){
    this.blocks.push(newBlock);
  }

  // TODO: Comment this static method. 
  /**
   * 
   * @param {*} file 
   * @param {*} callback 
   */
  static createFromDataFile(file, callback){
    var reader = new FileReader();
    reader.addEventListener("load", function(){

      var data = d3.csvParse(reader.result, function(d){
        return d;   
      });

      Data.instance = new Data(data);
      Story.instance = new Story();
      Story.instance.setData(Data.instance);
      callback();
    });

    if (file) {
      reader.readAsText(file);
    }
  }


  // TODO: Comment this static method. This method cannot be implemented before
  // the implementation of exporting story to json.
  /**
   *
   * @param {*} file 
   * @param {*} callback 
   */
  static createFromStoryFile(file, callback){
    var reader = new FileReader();
    reader.addEventListener("load", function(){

      var storyData = JSON.parse(reader.result);

      Story.instance = new Story(storyData["data"]["rawData"]);
      Story.instance.data.headersOfInterest = storyData["data"]["headersOfInterest"];
      Story.instance.data.dependencies = storyData["data"]["dependencies"];

      Story.instance.title = storyData["title"];
      Story.instance.author = storyData["author"];

      storyData["blocks"].forEach(function(block){
        Story.instance.blocks.push(StoryBlock.createFromJSON(block));
      });

      callback();
    });

    if (file) {
      reader.readAsText(file);
    }
  }
}

/**
 * A base class describing individual story blocks.
 */
class StoryBlock {

  /**
   * Initialises the properties of the base class.
   */
  constructor() {
    this.content = null;
  }

  // TODO: Add comments to explain this static method. This method cannot be
  // implemented before the implementation of exporting story to json.
  /**
   * 
   * @param {*} json 
   */
  static createFromJSON(json){
    //TODO: IMPLEMENT THIS.
    console.error("StoryBlock.createFromJSON is not yet implemented!");
    return new TextBlock("StoryBlock.createFromJSON is not yet implemented!", "error");
  }
}

/**
 * A story block containing textual information.
 */
class TextBlock extends StoryBlock {
  /**
   * Initialises the properties of the super class and the child class.
   */
  constructor() {
    super();
    }

  /**
   * Sets the text property of the object.
   * @param {string} newText 
   */
  setText(newText){
    this.content = newText;
  }
}

/**
 * A story block containing a data visualisation.
 */
class ChartBlock extends StoryBlock {
  /**
   * Initialises the properties of the super class and the child class.
   */
  constructor() {
    super();
  }

  /**
   * Sets the chart property of the object.
   * @param {Chart} newChart 
   */
  setChart(newChart){
    this.chart = newChart;
  }
}

/**
 * A story block containing a data table. 
 */
class DataBlock extends StoryBlock {
  /**
   * Initialises the properties of the super class and the child class.
   */
  constructor() {
    super();
  }
}