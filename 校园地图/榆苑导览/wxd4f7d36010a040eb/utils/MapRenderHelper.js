var e=require("../@babel/runtime/helpers/interopRequireDefault"),r=require("../@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.MARKERS_CONFIG=void 0;var t=require("../@babel/runtime/helpers/objectSpread2"),a=require("../@babel/runtime/helpers/classCallCheck"),i=require("../@babel/runtime/helpers/createClass"),n=r(require("./icon.js")),u=r(require("../config/mapStyle")),l=e(require("../entities/MarkerEntity")),o={startMarker:[n.ROUTE_IC_MARKER_START_DISABLE,n.ROUTE_IC_MARKER_START],endMarker:[n.ROUTE_IC_MARKER_END_DISABLE,n.ROUTE_IC_MARKER_END]};exports.MARKERS_CONFIG=o;var d=function(){function e(){a(this,e)}return i(e,[{key:"createStartMarker",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.createMarker(t(t({latitude:e.latitude,longitude:e.longitude,buildingId:e.buildingId,floorName:e.floorName,zIndex:u.MARKER_ZINDEX.START_DEST},u.START_END_MARKER_SIZE),{},{iconPath:o.startMarker[r],anchor:{x:.5,y:1},__marker_type:3}))}},{key:"createDestMarker",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.createMarker(t(t({latitude:e.latitude,longitude:e.longitude,buildingId:e.buildingId,floorName:e.floorName,zIndex:u.MARKER_ZINDEX.START_DEST},u.START_END_MARKER_SIZE),{},{iconPath:o.endMarker[r],anchor:{x:.5,y:1},__marker_type:3}))}},{key:"createMarker",value:function(e){return new l.default({latitude:e.latitude,longitude:e.longitude,width:e.width,height:e.height,iconPath:e.iconPath,zIndex:e.zIndex,anchor:e.anchor,callout:e.callout},e)}}]),e}();exports.default=d;