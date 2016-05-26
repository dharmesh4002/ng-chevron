(function(angular) {
  'use strict';
function ChevronController() {
	this.$onChanges = function (changesObj) {
    console.log(changesObj);
  };


	this.activeColorVar = this.activeColor == undefined ? 'lightblue' : this.activeColor ;
	this.inactiveColorVar = this.inactiveColor == undefined ? 'grey' : this.inactiveColor ;
	this.fontSizeVar = this.fontSize == undefined ? 10 : this.fontSize ;
	this.fontColorVar = this.fontColor == undefined ? 'white' : this.fontColor ;
	this.stageHeightVar = this.stageHeight == undefined ? 50 : this.stageHeight ;
	this.stageWidthVar = this.stageWidth == undefined ? 150 : this.stageWidth ;
	this.topPadding= (this.stageHeightVar - this.fontSizeVar*1.7)/2;
	this.boxHeight = this.stageHeightVar - this.topPadding;
	this.borderSize = this.stageHeightVar/2;
    this.boxWidth = this.stageWidthVar - this.borderSize*2 ;

    this.styeClassName = 'class1';
    this.stageMap = {};
    for(var i = 0;i < this.colorMap.length;i++){
    	this.stageMap[''+this.colorMap[i].stageName + ''] = this.colorMap[i].color ;	
    }

  console.log(this);
}

angular.module('ngChevron',[]).component('ngChevron', {
	templateUrl : 'ngChevron.html',
 //template : '<div><style>.block{width:{{$ctrl.boxWidth}}px; height:{{$ctrl.boxHeight}}px ; background-color:{{$ctrl.inactiveColorVar}}; position:relative; color:{{$ctrl.fontColorVar}}; font-weight:bold; font-size:{{$ctrl.fontSizeVar}}px; padding-top:{{$ctrl.topPadding}}px; text-align:center; float: left; /* text-shadow:2px 2px black;*/ -moz-box-shadow: 6px 6px 5px #CCC; -webkit-box-shadow: 6px 6px 5px #CCC; box-shadow: 6px 6px 5px #CCC;}.blockActive{background-color:{{$ctrl.activeColorVar}};}.arrow-right{width: 0; height: 0; border-top:{{$ctrl.borderSize}}px solid transparent; border-bottom:{{$ctrl.borderSize}}px solid transparent; position:relative; border-left:{{$ctrl.borderSize}}px solid {{$ctrl.inactiveColorVar}}; float: left;}.arrow-right_Active{border-left:{{$ctrl.borderSize}}px solid {{$ctrl.activeColorVar}};}.blocktop{width: 0; height: 0; border-top:{{$ctrl.borderSize}}px solid {{$ctrl.inactiveColorVar}}; border-bottom:{{$ctrl.borderSize}}px solid {{$ctrl.inactiveColorVar}}; position:relative; border-left:{{$ctrl.borderSize}}px solid transparent; float: left; -moz-box-shadow: 6px 6px 5px #CCC; -webkit-box-shadow: 6px 6px 5px #CCC; box-shadow: 6px 6px 5px #CCC;}.blocktop_Active{border-top:{{$ctrl.borderSize}}px solid {{$ctrl.activeColorVar}}; border-bottom:{{$ctrl.borderSize}}px solid {{$ctrl.activeColorVar}};}.maindiv{float:left; margin-left:-20px;}</style><table> <tr> <td style="width:50px"></td><td> <div class="maindiv" ng-repeat="item in $ctrl.stageList"> <div class="blocktop{{item==$ctrl.currentStage ? \' blocktop_Active\': \'\'}}" ></div><div class=" block{{item==$ctrl.currentStage ? \' blockActive\': \'\'}}" >{{item}}</div><div class="arrow-right{{item==$ctrl.currentStage ? \' arrow-right_Active\': \'\'}}" ></div></div></td></tr></table> </div>',
 controller: ChevronController,
  bindings: {
    activeColor: '@',
    inactiveColor: '@',
    stageList: '<',
    currentStage: '<',
    fontSize:'=',
    fontColor:'@',
    stageHeight:'=',
    stageWidth:'=',
    colorMap: '<'
  }
});
})(window.angular);