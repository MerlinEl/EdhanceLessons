(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4154,272);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(3,1,1).p("A1ArFMAqBAAAIAAWLMgqBAAAg");
	this.shape.setTransform(0.1,-72.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("A1ALGIAA2LMAqBAAAIAAWLg");
	this.shape_1.setTransform(0.1,-72.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-135.9,-144.9,272,144.9), null);


(lib.Scene_1_other = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// other
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("EhP/AAAMCf/AAA");
	this.shape.setTransform(512,311.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_other, null, null);


(lib.mov_wheel_gra = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(3,1,1).p("ABAAAQAAAbgTASQgSATgbAAQgaAAgTgTQgSgSAAgbQAAgaASgTQATgSAaAAQAbAAASASQATATAAAag");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AgtAtQgSgSAAgbQAAgZASgUQAUgSAZAAQAbAAASASQATAUAAAZQAAAbgTASQgSATgbAAQgZAAgUgTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000066").ss(3,1,1).p("AAAAJIDaAAAAAAbIAAC2AjZAJIDZAAAAAjQIAADZ");
	this.shape_2.setTransform(0,-0.35);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000066").ss(3,1,1).p("ADaAAQAABahABAQhABAhaAAQhZAAhAhAQhAhAAAhaQAAhZBAhAQBAhABZAAQBaAABABAQBABAAABZg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AiZCaQhAhAAAhaQAAhZBAhAQBAhABZAAQBaAABABAQA/BAABBZQgBBag/BAQhAA/haABQhZgBhAg/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mov_wheel_gra, new cjs.Rectangle(-23.2,-23.2,46.5,46.5), null);


(lib.mov_result_panel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.text = new cjs.Text("GRATULACE\nVYHRÁL JSI !!!", "bold 24px 'Minion Pro Cond'", "#003399");
	this.text.textAlign = "center";
	this.text.lineHeight = 35;
	this.text.lineWidth = 177;
	this.text.parent = this;
	this.text.setTransform(4.95,-31.35);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({text:"NEVYŠLO TO\nPROHRÁL JSI !!!",color:"#FF0000"},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#003300").ss(3,1,1).p("AvgqhIfBAAQDIAAAADIIAAOzQAADIjIAAI/BAAQjIAAAAjIIAAuzQAAjIDIAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC00").s().p("AvgKiQjIAAAAjIIAAuzQAAjIDIAAIfBAAQDIAAAADIIAAOzQAADIjIAAg");
	this.shape_1.setTransform(0.025,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF0000").ss(3,1,1).p("AvgqhIfBAAQDIAAAADIIAAOzQAADIjIAAI/BAAQjIAAAAjIIAAuzQAAjIDIAAg");
	this.shape_2.setTransform(0.025,0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AvgKiQjIAAAAjIIAAuzQAAjIDIAAIfBAAQDIAAAADIIAAOzQAADIjIAAg");
	this.shape_3.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.7,-68.8,241.5,137.7);


(lib.mov_hit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AmRCzIAAllIMjAAIAAFlg");
	this.shape.setTransform(0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mov_hit, new cjs.Rectangle(-40.2,-17.9,80.5,35.8), null);


(lib.mov_front = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(3,1,1).p("AnQnQIOhAAIAAOhIuhAAg");
	this.shape.setTransform(0.025,-47.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AnQHRIAAuhIOhAAIAAOhg");
	this.shape_1.setTransform(0.025,-47.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mov_front, new cjs.Rectangle(-47.9,-95.1,95.9,96), null);


(lib.mov_bulet = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(1,1,1).p("AlqAaIKdh4QBwBehwBfg");
	this.shape.setTransform(-36.2625,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AlqAZIKdh3QBwBehwBfg");
	this.shape_1.setTransform(-36.2625,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AlqAZIKdh3QBwBehwBfg");
	this.shape_2.setTransform(-36.2625,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-10.5,74.5,21);


(lib.mov_animbg_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-1.5,-134.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mov_animbg_01, new cjs.Rectangle(-1.5,-134.4,2077,136), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-513,-385,1026,770);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mov_front();
	this.instance.setTransform(46.45,114.95);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(3,1,1).p("Ag0C4IAAlvIBpAAIAAFv");
	this.shape.setTransform(71.425,18.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("Ag0C4IAAlvIBpAAIAAFvg");
	this.shape_1.setTransform(71.425,18.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1.5,-1.5,96,117.3), null);


(lib.Scene_1_panels = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// panels
	this.resultPanel = new lib.mov_result_panel();
	this.resultPanel.name = "resultPanel";
	this.resultPanel.setTransform(484.8,385.65);

	this.timeline.addTween(cjs.Tween.get(this.resultPanel).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_panels, null, null);


(lib.Scene_1_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.animBg_01 = new lib.mov_animbg_01();
	this.animBg_01.name = "animBg_01";
	this.animBg_01.setTransform(-1037.05,244.95,1,1,0,0,0,12.8,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.animBg_01).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_background, null, null);


(lib.mov_wheel = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.mov_wheel_gra();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-17.9474},0).wait(1).to({rotation:-35.8947},0).wait(1).to({rotation:-53.8421},0).wait(1).to({rotation:-71.7895},0).wait(1).to({rotation:-89.7368},0).wait(1).to({rotation:-107.6842},0).wait(1).to({rotation:-125.6316},0).wait(1).to({rotation:-143.5789},0).wait(1).to({rotation:-161.5263},0).wait(1).to({rotation:-179.4737},0).wait(1).to({rotation:-197.421},0).wait(1).to({rotation:-215.3684},0).wait(1).to({rotation:-233.3158},0).wait(1).to({rotation:-251.2632},0).wait(1).to({rotation:-269.2105},0).wait(1).to({rotation:-287.1579},0).wait(1).to({rotation:-305.1053},0).wait(1).to({rotation:-323.0526},0).wait(1).to({rotation:-341},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,-23.3,46.7,46.7);


(lib.mov_head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(0.05,49.4,1,1,0,0,0,46.5,114.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:57.1,rotation:-0.5,x:-0.4,y:-8.05},0).wait(1).to({rotation:0,x:0.05,y:-5.45},0).wait(1).to({rotation:0.5,x:0.55,y:-2.8},0).wait(1).to({rotation:0.25,x:0.3,y:-5.3},0).wait(1).to({rotation:0,x:0.05,y:-7.8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.7,-66.8,97.5,123.1);


(lib.mov_button_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {up:0,over:1,down:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// hit
	this.instance = new lib.mov_hit();
	this.instance.setTransform(0,-0.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// text
	this.tf = new cjs.Text("Play", "14px 'Minion Pro'", "#000066");
	this.tf.name = "tf";
	this.tf.textAlign = "center";
	this.tf.lineHeight = 21;
	this.tf.lineWidth = 60;
	this.tf.parent = this;
	this.tf.setTransform(0.5,-9.75);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(3));

	// skin
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(3,1,1).p("AiviVIH1AAIAACVQAAA+gsAsQgsAsg+AAIn1AAIAAiWQAAg9AsgsQAsgsA+AAg");
	this.shape.setTransform(0,-2.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CCFF").s().p("AlFCWIAAiWQAAg9AsgsQAsgsA+AAIH1AAIAACVQAAA+gsAsQgsAsg+AAg");
	this.shape_1.setTransform(0,-2.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#004DB4").ss(3,1,1).p("AiviVIH1AAIAACVQAAA+gsAsQgsAsg+AAIn1AAIAAiWQAAg9AsgsQAsgsA+AAg");
	this.shape_2.setTransform(0,-2.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8FCCFF").s().p("AlFCWIAAiWQAAg9AsgsQAsgsA+AAIH1AAIAACVQAAA+gsAsQgsAsg+AAg");
	this.shape_3.setTransform(0,-2.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0072EC").s().p("AlFCWIAAiWQAAg9AsgsQAsgsA+AAIH1AAIAACVQAAA+gsAsQgsAsg+AAg");
	this.shape_4.setTransform(0,-2.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-18.7,80.5,36.3);


(lib.mov_body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(4.55,55.5,1,1,0,0,0,0.1,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-72.5,rotation:-0.5,x:3.9,y:-15.8},0).wait(1).to({rotation:0,x:4.55,y:-13.15},0).wait(1).to({rotation:0.5,x:5.15,y:-10.55},0).wait(1).to({rotation:0.25,x:4.8,y:-13.05},0).wait(1).to({rotation:0,x:4.55,y:-15.5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.7,-89.4,274.5,152.60000000000002);


(lib.Scene_1_buttons = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// buttons
	this.text = new cjs.Text("/5", "24px 'Minion Pro'", "#FF0000");
	this.text.lineHeight = 34;
	this.text.lineWidth = 32;
	this.text.parent = this;
	this.text.setTransform(957.5,24.2);

	this.text_1 = new cjs.Text("/20", "24px 'Minion Pro'", "#009900");
	this.text_1.lineHeight = 34;
	this.text_1.lineWidth = 36;
	this.text_1.parent = this;
	this.text_1.setTransform(833.05,24.2);

	this.tfLevel = new cjs.Text("1", "24px 'Minion Pro'");
	this.tfLevel.name = "tfLevel";
	this.tfLevel.lineHeight = 34;
	this.tfLevel.lineWidth = 46;
	this.tfLevel.parent = this;
	this.tfLevel.setTransform(658.75,24.2);

	this.text_2 = new cjs.Text("level:", "24px 'Minion Pro'", "#003399");
	this.text_2.lineHeight = 34;
	this.text_2.lineWidth = 53;
	this.text_2.parent = this;
	this.text_2.setTransform(602.25,24.25);

	this.tfBad = new cjs.Text("0", "24px 'Minion Pro'", "#FF0000");
	this.tfBad.name = "tfBad";
	this.tfBad.lineHeight = 34;
	this.tfBad.lineWidth = 32;
	this.tfBad.parent = this;
	this.tfBad.setTransform(921.35,24.2);

	this.text_3 = new cjs.Text("bad:", "24px 'Minion Pro'", "#003399");
	this.text_3.lineHeight = 34;
	this.text_3.lineWidth = 45;
	this.text_3.parent = this;
	this.text_3.setTransform(872.7,24.25);

	this.tfGood = new cjs.Text("0", "24px 'Minion Pro'", "#009900");
	this.tfGood.name = "tfGood";
	this.tfGood.lineHeight = 34;
	this.tfGood.lineWidth = 36;
	this.tfGood.parent = this;
	this.tfGood.setTransform(793.2,24.2);

	this.text_4 = new cjs.Text("good:", "24px 'Minion Pro'", "#003399");
	this.text_4.lineHeight = 34;
	this.text_4.lineWidth = 57;
	this.text_4.parent = this;
	this.text_4.setTransform(731.9,24.25);

	this.buttonJump = new lib.mov_button_01();
	this.buttonJump.name = "buttonJump";
	this.buttonJump.setTransform(247.95,76.35,1,1,0,0,0,0,-0.4);
	new cjs.ButtonHelper(this.buttonJump, 0, 1, 2);

	this.buttonEngineOff = new lib.mov_button_01();
	this.buttonEngineOff.name = "buttonEngineOff";
	this.buttonEngineOff.setTransform(429.6,76.35,1,1,0,0,0,0,-0.4);
	new cjs.ButtonHelper(this.buttonEngineOff, 0, 1, 2);

	this.buttonEngineOn = new lib.mov_button_01();
	this.buttonEngineOn.name = "buttonEngineOn";
	this.buttonEngineOn.setTransform(66.35,76.35,1,1,0,0,0,0,-0.4);
	new cjs.ButtonHelper(this.buttonEngineOn, 0, 1, 2);

	this.buttonStop = new lib.mov_button_01();
	this.buttonStop.name = "buttonStop";
	this.buttonStop.setTransform(338.75,76.35,1,1,0,0,0,0,-0.4);
	new cjs.ButtonHelper(this.buttonStop, 0, 1, 2);

	this.buttonPlay = new lib.mov_button_01();
	this.buttonPlay.name = "buttonPlay";
	this.buttonPlay.setTransform(157.15,76.75);
	new cjs.ButtonHelper(this.buttonPlay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.buttonPlay},{t:this.buttonStop},{t:this.buttonEngineOn},{t:this.buttonEngineOff},{t:this.buttonJump},{t:this.text_4},{t:this.tfGood},{t:this.text_3},{t:this.tfBad},{t:this.text_2},{t:this.tfLevel},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_buttons, null, null);


(lib.mov_carTruck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.carWheel_05 = new lib.mov_wheel();
	this.carWheel_05.name = "carWheel_05";
	this.carWheel_05.setTransform(330.45,-23.45);

	this.carWheel_04 = new lib.mov_wheel();
	this.carWheel_04.name = "carWheel_04";
	this.carWheel_04.setTransform(278.3,-23.45);

	this.carWheel_03 = new lib.mov_wheel();
	this.carWheel_03.name = "carWheel_03";
	this.carWheel_03.setTransform(186.95,-23.45);

	this.carWheel_02 = new lib.mov_wheel();
	this.carWheel_02.name = "carWheel_02";
	this.carWheel_02.setTransform(134.8,-23.45);

	this.carWheel_01 = new lib.mov_wheel();
	this.carWheel_01.name = "carWheel_01";
	this.carWheel_01.setTransform(41,-23.45);

	this.carBody_01 = new lib.mov_body();
	this.carBody_01.name = "carBody_01";
	this.carBody_01.setTransform(233.75,-87.85);

	this.carHead_01 = new lib.mov_head();
	this.carHead_01.name = "carHead_01";
	this.carHead_01.setTransform(46.45,-81.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.carHead_01},{t:this.carBody_01},{t:this.carWheel_01},{t:this.carWheel_02},{t:this.carWheel_03},{t:this.carWheel_04},{t:this.carWheel_05}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mov_carTruck, new cjs.Rectangle(-1.5,-175.8,375.8,175.60000000000002), null);


(lib.Scene_1_interactive = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// interactive
	this.carTruck = new lib.mov_carTruck();
	this.carTruck.name = "carTruck";
	this.carTruck.setTransform(532.4,398.85);

	this.timeline.addTween(cjs.Tween.get(this.carTruck).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_interactive, null, null);


// stage content:
(lib.car_minigame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.resultPanel = this.panels.resultPanel;
		this.buttonPlay = this.buttons.buttonPlay;
		this.buttonStop = this.buttons.buttonStop;
		this.buttonEngineOn = this.buttons.buttonEngineOn;
		this.buttonEngineOff = this.buttons.buttonEngineOff;
		this.buttonJump = this.buttons.buttonJump;
		this.tfGood = this.buttons.tfGood;
		this.tfBad = this.buttons.tfBad;
		this.tfLevel = this.buttons.tfLevel;
		this.carTruck = this.interactive.carTruck;
		this.animBg_01 = this.background.animBg_01;
		//debug messages
		//alert("Moused over");
		//console.log(child.name)
		
		// setup stage
		var fps = 24;
		stage.enableMouseOver(fps);
		var isCrarMoving = false;
		var isCarJumping = false;
		var isEngineOn = false;
		this.resultPanel.visible = false;
		
		// setup timer
		// https://createjs.com/tutorials/Animation%20and%20Ticker/
		createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
		createjs.Ticker.framerate = 30;
		
		// collect interactive components
		var all_wheels = [];
		var all_car_components = [];
		var all_buttons = [];
		this.carTruck.children.forEach((child)=>{
			
			if (child.name != null){
				
				if (child.name.indexOf("Wheel") != -1) {
					
					all_wheels.push(child);
				} 
				if (child.name.indexOf("car") != -1){
					
					all_car_components.push(child);
				}
			}
		})
		this.children.forEach((child)=>{
			
			if (child.name != null){
				
				if (child.name.indexOf("button") != -1){
					
					all_buttons.push(child);
				}
			}
		})
		
		// store initial position of animated background
		this.animBg_01.startPos = {x:this.animBg_01.x, y:this.animBg_01.y}
		
		// set buttons text
		this.buttonPlay.tf.text = "Jeď";
		this.buttonStop.tf.text = "Zastav";
		this.buttonJump.tf.text = "Skoč";
		this.buttonEngineOn.tf.text = "Nastartuj";
		this.buttonEngineOff.tf.text = "Vypni";
		
		// projectile object
		class Projectile {
			
			container=null;
			resultPanel=null;
			car=null;
			tfLevel=null;
			tfGood=null;
			tfBad=null;
			body=null;
			wasHit=false;
			maxSpeed=700;
			carWidth=370;
			carHeight=170;
			constructor(container) {
				this.container = container;
				this.resultPanel = container.resultPanel;
				this.car = container.carTruck;
				this.tfLevel = container.tfLevel;
				this.tfGood = container.tfGood;
				this.tfBad = container.tfBad;
				this.body = new lib.mov_bulet();
				this.body.name = "projectile_0001";
				this.container.addChild(this.body);
				this.resetState();
			}
			resetState(){
				
				this.body.gotoAndStop(0);
				this.body.x = -10;
				 // we will get offten hit than miss
				this.body.y = this.randomNumber([200, 370, 370]);
			}
			sendReport(was_hit){
				
				// show results
				if (was_hit){
					
					this.body.gotoAndStop(1);
					this.tfBad.text = parseInt(this.tfBad.text) + 1;
					
				} else {
					
					this.tfGood.text = parseInt(this.tfGood.text) + 1;
				}
				// finish game
				if (parseInt(this.tfGood.text) >= 20){ // show win
					
					this.container.freezeGame();
					this.resultPanel.gotoAndStop(0);
					this.resultPanel.visible = true;
					
				} else if (parseInt(this.tfBad.text) >= 5){ // show lose
					
					this.container.freezeGame();
					this.resultPanel.gotoAndStop(1);
					this.resultPanel.visible = true;
				}
			}
			randomBetween(min, max) {
				
				return Math.floor(Math.random() * (max - min + 1) + min)
			}
			randomNumber(numbers) {
			  
				return numbers[this.randomBetween(0, numbers.length-1)];
			}
			wasHitCar(targetContainer){
				// create rect at current car pos
				var car_rect = {
					
					left:this.car.x,
					top:this.car.y - this.carHeight,
					right:this.car.x + this.carWidth,
					btm:this.car.y
				}
				let was_hit = false;
				// check left - right rect (when projectile lay on truck at X)
				if (this.body.x >  car_rect.left && this.body.x <  car_rect.right){
					/*console.log(".....PASS...TROUGH.....")
					console.log(
				
						"projectile y:" + this.body.y,
						"truck top:" + car_rect.left,
						"truck btm:" + car_rect.btm
					)*/
					// check top - bottom rect
					was_hit = this.body.y > car_rect.top && this.body.y < car_rect.btm;
					console.log("Was Hit:" + was_hit);
				}
				return was_hit;
			}
			reacheEnd(){
				
				return this.body.x > stage.canvas.width;
			}
		}
		
		var projectile = new Projectile(this);
		console.log(projectile)
		
		function moveProjectile(event) {
			
			// move 100 pixels per second (elapsedTimeInMS / 1000msPerSecond * pixelsPerSecond):
			// event.delta/1000*100
		    projectile.body.x += event.delta/1000*projectile.maxSpeed;
			
			// collision check - when projectile hit car
			if (projectile.wasHitCar()){
				
				projectile.sendReport(true); 
				projectile.resetState();
				
			} else if (projectile.reacheEnd()){ // when end of screen reached
				
				if (!projectile.wasHit) projectile.sendReport(false); 
				projectile.resetState();
			}
			//stage.update(); 
		}
		const fireEngineStart =()=>{
			
			projectile.body.addEventListener("tick", moveProjectile) 
		}
		
		const fireEngineStop =()=>{
			
			projectile.body.removeEventListener("tick", moveProjectile);
		}
		
		// truck methods
		const fl_OnEngineOnPressed =()=>{
			
			if (isEngineOn) return;
			isEngineOn = true;
			
			this.carTruck.carBody_01.play();
			this.carTruck.carHead_01.play();
		}
		const fl_OnEngineOffPressed =()=>{
			
			this.carTruck.carBody_01.stop();
			this.carTruck.carHead_01.stop();
			
			isEngineOn = false;
		}
		const fl_OnStopPressed =()=>{
			
			all_wheels.forEach((item)=>{item.stop()});
			fireEngineStop();
			createjs.Tween.removeAllTweens();
			isCrarMoving = false;
		}
		
		const fl_OnJumpPressed =()=>{
			
			if (isCarJumping) return;
			isCarJumping = true;
			var start_y = this.carTruck.y;
			createjs.Tween
				.get(this.carTruck)
				.to({y:start_y - 80}, 600)
				.to({y:start_y}, 600)
				.call(function() { isCarJumping = false })
		
		}
		
		// register events
		this.buttonPlay.addEventListener("click", fl_OnbPlayPressed.bind(this)); // bind example
		this.buttonStop.addEventListener("click", fl_OnStopPressed); // const method example
		this.buttonJump.addEventListener("click", fl_OnJumpPressed);
		this.buttonEngineOn.addEventListener("click", fl_OnEngineOnPressed);
		this.buttonEngineOff.addEventListener("click", fl_OnEngineOffPressed);
		
		// event methods
		function fl_OnbPlayPressed(){
			
			if (isCrarMoving) return;
			isCrarMoving = true;
			
			all_wheels.forEach((item)=>{item.play()});
			createjs.Tween.removeAllTweens();
			this.animBg_01.x = this.animBg_01.startPos.x;
			createjs.Tween
				.get(this.animBg_01,{loop:true})
				.to({x:0}, 5000)
			fireEngineStart();
		}
		
		
		// bind method to stage
		this.freezeGame = ()=>{
			
			console.log(all_wheels)
			console.log(all_buttons)
			all_wheels.forEach((item)=>{item.stop()});
			all_buttons.forEach((item)=>{item.mouseEnabled = false});
			fireEngineStop();
			createjs.Tween.removeAllTweens();
			isCrarMoving = false;
		}
		
		// Stop All on Start
		all_car_components.forEach((item)=>{item.stop()});
		
			
		
		
		// Help
		// remove any existing tweens on the target.
		//createjs.Tween.get(target,null,true); 
		// remove all tweens
		//createjs.Tween.removeAllTweens();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(512,384);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1));

	// panels_obj_
	this.panels = new lib.Scene_1_panels();
	this.panels.name = "panels";
	this.panels.setTransform(484.8,385.7,1,1,0,0,0,484.8,385.7);
	this.panels.depth = 0;
	this.panels.isAttachedToCamera = 0
	this.panels.isAttachedToMask = 0
	this.panels.layerDepth = 0
	this.panels.layerIndex = 0
	this.panels.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.panels).wait(1));

	// buttons_obj_
	this.buttons = new lib.Scene_1_buttons();
	this.buttons.name = "buttons";
	this.buttons.setTransform(508.8,58.2,1,1,0,0,0,508.8,58.2);
	this.buttons.depth = 0;
	this.buttons.isAttachedToCamera = 0
	this.buttons.isAttachedToMask = 0
	this.buttons.layerDepth = 0
	this.buttons.layerIndex = 1
	this.buttons.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.buttons).wait(1));

	// interactive_obj_
	this.interactive = new lib.Scene_1_interactive();
	this.interactive.name = "interactive";
	this.interactive.setTransform(718.8,310.9,1,1,0,0,0,718.8,310.9);
	this.interactive.depth = 0;
	this.interactive.isAttachedToCamera = 0
	this.interactive.isAttachedToMask = 0
	this.interactive.layerDepth = 0
	this.interactive.layerIndex = 2
	this.interactive.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.interactive).wait(1));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.setTransform(-12.8,245,1,1,0,0,0,-12.8,245);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 3
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

	// other_obj_
	this.other = new lib.Scene_1_other();
	this.other.name = "other";
	this.other.setTransform(512,311.4,1,1,0,0,0,512,311.4);
	this.other.depth = 0;
	this.other.isAttachedToCamera = 0
	this.other.isAttachedToMask = 0
	this.other.layerDepth = 0
	this.other.layerIndex = 4
	this.other.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.other).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-539.3,383,1565,386);
// library properties:
lib.properties = {
	id: '304A6AF9356C0F4B8E69656C04046535',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1.png?1652017297181", id:"CachedBmp_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['304A6AF9356C0F4B8E69656C04046535'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;