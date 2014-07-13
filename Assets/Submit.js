#pragma strict

// Author: Meepu
// For Wedding Dinner puzzle

// Check if guest is correctly positioned

// Use on objects with 
// a collider with isTrigger = true

// Assuming there are twelve seat marker objects and twelve guests with corresponding tags

function Start () {
}

function Update () {

}

// Script runs when user clicks the button
function OnMouseDown () {

	var correct = 0;
	var guestsToCheck = ["A1", "A2", "A3", "A4", "B1", "B2", "B3", "B4", "C1", "C2", "C3", "C4"];

	// For each guest
	for (var i = 0; i < 12; i++)
	{
		var guest = GameObject.FindWithTag(guestsToCheck[i]);
		
		if (guest.transform.position.x == parseFloat(dropZones.dropZones[i][1].ToString()) &&
			guest.transform.position.y == parseFloat(dropZones.dropZones[i][2].ToString()) )
		{
			correct++;
		}
	}
	
	if (correct == 12)
		Debug.Log("SUCCESS!");
	else
		Debug.Log("FAILURE, correct positions " + correct); // Show correct placings for debugging purposes; this should not be shown to player
}
