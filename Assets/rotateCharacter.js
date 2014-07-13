#pragma strict

// Author: Meepu
// For Wedding Dinner puzzle

// Display correct sprite facing forward or away depending on character position

private var myRigidbody : Rigidbody2D;
private var myTransform : Transform;

public class SpriteList {
	public var listOfSprites : Sprite[];
}

public var sprites : SpriteList = new SpriteList();

function Start ()
{
	myRigidbody = rigidbody2D;
	myTransform = transform;
}

function OnMouseUp ()
{

	for (var zone in dropZones.backwardZones)
	{
		// Facing away from player
		if (myRigidbody.transform.position.x == parseFloat(zone[1].ToString()) &&
			myRigidbody.transform.position.y == parseFloat(zone[2].ToString()) )
		{
			GetComponent(SpriteRenderer).sprite = sprites.listOfSprites[1];
			break;
		}
		// Facing towards player
		else
		{
			GetComponent(SpriteRenderer).sprite = sprites.listOfSprites[0];
		}		
	}
	
}
