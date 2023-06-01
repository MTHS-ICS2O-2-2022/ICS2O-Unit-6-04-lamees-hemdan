// Copyright (c) 2023 Lamees Hemdan All rights reserved
//
// Created by: Lamees Hemdan
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates the volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radius = params.get("radius")

  // process
  const dimensions = "Radius: " + radius + " units"
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)

  // output
  document.getElementById("dimensions").innerHTML = dimensions
  document.getElementById("volume").innerHTML = "The volume is: " + volume.toFixed(2) + " units³"

}
