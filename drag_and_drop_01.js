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
// helper functions:

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
	this.shape.graphics.f("#00FFFF").s().p("Ar/HRIAAuhIX/AAIAAOhg");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mov_hit, new cjs.Rectangle(-76.8,-46.5,153.6,93), null);


(lib.mov_card_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit
	this.hitBox = new lib.mov_hit();
	this.hitBox.name = "hitBox";
	this.hitBox.setTransform(0,-0.05);
	this.hitBox.alpha = 0;

	this.dot = new lib.mov_hit();
	this.dot.name = "dot";
	this.dot.setTransform(-0.05,-0.1,0.8532,0.6474);
	this.dot.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hitBox}]}).to({state:[{t:this.dot}]},2).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(3,1,1).p("AlikrIPxAAIAAErQAAB8hYBYQhYBYh8AAIvxAAIAAksQAAh7BYhYQBYhYB8AAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AqOEsIAAksQAAh7BYhYQBYhYB8AAIPxAAIAAErQAAB8hYBYQhYBYh8AAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9966").s().p("AqOEsIAAksQAAh7BYhYQBYhYB8AAIPxAAIAAErQAAB8hYBYQhYBYh8AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC99").s().p("AqOEsIAAksQAAh7BYhYQBYhYB8AAIPxAAIAAErQAAB8hYBYQhYBYh8AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.8,-46.5,153.6,92.9);


(lib.mov_cage_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hit
	this.hitBox = new lib.mov_hit();
	this.hitBox.name = "hitBox";
	this.hitBox.setTransform(0,-0.05);
	this.hitBox.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.hitBox).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(3,1,1).p("AlnlOIQeAAIAAFOQAACKhjBiQhiBjiKAAIweAAIAAlPQAAiKBihiQBjhiCKAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("Aq2FPIAAlPQAAiJBihjQBjhiCKAAIQeAAIAAFOQAACKhjBjQhiBiiKAAg");
	this.shape_1.setTransform(0.025,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FF9966").ss(3,1,1).p("AlnlOIQeAAIAAFOQAACKhjBiQhiBjiKAAIweAAIAAlPQAAiKBihiQBjhiCKAAg");
	this.shape_2.setTransform(0.025,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00CC99").ss(3,1,1).p("AlnlOIQeAAIAAFOQAACKhjBiQhiBjiKAAIweAAIAAlPQAAiKBihiQBjhiCKAAg");
	this.shape_3.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).to({state:[{t:this.shape_1},{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.8,-46.5,153.6,92.9);


// stage content:
(lib.drag_and_drop_01 = function(mode,startPosition,loop,reversed) {
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
		createjs.Touch.enable(stage);
		
		// collect cards and cages
		var all_cards = [];
		var all_cages = [];
		this.children.forEach((child)=>{
			
			if (child.name != null){
				
				if (child.name.indexOf("card") != -1) {
					
					all_cards.push(child);
					
				} else if (child.name.indexOf("cage") != -1) {
					
					all_cages.push(child);
				}
			}
		})
		
		// setup cards
		var frame_index = 0;
		all_cards.forEach((card)=>{
			card.gotoAndStop(frame_index++);
			card.on("mousedown", onMouseDown.bind(this));
			card.on("pressmove", onMouseMove.bind(this));
			card.on("pressup", onMouseUp.bind(this));
			card.originX = card.x;
			card.originY = card.y;
		});
		
		// setup cages
		frame_index = 0;
		all_cages.forEach((cage)=>{
			cage.gotoAndStop(frame_index++);
			cage.originX = cage.x;
			cage.originY = cage.y;
		});
		
		// mouse down event
		function onMouseDown(evt){
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
		}
		
		// mouse up event
		function onMouseUp(evt){
			var card = evt.currentTarget;
			card.drag = false;
			var was_hit = false;
			var hit_cage;
			all_cages.forEach((cage)=>{
				
				if (!was_hit){
					var pt = card.localToLocal(card.dot.x, card.dot.y, cage.hitBox);
					was_hit = cage.hitTest(pt.x, pt.y);
					hit_cage = cage;
				}
			})
		
			console.log("was_hit:" + was_hit);
			if(was_hit && isCorrect(card, hit_cage)){ // snap card to cage
				card.x = hit_cage.x;
				card.y = hit_cage.y;
				//card.mouseEnabled = false;  // prevents object from being move when place correctly
			}else{ // return card back
				card.x = card.originX;
				card.y = card.originY;
			}
		}
		
		// mouse move event
		function onMouseMove(evt){
			var item = evt.currentTarget;
			if (item.drag){
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		
		function isCorrect(card, cage){
			
			return card.name.split("_").pop() == cage.name.split("_").pop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cards
	this.card_03 = new lib.mov_card_01();
	this.card_03.name = "card_03";
	this.card_03.setTransform(696.85,418.8);

	this.card_02 = new lib.mov_card_01();
	this.card_02.name = "card_02";
	this.card_02.setTransform(477.9,418.8);

	this.card_01 = new lib.mov_card_01();
	this.card_01.name = "card_01";
	this.card_01.setTransform(265.2,418.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.card_01},{t:this.card_02},{t:this.card_03}]}).wait(1));

	// cages
	this.cage_03 = new lib.mov_cage_01();
	this.cage_03.name = "cage_03";
	this.cage_03.setTransform(700.8,210.1);

	this.cage_02 = new lib.mov_cage_01();
	this.cage_02.name = "cage_02";
	this.cage_02.setTransform(481.85,210.1);

	this.cage_01 = new lib.mov_cage_01();
	this.cage_01.name = "cage_01";
	this.cage_01.setTransform(269.15,210.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cage_01},{t:this.cage_02},{t:this.cage_03}]}).wait(1));

	// labels
	this.text = new cjs.Text("karta 3", "24px 'Minion Pro'", "#333300");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 94;
	this.text.parent = this;
	this.text.setTransform(697.65,475.8);

	this.text_1 = new cjs.Text("karta 2", "24px 'Minion Pro'", "#333300");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 34;
	this.text_1.lineWidth = 94;
	this.text_1.parent = this;
	this.text_1.setTransform(474.65,475.8);

	this.text_2 = new cjs.Text("karta 1", "24px 'Minion Pro'", "#333300");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 34;
	this.text_2.lineWidth = 94;
	this.text_2.parent = this;
	this.text_2.setTransform(259.65,475.8);

	this.text_3 = new cjs.Text("cela 3", "24px 'Minion Pro'", "#333300");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 34;
	this.text_3.lineWidth = 94;
	this.text_3.parent = this;
	this.text_3.setTransform(697.65,253.75);

	this.text_4 = new cjs.Text("cela 2", "24px 'Minion Pro'", "#333300");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 34;
	this.text_4.lineWidth = 94;
	this.text_4.parent = this;
	this.text_4.setTransform(474.65,253.75);

	this.text_5 = new cjs.Text("cela 1", "24px 'Minion Pro'", "#333300");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 34;
	this.text_5.lineWidth = 94;
	this.text_5.parent = this;
	this.text_5.setTransform(259.65,253.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(700.4,547.6,77.20000000000005,-36.900000000000034);
// library properties:
lib.properties = {
	id: '084513442266DF49AF69AB5C53DF1742',
	width: 1024,
	height: 768,
	fps: 24,
	color: "#9E9F7D",
	opacity: 1.00,
	manifest: [],
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
an.compositions['084513442266DF49AF69AB5C53DF1742'] = {
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