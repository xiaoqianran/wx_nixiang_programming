var t=wx.leaflet.L;t.RasterCoords=function(t,i,h,s){this.map=t,this.width=i[0],this.height=i[1],this.tilesize=s||256,this.bound_ratio=h||1,this.zoom=this.zoomLevel(),this.width&&this.height&&this.setMaxBounds()},t.RasterCoords.prototype={zoomLevel:function(){return Math.ceil(Math.log(Math.max(this.width,this.height)/this.tilesize)/Math.log(2))},unproject:function(t){return this.map.unproject(t,this.zoom)},project:function(t){return this.map.project(t,this.zoom)},getMaxBounds:function(){var i=this.bound_ratio,h=this.unproject([this.height*(1-i),this.height*i]),s=this.unproject([this.width*i,this.width*(1-i)]);return new t.LatLngBounds(h,s)},getTileBounds:function(){var i=this.unproject([0,this.height]),h=this.unproject([this.width,0]);return new t.LatLngBounds(i,h)},setMaxBounds:function(){var t=this.getMaxBounds();this.map.setMaxBounds(t)}};