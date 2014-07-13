#pragma strict

// Based on DragObject by Eric Haines < http://wiki.unity3d.com/index.php?title=DragObject >
// Adjusted to 2D environment by Meepu

// Drag Rigidbody2D objects
// If drop occurs on drop zone, adjust position, play a sound and set dropZone variable
// Any custom behaviour on drop should be done elsewhere

// Rigidbody object should have isKinematic = false
// There must be an object with tag "dropsound" with an audio source attached

private var myRigidbody : Rigidbody2D;
private var myTransform : Transform;
private var canMove = false;

var cam : Camera;

function Start ()
{
	myRigidbody = rigidbody2D;
	myTransform = transform;
	cam = Camera.main;
}

function FixedUpdate ()
{
	if (!canMove) return;
	
	var mousePos = Input.mousePosition;
	var move = cam.ScreenToWorldPoint(Vector3(mousePos.x, mousePos.y, 1)) - myTransform.position;
 
	myRigidbody.transform.Translate(move);
	
}

function OnMouseDown ()
{
	canMove = true;
}

function OnMouseUp ()
{
	canMove = false;

	// Was item dropped on drop zone?
	for (var zone in dropZones.dropZones)
	{
		if (Mathf.Round(myRigidbody.transform.position.x*1.3) == Mathf.Round(parseFloat(zone[1].ToString())*1.3) &&
			Mathf.Round(myRigidbody.transform.position.y*1.3) == Mathf.Round(parseFloat(zone[2].ToString())*1.3) )
		{
			myRigidbody.transform.position.x = parseFloat(zone[1].ToString());
			myRigidbody.transform.position.y = parseFloat(zone[2].ToString());
			GameObject.FindWithTag("dropsound").audio.Play();
		}

	}
	
}
