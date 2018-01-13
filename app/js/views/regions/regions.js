// "use strict";
//
// /*
// =============================================================================
// CONTROLLER DEFINITION
// =============================================================================
// */
// (function() {
//   this.app.controller("RegionsController", ["$scope","$Regions","AuthModel","$window",
//   function($scope,$Regions,AuthModel,$window) {
//
//     $('body').removeClass('perfect-dom');
//
//     //verify user exist
//
//     if(AuthModel.getAdmin()){
//
//     }else{
//
//       $window.location.href = '#/login';
//     }
//
//
//     let zonasColor = ['#3189b0', '#6fc9f2'];
//
//     var chileMap = new Datamap({
//             element: document.getElementById('mapa-chile-puertos-zonas'),
//             responsive: true,
//             scope: 'chile',
//             width: $('.mapa-chile-puertos-zonas').width(),
//             height: $('.mapa-chile-puertos-zonas').height(),
//             fills: {
//                 defaultFill: "#D1D1D3",
//                 availableCountry: "#878786",
//                 authorHasTraveledTo: "#fa0fa0",
//                 secondKey: '#6A9FE7',
//                 greenCountryKey: '#b3bf0e'
//                 // zonaCentroNorte: zonasColor[1],
//                 // zonaCentroSur: zonasColor[0]
//             },
//             data: {
//                 ant: {fillKey: 'zonaCentroNorte'},
//                 ari: {fillKey: 'zonaCentroNorte'},
//                 ara: {fillKey: 'defaultFill'},
//                 ayp: {fillKey: 'zonaCentroNorte'},
//                 ays: {fillKey: 'defaultFill'},
//                 coq: {fillKey: 'zonaCentroNorte'},
//                 ohg: {fillKey: 'zonaCentroSur'},
//                 mag: {fillKey: 'defaultFill'},
//                 mau: {fillKey: 'zonaCentroSur'},
//                 met: {fillKey: 'zonaCentroSur'},
//                 val: {fillKey: 'zonaCentroSur'},
//                 tar: {fillKey: 'zonaCentroNorte'},
//                 rio: {fillKey: 'defaultFill'},
//                 lag: {fillKey: 'defaultFill'},
//                 boi: {fillKey: 'zonaCentroSur'},
//                 ata: {fillKey: 'zonaCentroNorte'}
//             },
//             geographyConfig: {
//                 highlightOnHover: true,
//                 highlightFillColor: '#306d88',
//                 highlightBorderColor: '#ffffff',
//                 cursor: 'default',
//                 popupTemplate: function(geography, data) {
//                     let popup;
//                     popup = '<div class="d3-tip-bar"><strong style="color:#383e46; font-family:gobCL">' + geography.properties.es_name + ' </strong></div>'
//                     return popup
//                 }
//             },
//             onClickFunction: function(d, map){
//               debugger;
//
//         },
//             setProjection: function(element, options){
//                 var projection = d3.geo.mercator()
//                 .translate([($(".mapa-chile-puertos-zonas").width())*1.7, -($(".mapa-chile-puertos-zonas").width()*.4)])
//                 .scale($(".mapa-chile-puertos-zonas").width()*1.2);
//                 var path = d3.geo.path().projection(projection);
//                 return {path: path, projection: projection};
//             }
//         });
//         chileMap.bubbles();
//
//     // this.foo = function (event) {
//     //        this.callbackFn({event: event});
//     //    }
//
//
//
//
//     // $Regions.getRegions().then(function(_response){
//     //     debugger;
//     // },function(_error){
//     //
//     // })
//
//   }]);
// }).call(this);
