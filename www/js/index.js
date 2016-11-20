/*
    Copyright (C) 2016 David Población Criado
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU General Public License for more details.
*/

var app = {};
app.initialize();

function onLoad() {
  $.getJSON("http://servicios.jcyl.es/InviPublica/OpenData?formato=json", function(json){
    })
    .done(function(data) {
      document.getElementById("tarjetas").innerHTML= "";
      console.log("Completado sin errores");
      console.log(data.fecha);
      document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.fecha;
      document.getElementById("titulopagina").innerHTML = "Todas";
      for(var i in data.incidencias) {
        var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = data.incidencias[i].Via;
        tarjeta.appendChild(titulotarjeta);

        var subtitulotarjeta = document.createElement("DIV");
        subtitulotarjeta.setAttribute("class", "mdl-card__subtitle-text");
        subtitulotarjeta.innerHTML = data.incidencias[i].Tramo;
        tarjeta.appendChild(subtitulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Tipo de alerta: " + data.incidencias[i].Tipo + "<br>Causa: " + data.incidencias[i].Causa +
        "<br>Calzada: " + data.incidencias[i].Calzada +
        "<br>Observaciones: " + data.incidencias[i].Observaciones +
        "<br>Del km " + data.incidencias[i].PKInicio + " al km " + data.incidencias[i].PKFin;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        enlacetarjeta2.setAttribute("href", data.incidencias[i].MasInfo);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
    })
    .fail(function() {
      console.log("Error");
      alert("No se pueden obtener los datos. Inténtelo de nuevo en unos minutos");
    }) ;
}

function avila(){
  $.getJSON("http://servicios.jcyl.es/InviPublica/OpenData?formato=json", function(json){
    })
    .done(function(data) {
      document.getElementById("tarjetas").innerHTML= "";
      console.log("Completado sin errores");
      console.log(data.fecha);
      document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.fecha;
      document.getElementById("titulopagina").innerHTML = "Ávila";
      for(var i in data.incidencias) {
        if(data.incidencias[i].Provincia == "AVILA"){
        var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = data.incidencias[i].Via;
        tarjeta.appendChild(titulotarjeta);

        var subtitulotarjeta = document.createElement("DIV");
        subtitulotarjeta.setAttribute("class", "mdl-card__subtitle-text");
        subtitulotarjeta.innerHTML = data.incidencias[i].Tramo;
        tarjeta.appendChild(subtitulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Tipo de alerta: " + data.incidencias[i].Tipo + "<br>Causa: " + data.incidencias[i].Causa +
        "<br>Calzada: " + data.incidencias[i].Calzada +
        "<br>Observaciones: " + data.incidencias[i].Observaciones +
        "<br>Del km " + data.incidencias[i].PKInicio + " al km " + data.incidencias[i].PKFin;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        enlacetarjeta2.setAttribute("href", data.incidencias[i].MasInfo);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
      }
    })
    .fail(function() {
      console.log("Error");
      alert("No se pueden obtener los datos. Inténtelo de nuevo en unos minutos");
    }) ;
}

function burgos(){
  $.getJSON("http://servicios.jcyl.es/InviPublica/OpenData?formato=json", function(json){
    })
    .done(function(data) {
      document.getElementById("tarjetas").innerHTML= "";
      console.log("Completado sin errores");
      console.log(data.fecha);
      document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.fecha;
      document.getElementById("titulopagina").innerHTML = "Burgos";
      for(var i in data.incidencias) {
        if(data.incidencias[i].Provincia == "BURGOS"){
        var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = data.incidencias[i].Via;
        tarjeta.appendChild(titulotarjeta);

        var subtitulotarjeta = document.createElement("DIV");
        subtitulotarjeta.setAttribute("class", "mdl-card__subtitle-text");
        subtitulotarjeta.innerHTML = data.incidencias[i].Tramo;
        tarjeta.appendChild(subtitulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Tipo de alerta: " + data.incidencias[i].Tipo + "<br>Causa: " + data.incidencias[i].Causa +
        "<br>Calzada: " + data.incidencias[i].Calzada +
        "<br>Observaciones: " + data.incidencias[i].Observaciones +
        "<br>Del km " + data.incidencias[i].PKInicio + " al km " + data.incidencias[i].PKFin;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        enlacetarjeta2.setAttribute("href", data.incidencias[i].MasInfo);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
      }
    })
    .fail(function() {
      console.log("Error");
      alert("No se pueden obtener los datos. Inténtelo de nuevo en unos minutos");
    }) ;
}

function leon(){
  $.getJSON("http://servicios.jcyl.es/InviPublica/OpenData?formato=json", function(json){
    })
    .done(function(data) {
      document.getElementById("tarjetas").innerHTML= "";
      console.log("Completado sin errores");
      console.log(data.fecha);
      document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.fecha;
      document.getElementById("titulopagina").innerHTML = "León";
      for(var i in data.incidencias) {
        if(data.incidencias[i].Provincia == "LEON"){
        var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = data.incidencias[i].Via;
        tarjeta.appendChild(titulotarjeta);

        var subtitulotarjeta = document.createElement("DIV");
        subtitulotarjeta.setAttribute("class", "mdl-card__subtitle-text");
        subtitulotarjeta.innerHTML = data.incidencias[i].Tramo;
        tarjeta.appendChild(subtitulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Tipo de alerta: " + data.incidencias[i].Tipo + "<br>Causa: " + data.incidencias[i].Causa +
        "<br>Calzada: " + data.incidencias[i].Calzada +
        "<br>Observaciones: " + data.incidencias[i].Observaciones +
        "<br>Del km " + data.incidencias[i].PKInicio + " al km " + data.incidencias[i].PKFin;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        enlacetarjeta2.setAttribute("href", data.incidencias[i].MasInfo);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
      }
    })
    .fail(function() {
      console.log("Error");
      alert("No se pueden obtener los datos. Inténtelo de nuevo en unos minutos");
    }) ;
}

function palencia(){
  $.getJSON("http://servicios.jcyl.es/InviPublica/OpenData?formato=json", function(json){
    })
    .done(function(data) {
      document.getElementById("tarjetas").innerHTML= "";
      console.log("Completado sin errores");
      console.log(data.fecha);
      document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.fecha;
      document.getElementById("titulopagina").innerHTML = "Palencia";
      for(var i in data.incidencias) {
        if(data.incidencias[i].Provincia == "PALENCIA"){
        var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = data.incidencias[i].Via;
        tarjeta.appendChild(titulotarjeta);

        var subtitulotarjeta = document.createElement("DIV");
        subtitulotarjeta.setAttribute("class", "mdl-card__subtitle-text");
        subtitulotarjeta.innerHTML = data.incidencias[i].Tramo;
        tarjeta.appendChild(subtitulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Tipo de alerta: " + data.incidencias[i].Tipo + "<br>Causa: " + data.incidencias[i].Causa +
        "<br>Calzada: " + data.incidencias[i].Calzada +
        "<br>Observaciones: " + data.incidencias[i].Observaciones +
        "<br>Del km " + data.incidencias[i].PKInicio + " al km " + data.incidencias[i].PKFin;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        enlacetarjeta2.setAttribute("href", data.incidencias[i].MasInfo);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
      }
    })
    .fail(function() {
      console.log("Error");
      alert("No se pueden obtener los datos. Inténtelo de nuevo en unos minutos");
    }) ;
}

function salamanca(){
  $.getJSON("http://servicios.jcyl.es/InviPublica/OpenData?formato=json", function(json){
    })
    .done(function(data) {
      document.getElementById("tarjetas").innerHTML= "";
      console.log("Completado sin errores");
      console.log(data.fecha);
      document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.fecha;
      document.getElementById("titulopagina").innerHTML = "Salamanca";
      for(var i in data.incidencias) {
        if(data.incidencias[i].Provincia == "SALAMANCA"){
        var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = data.incidencias[i].Via;
        tarjeta.appendChild(titulotarjeta);

        var subtitulotarjeta = document.createElement("DIV");
        subtitulotarjeta.setAttribute("class", "mdl-card__subtitle-text");
        subtitulotarjeta.innerHTML = data.incidencias[i].Tramo;
        tarjeta.appendChild(subtitulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Tipo de alerta: " + data.incidencias[i].Tipo + "<br>Causa: " + data.incidencias[i].Causa +
        "<br>Calzada: " + data.incidencias[i].Calzada +
        "<br>Observaciones: " + data.incidencias[i].Observaciones +
        "<br>Del km " + data.incidencias[i].PKInicio + " al km " + data.incidencias[i].PKFin;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        enlacetarjeta2.setAttribute("href", data.incidencias[i].MasInfo);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
      }
    })
    .fail(function() {
      console.log("Error");
      alert("No se pueden obtener los datos. Inténtelo de nuevo en unos minutos");
    }) ;
}

function segovia() {
  $.getJSON("http://servicios.jcyl.es/InviPublica/OpenData?formato=json", function(json){
    })
    .done(function(data) {
      document.getElementById("tarjetas").innerHTML= "";
      console.log("Completado sin errores");
      console.log(data.fecha);
      document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.fecha;
      document.getElementById("titulopagina").innerHTML = "Segovia";
      for(var i in data.incidencias) {
        if(data.incidencias[i].Provincia == "SEGOVIA"){
        var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = data.incidencias[i].Via;
        tarjeta.appendChild(titulotarjeta);

        var subtitulotarjeta = document.createElement("DIV");
        subtitulotarjeta.setAttribute("class", "mdl-card__subtitle-text");
        subtitulotarjeta.innerHTML = data.incidencias[i].Tramo;
        tarjeta.appendChild(subtitulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Tipo de alerta: " + data.incidencias[i].Tipo + "<br>Causa: " + data.incidencias[i].Causa +
        "<br>Calzada: " + data.incidencias[i].Calzada +
        "<br>Observaciones: " + data.incidencias[i].Observaciones +
        "<br>Del km " + data.incidencias[i].PKInicio + " al km " + data.incidencias[i].PKFin;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        enlacetarjeta2.setAttribute("href", data.incidencias[i].MasInfo);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
      }
    })
    .fail(function() {
      console.log("Error");
      alert("No se pueden obtener los datos. Inténtelo de nuevo en unos minutos");
    }) ;
}

function soria(){
  $.getJSON("http://servicios.jcyl.es/InviPublica/OpenData?formato=json", function(json){
    })
    .done(function(data) {
      document.getElementById("tarjetas").innerHTML= "";
      console.log("Completado sin errores");
      console.log(data.fecha);
      document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.fecha;
      document.getElementById("titulopagina").innerHTML = "Soria";
      for(var i in data.incidencias) {
        if(data.incidencias[i].Provincia == "SORIA"){
        var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = data.incidencias[i].Via;
        tarjeta.appendChild(titulotarjeta);

        var subtitulotarjeta = document.createElement("DIV");
        subtitulotarjeta.setAttribute("class", "mdl-card__subtitle-text");
        subtitulotarjeta.innerHTML = data.incidencias[i].Tramo;
        tarjeta.appendChild(subtitulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Tipo de alerta: " + data.incidencias[i].Tipo + "<br>Causa: " + data.incidencias[i].Causa +
        "<br>Calzada: " + data.incidencias[i].Calzada +
        "<br>Observaciones: " + data.incidencias[i].Observaciones +
        "<br>Del km " + data.incidencias[i].PKInicio + " al km " + data.incidencias[i].PKFin;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        enlacetarjeta2.setAttribute("href", data.incidencias[i].MasInfo);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
      }
    })
    .fail(function() {
      console.log("Error");
      alert("No se pueden obtener los datos. Inténtelo de nuevo en unos minutos");
    }) ;
}

function valladolid(){
  $.getJSON("http://servicios.jcyl.es/InviPublica/OpenData?formato=json", function(json){
    })
    .done(function(data) {
      document.getElementById("tarjetas").innerHTML= "";
      console.log("Completado sin errores");
      console.log(data.fecha);
      document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.fecha;
      document.getElementById("titulopagina").innerHTML = "Valladolid";
      for(var i in data.incidencias) {
        if(data.incidencias[i].Provincia == "VALLADOLID"){
        var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = data.incidencias[i].Via;
        tarjeta.appendChild(titulotarjeta);

        var subtitulotarjeta = document.createElement("DIV");
        subtitulotarjeta.setAttribute("class", "mdl-card__subtitle-text");
        subtitulotarjeta.innerHTML = data.incidencias[i].Tramo;
        tarjeta.appendChild(subtitulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Tipo de alerta: " + data.incidencias[i].Tipo + "<br>Causa: " + data.incidencias[i].Causa +
        "<br>Calzada: " + data.incidencias[i].Calzada +
        "<br>Observaciones: " + data.incidencias[i].Observaciones +
        "<br>Del km " + data.incidencias[i].PKInicio + " al km " + data.incidencias[i].PKFin;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        enlacetarjeta2.setAttribute("href", data.incidencias[i].MasInfo);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
      }
    })
    .fail(function() {
      console.log("Error");
      alert("No se pueden obtener los datos. Inténtelo de nuevo en unos minutos");
    }) ;
}

function zamora(){
  $.getJSON("http://servicios.jcyl.es/InviPublica/OpenData?formato=json", function(json){
    })
    .done(function(data) {
      document.getElementById("tarjetas").innerHTML= "";
      console.log("Completado sin errores");
      console.log(data.fecha);
      document.getElementById("fecha").innerHTML = "Datos actualizados a: "+ data.fecha;
      document.getElementById("titulopagina").innerHTML = "Zamora";
      for(var i in data.incidencias) {
        if(data.incidencias[i].Provincia == "ZAMORA"){
        var tarjetas = document.getElementById("tarjetas");
        var tarjeta = document.createElement("DIV");
        tarjeta.setAttribute("class", "tarjeta mdl-card mdl-shadow--2dp");
        tarjeta.setAttribute("id", "tarjeta");
        tarjetas.appendChild(tarjeta);

        var titulotarjeta = document.createElement("H2");
        titulotarjeta.setAttribute("class", "mdl-card__title-text");
        titulotarjeta.setAttribute("id", "titulo");
        titulotarjeta.innerHTML = data.incidencias[i].Via;
        tarjeta.appendChild(titulotarjeta);

        var subtitulotarjeta = document.createElement("DIV");
        subtitulotarjeta.setAttribute("class", "mdl-card__subtitle-text");
        subtitulotarjeta.innerHTML = data.incidencias[i].Tramo;
        tarjeta.appendChild(subtitulotarjeta);

        var cuerpotarjeta = document.createElement("DIV");
        cuerpotarjeta.setAttribute("class", "mdl-card__supporting-text");
        cuerpotarjeta.innerHTML = "Tipo de alerta: " + data.incidencias[i].Tipo + "<br>Causa: " + data.incidencias[i].Causa +
        "<br>Calzada: " + data.incidencias[i].Calzada +
        "<br>Observaciones: " + data.incidencias[i].Observaciones +
        "<br>Del km " + data.incidencias[i].PKInicio + " al km " + data.incidencias[i].PKFin;
        tarjeta.appendChild(cuerpotarjeta);

        var enlacetarjeta = document.createElement("DIV");
        enlacetarjeta.setAttribute("class", "mdl-card__actions mdl-card--border");
        tarjeta.appendChild(enlacetarjeta);

        var enlacetarjeta2 = document.createElement("A");
        enlacetarjeta2.setAttribute("class", "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect");
        enlacetarjeta2.setAttribute("href", data.incidencias[i].MasInfo);
        enlacetarjeta2.innerHTML = "Más información";
        tarjeta.appendChild(enlacetarjeta2);

        var espacio =  document.createElement("BR");
        tarjetas.appendChild(espacio);
      }
      }
    })
    .fail(function() {
      console.log("Error");
      alert("No se pueden obtener los datos. Inténtelo de nuevo en unos minutos");
    }) ;
}
