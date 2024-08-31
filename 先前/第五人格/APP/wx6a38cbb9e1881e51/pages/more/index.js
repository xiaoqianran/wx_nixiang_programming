var a=require("../../@babel/runtime/helpers/toConsumableArray"),t=require("../../@babel/runtime/helpers/regeneratorRuntime"),r=require("../../@babel/runtime/helpers/objectSpread2"),e=require("../../@babel/runtime/helpers/asyncToGenerator"),_=require("../../utils/util"),i=require("../common/const"),o=require("../common/utils"),l=getApp();Page({data:{apiUrl:l.globalData.apiUrl,wxToken:l.globalData.wxToken,imgUrl:l.globalData.imgUrl,gameId:null,userEx:null,array:i.seasonTypeOptions,arrayVal1:"当前赛季",array2:i.rolesOptions,arrayVal2:"求生者",playerstatis:null,userPKzs:0,userGetzs:0,userRpz:0,userMvp:0,nowDataQS:null,allDataQS:null,showDataQS:null,nowDataJG:null,allDataJG:null,showDataJG:null,nowFiveData:null,allFiveData:null,showFiveData:null,ec:{disableTouch:!0,lazyLoad:!0},chart:null,ind:i.survivorInd,ind2:i.regulatorsInd2,currentRadarData1:[],currentRadarData2:[],allRadarData1:[],allRadarData2:[],userPlayerStatis:null,pixelRatio:0,cWidth:0,playerStatis:null,formatedPlayerStatis:null,userRecord:null,formatedUserRecord:null,personData:{battle_num:0,praise:0,credit:0,mvp:0},nowRadarDataQS:[],nowRadarDataJG:[],allRadarDataQS:[],allRadarDataJG:[]},onLoad:function(a){this.setData({wxToken:l.globalData.wxToken});var t=this;l.globalData.wxToken?t.initData():l.initOkCallback=function(a){t.initData()},this.setData({cWidth:wx.getSystemInfoSync().windowWidth})},getDpr:function(){var a=this;wx.getSystemInfo({success:function(t){a.data.pixelRatio=t.pixelRatio},fail:function(){pixelRatio=0}})},initData:function(){var a=this;return e(t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l._getPlayerStatis().then((function(t){return a.setData({playerStatis:r({},t.data.data[0])})}));case 2:return t.next=4,l._getUserRecord().then((function(t){return a.setData({userRecord:r({},t.data.data[0])})}));case 4:a.formatData();case 5:case"end":return t.stop()}}),e)})))()},formatData:function(){var a=this.data,t=a.userRecord,r=a.playerStatis,e=a.imgUrl,_=(0,o.formatRecordDay)(t),i=(0,o.formatUserPlayerStatis)(r,e);this.setData({formatedUserRecord:_,formatedPlayerStatis:i,userPlayerStatis:r}),this.formatPersonData(),this.formatRadarData(),this.formatPersonDetailData(),this.checkData(),this.getDpr()},formatPersonDetailData:function(){var a=this.data,t=a.userRecord,r=a.playerStatis,e=a.formatedUserRecord,_=a.formatedPlayerStatis;console.log("userRecord:{}",t),console.log("formatedUserRecord:{}",e),console.log("playerStatis:{}",r),console.log("formatedPlayerStatis:{}",_);var i={escape_battle:e.saiji_escape_battle,board_hit:e.saiji_board_hit,fix:e.saiji_fix,save:e.saiji_save,cure:e.saiji_cure,tease:e.saiji_tease,rank:_.civ_battle_num,mvp:_.civ_total_mvp,escape_rate:e.saiji_escape_rate,avg_fix:e.saiji_avg_fix,avg_save:e.saiji_avg_save,avg_tease:e.saiji_avg_tease,avg_score:e.civ_saiji_avg_score},o={escape_battle:e.total_escape_battle,board_hit:e.total_board_hit,fix:e.total_fix,save:e.total_save,cure:e.total_cure,tease:e.total_tease,rank:_.civ_total_battle_num,mvp:_.civ_total_mvp,escape_rate:e.total_escape_rate,avg_fix:e.total_avg_fix,avg_save:e.total_avg_save,avg_tease:e.total_avg_tease,avg_score:e.civ_total_avg_score},l={kill_num:e.saiji_kill_num,killall:e.saiji_killall,break_board:e.saiji_break_board,attack_down:e.saiji_attack_down,terror_shock:e.saiji_terror_shock,killall_rate:e.saiji_killall_rate,mvp:0,avg_kill:e.saiji_avg_kill,avg_break_board:e.saiji_avg_break_board,avg_attack_down:e.saiji_avg_attack_down,avg_terror_shock:e.saiji_avg_terror_shock,avg_score:e.but_saiji_avg_score},s={kill_num:e.total_kill_num,killall:e.total_killall,break_board:e.total_break_board,attack_down:e.total_attack_down,terror_shock:e.total_terror_shock,killall_rate:e.total_killall_rate,mvp:_.but_total_mvp,avg_kill:e.total_avg_kill,avg_break_board:e.total_avg_break_board,avg_attack_down:e.total_avg_attack_down,avg_terror_shock:e.total_avg_terror_shock,avg_score:e.but_total_avg_score},n={partDuanWei:_.five_pvp_part_duanWei,partJie:_.five_pvp_part_jie,icon:this.data.imgUrl+"/vsrecord/ic/w"+_.five_pvp_part_duan+".png",winNum:_.five_win_num,winRate:_.five_win_rate,battleNum:_.five_battle_num},u={partDuanWei:e.five_toppart_duanWei,partJie:e.five_toppart_jie,icon:this.data.imgUrl+"/vsrecord/ic/w"+e.five_toppart_duan+".png",winNum:_.five_total_win_num,winRate:_.five_total_win_rate,battleNum:_.five_total_battle_num};this.setData({nowDataQS:i,allDataQS:o,nowDataJG:l,allDataJG:s,nowFiveData:n,allFiveData:u})},formatPersonData:function(){var a=this.data.playerStatis;if(a){var t=a.battle_num,r=a.praise,e=a.credit,_=a.mvp;this.setData({personData:{battle_num:t,praise:r,credit:e,mvp:_}})}},formatRadarData:function(){var a=this.data,t=a.userRecord,r=a.playerStatis,e=a.ind,_=a.ind2,i=[Math.round(t.civ_saiji_avg_score)>e[0].max?e[0].max:Math.round(t.civ_saiji_avg_score),Math.round(10*t.saiji_avg_tease)/10>e[1].max?e[1].max:Math.round(10*t.saiji_avg_tease)/10,Math.round(100*t.saiji_avg_fix)/100>e[2].max?e[2].max:Math.round(100*t.saiji_avg_fix)/100,Math.round(t.saiji_cure/r.civ_total_battle_num*1e4)/100>e[3].max?e[3].max:Math.round(t.saiji_cure/r.civ_total_battle_num*1e4)/100,Math.round(100*t.saiji_avg_save)/100>e[4].max?e[4].max:Math.round(100*t.saiji_avg_save)/100,Math.round(1e4*t.saiji_escape_rate)/100>e[5].max?e[5].max:Math.round(1e4*t.saiji_escape_rate)/100],o=[Math.round(t.civ_total_avg_score)>e[0].max?e[0].max:Math.round(t.civ_total_avg_score),Math.round(10*t.total_avg_tease)/10>e[1].max?e[1].max:Math.round(10*t.total_avg_tease)/10,Math.round(100*t.total_avg_fix)/100>e[2].max?e[2].max:Math.round(100*t.total_avg_fix)/100,Math.round(t.total_cure/r.civ_total_battle_num*1e4)/100>e[3].max?e[3].max:Math.round(t.total_cure/r.civ_total_battle_num*1e4)/100,Math.round(100*t.total_avg_save)/100>e[4].max?e[4].max:Math.round(100*t.total_avg_save)/100,Math.round(1e4*t.total_escape_rate)/100>e[5].max?e[5].max:Math.round(1e4*t.total_escape_rate)/100],l=[Math.round(t.but_saiji_avg_score)>_[0].max?_[0].max:Math.round(t.but_saiji_avg_score),Math.round(100*t.saiji_avg_attack_down)/100>_[1].max?_[1].max:Math.round(100*t.saiji_avg_attack_down)/100,Math.round(100*t.saiji_avg_break_board)/100>_[2].max?_[2].max:Math.round(100*t.saiji_avg_break_board)/100,Math.round(100*t.saiji_avg_kill)/100>_[3].max?_[3].max:Math.round(100*t.saiji_avg_kill)/100,Math.round(100*t.saiji_avg_terror_shock)/100>_[4].max?_[4].max:Math.round(100*t.saiji_avg_terror_shock)/100,Math.round(1e4*t.saiji_killall_rate)/100>_[5].max?_[5].max:Math.round(1e4*t.saiji_killall_rate)/100],s=[Math.round(t.but_total_avg_score)>_[0].max?_[0].max:Math.round(t.but_total_avg_score),Math.round(100*t.total_avg_attack_down)/100>_[1].max?_[1].max:Math.round(100*t.total_avg_attack_down)/100,Math.round(100*t.total_avg_break_board)/100>_[2].max?_[2].max:Math.round(100*t.total_avg_break_board)/100,Math.round(100*t.total_avg_kill)/100>_[3].max?_[3].max:Math.round(100*t.total_avg_kill)/100,Math.round(100*t.total_avg_terror_shock)/100>_[4].max?_[4].max:Math.round(100*t.total_avg_terror_shock)/100,Math.round(1e4*t.total_killall_rate)/100>_[5].max?_[5].max:Math.round(1e4*t.total_killall_rate)/100];this.setData({currentRadarData1:i,allRadarData1:o,currentRadarData2:l,allRadarData2:s}),this.updateRadarBoxData()},checkData:function(){"求生者"==this.data.arrayVal2?"当前赛季"==this.data.arrayVal1?this.setData({showDataQS:this.data.nowDataQS}):"全部赛季"==this.data.arrayVal1&&this.setData({showDataQS:this.data.allDataQS}):"当前赛季"==this.data.arrayVal1?this.setData({showDataJG:this.data.nowDataJG,showFiveData:this.data.nowFiveData}):"全部赛季"==this.data.arrayVal1&&this.setData({showDataJG:this.data.allDataJG,showFiveData:this.data.allFiveData}),"当前赛季"==this.data.arrayVal1?this.setData({showFiveData:this.data.nowFiveData}):this.setData({showFiveData:this.data.allFiveData}),this.updateRadarBoxData(),this.getDpr()},handlerGobackClick:function(a){getCurrentPages().length>=2?wx.navigateBack({delta:a}):wx.redirectTo({url:l.globalData.pageIndex})},bindPickerChange:function(a){1==a.currentTarget.dataset.id&&this.setData({arrayVal1:this.data.array[a.detail.value]}),this.checkData(),this.updateRadarBoxData()},bindPickerChange2:function(a){1==a.currentTarget.dataset.id&&this.setData({arrayVal2:this.data.array2[a.detail.value]}),this.checkData(),this.updateRadarBoxData()},getUserRecord:function(){var t=this;function e(e){var i,o,l=r({},e);("-1_-1"!=l.but_toppart&&"-1_-1_-1"!=l.but_toppart||(l.but_toppart="1_3_0"),"-1_-1"!=l.civ_toppart&&"-1_-1_-1"!=l.civ_toppart||(l.civ_toppart="1_3_0"),"-1_-1_-1"==l.five_toppart&&(l.five_toppart="1_3_0"),l.but_toppart_duan=parseInt(l.but_toppart.split("_")[0]),l.but_toppart_jie=(0,_.convert)(parseInt(-1==l.but_toppart.split("_")[1]?0:l.but_toppart.split("_")[1])),l.but_toppart_jie_num=parseInt(l.but_toppart.split("_")[1]),l.but_toppart_xing=parseInt(l.but_toppart.split("_")[2]),l.but_toppart_duan<7?l.but_toppart_duanWei=(0,_.NoToChinese)(l.but_toppart_duan)+"阶":7==l.but_toppart_duan&&(l.but_toppart_xing>=25?(l.but_toppart_duan=8,l.but_toppart_duanWei="巅峰七阶"):l.but_toppart_duanWei="七阶"),l.civ_toppart_duan=parseInt(l.civ_toppart.split("_")[0]),l.civ_toppart_jie=(0,_.convert)(parseInt(-1==l.civ_toppart.split("_")[1]?0:l.civ_toppart.split("_")[1])),l.civ_toppart_jie_num=parseInt(l.civ_toppart.split("_")[1]),l.civ_toppart_xing=parseInt(l.civ_toppart.split("_")[2]),l.civ_toppart_duan<7?l.civ_toppart_duanWei=(0,_.NoToChinese)(l.civ_toppart_duan)+"阶":7==l.civ_toppart_duan&&(l.civ_toppart_xing>=25?(l.civ_toppart_duan=8,l.civ_toppart_duanWei="巅峰七阶"):l.civ_toppart_duanWei="七阶"),l.five_toppart_duan=parseInt(l.five_toppart.split("_")[0]),l.five_toppart_jie=(0,_.convert)(parseInt(-1==l.five_toppart.split("_")[1]?0:l.five_toppart.split("_")[1])),l.five_toppart_xing=parseInt(l.five_toppart.split("_")[2]),l.five_toppart_duanWei=(0,_.NoToChinese)(l.five_toppart_duan)+"阶",l.saiji_killall_rate=Math.round(1e3*l.saiji_killall_rate)/10+"%",l.saiji_escape_rate=Math.round(1e3*l.saiji_escape_rate)/10+"%",l.total_killall_rate=Math.round(1e3*l.total_killall_rate)/10+"%",l.total_escape_rate=Math.round(1e3*l.total_escape_rate)/10+"%",l.saiji_avg_tease=Math.round(10*l.saiji_avg_tease)/10+"s",l.total_avg_tease=Math.round(10*l.total_avg_tease)/10+"s",l.total_tease=Math.round(l.total_tease/60/60*10)/10+"h",l.saiji_tease=Math.round(l.saiji_tease/60/60*10)/10+"h",l.but_saiji_avg_score=Math.round(l.but_saiji_avg_score),l.civ_saiji_avg_score=Math.round(l.civ_saiji_avg_score),l.saiji_avg_break_board=Math.round(10*l.saiji_avg_break_board)/10,l.saiji_avg_attack_down=Math.round(10*l.saiji_avg_attack_down)/10,l.saiji_avg_terror_shock=Math.round(10*l.saiji_avg_terror_shock)/10,l.total_fix=Math.round(l.total_fix/100),l.saiji_fix=Math.round(l.saiji_fix/100),l.saiji_avg_fix=10*Math.round(l.saiji_avg_fix/10)+"%",l.saiji_avg_kill=Math.round(10*l.saiji_avg_kill)/10,l.saiji_avg_save=Math.round(10*l.saiji_avg_save)/10,l.civ_total_avg_score=Math.round(l.civ_total_avg_score),l.but_total_avg_score=Math.round(l.but_total_avg_score),l.total_avg_fix=10*Math.round(l.total_avg_fix/10)+"%",l.total_avg_save=Math.round(10*l.total_avg_save)/10,l.total_avg_break_board=Math.round(10*l.total_avg_break_board)/10,l.total_avg_attack_down=Math.round(10*l.total_avg_attack_down)/10,l.total_avg_terror_shock=Math.round(10*l.total_avg_terror_shock)/10,l.total_avg_kill=Math.round(10*l.total_avg_kill)/10,l.herolist=[],l.but_total_hero_list)&&(i=l.herolist).push.apply(i,a(l.but_total_hero_list));l.civ_total_hero_list&&(o=l.herolist).push.apply(o,a(l.civ_total_hero_list));if(l.but_saiji_hero_list&&l.but_saiji_hero_list,l.civ_saiji_hero_list&&l.but_saiji_hero_list,l.herolist){var s="",n=-1,u=null;if(l.herolist.forEach((function(a,t){a.badge>n&&(n=a.badge,s=a.hero_name,u=a.kill)})),-1!=n){var d="",v="";n<11?d="s":n<101?d="a":n<301?d="b":n<501&&(d="c"),v=null!=u?"j_"+d:"q_"+d,t.setData({badgeTop:n,badgeName:s,badgeCard:v})}else t.setData({badgeTop:null,badgeName:null,badgeCard:null})}t.setData({userRecord:l}),t.getRadar(r({},e))}l.globalData.userRecord?e(l.globalData.userRecord):(l.userRecordOver=function(a){console.log("还没有这个, 现在有了"),e(l.globalData.userRecord)},l.getUserRecord())},updateRadarBoxData:function(){var a=(0,o.formatRadarBoxData)(this,this.data.arrayVal1,this.data.arrayVal2,this.data.formatedPlayerStatis,this.data.formatedUserRecord),t=a.chartData,r=a.radarData;this.setData({chartData:t}),(0,o.initRadar)(this,r.data,r.ind,this.data.pixelRatio)}});