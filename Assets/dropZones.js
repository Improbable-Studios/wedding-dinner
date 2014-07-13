#pragma strict

// Author: Meepu

// Define zones where objects can be dropped

// Name, x pos, y pos
static var dropZones = [
		["A1", -1.586935, 1.22505],
		["A2", -0.296153, 1.186135],
		["A3", -1.598968, -0.6292127],
		["A4", -0.2984811, -0.644621],
		["B1", 0.9739591, 1.252266],
		["B2", 2.2563, 1.208962],
		["B3", 0.9345273, -0.5724089],
		["B4", 2.229798, -0.5314534],
		["C1", -0.3483875, -1.334224],
		["C2", 1.006173, -1.315585],
		["C3", -0.3092673, -3.186423],
		["C4", 0.9962813, -3.136582]		
	];

// For wedding dinner only
// Seats facing away from player
static var backwardZones = [
		["A3", -1.598968, -0.6292127],
		["A4", -0.2984811, -0.644621],
		["B3", 0.9345273, -0.5724089],
		["B4", 2.229798, -0.5314534],
		["C3", -0.3092673, -3.186423],
		["C4", 0.9962813, -3.136582]		
	];