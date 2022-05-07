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



(lib.CachedBmp_10 = function() {
	this.initialize(img.CachedBmp_10);
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
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-1.5,-134.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mov_animbg_01, new cjs.Rectangle(-1.5,-134.4,2077,136), null);


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


// stage content:
(lib.car = function(mode,startPosition,loop,reversed) {
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
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//debug messages
		//alert("Moused over");
		//console.log(child.name)
		
		stage.enableMouseOver(24);  // 24 == fps
		
		var all_wheels = [];
		this.children.forEach((child)=>{
			if (child.name != null && child.name.indexOf("Wheel") != -1) {
				all_wheels.push(child);
			}
		})
		
		var all_car_components = [];
		this.children.forEach((child)=>{
			if (child.name != null && child.name.indexOf("car") != -1) {
				all_car_components.push(child);
			}
		})
		
		var background_start_x = this.animBg_01.x
		var frequency = 3;
		stage.enableMouseOver(frequency);
		this.buttonPlay.tf.text = "Jeď";
		this.buttonPlay.addEventListener("click", fl_OnbPlayPressed.bind(this));
		
		this.buttonStop.tf.text = "Zastav";
		this.buttonStop.addEventListener("click", fl_OnStopPressed.bind(this));
		
		this.buttonJump.tf.text = "Skoč";
		this.buttonJump.addEventListener("click", fl_OnJumpPressed.bind(this));
		
		this.buttonEngineOn.tf.text = "Nastartuj";
		this.buttonEngineOff.tf.text = "Vypni";
		this.buttonEngineOn.addEventListener("click", fl_OnEngineOnPressed.bind(this));
		this.buttonEngineOff.addEventListener("click", fl_OnEngineOffPressed.bind(this));
		
		function fl_OnEngineOnPressed(){
			
			this.carBody_01.play();
			this.carHead_01.play();
		}
		
		function fl_OnEngineOffPressed(){
			
			this.carBody_01.stop();
			this.carHead_01.stop();
		}
		
		
		function fl_OnbPlayPressed(){
			
			all_wheels.forEach((item)=>{item.play()});
			createjs.Tween.removeAllTweens();
			this.animBg_01.x = background_start_x;
			createjs.Tween
				.get(this.animBg_01,{loop:true})
				.to({x:0}, 5000)
		}
		
		function fl_OnStopPressed(){
			
			all_wheels.forEach((item)=>{item.stop()});
			createjs.Tween.removeAllTweens();
		}
		
		
		function fl_OnJumpPressed(){
			
			all_car_components.forEach((item)=>{
				
				var start_y = item.y;
				createjs.Tween
				.get(item)
				.to({y:start_y - 50}, 600)
				.to({y:start_y}, 600)
			});
		}
		
		// Stop All on Start
		all_car_components.forEach((item)=>{item.stop()});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// buttons
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.buttonPlay},{t:this.buttonStop},{t:this.buttonEngineOn},{t:this.buttonEngineOff},{t:this.buttonJump}]}).wait(1));

	// interactive
	this.carWheel_05 = new lib.mov_wheel();
	this.carWheel_05.name = "carWheel_05";
	this.carWheel_05.setTransform(602.7,324.95);

	this.carWheel_04 = new lib.mov_wheel();
	this.carWheel_04.name = "carWheel_04";
	this.carWheel_04.setTransform(550.55,324.95);

	this.carWheel_03 = new lib.mov_wheel();
	this.carWheel_03.name = "carWheel_03";
	this.carWheel_03.setTransform(459.2,324.95);

	this.carWheel_02 = new lib.mov_wheel();
	this.carWheel_02.name = "carWheel_02";
	this.carWheel_02.setTransform(407.05,324.95);

	this.carWheel_01 = new lib.mov_wheel();
	this.carWheel_01.name = "carWheel_01";
	this.carWheel_01.setTransform(313.25,324.95);

	this.carBody_01 = new lib.mov_body();
	this.carBody_01.name = "carBody_01";
	this.carBody_01.setTransform(506,260.55);

	this.carHead_01 = new lib.mov_head();
	this.carHead_01.name = "carHead_01";
	this.carHead_01.setTransform(318.7,266.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.carHead_01},{t:this.carBody_01},{t:this.carWheel_01},{t:this.carWheel_02},{t:this.carWheel_03},{t:this.carWheel_04},{t:this.carWheel_05}]}).wait(1));

	// background
	this.animBg_01 = new lib.mov_animbg_01();
	this.animBg_01.name = "animBg_01";
	this.animBg_01.setTransform(-1037.05,244.95,1,1,0,0,0,12.8,-66.5);

	this.timeline.addTween(cjs.Tween.get(this.animBg_01).wait(1));

	// other
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("EhP/AAAMCf/AAA");
	this.shape.setTransform(512,311.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-539.3,442,1565,-93.80000000000001);
// library properties:
lib.properties = {
	id: '304A6AF9356C0F4B8E69656C04046535',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_10.png?1651931146698", id:"CachedBmp_10"}
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