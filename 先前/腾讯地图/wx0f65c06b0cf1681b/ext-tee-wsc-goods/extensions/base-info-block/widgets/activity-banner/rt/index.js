var r=require("~/r");r("1UlK",Object.assign({},require("~/v.js").modules,{"1UlK":function(e,t,i){i.r(t);var r=i("Fcif"),n={name:"activity-banner-block",props:{opt:{type:Object,default:()=>({})},cloudConfig:{type:Object,default:()=>({})}},data(){return{umpPriceInfo:this.opt.umpPriceInfo}},computed:{showBannerBg(){return"boolean"!=typeof this.cloudConfig.showBannerBgImage||this.cloudConfig.showBannerBgImage}},watch:{opt:{handler(){this.umpPriceInfo=this.opt.umpPriceInfo},immediate:!0}},methods:{handleAuctionPriceUpdate(e){var{umpPriceInfo:t,activity:i}=e,{minPrice:n,maxPrice:o}=t,{stepPrice:c}=i;this.umpPriceInfo=Object(r.a)({},this.umpPriceInfo,{minPrice:n-c,maxPrice:o-c})}}},o=i("9ZMt");t.default=o.default.component(n)}}));